

const emptyArray = [] as const ;
import {
    Debug,
    DiagnosticArguments,
    DiagnosticMessage,
    DiagnosticWithDetachedLocation,
    EndOfFileToken,
    Identifier,
    JSDocParsingMode,
    JSDocSyntaxKind,
    Node,
    NodeFlags,
    PragmaContext,
    PunctuationOrKeywordSyntaxKind,
    ReadonlyPragmaContext,
    ReadonlyPragmaMap,
    ScriptKind,
    ScriptTarget,
    SourceFile,
    SyntaxKind,
    TextRange,
    Token,
    TypeFlags ,
} from "./_namespaces/ts";





import * as performance from "./_namespaces/ts.performance";

const enum SignatureFlags {
    None = 0,
    Yield = 1 << 0,
    Await = 1 << 1,
    Type = 1 << 2,
    IgnoreMissingOpenBrace = 1 << 4,
    JSDoc = 1 << 5,
}

const enum SpeculationKind {
    TryParse,
    Lookahead,
    Reparse,
}

let NodeConstructor: new (kind: SyntaxKind, pos: number, end: number) => Node;
let TokenConstructor: new (kind: SyntaxKind, pos: number, end: number) => Node;
let IdentifierConstructor: new (kind: SyntaxKind.Identifier, pos: number, end: number) => Node;
let PrivateIdentifierConstructor: new (kind: SyntaxKind.PrivateIdentifier, pos: number, end: number) => Node;
let SourceFileConstructor: new (kind: SyntaxKind.SourceFile, pos: number, end: number) => Node;

import {
    createScanner,
} from "./scanner";







function createParserCore()
{
    // Why var? It avoids TDZ checks in the runtime which can be costly.
    // See: https://github.com/microsoft/TypeScript/issues/52924
    /* eslint-disable no-var */

    // Share a single scanner across all calls to parse a source file.  This helps speed things
    // up by avoiding the cost of creating/compiling scanners over and over again.
    var scanner = createScanner(ScriptTarget.Latest, /*skipTrivia*/ true);

    var disallowInAndDecoratorContext = NodeFlags.DisallowInContext | NodeFlags.DecoratorContext;

    // capture constructors in 'initializeState' to avoid null checks
    var NodeConstructor: new (kind: SyntaxKind, pos: number, end: number) => Node;
    var TokenConstructor: new (kind: SyntaxKind, pos: number, end: number) => Node;
    var IdentifierConstructor: new (kind: SyntaxKind.Identifier, pos: number, end: number) => Identifier;
    var PrivateIdentifierConstructor: new (kind: SyntaxKind.PrivateIdentifier, pos: number, end: number) => PrivateIdentifier;
    var SourceFileConstructor: new (kind: SyntaxKind.SourceFile, pos: number, end: number) => SourceFile;

    function countNode(node: Node) {
        nodeCount++;
        return node;
    }

    // // Rather than using `createBaseNodeFactory` here, we establish a `BaseNodeFactory` that closes over the
    // // constructors above, which are reset each time `initializeState` is called.
    // var baseNodeFactory: BaseNodeFactory = {
    //     createBaseSourceFileNode: kind => countNode(new SourceFileConstructor(kind, /*pos*/ 0, /*end*/ 0)),
    //     createBaseIdentifierNode: kind => countNode(new IdentifierConstructor(kind, /*pos*/ 0, /*end*/ 0)),
    //     createBasePrivateIdentifierNode: kind => countNode(new PrivateIdentifierConstructor(kind, /*pos*/ 0, /*end*/ 0)),
    //     createBaseTokenNode: kind => countNode(new TokenConstructor(kind, /*pos*/ 0, /*end*/ 0)),
    //     createBaseNode: kind => countNode(new NodeConstructor(kind, /*pos*/ 0, /*end*/ 0)),
    // };

    var fileName: string;
    var sourceFlags: NodeFlags;
    var sourceText: string;
    var languageVersion: ScriptTarget;
    var scriptKind: ScriptKind;
    var languageVariant: LanguageVariant;
    var parseDiagnostics: DiagnosticWithDetachedLocation[];
    var jsDocDiagnostics: DiagnosticWithDetachedLocation[];
    var syntaxCursor: IncrementalParser.SyntaxCursor | undefined;

    var currentToken: SyntaxKind;
    var nodeCount: number;
    var identifiers: Map<string, string>;
    var identifierCount: number;

    // TODO(jakebailey): This type is a lie; this value actually contains the result
    // of ORing a bunch of `1 << ParsingContext.XYZ`.
    var parsingContext: ParsingContext;

    var notParenthesizedArrow: Set<number> | undefined;

    // Flags that dictate what parsing context we're in.  For example:
    // Whether or not we are in strict parsing mode.  All that changes in strict parsing mode is
    // that some tokens that would be considered identifiers may be considered keywords.
    //
    // When adding more parser context flags, consider which is the more common case that the
    // flag will be in.  This should be the 'false' state for that flag.  The reason for this is
    // that we don't store data in our nodes unless the value is in the *non-default* state.  So,
    // for example, more often than code 'allows-in' (or doesn't 'disallow-in').  We opt for
    // 'disallow-in' set to 'false'.  Otherwise, if we had 'allowsIn' set to 'true', then almost
    // all nodes would need extra state on them to store this info.
    //
    // Note: 'allowIn' and 'allowYield' track 1:1 with the [in] and [yield] concepts in the ES6
    // grammar specification.
    //
    // An important thing about these context concepts.  By default they are effectively inherited
    // while parsing through every grammar production.  i.e. if you don't change them, then when
    // you parse a sub-production, it will have the same context values as the parent production.
    // This is great most of the time.  After all, consider all the 'expression' grammar productions
    // and how nearly all of them pass along the 'in' and 'yield' context values:
    //
    // EqualityExpression[In, Yield] :
    //      RelationalExpression[?In, ?Yield]
    //      EqualityExpression[?In, ?Yield] == RelationalExpression[?In, ?Yield]
    //      EqualityExpression[?In, ?Yield] != RelationalExpression[?In, ?Yield]
    //      EqualityExpression[?In, ?Yield] === RelationalExpression[?In, ?Yield]
    //      EqualityExpression[?In, ?Yield] !== RelationalExpression[?In, ?Yield]
    //
    // Where you have to be careful is then understanding what the points are in the grammar
    // where the values are *not* passed along.  For example:
    //
    // SingleNameBinding[Yield,GeneratorParameter]
    //      [+GeneratorParameter]BindingIdentifier[Yield] Initializer[In]opt
    //      [~GeneratorParameter]BindingIdentifier[?Yield]Initializer[In, ?Yield]opt
    //
    // Here this is saying that if the GeneratorParameter context flag is set, that we should
    // explicitly set the 'yield' context flag to false before calling into the BindingIdentifier
    // and we should explicitly unset the 'yield' context flag before calling into the Initializer.
    // production.  Conversely, if the GeneratorParameter context flag is not set, then we
    // should leave the 'yield' context flag alone.
    //
    // Getting this all correct is tricky and requires careful reading of the grammar to
    // understand when these values should be changed versus when they should be inherited.
    //
    // Note: it should not be necessary to save/restore these flags during speculative/lookahead
    // parsing.  These context flags are naturally stored and restored through normal recursive
    // descent parsing and unwinding.
    var contextFlags: NodeFlags;

    // Indicates whether we are currently parsing top-level statements.
    var topLevel = true;

    // Whether or not we've had a parse error since creating the last AST node.  If we have
    // encountered an error, it will be stored on the next AST node we create.  Parse errors
    // can be broken down into three categories:
    //
    // 1) An error that occurred during scanning.  For example, an unterminated literal, or a
    //    character that was completely not understood.
    //
    // 2) A token was expected, but was not present.  This type of error is commonly produced
    //    by the 'parseExpected' function.
    //
    // 3) A token was present that no parsing function was able to consume.  This type of error
    //    only occurs in the 'abortParsingListOrMoveToNextToken' function when the parser
    //    decides to skip the token.
    //
    // In all of these cases, we want to mark the next node as having had an error before it.
    // With this mark, we can know in incremental settings if this node can be reused, or if
    // we have to reparse it.  If we don't keep this information around, we may just reuse the
    // node.  in that event we would then not produce the same errors as we did before, causing
    // significant confusion problems.
    //
    // Note: it is necessary that this value be saved/restored during speculative/lookahead
    // parsing.  During lookahead parsing, we will often create a node.  That node will have
    // this value attached, and then this value will be set back to 'false'.  If we decide to
    // rewind, we must get back to the same value we had prior to the lookahead.
    //
    // Note: any errors at the end of the file that do not precede a regular node, should get
    // attached to the EOF token.
    var parseErrorBeforeNextFinishedNode = false;
    /* eslint-enable no-var */

    export function parseSourceFile(
        fileName: string,
        sourceText: string,
        languageVersion: ScriptTarget,
        syntaxCursor: IncrementalParser.SyntaxCursor | undefined,
        setParentNodes = false,
        scriptKind?: ScriptKind,
        setExternalModuleIndicatorOverride?: (file: SourceFile) => void,
        jsDocParsingMode = JSDocParsingMode.ParseAll,
    ): SourceFile {
        scriptKind = ensureScriptKind(fileName, scriptKind);
        if (scriptKind === ScriptKind.JSON) {
            const result = parseJsonText(fileName, sourceText, languageVersion, syntaxCursor, setParentNodes);
            convertToJson(result, result.statements[0]?.expression, result.parseDiagnostics, /*returnValue*/ false, /*jsonConversionNotifier*/ undefined);
            result.referencedFiles = emptyArray;
            result.typeReferenceDirectives = emptyArray;
            result.libReferenceDirectives = emptyArray;
            result.amdDependencies = emptyArray;
            result.hasNoDefaultLib = false;
            result.pragmas = emptyMap as ReadonlyPragmaMap;
            return result;
        }

        initializeState(fileName, sourceText, languageVersion, syntaxCursor, scriptKind, jsDocParsingMode);

        const result = parseSourceFileWorker(languageVersion, setParentNodes, scriptKind, setExternalModuleIndicatorOverride || setExternalModuleIndicator, jsDocParsingMode);

        clearState();

        return result;
    }

    export function parseIsolatedEntityName(content: string, languageVersion: ScriptTarget): EntityName | undefined {
        // Choice of `isDeclarationFile` should be arbitrary
        initializeState("", content, languageVersion, /*syntaxCursor*/ undefined, ScriptKind.JS, JSDocParsingMode.ParseAll);
        // Prime the scanner.
        nextToken();
        const entityName = parseEntityName(/*allowReservedWords*/ true);
        const isValid = token() === SyntaxKind.EndOfFileToken && !parseDiagnostics.length;
        clearState();
        return isValid ? entityName : undefined;
    }

    function initializeState(_fileName: string, _sourceText: string, _languageVersion: ScriptTarget, _syntaxCursor: IncrementalParser.SyntaxCursor | undefined, _scriptKind: ScriptKind, _jsDocParsingMode: JSDocParsingMode) {
        // NodeConstructor = objectAllocator.getNodeConstructor();
        // TokenConstructor = objectAllocator.getTokenConstructor();
        // IdentifierConstructor = objectAllocator.getIdentifierConstructor();
        // PrivateIdentifierConstructor = objectAllocator.getPrivateIdentifierConstructor();
        // SourceFileConstructor = objectAllocator.getSourceFileConstructor();

        fileName = normalizePath(_fileName);
        sourceText = _sourceText;
        languageVersion = _languageVersion;
        syntaxCursor = _syntaxCursor;
        scriptKind = _scriptKind;
        languageVariant = getLanguageVariant(_scriptKind);

        parseDiagnostics = [];
        parsingContext = 0;
        identifiers = new Map<string, string>();
        identifierCount = 0;
        nodeCount = 0;
        sourceFlags = 0;
        topLevel = true;

        switch (scriptKind) {
            case ScriptKind.JS:
            case ScriptKind.JSX:
                contextFlags = NodeFlags.JavaScriptFile;
                break;
            case ScriptKind.JSON:
                contextFlags = NodeFlags.JavaScriptFile | NodeFlags.JsonFile;
                break;
            default:
                contextFlags = NodeFlags.None;
                break;
        }
        parseErrorBeforeNextFinishedNode = false;

        // Initialize and prime the scanner before parsing the source elements.
        scanner.setText(sourceText);
        scanner.setOnError(scanError);
        scanner.setScriptTarget(languageVersion);
        scanner.setLanguageVariant(languageVariant);
        scanner.setScriptKind(scriptKind);
        scanner.setJSDocParsingMode(_jsDocParsingMode);
    }

    function clearState() {
        // Clear out the text the scanner is pointing at, so it doesn't keep anything alive unnecessarily.
        scanner.clearCommentDirectives();
        scanner.setText("");
        scanner.setOnError(undefined);
        scanner.setScriptKind(ScriptKind.Unknown);
        scanner.setJSDocParsingMode(JSDocParsingMode.ParseAll);

        // Clear any data.  We don't want to accidentally hold onto it for too long.
        sourceText = undefined!;
        languageVersion = undefined!;
        syntaxCursor = undefined;
        scriptKind = undefined!;
        languageVariant = undefined!;
        sourceFlags = 0;
        parseDiagnostics = undefined!;
        jsDocDiagnostics = undefined!;
        parsingContext = 0;
        identifiers = undefined!;
        notParenthesizedArrow = undefined;
        topLevel = true;
    }

    function parseSourceFileWorker(languageVersion: ScriptTarget, setParentNodes: boolean, scriptKind: ScriptKind, setExternalModuleIndicator: (file: SourceFile) => void, jsDocParsingMode: JSDocParsingMode): SourceFile {
        const isDeclarationFile = isDeclarationFileName(fileName);
        if (isDeclarationFile) {
            contextFlags |= NodeFlags.Ambient;
        }

        sourceFlags = contextFlags;

        // Prime the scanner.
        nextToken();

        const statements = parseList(ParsingContext.SourceElements, parseStatement);
        Debug.assert(token() === SyntaxKind.EndOfFileToken);
        const endHasJSDoc = hasPrecedingJSDocComment();
        const endOfFileToken = withJSDoc(parseTokenNode<EndOfFileToken>(), endHasJSDoc);

        const sourceFile = createSourceFile(fileName, languageVersion, scriptKind, isDeclarationFile, statements, endOfFileToken, sourceFlags, setExternalModuleIndicator);

        // A member of ReadonlyArray<T> isn't assignable to a member of T[] (and prevents a direct cast) - but this is where we set up those members so they can be readonly in the future
        processCommentPragmas(sourceFile as {} as PragmaContext, sourceText);
        processPragmasIntoFields(sourceFile as {} as PragmaContext, reportPragmaDiagnostic);

        sourceFile.commentDirectives = scanner.getCommentDirectives();
        sourceFile.nodeCount = nodeCount;
        sourceFile.identifierCount = identifierCount;
        sourceFile.identifiers = identifiers;
        sourceFile.parseDiagnostics = attachFileToDiagnostics(parseDiagnostics, sourceFile);
        sourceFile.jsDocParsingMode = jsDocParsingMode;
        if (jsDocDiagnostics) {
            sourceFile.jsDocDiagnostics = attachFileToDiagnostics(jsDocDiagnostics, sourceFile);
        }

        if (setParentNodes) {
            fixupParentReferences(sourceFile);
        }

        return sourceFile;

        function reportPragmaDiagnostic(pos: number, end: number, diagnostic: DiagnosticMessage) {
            parseDiagnostics.push(createDetachedDiagnostic(fileName, sourceText, pos, end, diagnostic));
        }
    }

    let hasDeprecatedTag = false;
    function withJSDoc<T extends HasJSDoc>(node: T, hasJSDoc: boolean): T {
        if (!hasJSDoc) {
            return node;
        }

        Debug.assert(!node.jsDoc); // Should only be called once per node
        const jsDoc = mapDefined(getJSDocCommentRanges(node, sourceText), comment => JSDocParser.parseJSDocComment(node, comment.pos, comment.end - comment.pos));
        if (jsDoc.length) node.jsDoc = jsDoc;
        if (hasDeprecatedTag) {
            hasDeprecatedTag = false;
            (node as Mutable<T>).flags |= NodeFlags.Deprecated;
        }
        return node;
    }

    function setContextFlag(val: boolean, flag: NodeFlags) {
        if (val) {
            contextFlags |= flag;
        }
        else {
            contextFlags &= ~flag;
        }
    }

    function setDisallowInContext(val: boolean) {
        setContextFlag(val, NodeFlags.DisallowInContext);
    }

    function setYieldContext(val: boolean) {
        setContextFlag(val, NodeFlags.YieldContext);
    }

    function setDecoratorContext(val: boolean) {
        setContextFlag(val, NodeFlags.DecoratorContext);
    }

    function setAwaitContext(val: boolean) {
        setContextFlag(val, NodeFlags.AwaitContext);
    }

    function doOutsideOfContext<T>(context: NodeFlags, func: () => T): T {
        // contextFlagsToClear will contain only the context flags that are
        // currently set that we need to temporarily clear
        // We don't just blindly reset to the previous flags to ensure
        // that we do not mutate cached flags for the incremental
        // parser (ThisNodeHasError, ThisNodeOrAnySubNodesHasError, and
        // HasAggregatedChildData).
        const contextFlagsToClear = context & contextFlags;
        if (contextFlagsToClear) {
            // clear the requested context flags
            setContextFlag(/*val*/ false, contextFlagsToClear);
            const result = func();
            // restore the context flags we just cleared
            setContextFlag(/*val*/ true, contextFlagsToClear);
            return result;
        }

        // no need to do anything special as we are not in any of the requested contexts
        return func();
    }

    function doInsideOfContext<T>(context: NodeFlags, func: () => T): T {
        // contextFlagsToSet will contain only the context flags that
        // are not currently set that we need to temporarily enable.
        // We don't just blindly reset to the previous flags to ensure
        // that we do not mutate cached flags for the incremental
        // parser (ThisNodeHasError, ThisNodeOrAnySubNodesHasError, and
        // HasAggregatedChildData).
        const contextFlagsToSet = context & ~contextFlags;
        if (contextFlagsToSet) {
            // set the requested context flags
            setContextFlag(/*val*/ true, contextFlagsToSet);
            const result = func();
            // reset the context flags we just set
            setContextFlag(/*val*/ false, contextFlagsToSet);
            return result;
        }

        // no need to do anything special as we are already in all of the requested contexts
        return func();
    }

    function allowInAnd<T>(func: () => T): T {
        return doOutsideOfContext(NodeFlags.DisallowInContext, func);
    }

    function disallowInAnd<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.DisallowInContext, func);
    }

    function allowConditionalTypesAnd<T>(func: () => T): T {
        return doOutsideOfContext(NodeFlags.DisallowConditionalTypesContext, func);
    }

    function disallowConditionalTypesAnd<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.DisallowConditionalTypesContext, func);
    }

    function doInYieldContext<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.YieldContext, func);
    }

    function doInDecoratorContext<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.DecoratorContext, func);
    }

    function doInAwaitContext<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.AwaitContext, func);
    }

    function doOutsideOfAwaitContext<T>(func: () => T): T {
        return doOutsideOfContext(NodeFlags.AwaitContext, func);
    }

    function doInYieldAndAwaitContext<T>(func: () => T): T {
        return doInsideOfContext(NodeFlags.YieldContext | NodeFlags.AwaitContext, func);
    }

    function doOutsideOfYieldAndAwaitContext<T>(func: () => T): T {
        return doOutsideOfContext(NodeFlags.YieldContext | NodeFlags.AwaitContext, func);
    }

    function inContext(flags: NodeFlags) {
        return (contextFlags & flags) !== 0;
    }

    function inYieldContext() {
        return inContext(NodeFlags.YieldContext);
    }

    function inDisallowInContext() {
        return inContext(NodeFlags.DisallowInContext);
    }

    function inDisallowConditionalTypesContext() {
        return inContext(NodeFlags.DisallowConditionalTypesContext);
    }

    function inDecoratorContext() {
        return inContext(NodeFlags.DecoratorContext);
    }

    function inAwaitContext() {
        return inContext(NodeFlags.AwaitContext);
    }

    function parseErrorAtCurrentToken(message: DiagnosticMessage, ...args: DiagnosticArguments): DiagnosticWithDetachedLocation | undefined {
        return parseErrorAt(scanner.getTokenStart(), scanner.getTokenEnd(), message, ...args);
    }

    function parseErrorAtPosition(start: number, length: number, message: DiagnosticMessage, ...args: DiagnosticArguments): DiagnosticWithDetachedLocation | undefined {
        // Don't report another error if it would just be at the same position as the last error.
        const lastError = lastOrUndefined(parseDiagnostics);
        let result: DiagnosticWithDetachedLocation | undefined;
        if (!lastError || start !== lastError.start) {
            result = createDetachedDiagnostic(fileName, sourceText, start, length, message, ...args);
            parseDiagnostics.push(result);
        }

        // Mark that we've encountered an error.  We'll set an appropriate bit on the next
        // node we finish so that it can't be reused incrementally.
        parseErrorBeforeNextFinishedNode = true;
        return result;
    }

    function parseErrorAt(start: number, end: number, message: DiagnosticMessage, ...args: DiagnosticArguments): DiagnosticWithDetachedLocation | undefined {
        return parseErrorAtPosition(start, end - start, message, ...args);
    }

    function parseErrorAtRange(range: TextRange, message: DiagnosticMessage, ...args: DiagnosticArguments): void {
        parseErrorAt(range.pos, range.end, message, ...args);
    }

    function scanError(message: DiagnosticMessage, length: number, arg0?: any): void {
        parseErrorAtPosition(scanner.getTokenEnd(), length, message, arg0);
    }

    function getNodePos(): number {
        return scanner.getTokenFullStart();
    }

    function hasPrecedingJSDocComment() {
        return scanner.hasPrecedingJSDocComment();
    }

    // Use this function to access the current token instead of reading the currentToken
    // variable. Since function results aren't narrowed in control flow analysis, this ensures
    // that the type checker doesn't make wrong assumptions about the type of the current
    // token (e.g. a call to nextToken() changes the current token but the checker doesn't
    // reason about this side effect).  Mainstream VMs inline simple functions like this, so
    // there is no performance penalty.
    function token(): SyntaxKind {
        return currentToken;
    }

    function nextTokenWithoutCheck() {
        return currentToken = scanner.scan();
    }

    function nextTokenAnd<T>(func: () => T): T {
        nextToken();
        return func();
    }

    function nextToken(): SyntaxKind {
        // if the keyword had an escape
        if (isKeyword(currentToken) && (scanner.hasUnicodeEscape() || scanner.hasExtendedUnicodeEscape())) {
            // issue a parse error for the escape
            parseErrorAt(scanner.getTokenStart(), scanner.getTokenEnd(), Diagnostics.Keywords_cannot_contain_escape_characters);
        }
        return nextTokenWithoutCheck();
    }

    function nextTokenJSDoc(): JSDocSyntaxKind {
        return currentToken = scanner.scanJsDocToken();
    }

    function nextJSDocCommentTextToken(inBackticks: boolean): JSDocSyntaxKind | SyntaxKind.JSDocCommentTextToken {
        return currentToken = scanner.scanJSDocCommentTextToken(inBackticks);
    }

    function reScanGreaterToken(): SyntaxKind {
        return currentToken = scanner.reScanGreaterToken();
    }

    function reScanSlashToken(): SyntaxKind {
        return currentToken = scanner.reScanSlashToken();
    }

    function reScanTemplateToken(isTaggedTemplate: boolean): SyntaxKind {
        return currentToken = scanner.reScanTemplateToken(isTaggedTemplate);
    }

    function reScanLessThanToken(): SyntaxKind {
        return currentToken = scanner.reScanLessThanToken();
    }

    function reScanHashToken(): SyntaxKind {
        return currentToken = scanner.reScanHashToken();
    }

    function scanJsxIdentifier(): SyntaxKind {
        return currentToken = scanner.scanJsxIdentifier();
    }

    function scanJsxText(): SyntaxKind {
        return currentToken = scanner.scanJsxToken();
    }

    function scanJsxAttributeValue(): SyntaxKind {
        return currentToken = scanner.scanJsxAttributeValue();
    }

    function speculationHelper<T>(callback: () => T, speculationKind: SpeculationKind): T {
        // Keep track of the state we'll need to rollback to if lookahead fails (or if the
        // caller asked us to always reset our state).
        const saveToken = currentToken;
        const saveParseDiagnosticsLength = parseDiagnostics.length;
        const saveParseErrorBeforeNextFinishedNode = parseErrorBeforeNextFinishedNode;

        // Note: it is not actually necessary to save/restore the context flags here.  That's
        // because the saving/restoring of these flags happens naturally through the recursive
        // descent nature of our parser.  However, we still store this here just so we can
        // assert that invariant holds.
        const saveContextFlags = contextFlags;

        // If we're only looking ahead, then tell the scanner to only lookahead as well.
        // Otherwise, if we're actually speculatively parsing, then tell the scanner to do the
        // same.
        const result = speculationKind !== SpeculationKind.TryParse
            ? scanner.lookAhead(callback)
            : scanner.tryScan(callback);

        Debug.assert(saveContextFlags === contextFlags);

        // If our callback returned something 'falsy' or we're just looking ahead,
        // then unconditionally restore us to where we were.
        if (!result || speculationKind !== SpeculationKind.TryParse) {
            currentToken = saveToken;
            if (speculationKind !== SpeculationKind.Reparse) {
                parseDiagnostics.length = saveParseDiagnosticsLength;
            }
            parseErrorBeforeNextFinishedNode = saveParseErrorBeforeNextFinishedNode;
        }

        return result;
    }

    /** Invokes the provided callback then unconditionally restores the parser to the state it
     * was in immediately prior to invoking the callback.  The result of invoking the callback
     * is returned from this function.
     */
    function lookAhead<T>(callback: () => T): T {
        return speculationHelper(callback, SpeculationKind.Lookahead);
    }

    /** Invokes the provided callback.  If the callback returns something falsy, then it restores
     * the parser to the state it was in immediately prior to invoking the callback.  If the
     * callback returns something truthy, then the parser state is not rolled back.  The result
     * of invoking the callback is returned from this function.
     */
    function tryParse<T>(callback: () => T): T {
        return speculationHelper(callback, SpeculationKind.TryParse);
    }

    function isBindingIdentifier(): boolean {
        if (token() === SyntaxKind.Identifier) {
            return true;
        }

        // `let await`/`let yield` in [Yield] or [Await] are allowed here and disallowed in the binder.
        return token() > SyntaxKind.LastReservedWord;
    }

    // Ignore strict mode flag because we will report an error in type checker instead.
    function isIdentifier(): boolean {
        if (token() === SyntaxKind.Identifier) {
            return true;
        }

        // If we have a 'yield' keyword, and we're in the [yield] context, then 'yield' is
        // considered a keyword and is not an identifier.
        if (token() === SyntaxKind.YieldKeyword && inYieldContext()) {
            return false;
        }

        // If we have a 'await' keyword, and we're in the [Await] context, then 'await' is
        // considered a keyword and is not an identifier.
        if (token() === SyntaxKind.AwaitKeyword && inAwaitContext()) {
            return false;
        }

        return token() > SyntaxKind.LastReservedWord;
    }

    function parseExpected(kind: PunctuationOrKeywordSyntaxKind, diagnosticMessage?: DiagnosticMessage, shouldAdvance = true): boolean {
        if (token() === kind) {
            if (shouldAdvance) {
                nextToken();
            }
            return true;
        }

        // Report specific message if provided with one.  Otherwise, report generic fallback message.
        if (diagnosticMessage) {
            parseErrorAtCurrentToken(diagnosticMessage);
        }
        else {
            parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(kind));
        }
        return false;
    }

    const viableKeywordSuggestions = Object.keys(textToKeywordObj).filter(keyword => keyword.length > 2);

    function parseOptional(t: SyntaxKind): boolean {
        if (token() === t) {
            nextToken();
            return true;
        }
        return false;
    }

    function parseOptionalToken<TKind extends SyntaxKind>(t: TKind): Token<TKind>;
    function parseOptionalToken(t: SyntaxKind): Node | undefined {
        if (token() === t) {
            return parseTokenNode();
        }
        return undefined;
    }

    function parseOptionalTokenJSDoc<TKind extends JSDocSyntaxKind>(t: TKind): Token<TKind>;
    function parseOptionalTokenJSDoc(t: JSDocSyntaxKind): Node | undefined {
        if (token() === t) {
            return parseTokenNodeJSDoc();
        }
        return undefined;
    }

    function parseExpectedToken<TKind extends SyntaxKind>(t: TKind, diagnosticMessage?: DiagnosticMessage, arg0?: string): Token<TKind>;
    function parseExpectedToken(t: SyntaxKind, diagnosticMessage?: DiagnosticMessage, arg0?: string): Node {
        return parseOptionalToken(t) ||
            createMissingNode(t, /*reportAtCurrentPosition*/ false, diagnosticMessage || Diagnostics._0_expected, arg0 || tokenToString(t)!);
    }

    function parseTokenNode<T extends Node>(): T {
        const pos = getNodePos();
        const kind = token();
        nextToken();
        return finishNode(factoryCreateToken(kind), pos) as T;
    }

    function parseTokenNodeJSDoc<T extends Node>(): T {
        const pos = getNodePos();
        const kind = token();
        nextTokenJSDoc();
        return finishNode(factoryCreateToken(kind), pos) as T;
    }

    function canParseSemicolon() {
        // If there's a real semicolon, then we can always parse it out.
        if (token() === SyntaxKind.SemicolonToken) {
            return true;
        }

        // We can parse out an optional semicolon in ASI cases in the following cases.
        return token() === SyntaxKind.CloseBraceToken || token() === SyntaxKind.EndOfFileToken || scanner.hasPrecedingLineBreak();
    }

    function tryParseSemicolon() {
        if (!canParseSemicolon()) {
            return false;
        }

        if (token() === SyntaxKind.SemicolonToken) {
            // consume the semicolon if it was explicitly provided.
            nextToken();
        }

        return true;
    }

    function parseSemicolon(): boolean {
        return tryParseSemicolon() || parseExpected(SyntaxKind.SemicolonToken);
    }

    function nextTokenIsStartOfType() {
        nextToken();
        return isStartOfType();
    }

    // True if positioned at a list terminator
    function isListTerminator(kind: ParsingContext): boolean {
        if (token() === SyntaxKind.EndOfFileToken) {
            // Being at the end of the file ends all lists.
            return true;
        }

        switch (kind) {
            case ParsingContext.BlockStatements:
            case ParsingContext.SwitchClauses:
            case ParsingContext.TypeMembers:
            case ParsingContext.ClassMembers:
            case ParsingContext.EnumMembers:
            case ParsingContext.ObjectLiteralMembers:
            case ParsingContext.ObjectBindingElements:
            case ParsingContext.ImportOrExportSpecifiers:
            case ParsingContext.ImportAttributes:
                return token() === SyntaxKind.CloseBraceToken;
            case ParsingContext.SwitchClauseStatements:
                return token() === SyntaxKind.CloseBraceToken || token() === SyntaxKind.CaseKeyword || token() === SyntaxKind.DefaultKeyword;
            case ParsingContext.HeritageClauseElement:
                return token() === SyntaxKind.OpenBraceToken || token() === SyntaxKind.ExtendsKeyword || token() === SyntaxKind.ImplementsKeyword;
            case ParsingContext.VariableDeclarations:
                return isVariableDeclaratorListTerminator();
            case ParsingContext.TypeParameters:
                // Tokens other than '>' are here for better error recovery
                return token() === SyntaxKind.GreaterThanToken || token() === SyntaxKind.OpenParenToken || token() === SyntaxKind.OpenBraceToken || token() === SyntaxKind.ExtendsKeyword || token() === SyntaxKind.ImplementsKeyword;
            case ParsingContext.ArgumentExpressions:
                // Tokens other than ')' are here for better error recovery
                return token() === SyntaxKind.CloseParenToken || token() === SyntaxKind.SemicolonToken;
            case ParsingContext.ArrayLiteralMembers:
            case ParsingContext.TupleElementTypes:
            case ParsingContext.ArrayBindingElements:
                return token() === SyntaxKind.CloseBracketToken;
            case ParsingContext.JSDocParameters:
            case ParsingContext.Parameters:
            case ParsingContext.RestProperties:
                // Tokens other than ')' and ']' (the latter for index signatures) are here for better error recovery
                return token() === SyntaxKind.CloseParenToken || token() === SyntaxKind.CloseBracketToken /*|| token === SyntaxKind.OpenBraceToken*/;
            case ParsingContext.TypeArguments:
                // All other tokens should cause the type-argument to terminate except comma token
                return token() !== SyntaxKind.CommaToken;
            case ParsingContext.HeritageClauses:
                return token() === SyntaxKind.OpenBraceToken || token() === SyntaxKind.CloseBraceToken;
            case ParsingContext.JsxAttributes:
                return token() === SyntaxKind.GreaterThanToken || token() === SyntaxKind.SlashToken;
            case ParsingContext.JsxChildren:
                return token() === SyntaxKind.LessThanToken && lookAhead(nextTokenIsSlash);
            default:
                return false;
        }
    }

    function isVariableDeclaratorListTerminator(): boolean {
        // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
        // with parsing the list of variable declarators.
        if (canParseSemicolon()) {
            return true;
        }

        // in the case where we're parsing the variable declarator of a 'for-in' statement, we
        // are done if we see an 'in' keyword in front of us. Same with for-of
        if (isInOrOfKeyword(token())) {
            return true;
        }

        // ERROR RECOVERY TWEAK:
        // For better error recovery, if we see an '=>' then we just stop immediately.  We've got an
        // arrow function here and it's going to be very unlikely that we'll resynchronize and get
        // another variable declaration.
        if (token() === SyntaxKind.EqualsGreaterThanToken) {
            return true;
        }

        // Keep trying to parse out variable declarators.
        return false;
    }

    // dprint-ignore
    const enum ParsingContext {
        SourceElements,            // Elements in source file
        BlockStatements,           // Statements in block
        SwitchClauses,             // Clauses in switch statement
        SwitchClauseStatements,    // Statements in switch clause
        TypeMembers,               // Members in interface or type literal
        ClassMembers,              // Members in class declaration
        EnumMembers,               // Members in enum declaration
        HeritageClauseElement,     // Elements in a heritage clause
        VariableDeclarations,      // Variable declarations in variable statement
        ObjectBindingElements,     // Binding elements in object binding list
        ArrayBindingElements,      // Binding elements in array binding list
        ArgumentExpressions,       // Expressions in argument list
        ObjectLiteralMembers,      // Members in object literal
        JsxAttributes,             // Attributes in jsx element
        JsxChildren,               // Things between opening and closing JSX tags
        ArrayLiteralMembers,       // Members in array literal
        Parameters,                // Parameters in parameter list
        JSDocParameters,           // JSDoc parameters in parameter list of JSDoc function type
        RestProperties,            // Property names in a rest type list
        TypeParameters,            // Type parameters in type parameter list
        TypeArguments,             // Type arguments in type argument list
        TupleElementTypes,         // Element types in tuple element type list
        HeritageClauses,           // Heritage clauses for a class or interface declaration.
        ImportOrExportSpecifiers,  // Named import clause's import specifier list,
        ImportAttributes,          // Import attributes
        JSDocComment,              // Parsing via JSDocParser
        Count,                     // Number of parsing contexts
    }

    /**
     * @deprecated
     */
    const enum Tristate {
        False,
        True,
        Unknown,
    }

}









