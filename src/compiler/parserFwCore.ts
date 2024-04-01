

const emptyArray = [] as const ;
import {
    AccessorDeclaration,
    addRange,
    addRelatedInfo,
    append,
    ArrayBindingElement,
    ArrayBindingPattern,
    ArrayLiteralExpression,
    ArrayTypeNode,
    ArrowFunction,
    AsExpression,
    AssertionLevel,
    AsteriskToken,
    attachFileToDiagnostics,
    AwaitExpression,
    BaseNodeFactory,
    BinaryExpression,
    BinaryOperatorToken,
    BindingElement,
    BindingName,
    BindingPattern,
    Block,
    BooleanLiteral,
    BreakOrContinueStatement,
    BreakStatement,
    CallExpression,
    CallSignatureDeclaration,
    canHaveJSDoc,
    canHaveModifiers,
    CaseBlock,
    CaseClause,
    CaseOrDefaultClause,
    CatchClause,
    CharacterCodes,
    ClassDeclaration,
    ClassElement,
    ClassExpression,
    ClassLikeDeclaration,
    ClassStaticBlockDeclaration,
    CommaListExpression,
    CommentDirective,
    commentPragmas,
    CommentRange,
    ComputedPropertyName,
    concatenate,
    ConditionalExpression,
    ConditionalTypeNode,
    ConstructorDeclaration,
    ConstructorTypeNode,
    ConstructSignatureDeclaration,
    containsParseError,
    ContinueStatement,
    convertToJson,
    createDetachedDiagnostic,
    createNodeFactory,
    createScanner,
    createTextChangeRange,
    createTextSpanFromBounds,
    Debug,
    Decorator,
    DefaultClause,
    DeleteExpression,
    Diagnostic,
    DiagnosticArguments,
    DiagnosticMessage,
    Diagnostics,
    DiagnosticWithDetachedLocation,
    DoStatement,
    DotDotDotToken,
    ElementAccessExpression,
    emptyArray,
    emptyMap,
    EndOfFileToken,
    ensureScriptKind,
    EntityName,
    EnumDeclaration,
    EnumMember,
    ExclamationToken,
    ExportAssignment,
    ExportDeclaration,
    ExportSpecifier,
    Expression,
    ExpressionStatement,
    ExpressionWithTypeArguments,
    Extension,
    ExternalModuleReference,
    fileExtensionIs,
    findIndex,
    firstOrUndefined,
    forEach,
    ForEachChildNodes,
    ForInOrOfStatement,
    ForInStatement,
    ForOfStatement,
    ForStatement,
    FunctionDeclaration,
    FunctionExpression,
    FunctionOrConstructorTypeNode,
    FunctionTypeNode,
    GetAccessorDeclaration,
    getAnyExtensionFromPath,
    getBaseFileName,
    getBinaryOperatorPrecedence,
    getFullWidth,
    getJSDocCommentRanges,
    getLanguageVariant,
    getLastChild,
    getLeadingCommentRanges,
    getSpellingSuggestion,
    getTextOfNodeFromSourceText,
    HasJSDoc,
    hasJSDocNodes,
    HasModifiers,
    HeritageClause,
    Identifier,
    idText,
    IfStatement,
    ImportAttribute,
    ImportAttributes,
    ImportClause,
    ImportDeclaration,
    ImportEqualsDeclaration,
    ImportOrExportSpecifier,
    ImportSpecifier,
    ImportTypeAssertionContainer,
    ImportTypeNode,
    IndexedAccessTypeNode,
    IndexSignatureDeclaration,
    InferTypeNode,
    InterfaceDeclaration,
    IntersectionTypeNode,
    isArray,
    isAssignmentOperator,
    isAsyncModifier,
    isClassMemberModifier,
    isExportAssignment,
    isExportDeclaration,
    isExportModifier,
    isExpressionWithTypeArguments,
    isExternalModuleReference,
    isFunctionTypeNode,
    isIdentifier as isIdentifierNode,
    isIdentifierText,
    isImportDeclaration,
    isImportEqualsDeclaration,
    isJSDocFunctionType,
    isJSDocNullableType,
    isJSDocReturnTag,
    isJSDocTypeTag,
    isJsxNamespacedName,
    isJsxOpeningElement,
    isJsxOpeningFragment,
    isKeyword,
    isKeywordOrPunctuation,
    isLeftHandSideExpression,
    isLiteralKind,
    isMetaProperty,
    isModifierKind,
    isNonNullExpression,
    isPrivateIdentifier,
    isSetAccessorDeclaration,
    isStringOrNumericLiteralLike,
    isTaggedTemplateExpression,
    isTemplateLiteralKind,
    isTypeReferenceNode,
    IterationStatement,
    JSDoc,
    JSDocAllType,
    JSDocAugmentsTag,
    JSDocAuthorTag,
    JSDocCallbackTag,
    JSDocClassTag,
    JSDocComment,
    JSDocDeprecatedTag,
    JSDocEnumTag,
    JSDocFunctionType,
    JSDocImplementsTag,
    JSDocLink,
    JSDocLinkCode,
    JSDocLinkPlain,
    JSDocMemberName,
    JSDocNameReference,
    JSDocNamespaceDeclaration,
    JSDocNonNullableType,
    JSDocNullableType,
    JSDocOptionalType,
    JSDocOverloadTag,
    JSDocOverrideTag,
    JSDocParameterTag,
    JSDocParsingMode,
    JSDocPrivateTag,
    JSDocPropertyLikeTag,
    JSDocPropertyTag,
    JSDocProtectedTag,
    JSDocPublicTag,
    JSDocReadonlyTag,
    JSDocReturnTag,
    JSDocSatisfiesTag,
    JSDocSeeTag,
    JSDocSignature,
    JSDocSyntaxKind,
    JSDocTag,
    JSDocTemplateTag,
    JSDocText,
    JSDocThisTag,
    JSDocThrowsTag,
    JSDocTypedefTag,
    JSDocTypeExpression,
    JSDocTypeLiteral,
    JSDocTypeTag,
    JSDocUnknownTag,
    JSDocUnknownType,
    JSDocVariadicType,
    JsonMinusNumericLiteral,
    JsonObjectExpressionStatement,
    JsonSourceFile,
    JsxAttribute,
    JsxAttributes,
    JsxAttributeValue,
    JsxChild,
    JsxClosingElement,
    JsxClosingFragment,
    JsxElement,
    JsxExpression,
    JsxFragment,
    JsxNamespacedName,
    JsxOpeningElement,
    JsxOpeningFragment,
    JsxOpeningLikeElement,
    JsxSelfClosingElement,
    JsxSpreadAttribute,
    JsxTagNameExpression,
    JsxText,
    JsxTokenSyntaxKind,
    LabeledStatement,
    LanguageVariant,
    lastOrUndefined,
    LeftHandSideExpression,
    LiteralExpression,
    LiteralLikeNode,
    LiteralTypeNode,
    map,
    mapDefined,
    MappedTypeNode,
    MemberExpression,
    MetaProperty,
    MethodDeclaration,
    MethodSignature,
    MinusToken,
    MissingDeclaration,
    Modifier,
    ModifierFlags,
    ModifierLike,
    modifiersToFlags,
    ModuleBlock,
    ModuleDeclaration,
    ModuleKind,
    Mutable,
    NamedExportBindings,
    NamedExports,
    NamedImports,
    NamedImportsOrExports,
    NamedTupleMember,
    NamespaceDeclaration,
    NamespaceExport,
    NamespaceExportDeclaration,
    NamespaceImport,
    NewExpression,
    Node,
    NodeArray,
    NodeFactory,
    NodeFactoryFlags,
    NodeFlags,
    nodeIsMissing,
    nodeIsPresent,
    NonNullExpression,
    noop,
    normalizePath,
    NoSubstitutionTemplateLiteral,
    NullLiteral,
    NumericLiteral,
    objectAllocator,
    ObjectBindingPattern,
    ObjectLiteralElementLike,
    ObjectLiteralExpression,
    OperatorPrecedence,
    OptionalTypeNode,
    PackageJsonInfo,
    ParameterDeclaration,
    ParenthesizedExpression,
    ParenthesizedTypeNode,
    PartiallyEmittedExpression,
    perfLogger,
    PlusToken,
    PostfixUnaryExpression,
    PostfixUnaryOperator,
    PragmaContext,
    PragmaDefinition,
    PragmaKindFlags,
    PragmaMap,
    PragmaPseudoMap,
    PragmaPseudoMapEntry,
    PrefixUnaryExpression,
    PrefixUnaryOperator,
    PrimaryExpression,
    PrivateIdentifier,
    PropertyAccessEntityNameExpression,
    PropertyAccessExpression,
    PropertyAssignment,
    PropertyDeclaration,
    PropertyName,
    PropertySignature,
    PunctuationOrKeywordSyntaxKind,
    PunctuationSyntaxKind,
    QualifiedName,
    QuestionDotToken,
    QuestionToken,
    ReadonlyKeyword,
    ReadonlyPragmaMap,
    ReadonlyTextRange,
    ResolutionMode,
    RestTypeNode,
    ReturnStatement,
    SatisfiesExpression,
    ScriptKind,
    ScriptTarget,
    SetAccessorDeclaration,
    setParent,
    setParentRecursive,
    setTextRange,
    setTextRangePos,
    setTextRangePosEnd,
    setTextRangePosWidth,
    ShorthandPropertyAssignment,
    skipTrivia,
    some,
    SourceFile,
    SpreadAssignment,
    SpreadElement,
    startsWith,
    Statement,
    StringLiteral,
    supportedDeclarationExtensions,
    SwitchStatement,
    SyntaxKind,
    TaggedTemplateExpression,
    TemplateExpression,
    TemplateHead,
    TemplateLiteralToken,
    TemplateLiteralTypeNode,
    TemplateLiteralTypeSpan,
    TemplateMiddle,
    TemplateSpan,
    TemplateTail,
    TextChangeRange,
    textChangeRangeIsUnchanged,
    textChangeRangeNewSpan,
    TextRange,
    textSpanEnd,
    textToKeywordObj,
    ThisExpression,
    ThisTypeNode,
    ThrowStatement,
    toArray,
    Token,
    TokenFlags,
    tokenIsIdentifierOrKeyword,
    tokenIsIdentifierOrKeywordOrGreaterThan,
    tokenToString,
    tracing,
    TransformFlags,
    TryStatement,
    TSNextNodeBySyntaxKindEnum,
    TSNextNodeBySyntaxKindName,
    TSNextSyntaxKindNameByEnumValue,
    TupleTypeNode,
    TypeAliasDeclaration,
    TypeAssertion,
    TypeElement,
    TypeLiteralNode,
    TypeNode,
    TypeOfExpression,
    TypeOperatorNode,
    TypeParameterDeclaration,
    TypePredicateNode,
    TypeQueryNode,
    TypeReferenceNode,
    UnaryExpression,
    unescapeLeadingUnderscores,
    UnionOrIntersectionTypeNode,
    UnionTypeNode,
    UpdateExpression,
    ValidSyntaxKindName,
    VariableDeclaration,
    VariableDeclarationList,
    VariableStatement,
    VoidExpression,
    WhileStatement,
    WithStatement,
    YieldExpression,
} from "./_namespaces/ts";

import {
    GrammaticalFeat01,
    ConditionalExprlikeSyntacticTraverser01 ,
} from "./syntaxFeature";

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

function visitNode<T>(cbNode: (node: Node) => T, node: Node | undefined): T | undefined {
    return node && cbNode(node);
}

function visitNodes<T>(cbNode: (node: Node) => T, cbNodes: ((node: NodeArray<Node>) => T | undefined) | undefined, nodes: NodeArray<Node> | undefined): T | undefined {
    if (nodes) {
        if (cbNodes) {
            return cbNodes(nodes);
        }
        for (const node of nodes) {
            const result = cbNode(node);
            if (result) {
                return result;
            }
        }
    }
}

/** @internal */
export function isJSDocLikeText(text: string, start: number) {
    return text.charCodeAt(start + 1) === CharacterCodes.asterisk &&
        text.charCodeAt(start + 2) === CharacterCodes.asterisk &&
        text.charCodeAt(start + 3) !== CharacterCodes.slash;
}

// shared

function forEachChildInCallOrConstructSignature<T>(node: CallSignatureDeclaration | ConstructSignatureDeclaration, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.typeParameters) ||
        visitNodes(cbNode, cbNodes, node.parameters) ||
        visitNode(cbNode, node.type);
}

function forEachChildInUnionOrIntersectionType<T>(node: UnionOrIntersectionTypeNode, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.types);
}

function forEachChildInParenthesizedTypeOrTypeOperator<T>(node: ParenthesizedTypeNode | TypeOperatorNode, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.type);
}

function forEachChildInObjectOrArrayBindingPattern<T>(node: BindingPattern, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.elements);
}

function forEachChildInCallOrNewExpression<T>(node: CallExpression | NewExpression, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.expression) ||
        // TODO: should we separate these branches out?
        visitNode(cbNode, (node as CallExpression).questionDotToken) ||
        visitNodes(cbNode, cbNodes, node.typeArguments) ||
        visitNodes(cbNode, cbNodes, node.arguments);
}

function forEachChildInBlock<T>(node: Block | ModuleBlock, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.statements);
}

function forEachChildInContinueOrBreakStatement<T>(node: BreakOrContinueStatement, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.label);
}

function forEachChildInClassDeclarationOrExpression<T>(node: ClassDeclaration | ClassExpression, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.modifiers) ||
        visitNode(cbNode, node.name) ||
        visitNodes(cbNode, cbNodes, node.typeParameters) ||
        visitNodes(cbNode, cbNodes, node.heritageClauses) ||
        visitNodes(cbNode, cbNodes, node.members);
}

function forEachChildInNamedImportsOrExports<T>(node: NamedImportsOrExports, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNodes(cbNode, cbNodes, node.elements);
}

function forEachChildInImportOrExportSpecifier<T>(node: ImportOrExportSpecifier, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.propertyName) ||
        visitNode(cbNode, node.name);
}

function forEachChildInJsxOpeningOrSelfClosingElement<T>(node: JsxOpeningLikeElement, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.tagName) ||
        visitNodes(cbNode, cbNodes, node.typeArguments) ||
        visitNode(cbNode, node.attributes);
}

function forEachChildInOptionalRestOrJSDocParameterModifier<T>(node: OptionalTypeNode | RestTypeNode | JSDocTypeExpression | JSDocNullableType | JSDocNonNullableType | JSDocOptionalType | JSDocVariadicType, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.type);
}

function forEachChildInJSDocParameterOrPropertyTag<T>(node: JSDocParameterTag | JSDocPropertyTag, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.tagName) ||
        (node.isNameFirst
            ? visitNode(cbNode, node.name) || visitNode(cbNode, node.typeExpression)
            : visitNode(cbNode, node.typeExpression) || visitNode(cbNode, node.name)) ||
        (typeof node.comment === "string" ? undefined : visitNodes(cbNode, cbNodes, node.comment));
}

// function forEachChildInJSDocTypeLikeTag<T>(node: JSDocReturnTag | JSDocTypeTag | JSDocThisTag | JSDocEnumTag | JSDocThrowsTag | JSDocOverloadTag | JSDocSatisfiesTag, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
//     return visitNode(cbNode, node.tagName) ||
//         visitNode(cbNode, node.typeExpression) ||
//         (typeof node.comment === "string" ? undefined : visitNodes(cbNode, cbNodes, node.comment));
// }

// function forEachChildInJSDocLinkCodeOrPlain<T>(node: JSDocLink | JSDocLinkCode | JSDocLinkPlain, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
//     return visitNode(cbNode, node.name);
// }

// function forEachChildInJSDocTag<T>(node: JSDocUnknownTag | JSDocClassTag | JSDocPublicTag | JSDocPrivateTag | JSDocProtectedTag | JSDocReadonlyTag | JSDocDeprecatedTag | JSDocOverrideTag, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
//     return visitNode(cbNode, node.tagName)
//         || (typeof node.comment === "string" ? undefined : visitNodes(cbNode, cbNodes, node.comment));
// }

function forEachChildInPartiallyEmittedExpression<T>(node: PartiallyEmittedExpression, cbNode: (node: Node) => T | undefined, _cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    return visitNode(cbNode, node.expression);
}

/**
 * Invokes a callback for each child of the given node. The 'cbNode' callback is invoked for all child nodes
 * stored in properties. If a 'cbNodes' callback is specified, it is invoked for embedded arrays; otherwise,
 * embedded arrays are flattened and the 'cbNode' callback is invoked for each element. If a callback returns
 * a truthy value, iteration stops and that value is returned. Otherwise, undefined is returned.
 *
 * @param node a given node to visit its children
 * @param cbNode a callback to be invoked for all child nodes
 * @param cbNodes a callback to be invoked for embedded array
 *
 * @remarks `forEachChild` must visit the children of a node in the order
 * that they appear in the source code. The language service depends on this property to locate nodes by position.
 */
export function forEachChild<T>(node: Node, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined {
    if (node === undefined || node.kind <= SyntaxKind.LastToken) {
        return;
    }
    const fn = (forEachChildTable as Record<SyntaxKind, ForEachChildFunction<any>>)[node.kind];
    return fn === undefined ? undefined : fn(node, cbNode, cbNodes);
}

/**
 * Invokes a callback for each child of the given node. The 'cbNode' callback is invoked for all child nodes
 * stored in properties. If a 'cbNodes' callback is specified, it is invoked for embedded arrays; additionally,
 * unlike `forEachChild`, embedded arrays are flattened and the 'cbNode' callback is invoked for each element.
 *  If a callback returns a truthy value, iteration stops and that value is returned. Otherwise, undefined is returned.
 *
 * @param node a given node to visit its children
 * @param cbNode a callback to be invoked for all child nodes
 * @param cbNodes a callback to be invoked for embedded array
 *
 * @remarks Unlike `forEachChild`, `forEachChildRecursively` handles recursively invoking the traversal on each child node found,
 * and while doing so, handles traversing the structure without relying on the callstack to encode the tree structure.
 *
 * @internal
 */
export function forEachChildRecursively<T>(rootNode: Node, cbNode: (node: Node, parent: Node) => T | "skip" | undefined, cbNodes?: (nodes: NodeArray<Node>, parent: Node) => T | "skip" | undefined): T | undefined {
    const queue: (Node | NodeArray<Node>)[] = gatherPossibleChildren(rootNode);
    const parents: Node[] = []; // tracks parent references for elements in queue
    while (parents.length < queue.length) {
        parents.push(rootNode);
    }
    while (queue.length !== 0) {
        const current = queue.pop()!;
        const parent = parents.pop()!;
        if (isArray(current)) {
            if (cbNodes) {
                const res = cbNodes(current, parent);
                if (res) {
                    if (res === "skip") continue;
                    return res;
                }
            }
            for (let i = current.length - 1; i >= 0; --i) {
                queue.push(current[i]!);
                parents.push(parent);
            }
        }
        else {
            const res = cbNode(current, parent);
            if (res) {
                if (res === "skip") continue;
                return res;
            }
            if (current.kind >= SyntaxKind.FirstNode) {
                // add children in reverse order to the queue, so popping gives the first child
                for (const child of gatherPossibleChildren(current)) {
                    queue.push(child);
                    parents.push(current);
                }
            }
        }
    }
}

function gatherPossibleChildren(node: Node) {
    const children: (Node | NodeArray<Node>)[] = [];
    forEachChild(node, addWorkItem, addWorkItem); // By using a stack above and `unshift` here, we emulate a depth-first preorder traversal
    return children;

    function addWorkItem(n: Node | NodeArray<Node>) {
        children.unshift(n);
    }
}

export interface CreateSourceFileOptions {
    languageVersion: ScriptTarget;
    /**
     * Controls the format the file is detected as - this can be derived from only the path
     * and files on disk, but needs to be done with a module resolution cache in scope to be performant.
     * This is usually `undefined` for compilations that do not have `moduleResolution` values of `node16` or `nodenext`.
     */
    impliedNodeFormat?: ResolutionMode;
    /**
     * Controls how module-y-ness is set for the given file. Usually the result of calling
     * `getSetExternalModuleIndicator` on a valid `CompilerOptions` object. If not present, the default
     * check specified by `isFileProbablyExternalModule` will be used to set the field.
     */
    setExternalModuleIndicator?: (file: SourceFile) => void;
    /** @internal */ packageJsonLocations?: readonly string[];
    /** @internal */ packageJsonScope?: PackageJsonInfo;
    jsDocParsingMode?: JSDocParsingMode;
}

function setExternalModuleIndicator(sourceFile: SourceFile) {
    sourceFile.externalModuleIndicator = isFileProbablyExternalModule(sourceFile);
}



;

export function parseIsolatedEntityName(text: string, languageVersion: ScriptTarget): EntityName | undefined {
    const Parser = reusedParser ??= createParser() ;
    return Parser.parseIsolatedEntityName(text, languageVersion);
}

/**
 * Parse json text into SyntaxTree and return node and parse errors if any
 * @param fileName
 * @param sourceText
 */
export function parseJsonText(fileName: string, sourceText: string): JsonSourceFile {
    const Parser = reusedParser ??= createParser() ;
    return Parser.parseJsonText(fileName, sourceText);
}

// See also `isExternalOrCommonJsModule` in utilities.ts
export function isExternalModule(file: SourceFile): boolean {
    return file.externalModuleIndicator !== undefined;
}

;






let reusedParser: ReturnType<typeof createParser> | undefined ;

// function SCF()
// namespace Parser
/**
 * creates new Parser. instances can be reused indefinitely.
 * 
 */
function createParser()
{
    // Why var? It avoids TDZ checks in the runtime which can be costly.
    // See: https://github.com/microsoft/TypeScript/issues/52924

    // Share a single scanner across all calls to parse a source file.  This helps speed things
    // up by avoiding the cost of creating/compiling scanners over and over again.
    var scanner = createScanner(ScriptTarget.ESBuildNext, /*skipTrivia*/ true);

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

    function getNodeClass           <const K extends SyntaxKind>(x: K): { __nameWas : TSNextSyntaxKindNameByEnumValue<K> } & GrammaticalFeat01<TSNextNodeBySyntaxKindEnum<K> > {}
    function getDeclarationNodeClass<const K extends SyntaxKind>(x: K) { return getNodeClass(x) ; }
    
    var {
        createNodeArray: factoryCreateNodeArray,
        createNumericLiteral: factoryCreateNumericLiteral,
        createStringLiteral: factoryCreateStringLiteral,
        // createLiteralLikeNode: factoryCreateLiteralLikeNode,
        createIdentifier: factoryCreateIdentifier,
        createPrivateIdentifier: factoryCreatePrivateIdentifier,
        createToken: factoryCreateToken,
        // createArrayLiteralExpression: factoryCreateArrayLiteralExpression,
        // createObjectLiteralExpression: factoryCreateObjectLiteralExpression,
        // createPropertyAccessExpression: factoryCreatePropertyAccessExpression,
        // createPropertyAccessChain: factoryCreatePropertyAccessChain,
        // createElementAccessExpression: factoryCreateElementAccessExpression,
        // createElementAccessChain: factoryCreateElementAccessChain,
        // createCallExpression: factoryCreateCallExpression,
        // createCallChain: factoryCreateCallChain,
        // createNewExpression: factoryCreateNewExpression,
        // createParenthesizedExpression: factoryCreateParenthesizedExpression,
        // createBlock: factoryCreateBlock,
        // createVariableStatement: factoryCreateVariableStatement,
        // createExpressionStatement: factoryCreateExpressionStatement,
        // createIfStatement: factoryCreateIfStatement,
        // createWhileStatement: factoryCreateWhileStatement,
        // createForStatement: factoryCreateForStatement,
        // createForOfStatement: factoryCreateForOfStatement,
        // createVariableDeclaration: factoryCreateVariableDeclaration,
        createVariableDeclarationList: factoryCreateVariableDeclarationList,
    } = fac as { [k in `create${ValidSyntaxKindName}`]: (...arg: any[] ) => Node };

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

    /* END OF THE STATE-DEFS */

    return {
        parseIsolatedEntityName ,
        fixupParentReferences ,
    } as const ;

    //

    /* export */ function parseIsolatedEntityName(content: string, languageVersion: ScriptTarget): EntityName | undefined {
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
        NodeConstructor = objectAllocator.getNodeConstructor();
        TokenConstructor = objectAllocator.getTokenConstructor();
        IdentifierConstructor = objectAllocator.getIdentifierConstructor();
        PrivateIdentifierConstructor = objectAllocator.getPrivateIdentifierConstructor();
        SourceFileConstructor = objectAllocator.getSourceFileConstructor();

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

    function reparseTopLevelAwait(sourceFile: SourceFile) {
        const savedSyntaxCursor = syntaxCursor;
        const baseSyntaxCursor = IncrementalParser.createSyntaxCursor(sourceFile);
        syntaxCursor = { currentNode };

        const statements: Statement[] = [];
        const savedParseDiagnostics = parseDiagnostics;

        parseDiagnostics = [];

        let pos = 0;
        let start = findNextStatementWithAwait(sourceFile.statements, 0);
        while (start !== -1) {
            // append all statements between pos and start
            const prevStatement = sourceFile.statements[pos];
            const nextStatement = sourceFile.statements[start];
            addRange(statements, sourceFile.statements, pos, start);
            pos = findNextStatementWithoutAwait(sourceFile.statements, start);

            // append all diagnostics associated with the copied range
            const diagnosticStart = findIndex(savedParseDiagnostics, diagnostic => diagnostic.start >= prevStatement.pos);
            const diagnosticEnd = diagnosticStart >= 0 ? findIndex(savedParseDiagnostics, diagnostic => diagnostic.start >= nextStatement.pos, diagnosticStart) : -1;
            if (diagnosticStart >= 0) {
                addRange(parseDiagnostics, savedParseDiagnostics, diagnosticStart, diagnosticEnd >= 0 ? diagnosticEnd : undefined);
            }

            // reparse all statements between start and pos. We skip existing diagnostics for the same range and allow the parser to generate new ones.
            speculationHelper(() => {
                const savedContextFlags = contextFlags;
                contextFlags |= NodeFlags.AwaitContext;
                scanner.resetTokenState(nextStatement.pos);
                nextToken();

                while (token() !== SyntaxKind.EndOfFileToken) {
                    const startPos = scanner.getTokenFullStart();
                    const statement = parseListElement(ParsingContext.SourceElements, parseStatement);
                    statements.push(statement);
                    if (startPos === scanner.getTokenFullStart()) {
                        nextToken();
                    }

                    if (pos >= 0) {
                        const nonAwaitStatement = sourceFile.statements[pos];
                        if (statement.end === nonAwaitStatement.pos) {
                            // done reparsing this section
                            break;
                        }
                        if (statement.end > nonAwaitStatement.pos) {
                            // we ate into the next statement, so we must reparse it.
                            pos = findNextStatementWithoutAwait(sourceFile.statements, pos + 1);
                        }
                    }
                }

                contextFlags = savedContextFlags;
            }, SpeculationKind.Reparse);

            // find the next statement containing an `await`
            start = pos >= 0 ? findNextStatementWithAwait(sourceFile.statements, pos) : -1;
        }

        // append all statements between pos and the end of the list
        if (pos >= 0) {
            const prevStatement = sourceFile.statements[pos];
            addRange(statements, sourceFile.statements, pos);

            // append all diagnostics associated with the copied range
            const diagnosticStart = findIndex(savedParseDiagnostics, diagnostic => diagnostic.start >= prevStatement.pos);
            if (diagnosticStart >= 0) {
                addRange(parseDiagnostics, savedParseDiagnostics, diagnosticStart);
            }
        }

        syntaxCursor = savedSyntaxCursor;
        return factory.updateSourceFile(sourceFile, setTextRange(factoryCreateNodeArray(statements), sourceFile.statements));

        function containsPossibleTopLevelAwait(node: Node) {
            return !(node.flags & NodeFlags.AwaitContext)
                && !!(node.transformFlags & TransformFlags.ContainsPossibleTopLevelAwait);
        }

        function findNextStatementWithAwait(statements: NodeArray<Statement>, start: number) {
            for (let i = start; i < statements.length; i++) {
                if (containsPossibleTopLevelAwait(statements[i])) {
                    return i;
                }
            }
            return -1;
        }

        function findNextStatementWithoutAwait(statements: NodeArray<Statement>, start: number) {
            for (let i = start; i < statements.length; i++) {
                if (!containsPossibleTopLevelAwait(statements[i])) {
                    return i;
                }
            }
            return -1;
        }

        function currentNode(position: number) {
            const node = baseSyntaxCursor.currentNode(position);
            if (topLevel && node && containsPossibleTopLevelAwait(node)) {
                node.intersectsChange = true;
            }
            return node;
        }
    }

    /* export */ function fixupParentReferences(rootNode: Node) {
        // normally parent references are set during binding. However, for clients that only need
        // a syntax tree, and no semantic features, then the binding process is an unnecessary
        // overhead.  This functions allows us to set all the parents, without all the expense of
        // binding.
        setParentRecursive(rootNode, /*incremental*/ true);
    }

    function createSourceFile(
        fileName: string,
        languageVersion: ScriptTarget,
        scriptKind: ScriptKind,
        isDeclarationFile: boolean,
        statements: readonly Statement[],
        endOfFileToken: EndOfFileToken,
        flags: NodeFlags,
        setExternalModuleIndicator: (sourceFile: SourceFile) => void,
    ): SourceFile {
        // code from createNode is inlined here so createNode won't have to deal with special case of creating source files
        // this is quite rare comparing to other nodes and createNode should be as fast as possible
        let sourceFile = factory.createSourceFile(statements, endOfFileToken, flags);
        setTextRangePosWidth(sourceFile, 0, sourceText.length);
        setFields(sourceFile);

        // If we parsed this as an external module, it may contain top-level await
        if (!isDeclarationFile && isExternalModule(sourceFile) && sourceFile.transformFlags & TransformFlags.ContainsPossibleTopLevelAwait) {
            const oldSourceFile = sourceFile;
            sourceFile = reparseTopLevelAwait(sourceFile);
            if (oldSourceFile !== sourceFile) setFields(sourceFile);
        }

        return sourceFile;

        function setFields(sourceFile: SourceFile) {
            sourceFile.text = sourceText;
            sourceFile.bindDiagnostics = [];
            sourceFile.bindSuggestionDiagnostics = undefined;
            sourceFile.languageVersion = languageVersion;
            sourceFile.fileName = fileName;
            sourceFile.languageVariant = getLanguageVariant(scriptKind);
            sourceFile.isDeclarationFile = isDeclarationFile;
            sourceFile.scriptKind = scriptKind;

            setExternalModuleIndicator(sourceFile);
            sourceFile.setExternalModuleIndicator = setExternalModuleIndicator;
        }
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

    /**
     * Provides a better error message than the generic "';' expected" if possible for
     * known common variants of a missing semicolon, such as from a mispelled names.
     *
     * @param node Node preceding the expected semicolon location.
     */
    function parseErrorForMissingSemicolonAfter(node: Expression | PropertyName): void {
        // Tagged template literals are sometimes used in places where only simple strings are allowed, i.e.:
        //   module `M1` {
        //   ^^^^^^^^^^^ This block is parsed as a template literal like module`M1`.
        if (isTaggedTemplateExpression(node)) {
            parseErrorAt(skipTrivia(sourceText, node.template.pos), node.template.end, Diagnostics.Module_declaration_names_may_only_use_or_quoted_strings);
            return;
        }

        // Otherwise, if this isn't a well-known keyword-like identifier, give the generic fallback message.
        const expressionText = isIdentifierNode(node) ? idText(node) : undefined;
        if (!expressionText || !isIdentifierText(expressionText, languageVersion)) {
            parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.SemicolonToken));
            return;
        }

        const pos = skipTrivia(sourceText, node.pos);

        // Some known keywords are likely signs of syntax being used improperly.
        switch (expressionText) {
            case "const":
            case "let":
            case "var":
                parseErrorAt(pos, node.end, Diagnostics.Variable_declaration_not_allowed_at_this_location);
                return;

            case "declare":
                // If a declared node failed to parse, it would have emitted a diagnostic already.
                return;

            case "interface":
                parseErrorForInvalidName(Diagnostics.Interface_name_cannot_be_0, Diagnostics.Interface_must_be_given_a_name, SyntaxKind.OpenBraceToken);
                return;

            case "is":
                parseErrorAt(pos, scanner.getTokenStart(), Diagnostics.A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods);
                return;

            case "module":
            case "namespace":
                parseErrorForInvalidName(Diagnostics.Namespace_name_cannot_be_0, Diagnostics.Namespace_must_be_given_a_name, SyntaxKind.OpenBraceToken);
                return;

            case "type":
                parseErrorForInvalidName(Diagnostics.Type_alias_name_cannot_be_0, Diagnostics.Type_alias_must_be_given_a_name, SyntaxKind.EqualsToken);
                return;
        }

        // The user alternatively might have misspelled or forgotten to add a space after a common keyword.
        const suggestion = getSpellingSuggestion(expressionText, viableKeywordSuggestions, n => n) ?? getSpaceSuggestion(expressionText);
        if (suggestion) {
            parseErrorAt(pos, node.end, Diagnostics.Unknown_keyword_or_identifier_Did_you_mean_0, suggestion);
            return;
        }

        // Unknown tokens are handled with their own errors in the scanner
        if (token() === SyntaxKind.Unknown) {
            return;
        }

        // Otherwise, we know this some kind of unknown word, not just a missing expected semicolon.
        parseErrorAt(pos, node.end, Diagnostics.Unexpected_keyword_or_identifier);
    }

    /**
     * Reports a diagnostic error for the current token being an invalid name.
     *
     * @param blankDiagnostic Diagnostic to report for the case of the name being blank (matched tokenIfBlankName).
     * @param nameDiagnostic Diagnostic to report for all other cases.
     * @param tokenIfBlankName Current token if the name was invalid for being blank (not provided / skipped).
     */
    function parseErrorForInvalidName(nameDiagnostic: DiagnosticMessage, blankDiagnostic: DiagnosticMessage, tokenIfBlankName: SyntaxKind) {
        if (token() === tokenIfBlankName) {
            parseErrorAtCurrentToken(blankDiagnostic);
        }
        else {
            parseErrorAtCurrentToken(nameDiagnostic, scanner.getTokenValue());
        }
    }

    function getSpaceSuggestion(expressionText: string) {
        for (const keyword of viableKeywordSuggestions) {
            if (expressionText.length > keyword.length + 2 && startsWith(expressionText, keyword)) {
                return `${keyword} ${expressionText.slice(keyword.length)}`;
            }
        }

        return undefined;
    }

    function parseSemicolonAfterPropertyName(name: PropertyName, type: TypeNode | undefined, initializer: Expression | undefined) {
        if (token() === SyntaxKind.AtToken && !scanner.hasPrecedingLineBreak()) {
            parseErrorAtCurrentToken(Diagnostics.Decorators_must_precede_the_name_and_all_keywords_of_property_declarations);
            return;
        }

        if (token() === SyntaxKind.OpenParenToken) {
            parseErrorAtCurrentToken(Diagnostics.Cannot_start_a_function_call_in_a_type_annotation);
            nextToken();
            return;
        }

        if (type && !canParseSemicolon()) {
            if (initializer) {
                parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.SemicolonToken));
            }
            else {
                parseErrorAtCurrentToken(Diagnostics.Expected_for_property_initializer);
            }
            return;
        }

        if (tryParseSemicolon()) {
            return;
        }

        if (initializer) {
            parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.SemicolonToken));
            return;
        }

        parseErrorForMissingSemicolonAfter(name);
    }

    function parseExpectedJSDoc(kind: JSDocSyntaxKind) {
        if (token() === kind) {
            nextTokenJSDoc();
            return true;
        }
        Debug.assert(isKeywordOrPunctuation(kind));
        parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(kind));
        return false;
    }

    function parseExpectedMatchingBrackets(openKind: PunctuationSyntaxKind, closeKind: PunctuationSyntaxKind, openParsed: boolean, openPosition: number) {
        if (token() === closeKind) {
            nextToken();
            return;
        }
        const lastError = parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(closeKind));
        if (!openParsed) {
            return;
        }
        if (lastError) {
            addRelatedInfo(
                lastError,
                createDetachedDiagnostic(fileName, sourceText, openPosition, 1, Diagnostics.The_parser_expected_to_find_a_1_to_match_the_0_token_here, tokenToString(openKind), tokenToString(closeKind)),
            );
        }
    }

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

    function parseExpectedTokenJSDoc<TKind extends JSDocSyntaxKind>(t: TKind): Token<TKind>;
    function parseExpectedTokenJSDoc(t: JSDocSyntaxKind): Node {
        const optional = parseOptionalTokenJSDoc(t);
        if (optional) return optional;
        Debug.assert(isKeywordOrPunctuation(t));
        return createMissingNode(t, /*reportAtCurrentPosition*/ false, Diagnostics._0_expected, tokenToString(t));
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

    function createNodeArray<T extends Node>(elements: T[], pos: number, end?: number, hasTrailingComma?: boolean): NodeArray<T> {
        const array = factoryCreateNodeArray(elements, hasTrailingComma);
        setTextRangePosEnd(array, pos, end ?? scanner.getTokenFullStart());
        return array;
    }

    function finishNode<T extends Node>(node: T, pos: number, end?: number): T {
        setTextRangePosEnd(node, pos, end ?? scanner.getTokenFullStart());
        if (contextFlags) {
            (node as Mutable<T>).flags |= contextFlags;
        }

        // Keep track on the node if we encountered an error while parsing it.  If we did, then
        // we cannot reuse the node incrementally.  Once we've marked this node, clear out the
        // flag so that we don't mark any subsequent nodes.
        if (parseErrorBeforeNextFinishedNode) {
            parseErrorBeforeNextFinishedNode = false;
            (node as Mutable<T>).flags |= NodeFlags.ThisNodeHasError;
        }

        return node;
    }

    function createMissingNode<T extends Node>(kind: T["kind"], reportAtCurrentPosition: false, diagnosticMessage?: DiagnosticMessage, ...args: DiagnosticArguments): T;
    function createMissingNode<T extends Node>(kind: T["kind"], reportAtCurrentPosition: boolean, diagnosticMessage: DiagnosticMessage, ...args: DiagnosticArguments): T;
    function createMissingNode<T extends Node>(kind: T["kind"], reportAtCurrentPosition: boolean, diagnosticMessage?: DiagnosticMessage, ...args: DiagnosticArguments): T {
        if (reportAtCurrentPosition) {
            parseErrorAtPosition(scanner.getTokenFullStart(), 0, diagnosticMessage!, ...args);
        }
        else if (diagnosticMessage) {
            parseErrorAtCurrentToken(diagnosticMessage, ...args);
        }

        const pos = getNodePos();
        const result = kind === SyntaxKind.Identifier ? factoryCreateIdentifier("", /*originalKeywordKind*/ undefined) :
            isTemplateLiteralKind(kind) ? getNodeClass(SyntaxKind.TemplateLiteralLike).astFac.describe(kind, "", "", /*templateFlags*/ undefined) :
            kind === SyntaxKind.NumericLiteral ? factoryCreateNumericLiteral("", /*numericLiteralFlags*/ undefined) :
            kind === SyntaxKind.StringLiteral ? factoryCreateStringLiteral("", /*isSingleQuote*/ undefined) :
            kind === SyntaxKind.MissingDeclaration ? getDeclarationNodeClass(SyntaxKind.Missing).astFac.describe() :
            factoryCreateToken(kind);
        return finishNode(result, pos) as T;
    }

    function internIdentifier(text: string): string {
        let identifier = identifiers.get(text);
        if (identifier === undefined) {
            identifiers.set(text, identifier = text);
        }
        return identifier;
    }

    // An identifier that starts with two underscores has an extra underscore character prepended to it to avoid issues
    // with magic property names like '__proto__'. The 'identifiers' object is used to share a single string instance for
    // each identifier in order to reduce memory consumption.
    function createIdentifier(isIdentifier: boolean, diagnosticMessage?: DiagnosticMessage, privateIdentifierDiagnosticMessage?: DiagnosticMessage): Identifier {
        if (isIdentifier) {
            identifierCount++;
            const pos = getNodePos();
            // Store original token kind if it is not just an Identifier so we can report appropriate error later in type checker
            const originalKeywordKind = token();
            const text = internIdentifier(scanner.getTokenValue());
            const hasExtendedUnicodeEscape = scanner.hasExtendedUnicodeEscape();
            nextTokenWithoutCheck();
            return finishNode(factoryCreateIdentifier(text, originalKeywordKind, hasExtendedUnicodeEscape), pos);
        }

        if (token() === SyntaxKind.PrivateIdentifier) {
            parseErrorAtCurrentToken(privateIdentifierDiagnosticMessage || Diagnostics.Private_identifiers_are_not_allowed_outside_class_bodies);
            return createIdentifier(/*isIdentifier*/ true);
        }

        if (token() === SyntaxKind.Unknown && scanner.tryScan(() => scanner.reScanInvalidIdentifier() === SyntaxKind.Identifier)) {
            // Scanner has already recorded an 'Invalid character' error, so no need to add another from the parser.
            return createIdentifier(/*isIdentifier*/ true);
        }

        identifierCount++;
        // Only for end of file because the error gets reported incorrectly on embedded script tags.
        const reportAtCurrentPosition = token() === SyntaxKind.EndOfFileToken;

        const isReservedWord = scanner.isReservedWord();
        const msgArg = scanner.getTokenText();

        const defaultMessage = isReservedWord ?
            Diagnostics.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here :
            Diagnostics.Identifier_expected;

        return createMissingNode<Identifier>(SyntaxKind.Identifier, reportAtCurrentPosition, diagnosticMessage || defaultMessage, msgArg);
    }

    function parseBindingIdentifier(privateIdentifierDiagnosticMessage?: DiagnosticMessage) {
        return createIdentifier(isBindingIdentifier(), /*diagnosticMessage*/ undefined, privateIdentifierDiagnosticMessage);
    }

    function parseIdentifier(diagnosticMessage?: DiagnosticMessage, privateIdentifierDiagnosticMessage?: DiagnosticMessage): Identifier {
        return createIdentifier(isIdentifier(), diagnosticMessage, privateIdentifierDiagnosticMessage);
    }

    function parseIdentifierName(diagnosticMessage?: DiagnosticMessage): Identifier {
        return createIdentifier(tokenIsIdentifierOrKeyword(token()), diagnosticMessage);
    }

    function parseIdentifierNameErrorOnUnicodeEscapeSequence(): Identifier {
        if (scanner.hasUnicodeEscape() || scanner.hasExtendedUnicodeEscape()) {
            parseErrorAtCurrentToken(Diagnostics.Unicode_escape_sequence_cannot_appear_here);
        }
        return createIdentifier(tokenIsIdentifierOrKeyword(token()));
    }

    function isLiteralPropertyName(): boolean {
        return tokenIsIdentifierOrKeyword(token()) ||
            token() === SyntaxKind.StringLiteral ||
            token() === SyntaxKind.NumericLiteral;
    }

    function isImportAttributeName(): boolean {
        return tokenIsIdentifierOrKeyword(token()) || token() === SyntaxKind.StringLiteral;
    }

    function parsePropertyNameWorker(allowComputedPropertyNames: boolean): PropertyName {
        if (token() === SyntaxKind.StringLiteral || token() === SyntaxKind.NumericLiteral) {
            const node = parseLiteralNode() as StringLiteral | NumericLiteral;
            node.text = internIdentifier(node.text);
            return node;
        }
        if (allowComputedPropertyNames && token() === SyntaxKind.OpenBracketToken) {
            return parseComputedPropertyName();
        }
        if (token() === SyntaxKind.PrivateIdentifier) {
            return parsePrivateIdentifier();
        }
        return parseIdentifierName();
    }

    function parsePropertyName(): PropertyName {
        return parsePropertyNameWorker(/*allowComputedPropertyNames*/ true);
    }

    function parseComputedPropertyName(): ComputedPropertyName {
        // PropertyName [Yield]:
        //      LiteralPropertyName
        //      ComputedPropertyName[?Yield]
        const pos = getNodePos();
        parseExpected(SyntaxKind.OpenBracketToken);
        // We parse any expression (including a comma expression). But the grammar
        // says that only an assignment expression is allowed, so the grammar checker
        // will error if it sees a comma expression.
        const expression = allowInAnd(parseExpression);
        parseExpected(SyntaxKind.CloseBracketToken);
        return finishNode(factory.createComputedPropertyName(expression), pos);
    }

    function parsePrivateIdentifier(): PrivateIdentifier {
        const pos = getNodePos();
        const node = factoryCreatePrivateIdentifier(internIdentifier(scanner.getTokenValue()));
        nextToken();
        return finishNode(node, pos);
    }

    function parseContextualModifier(t: SyntaxKind): boolean {
        return token() === t && tryParse(nextTokenCanFollowModifier);
    }

    function nextTokenIsOnSameLineAndCanFollowModifier() {
        nextToken();
        if (scanner.hasPrecedingLineBreak()) {
            return false;
        }
        return canFollowModifier();
    }

    function nextTokenCanFollowModifier() {
        switch (token()) {
            case SyntaxKind.ConstKeyword:
                // 'const' is only a modifier if followed by 'enum'.
                return nextToken() === SyntaxKind.EnumKeyword;
            case SyntaxKind.ExportKeyword:
                nextToken();
                if (token() === SyntaxKind.DefaultKeyword) {
                    return lookAhead(nextTokenCanFollowDefaultKeyword);
                }
                if (token() === SyntaxKind.TypeKeyword) {
                    return lookAhead(nextTokenCanFollowExportModifier);
                }
                return canFollowExportModifier();
            case SyntaxKind.DefaultKeyword:
                return nextTokenCanFollowDefaultKeyword();
            case SyntaxKind.StaticKeyword:
            case SyntaxKind.GetKeyword:
            case SyntaxKind.SetKeyword:
                nextToken();
                return canFollowModifier();
            default:
                return nextTokenIsOnSameLineAndCanFollowModifier();
        }
    }

    function canFollowExportModifier(): boolean {
        return token() === SyntaxKind.AtToken
            || token() !== SyntaxKind.AsteriskToken
                && token() !== SyntaxKind.AsKeyword
                && token() !== SyntaxKind.OpenBraceToken
                && canFollowModifier();
    }

    function nextTokenCanFollowExportModifier(): boolean {
        nextToken();
        return canFollowExportModifier();
    }

    function parseAnyContextualModifier(): boolean {
        return isModifierKind(token()) && tryParse(nextTokenCanFollowModifier);
    }

    function canFollowModifier(): boolean {
        return token() === SyntaxKind.OpenBracketToken
            || token() === SyntaxKind.OpenBraceToken
            || token() === SyntaxKind.AsteriskToken
            || token() === SyntaxKind.DotDotDotToken
            || isLiteralPropertyName();
    }

    function nextTokenCanFollowDefaultKeyword(): boolean {
        nextToken();
        return token() === SyntaxKind.ClassKeyword
            || token() === SyntaxKind.FunctionKeyword
            || token() === SyntaxKind.InterfaceKeyword
            || token() === SyntaxKind.AtToken
            || (token() === SyntaxKind.AbstractKeyword && lookAhead(nextTokenIsClassKeywordOnSameLine))
            || (token() === SyntaxKind.AsyncKeyword && lookAhead(nextTokenIsFunctionKeywordOnSameLine));
    }

    function isValidHeritageClauseObjectLiteral() {
        Debug.assert(token() === SyntaxKind.OpenBraceToken);
        if (nextToken() === SyntaxKind.CloseBraceToken) {
            // if we see "extends {}" then only treat the {} as what we're extending (and not
            // the class body) if we have:
            //
            //      extends {} {
            //      extends {},
            //      extends {} extends
            //      extends {} implements

            const next = nextToken();
            return next === SyntaxKind.CommaToken || next === SyntaxKind.OpenBraceToken || next === SyntaxKind.ExtendsKeyword || next === SyntaxKind.ImplementsKeyword;
        }

        return true;
    }

    function nextTokenIsIdentifier() {
        nextToken();
        return isIdentifier();
    }

    function nextTokenIsIdentifierOrKeyword() {
        nextToken();
        return tokenIsIdentifierOrKeyword(token());
    }

    function nextTokenIsIdentifierOrKeywordOrGreaterThan() {
        nextToken();
        return tokenIsIdentifierOrKeywordOrGreaterThan(token());
    }

    function isHeritageClauseExtendsOrImplementsKeyword(): boolean {
        if (
            token() === SyntaxKind.ImplementsKeyword ||
            token() === SyntaxKind.ExtendsKeyword
        ) {
            return lookAhead(nextTokenIsStartOfExpression);
        }

        return false;
    }

    function nextTokenIsStartOfExpression() {
        nextToken();
        return isStartOfExpression();
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

    // True if positioned at element or terminator of the current list or any enclosing list
    function isInSomeParsingContext(): boolean {
        // We should be in at least one parsing context, be it SourceElements while parsing
        // a SourceFile, or JSDocComment when lazily parsing JSDoc.
        Debug.assert(parsingContext, "Missing parsing context");
        for (let kind = 0; kind < ParsingContext.Count; kind++) {
            if (parsingContext & (1 << kind)) {
                if (isListElement(kind, /*inErrorRecovery*/ true) || isListTerminator(kind)) {
                    return true;
                }
            }
        }

        return false;
    }

    // Parses a list of elements
    function parseList<T extends Node>(kind: ParsingContext, parseElement: () => T): NodeArray<T> {
        const saveParsingContext = parsingContext;
        parsingContext |= 1 << kind;
        const list = [];
        const listPos = getNodePos();

        while (!isListTerminator(kind)) {
            if (isListElement(kind, /*inErrorRecovery*/ false)) {
                list.push(parseListElement(kind, parseElement));

                continue;
            }

            if (abortParsingListOrMoveToNextToken(kind)) {
                break;
            }
        }

        parsingContext = saveParsingContext;
        return createNodeArray(list, listPos);
    }

    function parseListElement<T extends Node | undefined>(parsingContext: ParsingContext, parseElement: () => T): T {
        const node = currentNode(parsingContext);
        if (node) {
            return consumeNode(node) as T;
        }

        return parseElement();
    }

    function currentNode(parsingContext: ParsingContext, pos?: number): Node | undefined {
        // If we don't have a cursor or the parsing context isn't reusable, there's nothing to reuse.
        //
        // If there is an outstanding parse error that we've encountered, but not attached to
        // some node, then we cannot get a node from the old source tree.  This is because we
        // want to mark the next node we encounter as being unusable.
        //
        // Note: This may be too conservative.  Perhaps we could reuse the node and set the bit
        // on it (or its leftmost child) as having the error.  For now though, being conservative
        // is nice and likely won't ever affect perf.
        if (!syntaxCursor || !isReusableParsingContext(parsingContext) || parseErrorBeforeNextFinishedNode) {
            return undefined;
        }

        const node = syntaxCursor.currentNode(pos ?? scanner.getTokenFullStart());

        // Can't reuse a missing node.
        // Can't reuse a node that intersected the change range.
        // Can't reuse a node that contains a parse error.  This is necessary so that we
        // produce the same set of errors again.
        if (nodeIsMissing(node) || node.intersectsChange || containsParseError(node)) {
            return undefined;
        }

        // We can only reuse a node if it was parsed under the same strict mode that we're
        // currently in.  i.e. if we originally parsed a node in non-strict mode, but then
        // the user added 'using strict' at the top of the file, then we can't use that node
        // again as the presence of strict mode may cause us to parse the tokens in the file
        // differently.
        //
        // Note: we *can* reuse tokens when the strict mode changes.  That's because tokens
        // are unaffected by strict mode.  It's just the parser will decide what to do with it
        // differently depending on what mode it is in.
        //
        // This also applies to all our other context flags as well.
        const nodeContextFlags = node.flags & NodeFlags.ContextFlags;
        if (nodeContextFlags !== contextFlags) {
            return undefined;
        }

        // Ok, we have a node that looks like it could be reused.  Now verify that it is valid
        // in the current list parsing context that we're currently at.
        if (!canReuseNode(node, parsingContext)) {
            return undefined;
        }

        if (canHaveJSDoc(node) && node.jsDoc?.jsDocCache) {
            // jsDocCache may include tags from parent nodes, which might have been modified.
            node.jsDoc.jsDocCache = undefined;
        }

        return node;
    }

    function consumeNode(node: Node) {
        // Move the scanner so it is after the node we just consumed.
        scanner.resetTokenState(node.end);
        nextToken();
        return node;
    }

    // Returns true if we should abort parsing.
    function abortParsingListOrMoveToNextToken(kind: ParsingContext) {
        parsingContextErrors(kind);
        if (isInSomeParsingContext()) {
            return true;
        }

        nextToken();
        return false;
    }

    function parsingContextErrors(context: ParsingContext) {
        switch (context) {
            case ParsingContext.SourceElements:
                return token() === SyntaxKind.DefaultKeyword
                    ? parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.ExportKeyword))
                    : parseErrorAtCurrentToken(Diagnostics.Declaration_or_statement_expected);
            case ParsingContext.BlockStatements:
                return parseErrorAtCurrentToken(Diagnostics.Declaration_or_statement_expected);
            case ParsingContext.SwitchClauses:
                return parseErrorAtCurrentToken(Diagnostics.case_or_default_expected);
            case ParsingContext.SwitchClauseStatements:
                return parseErrorAtCurrentToken(Diagnostics.Statement_expected);
            case ParsingContext.RestProperties: // fallthrough
            case ParsingContext.TypeMembers:
                return parseErrorAtCurrentToken(Diagnostics.Property_or_signature_expected);
            case ParsingContext.ClassMembers:
                return parseErrorAtCurrentToken(Diagnostics.Unexpected_token_A_constructor_method_accessor_or_property_was_expected);
            case ParsingContext.EnumMembers:
                return parseErrorAtCurrentToken(Diagnostics.Enum_member_expected);
            case ParsingContext.HeritageClauseElement:
                return parseErrorAtCurrentToken(Diagnostics.Expression_expected);
            case ParsingContext.VariableDeclarations:
                return isKeyword(token())
                    ? parseErrorAtCurrentToken(Diagnostics._0_is_not_allowed_as_a_variable_declaration_name, tokenToString(token())!)
                    : parseErrorAtCurrentToken(Diagnostics.Variable_declaration_expected);
            case ParsingContext.ObjectBindingElements:
                return parseErrorAtCurrentToken(Diagnostics.Property_destructuring_pattern_expected);
            case ParsingContext.ArrayBindingElements:
                return parseErrorAtCurrentToken(Diagnostics.Array_element_destructuring_pattern_expected);
            case ParsingContext.ArgumentExpressions:
                return parseErrorAtCurrentToken(Diagnostics.Argument_expression_expected);
            case ParsingContext.ObjectLiteralMembers:
                return parseErrorAtCurrentToken(Diagnostics.Property_assignment_expected);
            case ParsingContext.ArrayLiteralMembers:
                return parseErrorAtCurrentToken(Diagnostics.Expression_or_comma_expected);
            case ParsingContext.JSDocParameters:
                return parseErrorAtCurrentToken(Diagnostics.Parameter_declaration_expected);
            case ParsingContext.Parameters:
                return isKeyword(token())
                    ? parseErrorAtCurrentToken(Diagnostics._0_is_not_allowed_as_a_parameter_name, tokenToString(token())!)
                    : parseErrorAtCurrentToken(Diagnostics.Parameter_declaration_expected);
            case ParsingContext.TypeParameters:
                return parseErrorAtCurrentToken(Diagnostics.Type_parameter_declaration_expected);
            case ParsingContext.TypeArguments:
                return parseErrorAtCurrentToken(Diagnostics.Type_argument_expected);
            case ParsingContext.TupleElementTypes:
                return parseErrorAtCurrentToken(Diagnostics.Type_expected);
            case ParsingContext.HeritageClauses:
                return parseErrorAtCurrentToken(Diagnostics.Unexpected_token_expected);
            case ParsingContext.ImportOrExportSpecifiers:
                if (token() === SyntaxKind.FromKeyword) {
                    return parseErrorAtCurrentToken(Diagnostics._0_expected, "}");
                }
                return parseErrorAtCurrentToken(Diagnostics.Identifier_expected);
            case ParsingContext.JsxAttributes:
                return parseErrorAtCurrentToken(Diagnostics.Identifier_expected);
            case ParsingContext.JsxChildren:
                return parseErrorAtCurrentToken(Diagnostics.Identifier_expected);
            case ParsingContext.ImportAttributes:
                return parseErrorAtCurrentToken(Diagnostics.Identifier_or_string_literal_expected);
            case ParsingContext.JSDocComment:
                return parseErrorAtCurrentToken(Diagnostics.Identifier_expected);
            case ParsingContext.Count:
                return Debug.fail("ParsingContext.Count used as a context"); // Not a real context, only a marker.
            default:
                Debug.assertNever(context);
        }
    }

    // Parses a comma-delimited list of elements
    function parseDelimitedList<T extends Node>(kind: ParsingContext, parseElement: () => T, considerSemicolonAsDelimiter?: boolean): NodeArray<T>;
    function parseDelimitedList<T extends Node | undefined>(kind: ParsingContext, parseElement: () => T, considerSemicolonAsDelimiter?: boolean): NodeArray<NonNullable<T>> | undefined;
    function parseDelimitedList<T extends Node | undefined>(kind: ParsingContext, parseElement: () => T, considerSemicolonAsDelimiter?: boolean): NodeArray<NonNullable<T>> | undefined {
        const saveParsingContext = parsingContext;
        parsingContext |= 1 << kind;
        const list: NonNullable<T>[] = [];
        const listPos = getNodePos();

        let commaStart = -1; // Meaning the previous token was not a comma
        while (true) {
            if (isListElement(kind, /*inErrorRecovery*/ false)) {
                const startPos = scanner.getTokenFullStart();
                const result = parseListElement(kind, parseElement);
                if (!result) {
                    parsingContext = saveParsingContext;
                    return undefined;
                }
                list.push(result);
                commaStart = scanner.getTokenStart();

                if (parseOptional(SyntaxKind.CommaToken)) {
                    // No need to check for a zero length node since we know we parsed a comma
                    continue;
                }

                commaStart = -1; // Back to the state where the last token was not a comma
                if (isListTerminator(kind)) {
                    break;
                }

                // We didn't get a comma, and the list wasn't terminated, explicitly parse
                // out a comma so we give a good error message.
                parseExpected(SyntaxKind.CommaToken, getExpectedCommaDiagnostic(kind));

                // If the token was a semicolon, and the caller allows that, then skip it and
                // continue.  This ensures we get back on track and don't result in tons of
                // parse errors.  For example, this can happen when people do things like use
                // a semicolon to delimit object literal members.   Note: we'll have already
                // reported an error when we called parseExpected above.
                if (considerSemicolonAsDelimiter && token() === SyntaxKind.SemicolonToken && !scanner.hasPrecedingLineBreak()) {
                    nextToken();
                }
                if (startPos === scanner.getTokenFullStart()) {
                    // What we're parsing isn't actually remotely recognizable as a element and we've consumed no tokens whatsoever
                    // Consume a token to advance the parser in some way and avoid an infinite loop
                    // This can happen when we're speculatively parsing parenthesized expressions which we think may be arrow functions,
                    // or when a modifier keyword which is disallowed as a parameter name (ie, `static` in strict mode) is supplied
                    nextToken();
                }
                continue;
            }

            if (isListTerminator(kind)) {
                break;
            }

            if (abortParsingListOrMoveToNextToken(kind)) {
                break;
            }
        }

        parsingContext = saveParsingContext;
        // Recording the trailing comma is deliberately done after the previous
        // loop, and not just if we see a list terminator. This is because the list
        // may have ended incorrectly, but it is still important to know if there
        // was a trailing comma.
        // Check if the last token was a comma.
        // Always preserve a trailing comma by marking it on the NodeArray
        return createNodeArray(list, listPos, /*end*/ undefined, commaStart >= 0);
    }

    function getExpectedCommaDiagnostic(kind: ParsingContext) {
        return kind === ParsingContext.EnumMembers ? Diagnostics.An_enum_member_name_must_be_followed_by_a_or : undefined;
    }

    interface MissingList<T extends Node> extends NodeArray<T> {
        isMissingList: true;
    }

    function createMissingList<T extends Node>(): MissingList<T> {
        const list = createNodeArray<T>([], getNodePos()) as MissingList<T>;
        list.isMissingList = true;
        return list;
    }

    function isMissingList(arr: NodeArray<Node>): boolean {
        return !!(arr as MissingList<Node>).isMissingList;
    }

    function parseBracketedList<T extends Node>(kind: ParsingContext, parseElement: () => T, open: PunctuationSyntaxKind, close: PunctuationSyntaxKind): NodeArray<T> {
        if (parseExpected(open)) {
            const result = parseDelimitedList(kind, parseElement);
            parseExpected(close);
            return result;
        }

        return createMissingList<T>();
    }

    // TYPES

    function parseEntityNameOfTypeReference() {
        return parseEntityName(/*allowReservedWords*/ true, Diagnostics.Type_expected);
    }

    function parseTypeArgumentsOfTypeReference() {
        if (!scanner.hasPrecedingLineBreak() && reScanLessThanToken() === SyntaxKind.LessThanToken) {
            return parseBracketedList(ParsingContext.TypeArguments, parseType, SyntaxKind.LessThanToken, SyntaxKind.GreaterThanToken);
        }
    }

    function parseTypeReference(): TypeReferenceNode {
        const pos = getNodePos();
        return finishNode(
            getNodeClass(SyntaxKind.TypeReference).astFac.describe(
                parseEntityNameOfTypeReference(),
                parseTypeArgumentsOfTypeReference(),
            ),
            pos,
        );
    }

    // If true, we should abort parsing an error function.
    function typeHasArrowFunctionBlockingParseError(node: TypeNode): boolean {
        switch (node.kind) {
            case SyntaxKind.TypeReference:
                return nodeIsMissing((node as TypeReferenceNode).typeName);
            case SyntaxKind.FunctionType:
            case SyntaxKind.ConstructorType: {
                const { parameters, type } = node as FunctionOrConstructorTypeNode;
                return isMissingList(parameters) || typeHasArrowFunctionBlockingParseError(type);
            }
            case SyntaxKind.ParenthesizedType:
                return typeHasArrowFunctionBlockingParseError((node as ParenthesizedTypeNode).type);
            default:
                return false;
        }
    }

    function parseThisTypePredicate(lhs: ThisTypeNode): TypePredicateNode {
        nextToken();
        return finishNode(getNodeClass(SyntaxKind.TypePredicate).astFac.describe(/*assertsModifier*/ undefined, lhs, parseType()), lhs.pos);
    }

    function parseThisTypeNode(): ThisTypeNode {
        const pos = getNodePos();
        nextToken();
        return finishNode(getNodeClass(SyntaxKind.ThisType).astFac.describe(), pos);
    }

    function parseJSDocAllType(): JSDocAllType | JSDocOptionalType {
        const pos = getNodePos();
        nextToken();
        return finishNode(getNodeClass(SyntaxKind.JSDocAllType).astFac.describe(), pos);
    }

    function parseJSDocNonNullableType(): TypeNode {
        const pos = getNodePos();
        nextToken();
        return finishNode(getNodeClass(SyntaxKind.JSDocNonNullableType).astFac.describe(parseNonArrayType(), /*postfix*/ false), pos);
    }

    function parseJSDocUnknownOrNullableType(): JSDocUnknownType | JSDocNullableType {
        const pos = getNodePos();
        // skip the ?
        nextToken();

        // Need to lookahead to decide if this is a nullable or unknown type.

        // Here are cases where we'll pick the unknown type:
        //
        //      Foo(?,
        //      { a: ? }
        //      Foo(?)
        //      Foo<?>
        //      Foo(?=
        //      (?|
        if (
            token() === SyntaxKind.CommaToken ||
            token() === SyntaxKind.CloseBraceToken ||
            token() === SyntaxKind.CloseParenToken ||
            token() === SyntaxKind.GreaterThanToken ||
            token() === SyntaxKind.EqualsToken ||
            token() === SyntaxKind.BarToken
        ) {
            return finishNode(getNodeClass(SyntaxKind.JSDocUnknownType).astFac.describe(), pos);
        }
        else {
            return finishNode(getNodeClass(SyntaxKind.JSDocNullableType).astFac.describe(parseType(), /*postfix*/ false), pos);
        }
    }

    function parseJSDocFunctionType(): JSDocFunctionType | TypeReferenceNode {
        const pos = getNodePos();
        const hasJSDoc = hasPrecedingJSDocComment();
        if (tryParse(nextTokenIsOpenParen)) {
            const parameters = parseParameters(SignatureFlags.Type | SignatureFlags.JSDoc);
            const type = parseReturnType(SyntaxKind.ColonToken, /*isType*/ false);
            return withJSDoc(finishNode(getNodeClass(SyntaxKind.JSDocFunctionType).astFac.describe(parameters, type), pos), hasJSDoc);
        }
        return finishNode(getNodeClass(SyntaxKind.TypeReference).astFac.describe(parseIdentifierName(), /*typeArguments*/ undefined), pos);
    }

    function parseJSDocParameter(): ParameterDeclaration {
        const pos = getNodePos();
        let name: Identifier | undefined;
        if (token() === SyntaxKind.ThisKeyword || token() === SyntaxKind.NewKeyword) {
            name = parseIdentifierName();
            parseExpected(SyntaxKind.ColonToken);
        }
        return finishNode(
            getDeclarationNodeClass(SyntaxKind.Parameter).astFac.describe(
                /*modifiers*/ undefined,
                /*dotDotDotToken*/ undefined,
                // TODO(rbuckton): JSDoc parameters don't have names (except `this`/`new`), should we manufacture an empty identifier?
                name!,
                /*questionToken*/ undefined,
                parseJSDocType(),
                /*initializer*/ undefined,
            ),
            pos,
        );
    }

    function parseJSDocType(): TypeNode {
        scanner.setInJSDocType(true);
        const pos = getNodePos();
        if (parseOptional(SyntaxKind.ModuleKeyword)) {
            // TODO(rbuckton): We never set the type for a JSDocNamepathType. What should we put here?
            const moduleTag = getNodeClass(SyntaxKind.JSDocNamepathType).astFac.describe(/*type*/ undefined!);
            terminate:
            while (true) {
                switch (token()) {
                    case SyntaxKind.CloseBraceToken:
                    case SyntaxKind.EndOfFileToken:
                    case SyntaxKind.CommaToken:
                    case SyntaxKind.WhitespaceTrivia:
                        break terminate;
                    default:
                        nextTokenJSDoc();
                }
            }

            scanner.setInJSDocType(false);
            return finishNode(moduleTag, pos);
        }

        const hasDotDotDot = parseOptional(SyntaxKind.DotDotDotToken);
        let type = parseTypeOrTypePredicate();
        scanner.setInJSDocType(false);
        if (hasDotDotDot) {
            type = finishNode(getNodeClass(SyntaxKind.JSDocVariadicType).astFac.describe(type), pos);
        }
        if (token() === SyntaxKind.EqualsToken) {
            nextToken();
            return finishNode(getNodeClass(SyntaxKind.JSDocOptionalType).astFac.describe(type), pos);
        }
        return type;
    }

    function parseTypeQuery(): TypeQueryNode {
        const pos = getNodePos();
        parseExpected(SyntaxKind.TypeOfKeyword);
        const entityName = parseEntityName(/*allowReservedWords*/ true);
        // Make sure we perform ASI to prevent parsing the next line's type arguments as part of an instantiation expression.
        const typeArguments = !scanner.hasPrecedingLineBreak() ? tryParseTypeArguments() : undefined;
        return finishNode(getNodeClass(SyntaxKind.TypeQuery).astFac.describe(entityName, typeArguments), pos);
    }

    function parseTypeParameter(): TypeParameterDeclaration {
        const pos = getNodePos();
        const modifiers = parseModifiers(/*allowDecorators*/ false, /*permitConstAsModifier*/ true);
        const name = parseIdentifier();
        let constraint: TypeNode | undefined;
        let expression: Expression | undefined;
        if (parseOptional(SyntaxKind.ExtendsKeyword)) {
            // It's not uncommon for people to write improper constraints to a generic.  If the
            // user writes a constraint that is an expression and not an actual type, then parse
            // it out as an expression (so we can recover well), but report that a type is needed
            // instead.
            if (isStartOfType() || !isStartOfExpression()) {
                constraint = parseType();
            }
            else {
                // It was not a type, and it looked like an expression.  Parse out an expression
                // here so we recover well.  Note: it is important that we call parseUnaryExpression
                // and not parseExpression here.  If the user has:
                //
                //      <T extends "">
                //
                // We do *not* want to consume the `>` as we're consuming the expression for "".
                expression = parseUnaryExpressionOrHigher();
            }
        }

        const defaultType = parseOptional(SyntaxKind.EqualsToken) ? parseType() : undefined;
        const node = getDeclarationNodeClass(SyntaxKind.TypeParameter).astFac.describe(modifiers, name, constraint, defaultType);
        node.expression = expression;
        return finishNode(node, pos);
    }

    function parseTypeParameters(): NodeArray<TypeParameterDeclaration> | undefined {
        if (token() === SyntaxKind.LessThanToken) {
            return parseBracketedList(ParsingContext.TypeParameters, parseTypeParameter, SyntaxKind.LessThanToken, SyntaxKind.GreaterThanToken);
        }
    }

    function isStartOfParameter(isJSDocParameter: boolean): boolean {
        return token() === SyntaxKind.DotDotDotToken ||
            isBindingIdentifierOrPrivateIdentifierOrPattern() ||
            isModifierKind(token()) ||
            token() === SyntaxKind.AtToken ||
            isStartOfType(/*inStartOfParameter*/ !isJSDocParameter);
    }

    function parseNameOfParameter(modifiers: NodeArray<ModifierLike> | undefined) {
        // FormalParameter [Yield,Await]:
        //      BindingElement[?Yield,?Await]
        const name = parseIdentifierOrPattern(Diagnostics.Private_identifiers_cannot_be_used_as_parameters);
        if (getFullWidth(name) === 0 && !some(modifiers) && isModifierKind(token())) {
            // in cases like
            // 'use strict'
            // function foo(static)
            // isParameter('static') === true, because of isModifier('static')
            // however 'static' is not a legal identifier in a strict mode.
            // so result of this function will be ParameterDeclaration (flags = 0, name = missing, type = undefined, initializer = undefined)
            // and current token will not change => parsing of the enclosing parameter list will last till the end of time (or OOM)
            // to avoid this we'll advance cursor to the next token.
            nextToken();
        }
        return name;
    }

    function isParameterNameStart() {
        // Be permissive about await and yield by calling isBindingIdentifier instead of isIdentifier; disallowing
        // them during a speculative parse leads to many more follow-on errors than allowing the function to parse then later
        // complaining about the use of the keywords.
        return isBindingIdentifier() || token() === SyntaxKind.OpenBracketToken || token() === SyntaxKind.OpenBraceToken;
    }

    function parseParameter(inOuterAwaitContext: boolean): ParameterDeclaration {
        return parseParameterWorker(inOuterAwaitContext);
    }

    function parseParameterForSpeculation(inOuterAwaitContext: boolean): ParameterDeclaration | undefined {
        return parseParameterWorker(inOuterAwaitContext, /*allowAmbiguity*/ false);
    }

    function parseParameterWorker(inOuterAwaitContext: boolean): ParameterDeclaration;
    function parseParameterWorker(inOuterAwaitContext: boolean, allowAmbiguity: false): ParameterDeclaration | undefined;
    function parseParameterWorker(inOuterAwaitContext: boolean, allowAmbiguity = true): ParameterDeclaration | undefined {
        const pos = getNodePos();
        const hasJSDoc = hasPrecedingJSDocComment();

        // FormalParameter [Yield,Await]:
        //      BindingElement[?Yield,?Await]

        // Decorators are parsed in the outer [Await] context, the rest of the parameter is parsed in the function's [Await] context.
        const modifiers = inOuterAwaitContext ?
            doInAwaitContext(() => parseModifiers(/*allowDecorators*/ true)) :
            doOutsideOfAwaitContext(() => parseModifiers(/*allowDecorators*/ true));

        if (token() === SyntaxKind.ThisKeyword) {
            const node = getDeclarationNodeClass(SyntaxKind.Parameter).astFac.describe(
                modifiers,
                /*dotDotDotToken*/ undefined,
                createIdentifier(/*isIdentifier*/ true),
                /*questionToken*/ undefined,
                parseTypeAnnotation(),
                /*initializer*/ undefined,
            );

            const modifier = firstOrUndefined(modifiers);
            if (modifier) {
                parseErrorAtRange(modifier, Diagnostics.Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters);
            }

            return withJSDoc(finishNode(node, pos), hasJSDoc);
        }

        const savedTopLevel = topLevel;
        topLevel = false;

        const dotDotDotToken = parseOptionalToken(SyntaxKind.DotDotDotToken);

        if (!allowAmbiguity && !isParameterNameStart()) {
            return undefined;
        }

        const node = withJSDoc(
            finishNode(
                getDeclarationNodeClass(SyntaxKind.Parameter).astFac.describe(
                    modifiers,
                    dotDotDotToken,
                    parseNameOfParameter(modifiers),
                    parseOptionalToken(SyntaxKind.QuestionToken),
                    parseTypeAnnotation(),
                    parseInitializer(),
                ),
                pos,
            ),
            hasJSDoc,
        );
        topLevel = savedTopLevel;
        return node;
    }

    function parseReturnType(returnToken: SyntaxKind.EqualsGreaterThanToken, isType: boolean): TypeNode;
    function parseReturnType(returnToken: SyntaxKind.ColonToken | SyntaxKind.EqualsGreaterThanToken, isType: boolean): TypeNode | undefined;
    function parseReturnType(returnToken: SyntaxKind.ColonToken | SyntaxKind.EqualsGreaterThanToken, isType: boolean) {
        if (shouldParseReturnType(returnToken, isType)) {
            return allowConditionalTypesAnd(parseTypeOrTypePredicate);
        }
    }

    function shouldParseReturnType(returnToken: SyntaxKind.ColonToken | SyntaxKind.EqualsGreaterThanToken, isType: boolean): boolean {
        if (returnToken === SyntaxKind.EqualsGreaterThanToken) {
            parseExpected(returnToken);
            return true;
        }
        else if (parseOptional(SyntaxKind.ColonToken)) {
            return true;
        }
        else if (isType && token() === SyntaxKind.EqualsGreaterThanToken) {
            // This is easy to get backward, especially in type contexts, so parse the type anyway
            parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.ColonToken));
            nextToken();
            return true;
        }
        return false;
    }

    function parseParametersWorker(flags: SignatureFlags, allowAmbiguity: true): NodeArray<ParameterDeclaration>;
    function parseParametersWorker(flags: SignatureFlags, allowAmbiguity: false): NodeArray<ParameterDeclaration> | undefined;
    function parseParametersWorker(flags: SignatureFlags, allowAmbiguity: boolean): NodeArray<ParameterDeclaration> | undefined {
        // FormalParameters [Yield,Await]: (modified)
        //      [empty]
        //      FormalParameterList[?Yield,Await]
        //
        // FormalParameter[Yield,Await]: (modified)
        //      BindingElement[?Yield,Await]
        //
        // BindingElement [Yield,Await]: (modified)
        //      SingleNameBinding[?Yield,?Await]
        //      BindingPattern[?Yield,?Await]Initializer [In, ?Yield,?Await] opt
        //
        // SingleNameBinding [Yield,Await]:
        //      BindingIdentifier[?Yield,?Await]Initializer [In, ?Yield,?Await] opt
        const savedYieldContext = inYieldContext();
        const savedAwaitContext = inAwaitContext();

        setYieldContext(!!(flags & SignatureFlags.Yield));
        setAwaitContext(!!(flags & SignatureFlags.Await));

        const parameters = flags & SignatureFlags.JSDoc ?
            parseDelimitedList(ParsingContext.JSDocParameters, parseJSDocParameter) :
            parseDelimitedList(ParsingContext.Parameters, () => allowAmbiguity ? parseParameter(savedAwaitContext) : parseParameterForSpeculation(savedAwaitContext));

        setYieldContext(savedYieldContext);
        setAwaitContext(savedAwaitContext);

        return parameters;
    }

    function parseParameters(flags: SignatureFlags): NodeArray<ParameterDeclaration> {
        // FormalParameters [Yield,Await]: (modified)
        //      [empty]
        //      FormalParameterList[?Yield,Await]
        //
        // FormalParameter[Yield,Await]: (modified)
        //      BindingElement[?Yield,Await]
        //
        // BindingElement [Yield,Await]: (modified)
        //      SingleNameBinding[?Yield,?Await]
        //      BindingPattern[?Yield,?Await]Initializer [In, ?Yield,?Await] opt
        //
        // SingleNameBinding [Yield,Await]:
        //      BindingIdentifier[?Yield,?Await]Initializer [In, ?Yield,?Await] opt
        if (!parseExpected(SyntaxKind.OpenParenToken)) {
            return createMissingList<ParameterDeclaration>();
        }

        const parameters = parseParametersWorker(flags, /*allowAmbiguity*/ true);
        parseExpected(SyntaxKind.CloseParenToken);
        return parameters;
    }

    function parseTypeMemberSemicolon() {
        // We allow type members to be separated by commas or (possibly ASI) semicolons.
        // First check if it was a comma.  If so, we're done with the member.
        if (parseOptional(SyntaxKind.CommaToken)) {
            return;
        }

        // Didn't have a comma.  We must have a (possible ASI) semicolon.
        parseSemicolon();
    }

    function parseSignatureMember(kind: SyntaxKind.CallSignature | SyntaxKind.ConstructSignature): CallSignatureDeclaration | ConstructSignatureDeclaration {
        const pos = getNodePos();
        const hasJSDoc = hasPrecedingJSDocComment();
        if (kind === SyntaxKind.ConstructSignature) {
            parseExpected(SyntaxKind.NewKeyword);
        }

        const typeParameters = parseTypeParameters();
        const parameters = parseParameters(SignatureFlags.Type);
        const type = parseReturnType(SyntaxKind.ColonToken, /*isType*/ true);
        parseTypeMemberSemicolon();
        const node = kind === SyntaxKind.CallSignature
            ? getNodeClass(SyntaxKind.CallSignature).astFac.describe(typeParameters, parameters, type)
            : getNodeClass(SyntaxKind.ConstructSignature).astFac.describe(typeParameters, parameters, type);
        return withJSDoc(finishNode(node, pos), hasJSDoc);
    }

    function isIndexSignature(): boolean {
        return token() === SyntaxKind.OpenBracketToken && lookAhead(isUnambiguouslyIndexSignature);
    }

    function isUnambiguouslyIndexSignature() {
        // The only allowed sequence is:
        //
        //   [id:
        //
        // However, for error recovery, we also check the following cases:
        //
        //   [...
        //   [id,
        //   [id?,
        //   [id?:
        //   [id?]
        //   [public id
        //   [private id
        //   [protected id
        //   []
        //
        nextToken();
        if (token() === SyntaxKind.DotDotDotToken || token() === SyntaxKind.CloseBracketToken) {
            return true;
        }

        if (isModifierKind(token())) {
            nextToken();
            if (isIdentifier()) {
                return true;
            }
        }
        else if (!isIdentifier()) {
            return false;
        }
        else {
            // Skip the identifier
            nextToken();
        }

        // A colon signifies a well formed indexer
        // A comma should be a badly formed indexer because comma expressions are not allowed
        // in computed properties.
        if (token() === SyntaxKind.ColonToken || token() === SyntaxKind.CommaToken) {
            return true;
        }

        // Question mark could be an indexer with an optional property,
        // or it could be a conditional expression in a computed property.
        if (token() !== SyntaxKind.QuestionToken) {
            return false;
        }

        // If any of the following tokens are after the question mark, it cannot
        // be a conditional expression, so treat it as an indexer.
        nextToken();
        return token() === SyntaxKind.ColonToken || token() === SyntaxKind.CommaToken || token() === SyntaxKind.CloseBracketToken;
    }

    function parseIndexSignatureDeclaration(pos: number, hasJSDoc: boolean, modifiers: NodeArray<ModifierLike> | undefined): IndexSignatureDeclaration {
        const parameters = parseBracketedList<ParameterDeclaration>(ParsingContext.Parameters, () => parseParameter(/*inOuterAwaitContext*/ false), SyntaxKind.OpenBracketToken, SyntaxKind.CloseBracketToken);
        const type = parseTypeAnnotation();
        parseTypeMemberSemicolon();
        const node = getNodeClass(SyntaxKind.IndexSignature).astFac.describe(modifiers, parameters, type);
        return withJSDoc(finishNode(node, pos), hasJSDoc);
    }

    function parsePropertyOrMethodSignature(pos: number, hasJSDoc: boolean, modifiers: NodeArray<Modifier> | undefined): PropertySignature | MethodSignature {
        const name = parsePropertyName();
        const questionToken = parseOptionalToken(SyntaxKind.QuestionToken);
        let node: PropertySignature | MethodSignature;
        if (token() === SyntaxKind.OpenParenToken || token() === SyntaxKind.LessThanToken) {
            // Method signatures don't exist in expression contexts.  So they have neither
            // [Yield] nor [Await]
            const typeParameters = parseTypeParameters();
            const parameters = parseParameters(SignatureFlags.Type);
            const type = parseReturnType(SyntaxKind.ColonToken, /*isType*/ true);
            node = getNodeClass(SyntaxKind.MethodSignature).astFac.describe(modifiers, name, questionToken, typeParameters, parameters, type);
        }
        else {
            const type = parseTypeAnnotation();
            node = getNodeClass(SyntaxKind.PropertySignature).astFac.describe(modifiers, name, questionToken, type);
            // Although type literal properties cannot not have initializers, we attempt
            // to parse an initializer so we can report in the checker that an interface
            // property or type literal property cannot have an initializer.
            if (token() === SyntaxKind.EqualsToken) (node as Mutable<PropertySignature>).initializer = parseInitializer();
        }
        parseTypeMemberSemicolon();
        return withJSDoc(finishNode(node, pos), hasJSDoc);
    }

    function isTypeMemberStart(): boolean {
        // Return true if we have the start of a signature member
        if (
            token() === SyntaxKind.OpenParenToken ||
            token() === SyntaxKind.LessThanToken ||
            token() === SyntaxKind.GetKeyword ||
            token() === SyntaxKind.SetKeyword
        ) {
            return true;
        }
        let idToken = false;
        // Eat up all modifiers, but hold on to the last one in case it is actually an identifier
        while (isModifierKind(token())) {
            idToken = true;
            nextToken();
        }
        // Index signatures and computed property names are type members
        if (token() === SyntaxKind.OpenBracketToken) {
            return true;
        }
        // Try to get the first property-like token following all modifiers
        if (isLiteralPropertyName()) {
            idToken = true;
            nextToken();
        }
        // If we were able to get any potential identifier, check that it is
        // the start of a member declaration
        if (idToken) {
            return token() === SyntaxKind.OpenParenToken ||
                token() === SyntaxKind.LessThanToken ||
                token() === SyntaxKind.QuestionToken ||
                token() === SyntaxKind.ColonToken ||
                token() === SyntaxKind.CommaToken ||
                canParseSemicolon();
        }
        return false;
    }

    function parseTypeMember(): TypeElement {
        if (token() === SyntaxKind.OpenParenToken || token() === SyntaxKind.LessThanToken) {
            return parseSignatureMember(SyntaxKind.CallSignature);
        }
        if (token() === SyntaxKind.NewKeyword && lookAhead(nextTokenIsOpenParenOrLessThan)) {
            return parseSignatureMember(SyntaxKind.ConstructSignature);
        }
        const pos = getNodePos();
        const hasJSDoc = hasPrecedingJSDocComment();
        const modifiers = parseModifiers(/*allowDecorators*/ false);
        if (parseContextualModifier(SyntaxKind.GetKeyword)) {
            return parseAccessorDeclaration(pos, hasJSDoc, modifiers, SyntaxKind.GetAccessor, SignatureFlags.Type);
        }

        if (parseContextualModifier(SyntaxKind.SetKeyword)) {
            return parseAccessorDeclaration(pos, hasJSDoc, modifiers, SyntaxKind.SetAccessor, SignatureFlags.Type);
        }

        if (isIndexSignature()) {
            return parseIndexSignatureDeclaration(pos, hasJSDoc, modifiers);
        }
        return parsePropertyOrMethodSignature(pos, hasJSDoc, modifiers);
    }

    function nextTokenIsOpenParenOrLessThan() {
        nextToken();
        return token() === SyntaxKind.OpenParenToken || token() === SyntaxKind.LessThanToken;
    }

    function nextTokenIsDot() {
        return nextToken() === SyntaxKind.DotToken;
    }

    function nextTokenIsOpenParenOrLessThanOrDot() {
        switch (nextToken()) {
            case SyntaxKind.OpenParenToken:
            case SyntaxKind.LessThanToken:
            case SyntaxKind.DotToken:
                return true;
        }
        return false;
    }

    function parseTypeLiteral(): TypeLiteralNode {
        const pos = getNodePos();
        return finishNode(getNodeClass(SyntaxKind.TypeLiteral).astFac.describe(parseObjectTypeMembers()), pos);
    }

    function parseObjectTypeMembers(): NodeArray<TypeElement> {
        let members: NodeArray<TypeElement>;
        if (parseExpected(SyntaxKind.OpenBraceToken)) {
            members = parseList(ParsingContext.TypeMembers, parseTypeMember);
            parseExpected(SyntaxKind.CloseBraceToken);
        }
        else {
            members = createMissingList<TypeElement>();
        }

        return members;
    }

    function isStartOfMappedType() {
        nextToken();
        if (token() === SyntaxKind.PlusToken || token() === SyntaxKind.MinusToken) {
            return nextToken() === SyntaxKind.ReadonlyKeyword;
        }
        if (token() === SyntaxKind.ReadonlyKeyword) {
            nextToken();
        }
        return token() === SyntaxKind.OpenBracketToken && nextTokenIsIdentifier() && nextToken() === SyntaxKind.InKeyword;
    }

    function parseMappedTypeParameter() {
        const pos = getNodePos();
        const name = parseIdentifierName();
        parseExpected(SyntaxKind.InKeyword);
        const type = parseType();
        return finishNode(getDeclarationNodeClass(SyntaxKind.TypeParameter).astFac.describe(/*modifiers*/ undefined, name, type, /*defaultType*/ undefined), pos);
    }

    function parseMappedType() {
        const pos = getNodePos();
        parseExpected(SyntaxKind.OpenBraceToken);
        let readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined;
        if (token() === SyntaxKind.ReadonlyKeyword || token() === SyntaxKind.PlusToken || token() === SyntaxKind.MinusToken) {
            readonlyToken = parseTokenNode<ReadonlyKeyword | PlusToken | MinusToken>();
            if (readonlyToken.kind !== SyntaxKind.ReadonlyKeyword) {
                parseExpected(SyntaxKind.ReadonlyKeyword);
            }
        }
        parseExpected(SyntaxKind.OpenBracketToken);
        const typeParameter = parseMappedTypeParameter();
        const nameType = parseOptional(SyntaxKind.AsKeyword) ? parseType() : undefined;
        parseExpected(SyntaxKind.CloseBracketToken);
        let questionToken: QuestionToken | PlusToken | MinusToken | undefined;
        if (token() === SyntaxKind.QuestionToken || token() === SyntaxKind.PlusToken || token() === SyntaxKind.MinusToken) {
            questionToken = parseTokenNode<QuestionToken | PlusToken | MinusToken>();
            if (questionToken.kind !== SyntaxKind.QuestionToken) {
                parseExpected(SyntaxKind.QuestionToken);
            }
        }
        const type = parseTypeAnnotation();
        parseSemicolon();
        const members = parseList(ParsingContext.TypeMembers, parseTypeMember);
        parseExpected(SyntaxKind.CloseBraceToken);
        return finishNode(getNodeClass(SyntaxKind.MappedType).astFac.describe(readonlyToken, typeParameter, nameType, questionToken, type, members), pos);
    }

    function parseTupleElementType() {
        const pos = getNodePos();
        if (parseOptional(SyntaxKind.DotDotDotToken)) {
            return finishNode(getNodeClass(SyntaxKind.RestType).astFac.describe(parseType()), pos);
        }
        const type = parseType();
        if (isJSDocNullableType(type) && type.pos === type.type.pos) {
            const node = getNodeClass(SyntaxKind.OptionalType).astFac.describe(type.type);
            setTextRange(node, type);
            (node as Mutable<Node>).flags = type.flags;
            return node;
        }
        return type;
    }

    function isNextTokenColonOrQuestionColon() {
        return nextToken() === SyntaxKind.ColonToken || (token() === SyntaxKind.QuestionToken && nextToken() === SyntaxKind.ColonToken);
    }

    function isTupleElementName() {
        if (token() === SyntaxKind.DotDotDotToken) {
            return tokenIsIdentifierOrKeyword(nextToken()) && isNextTokenColonOrQuestionColon();
        }
        return tokenIsIdentifierOrKeyword(token()) && isNextTokenColonOrQuestionColon();
    }

    function parseTupleElementNameOrTupleElementType() {
        if (lookAhead(isTupleElementName)) {
            const pos = getNodePos();
            const hasJSDoc = hasPrecedingJSDocComment();
            const dotDotDotToken = parseOptionalToken(SyntaxKind.DotDotDotToken);
            const name = parseIdentifierName();
            const questionToken = parseOptionalToken(SyntaxKind.QuestionToken);
            parseExpected(SyntaxKind.ColonToken);
            const type = parseTupleElementType();
            const node = factory.createNamedTupleMember(dotDotDotToken, name, questionToken, type);
            return withJSDoc(finishNode(node, pos), hasJSDoc);
        }
        return parseTupleElementType();
    }

    function parseTupleType(): TupleTypeNode {
        const pos = getNodePos();
        return finishNode(
            getNodeClass(SyntaxKind.TupleType).astFac.describe(
                parseBracketedList(ParsingContext.TupleElementTypes, parseTupleElementNameOrTupleElementType, SyntaxKind.OpenBracketToken, SyntaxKind.CloseBracketToken),
            ),
            pos,
        );
    }

    function parseParenthesizedType(): TypeNode {
        const pos = getNodePos();
        parseExpected(SyntaxKind.OpenParenToken);
        const type = parseType();
        parseExpected(SyntaxKind.CloseParenToken);
        return finishNode(getNodeClass(SyntaxKind.ParenthesizedType).astFac.describe(type), pos);
    }

    function parseModifiersForConstructorType(): NodeArray<Modifier> | undefined {
        let modifiers: NodeArray<Modifier> | undefined;
        if (token() === SyntaxKind.AbstractKeyword) {
            const pos = getNodePos();
            nextToken();
            const modifier = finishNode(factoryCreateToken(SyntaxKind.AbstractKeyword), pos);
            modifiers = createNodeArray<Modifier>([modifier], pos);
        }
        return modifiers;
    }

    function parseFunctionOrConstructorType(): TypeNode {
        const pos = getNodePos();
        const hasJSDoc = hasPrecedingJSDocComment();
        const modifiers = parseModifiersForConstructorType();
        const isConstructorType = parseOptional(SyntaxKind.NewKeyword);
        Debug.assert(!modifiers || isConstructorType, "Per isStartOfFunctionOrConstructorType, a function type cannot have modifiers.");
        const typeParameters = parseTypeParameters();
        const parameters = parseParameters(SignatureFlags.Type);
        const type = parseReturnType(SyntaxKind.EqualsGreaterThanToken, /*isType*/ false);
        const node = isConstructorType
            ? getNodeClass(SyntaxKind.ConstructorType).astFac.describe(modifiers, typeParameters, parameters, type)
            : getNodeClass(SyntaxKind.FunctionType).astFac.describe(typeParameters, parameters, type);
        return withJSDoc(finishNode(node, pos), hasJSDoc);
    }

    function parseKeywordAndNoDot(): TypeNode | undefined {
        const node = parseTokenNode<TypeNode>();
        return token() === SyntaxKind.DotToken ? undefined : node;
    }

    function parseLiteralTypeNode(negative?: boolean): LiteralTypeNode {
        const pos = getNodePos();
        if (negative) {
            nextToken();
        }
        let expression: BooleanLiteral | NullLiteral | LiteralExpression | PrefixUnaryExpression = token() === SyntaxKind.TrueKeyword || token() === SyntaxKind.FalseKeyword || token() === SyntaxKind.NullKeyword ?
            parseTokenNode<BooleanLiteral | NullLiteral>() :
            parseLiteralLikeNode(token()) as LiteralExpression;
        if (negative) {
            expression = finishNode(factory.createPrefixUnaryExpression(SyntaxKind.MinusToken, expression), pos);
        }
        return finishNode(getNodeClass(SyntaxKind.LiteralType).astFac.describe(expression), pos);
    }

    function isStartOfTypeOfImportType() {
        nextToken();
        return token() === SyntaxKind.ImportKeyword;
    }

    function parseImportType(): ImportTypeNode {
        sourceFlags |= NodeFlags.PossiblyContainsDynamicImport;
        const pos = getNodePos();
        const isTypeOf = parseOptional(SyntaxKind.TypeOfKeyword);
        parseExpected(SyntaxKind.ImportKeyword);
        parseExpected(SyntaxKind.OpenParenToken);
        const type = parseType();
        let attributes: ImportAttributes | undefined;
        if (parseOptional(SyntaxKind.CommaToken)) {
            const openBracePosition = scanner.getTokenStart();
            parseExpected(SyntaxKind.OpenBraceToken);
            const currentToken = token();
            if (currentToken === SyntaxKind.WithKeyword || currentToken === SyntaxKind.AssertKeyword) {
                nextToken();
            }
            else {
                parseErrorAtCurrentToken(Diagnostics._0_expected, tokenToString(SyntaxKind.WithKeyword));
            }
            parseExpected(SyntaxKind.ColonToken);
            attributes = parseImportAttributes(currentToken as SyntaxKind.WithKeyword | SyntaxKind.AssertKeyword, /*skipKeyword*/ true);
            if (!parseExpected(SyntaxKind.CloseBraceToken)) {
                const lastError = lastOrUndefined(parseDiagnostics);
                if (lastError && lastError.code === Diagnostics._0_expected.code) {
                    addRelatedInfo(
                        lastError,
                        createDetachedDiagnostic(fileName, sourceText, openBracePosition, 1, Diagnostics.The_parser_expected_to_find_a_1_to_match_the_0_token_here, "{", "}"),
                    );
                }
            }
        }
        parseExpected(SyntaxKind.CloseParenToken);
        const qualifier = parseOptional(SyntaxKind.DotToken) ? parseEntityNameOfTypeReference() : undefined;
        const typeArguments = parseTypeArgumentsOfTypeReference();
        return finishNode(getNodeClass(SyntaxKind.ImportType).astFac.describe(type, attributes, qualifier, typeArguments, isTypeOf), pos);
    }

    function nextTokenIsNumericOrBigIntLiteral() {
        nextToken();
        return token() === SyntaxKind.NumericLiteral || token() === SyntaxKind.BigIntLiteral;
    }

    function parseNonArrayType(): TypeNode {
        switch (token()) {
            case SyntaxKind.AnyKeyword:
            case SyntaxKind.UnknownKeyword:
            case SyntaxKind.StringKeyword:
            case SyntaxKind.NumberKeyword:
            case SyntaxKind.BigIntKeyword:
            case SyntaxKind.SymbolKeyword:
            case SyntaxKind.BooleanKeyword:
            case SyntaxKind.UndefinedKeyword:
            case SyntaxKind.NeverKeyword:
            case SyntaxKind.ObjectKeyword:
                // If these are followed by a dot, then parse these out as a dotted type reference instead.
                return tryParse(parseKeywordAndNoDot) || parseTypeReference();
            case SyntaxKind.AsteriskEqualsToken:
                // If there is '*=', treat it as * followed by postfix =
                scanner.reScanAsteriskEqualsToken();
                // falls through
            case SyntaxKind.AsteriskToken:
                return parseJSDocAllType();
            case SyntaxKind.QuestionQuestionToken:
                // If there is '??', treat it as prefix-'?' in JSDoc type.
                scanner.reScanQuestionToken();
                // falls through
            case SyntaxKind.QuestionToken:
                return parseJSDocUnknownOrNullableType();
            case SyntaxKind.FunctionKeyword:
                return parseJSDocFunctionType();
            case SyntaxKind.ExclamationToken:
                return parseJSDocNonNullableType();
            case SyntaxKind.NoSubstitutionTemplateLiteral:
            case SyntaxKind.StringLiteral:
            case SyntaxKind.NumericLiteral:
            case SyntaxKind.BigIntLiteral:
            case SyntaxKind.TrueKeyword:
            case SyntaxKind.FalseKeyword:
            case SyntaxKind.NullKeyword:
                return parseLiteralTypeNode();
            case SyntaxKind.MinusToken:
                return lookAhead(nextTokenIsNumericOrBigIntLiteral) ? parseLiteralTypeNode(/*negative*/ true) : parseTypeReference();
            case SyntaxKind.VoidKeyword:
                return parseTokenNode<TypeNode>();
            case SyntaxKind.ThisKeyword: {
                const thisKeyword = parseThisTypeNode();
                if (token() === SyntaxKind.IsKeyword && !scanner.hasPrecedingLineBreak()) {
                    return parseThisTypePredicate(thisKeyword);
                }
                else {
                    return thisKeyword;
                }
            }
            case SyntaxKind.TypeOfKeyword:
                return lookAhead(isStartOfTypeOfImportType) ? parseImportType() : parseTypeQuery();
            case SyntaxKind.OpenBraceToken:
                return lookAhead(isStartOfMappedType) ? parseMappedType() : parseTypeLiteral();
            case SyntaxKind.OpenBracketToken:
                return parseTupleType();
            case SyntaxKind.OpenParenToken:
                return parseParenthesizedType();
            case SyntaxKind.ImportKeyword:
                return parseImportType();
            case SyntaxKind.AssertsKeyword:
                return lookAhead(nextTokenIsIdentifierOrKeywordOnSameLine) ? parseAssertsTypePredicate() : parseTypeReference();
            case SyntaxKind.TemplateHead:
                return parseTemplateType();
            default:
                return parseTypeReference();
        }
    }

    function isStartOfType(inStartOfParameter?: boolean): boolean {
        switch (token()) {
            case SyntaxKind.AnyKeyword:
            case SyntaxKind.UnknownKeyword:
            case SyntaxKind.StringKeyword:
            case SyntaxKind.NumberKeyword:
            case SyntaxKind.BigIntKeyword:
            case SyntaxKind.BooleanKeyword:
            case SyntaxKind.ReadonlyKeyword:
            case SyntaxKind.SymbolKeyword:
            case SyntaxKind.UniqueKeyword:
            case SyntaxKind.VoidKeyword:
            case SyntaxKind.UndefinedKeyword:
            case SyntaxKind.NullKeyword:
            case SyntaxKind.ThisKeyword:
            case SyntaxKind.TypeOfKeyword:
            case SyntaxKind.NeverKeyword:
            case SyntaxKind.OpenBraceToken:
            case SyntaxKind.OpenBracketToken:
            case SyntaxKind.LessThanToken:
            case SyntaxKind.BarToken:
            case SyntaxKind.AmpersandToken:
            case SyntaxKind.NewKeyword:
            case SyntaxKind.StringLiteral:
            case SyntaxKind.NumericLiteral:
            case SyntaxKind.BigIntLiteral:
            case SyntaxKind.TrueKeyword:
            case SyntaxKind.FalseKeyword:
            case SyntaxKind.ObjectKeyword:
            case SyntaxKind.AsteriskToken:
            case SyntaxKind.QuestionToken:
            case SyntaxKind.ExclamationToken:
            case SyntaxKind.DotDotDotToken:
            case SyntaxKind.InferKeyword:
            case SyntaxKind.ImportKeyword:
            case SyntaxKind.AssertsKeyword:
            case SyntaxKind.NoSubstitutionTemplateLiteral:
            case SyntaxKind.TemplateHead:
                return true;
            case SyntaxKind.FunctionKeyword:
                return !inStartOfParameter;
            case SyntaxKind.MinusToken:
                return !inStartOfParameter && lookAhead(nextTokenIsNumericOrBigIntLiteral);
            case SyntaxKind.OpenParenToken:
                // Only consider '(' the start of a type if followed by ')', '...', an identifier, a modifier,
                // or something that starts a type. We don't want to consider things like '(1)' a type.
                return !inStartOfParameter && lookAhead(isStartOfParenthesizedOrFunctionType);
            default:
                return isIdentifier();
        }
    }

    function isStartOfParenthesizedOrFunctionType() {
        nextToken();
        return token() === SyntaxKind.CloseParenToken || isStartOfParameter(/*isJSDocParameter*/ false) || isStartOfType();
    }

    function parsePostfixTypeOrHigher(): TypeNode {
        const pos = getNodePos();
        let type = parseNonArrayType();
        while (!scanner.hasPrecedingLineBreak()) {
            switch (token()) {
                case SyntaxKind.ExclamationToken:
                    nextToken();
                    type = finishNode(getNodeClass(SyntaxKind.JSDocNonNullableType).astFac.describe(type, /*postfix*/ true), pos);
                    break;
                case SyntaxKind.QuestionToken:
                    // If next token is start of a type we have a conditional type
                    if (lookAhead(nextTokenIsStartOfType)) {
                        return type;
                    }
                    nextToken();
                    type = finishNode(getNodeClass(SyntaxKind.JSDocNullableType).astFac.describe(type, /*postfix*/ true), pos);
                    break;
                case SyntaxKind.OpenBracketToken:
                    parseExpected(SyntaxKind.OpenBracketToken);
                    if (isStartOfType()) {
                        const indexType = parseType();
                        parseExpected(SyntaxKind.CloseBracketToken);
                        type = finishNode(getNodeClass(SyntaxKind.IndexedAccessType).astFac.describe(type, indexType), pos);
                    }
                    else {
                        parseExpected(SyntaxKind.CloseBracketToken);
                        type = finishNode(getNodeClass(SyntaxKind.ArrayType).astFac.describe(type), pos);
                    }
                    break;
                default:
                    return type;
            }
        }
        return type;
    }

    function parseTypeOperator(operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword) {
        const pos = getNodePos();
        parseExpected(operator);
        return finishNode(getNodeClass(SyntaxKind.TypeOperator).astFac.describe(operator, parseTypeOperatorOrHigher()), pos);
    }

    function tryParseConstraintOfInferType() {
        if (parseOptional(SyntaxKind.ExtendsKeyword)) {
            const constraint = disallowConditionalTypesAnd(parseType);
            if (inDisallowConditionalTypesContext() || token() !== SyntaxKind.QuestionToken) {
                return constraint;
            }
        }
    }

    function parseTypeParameterOfInferType(): TypeParameterDeclaration {
        const pos = getNodePos();
        const name = parseIdentifier();
        const constraint = tryParse(tryParseConstraintOfInferType);
        const node = getDeclarationNodeClass(SyntaxKind.TypeParameter).astFac.describe(/*modifiers*/ undefined, name, constraint);
        return finishNode(node, pos);
    }

    function parseInferType(): InferTypeNode {
        const pos = getNodePos();
        parseExpected(SyntaxKind.InferKeyword);
        return finishNode(getNodeClass(SyntaxKind.InferType).astFac.describe(parseTypeParameterOfInferType()), pos);
    }

    function parseTypeOperatorOrHigher(): TypeNode {
        const operator = token();
        switch (operator) {
            case SyntaxKind.KeyOfKeyword:
            case SyntaxKind.UniqueKeyword:
            case SyntaxKind.ReadonlyKeyword:
                return parseTypeOperator(operator);
            case SyntaxKind.InferKeyword:
                return parseInferType();
        }
        return allowConditionalTypesAnd(parsePostfixTypeOrHigher);
    }

    function parseFunctionOrConstructorTypeToError(
        isInUnionType: boolean,
    ): TypeNode | undefined {
        // the function type and constructor type shorthand notation
        // are not allowed directly in unions and intersections, but we'll
        // try to parse them gracefully and issue a helpful message.
        if (isStartOfFunctionTypeOrConstructorType()) {
            const type = parseFunctionOrConstructorType();
            let diagnostic: DiagnosticMessage;
            if (isFunctionTypeNode(type)) {
                diagnostic = isInUnionType
                    ? Diagnostics.Function_type_notation_must_be_parenthesized_when_used_in_a_union_type
                    : Diagnostics.Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type;
            }
            else {
                diagnostic = isInUnionType
                    ? Diagnostics.Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type
                    : Diagnostics.Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type;
            }
            parseErrorAtRange(type, diagnostic);
            return type;
        }
        return undefined;
    }

    function parseUnionOrIntersectionType(
        operator: SyntaxKind.BarToken | SyntaxKind.AmpersandToken,
        parseConstituentType: () => TypeNode,
        createTypeNode: (types: NodeArray<TypeNode>) => UnionOrIntersectionTypeNode,
    ): TypeNode {
        const pos = getNodePos();
        const isUnionType = operator === SyntaxKind.BarToken;
        const hasLeadingOperator = parseOptional(operator);
        let type = hasLeadingOperator && parseFunctionOrConstructorTypeToError(isUnionType)
            || parseConstituentType();
        if (token() === operator || hasLeadingOperator) {
            const types = [type];
            while (parseOptional(operator)) {
                types.push(parseFunctionOrConstructorTypeToError(isUnionType) || parseConstituentType());
            }
            type = finishNode(createTypeNode(createNodeArray(types, pos)), pos);
        }
        return type;
    }

    function parseIntersectionTypeOrHigher(): TypeNode {
        return parseUnionOrIntersectionType(SyntaxKind.AmpersandToken, parseTypeOperatorOrHigher, getNodeClass(SyntaxKind.IntersectionType).astFac.describe);
    }

    function parseUnionTypeOrHigher(): TypeNode {
        return parseUnionOrIntersectionType(SyntaxKind.BarToken, parseIntersectionTypeOrHigher, getNodeClass(SyntaxKind.UnionType).astFac.describe);
    }

    function nextTokenIsNewKeyword(): boolean {
        nextToken();
        return token() === SyntaxKind.NewKeyword;
    }

    function isStartOfFunctionTypeOrConstructorType(): boolean {
        if (token() === SyntaxKind.LessThanToken) {
            return true;
        }
        if (token() === SyntaxKind.OpenParenToken && lookAhead(isUnambiguouslyStartOfFunctionType)) {
            return true;
        }
        return token() === SyntaxKind.NewKeyword ||
            token() === SyntaxKind.AbstractKeyword && lookAhead(nextTokenIsNewKeyword);
    }

    function skipParameterStart(): boolean {
        if (isModifierKind(token())) {
            // Skip modifiers
            parseModifiers(/*allowDecorators*/ false);
        }
        if (isIdentifier() || token() === SyntaxKind.ThisKeyword) {
            nextToken();
            return true;
        }
        if (token() === SyntaxKind.OpenBracketToken || token() === SyntaxKind.OpenBraceToken) {
            // Return true if we can parse an array or object binding pattern with no errors
            const previousErrorCount = parseDiagnostics.length;
            parseIdentifierOrPattern();
            return previousErrorCount === parseDiagnostics.length;
        }
        return false;
    }

    function isUnambiguouslyStartOfFunctionType() {
        nextToken();
        if (token() === SyntaxKind.CloseParenToken || token() === SyntaxKind.DotDotDotToken) {
            // ( )
            // ( ...
            return true;
        }
        if (skipParameterStart()) {
            // We successfully skipped modifiers (if any) and an identifier or binding pattern,
            // now see if we have something that indicates a parameter declaration
            if (
                token() === SyntaxKind.ColonToken || token() === SyntaxKind.CommaToken ||
                token() === SyntaxKind.QuestionToken || token() === SyntaxKind.EqualsToken
            ) {
                // ( xxx :
                // ( xxx ,
                // ( xxx ?
                // ( xxx =
                return true;
            }
            if (token() === SyntaxKind.CloseParenToken) {
                nextToken();
                if (token() === SyntaxKind.EqualsGreaterThanToken) {
                    // ( xxx ) =>
                    return true;
                }
            }
        }
        return false;
    }

    function parseTypeOrTypePredicate(): TypeNode {
        const pos = getNodePos();
        const typePredicateVariable = isIdentifier() && tryParse(parseTypePredicatePrefix);
        const type = parseType();
        if (typePredicateVariable) {
            return finishNode(getNodeClass(SyntaxKind.TypePredicate).astFac.describe(/*assertsModifier*/ undefined, typePredicateVariable, type), pos);
        }
        else {
            return type;
        }
    }

    function parseTypePredicatePrefix() {
        const id = parseIdentifier();
        if (token() === SyntaxKind.IsKeyword && !scanner.hasPrecedingLineBreak()) {
            nextToken();
            return id;
        }
    }

    function parseAssertsTypePredicate(): TypeNode {
        const pos = getNodePos();
        const assertsModifier = parseExpectedToken(SyntaxKind.AssertsKeyword);
        const parameterName = token() === SyntaxKind.ThisKeyword ? parseThisTypeNode() : parseIdentifier();
        const type = parseOptional(SyntaxKind.IsKeyword) ? parseType() : undefined;
        return finishNode(getNodeClass(SyntaxKind.TypePredicate).astFac.describe(assertsModifier, parameterName, type), pos);
    }

    function parseType(): TypeNode {
        if (contextFlags & NodeFlags.TypeExcludesFlags) {
            return doOutsideOfContext(NodeFlags.TypeExcludesFlags, parseType);
        }
        if (isStartOfFunctionTypeOrConstructorType()) {
            return parseFunctionOrConstructorType();
        }
        const pos = getNodePos();
        const type = parseUnionTypeOrHigher();
        if (!inDisallowConditionalTypesContext() && !scanner.hasPrecedingLineBreak() && parseOptional(SyntaxKind.ExtendsKeyword)) {
            // The type following 'extends' is not permitted to be another conditional type
            const extendsType = disallowConditionalTypesAnd(parseType);
            parseExpected(SyntaxKind.QuestionToken);
            const trueType = allowConditionalTypesAnd(parseType);
            parseExpected(SyntaxKind.ColonToken);
            const falseType = allowConditionalTypesAnd(parseType);
            return finishNode(getNodeClass(SyntaxKind.ConditionalType).astFac.describe(type, extendsType, trueType, falseType), pos);
        }
        return type;
    }

    function parseTypeAnnotation(): TypeNode | undefined {
        return parseOptional(SyntaxKind.ColonToken) ? parseType() : undefined;
    }

    /*  END*/

    // return {
    //     setContextFlag ,
    // } ;
}

// function ESSCtxFlagResetOps({
//     setContextFlag ,
// } : ReturnType<typeof SCF> ) {
//     ;
// }

import ParsingContext = PSCS.ParsingContext ;

namespace PSCS
{
    // dprint-ignore
    export enum ParsingContext {
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

}



