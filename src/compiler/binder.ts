


import {
    __String,
    AccessExpression,
    addRelatedInfo,
    append,
    appendIfUnique,
    ArrayBindingElement,
    ArrayLiteralExpression,
    ArrowFunction,
    AssignmentDeclarationKind,
    BinaryExpression,
    BinaryOperatorToken,
    BindableAccessExpression,
    BindableObjectDefinePropertyCall,
    BindablePropertyAssignmentExpression,
    BindableStaticAccessExpression,
    BindableStaticNameExpression,
    BindableStaticPropertyAssignmentExpression,
    BindingElement,
    Block,
    BreakOrContinueStatement,
    CallChain,
    CallExpression,
    canHaveLocals,
    canHaveSymbol,
    CaseBlock,
    CaseClause,
    cast,
    CatchClause,
    ClassLikeDeclaration,
    ClassStaticBlockDeclaration,
    CompilerOptions,
    concatenate,
    ConditionalExpression,
    ConditionalTypeNode,
    contains,
    createBinaryExpressionTrampoline,
    createDiagnosticForNodeInSourceFile,
    createFileDiagnostic,
    createQueue,
    createSymbolTable,
    Debug,
    Declaration,
    declarationNameToString,
    DeclaredSymbol,
    DeleteExpression,
    DestructuringAssignment,
    DiagnosticArguments,
    DiagnosticCategory,
    DiagnosticMessage,
    DiagnosticRelatedInformation,
    Diagnostics,
    DiagnosticWithLocation,
    DoStatement,
    DynamicNamedDeclaration,
    ElementAccessChain,
    ElementAccessExpression,
    EntityNameExpression,
    EnumDeclaration,
    escapeLeadingUnderscores,
    every,
    ExportAssignment,
    exportAssignmentIsAlias,
    ExportDeclaration,
    ExportSpecifier,
    Expression,
    ExpressionStatement,
    findAncestor,
    FlowFlags,
    FlowLabel,
    FlowNode,
    FlowReduceLabel,
    forEach,
    forEachChild,
    ForInOrOfStatement,
    ForStatement,
    FunctionDeclaration,
    FunctionExpression,
    FunctionLikeDeclaration,
    GetAccessorDeclaration,
    getAssignedExpandoInitializer,
    getAssignmentDeclarationKind,
    getAssignmentDeclarationPropertyAccessKind,
    getCombinedModifierFlags,
    getCombinedNodeFlags,
    getContainingClass,
    getEffectiveContainerForJSDocTemplateTag,
    getElementOrPropertyAccessName,
    getEmitScriptTarget,
    getEnclosingBlockScopeContainer,
    getEnclosingContainer,
    getErrorSpanForNode,
    getEscapedTextOfIdentifierOrLiteral,
    getEscapedTextOfJsxNamespacedName,
    getExpandoInitializer,
    getHostSignatureFromJSDoc,
    getImmediatelyInvokedFunctionExpression,
    getJSDocTypeTag,
    getLeftmostAccessExpression,
    getNameOfDeclaration,
    getNameOrArgument,
    getNodeId,
    getRangesWhere,
    getRightMostAssignedExpression,
    getSourceFileOfNode,
    getSourceTextOfNodeFromSourceFile,
    getSpanOfTokenAtPosition,
    getStrictOptionValue,
    getSymbolNameForPrivateIdentifier,
    getTextOfIdentifierOrLiteral,
    getThisContainer,
    getTokenPosOfNode,
    HasContainerFlags,
    hasDynamicName,
    HasFlowNode,
    hasJSDocNodes,
    HasLocals,
    hasSyntacticModifier,
    Identifier,
    identifierToKeywordKind,
    idText,
    IfStatement,
    ImportClause,
    InternalSymbolName,
    isAliasableExpression,
    isAmbientModule,
    isAssignmentExpression,
    isAssignmentOperator,
    isAssignmentTarget,
    isAsyncFunction,
    isAutoAccessorPropertyDeclaration,
    isBinaryExpression,
    isBindableObjectDefinePropertyCall,
    isBindableStaticAccessExpression,
    isBindableStaticNameExpression,
    isBindingPattern,
    isBlock,
    isBlockOrCatchScoped,
    IsBlockScopedContainer,
    isBooleanLiteral,
    isCallExpression,
    isClassStaticBlockDeclaration,
    isConditionalTypeNode,
    IsContainer,
    isDeclaration,
    isDeclarationStatement,
    isDestructuringAssignment,
    isDottedName,
    isElementAccessExpression,
    isEmptyObjectLiteral,
    isEntityNameExpression,
    isEnumConst,
    isEnumDeclaration,
    isExportAssignment,
    isExportDeclaration,
    isExportsIdentifier,
    isExportSpecifier,
    isExpression,
    isExpressionOfOptionalChainRoot,
    isExternalModule,
    isExternalOrCommonJsModule,
    isForInOrOfStatement,
    isFunctionDeclaration,
    isFunctionLike,
    isFunctionLikeDeclaration,
    isFunctionLikeOrClassStaticBlockDeclaration,
    isFunctionSymbol,
    isGlobalScopeAugmentation,
    isIdentifier,
    isIdentifierName,
    isInJSFile,
    isInTopLevelContext,
    isJSDocConstructSignature,
    isJSDocEnumTag,
    isJSDocTemplateTag,
    isJSDocTypeAlias,
    isJSDocTypeAssertion,
    isJsonSourceFile,
    isJsxNamespacedName,
    isLeftHandSideExpression,
    isLogicalOrCoalescingAssignmentExpression,
    isLogicalOrCoalescingAssignmentOperator,
    isLogicalOrCoalescingBinaryExpression,
    isLogicalOrCoalescingBinaryOperator,
    isModuleAugmentationExternal,
    isModuleBlock,
    isModuleDeclaration,
    isModuleExportsAccessExpression,
    isNamedDeclaration,
    isNamespaceExport,
    isNonNullExpression,
    isNullishCoalesce,
    isObjectLiteralExpression,
    isObjectLiteralMethod,
    isObjectLiteralOrClassExpressionMethodOrAccessor,
    isOmittedExpression,
    isOptionalChain,
    isOptionalChainRoot,
    isOutermostOptionalChain,
    isParameterDeclaration,
    isParameterPropertyDeclaration,
    isParenthesizedExpression,
    isPartOfTypeQuery,
    isPrefixUnaryExpression,
    isPrivateIdentifier,
    isPrologueDirective,
    isPropertyAccessEntityNameExpression,
    isPropertyAccessExpression,
    isPropertyNameLiteral,
    isPrototypeAccess,
    isPushOrUnshiftIdentifier,
    isRequireCall,
    isShorthandPropertyAssignment,
    isSignedNumericLiteral,
    isSourceFile,
    isSpecialPropertyDeclaration,
    isStatement,
    isStatementButNotDeclaration,
    isStatic,
    isString,
    isStringLiteralLike,
    isStringOrNumericLiteralLike,
    isThisInitializedDeclaration,
    isTypeAliasDeclaration,
    isTypeOfExpression,
    isVariableDeclaration,
    isVariableDeclarationInitializedToBareOrAccessedRequire,
    isVariableStatement,
    JSDocCallbackTag,
    JSDocClassTag,
    JSDocEnumTag,
    JSDocFunctionType,
    JSDocOverloadTag,
    JSDocParameterTag,
    JSDocPropertyLikeTag,
    JSDocSignature,
    JSDocTypedefTag,
    JSDocTypeLiteral,
    JsxAttribute,
    JsxAttributes,
    LabeledStatement,
    length,
    LiteralLikeElementAccessExpression,
    MappedTypeNode,
    MetaProperty,
    MethodDeclaration,
    ModifierFlags,
    ModuleBlock,
    ModuleDeclaration,
    Mutable,
    NamespaceExportDeclaration,
    Node,
    NodeArray,
    NodeFlags,
    nodeHasName,
    nodeIsMissing,
    nodeIsPresent,
    NonNullChain,
    NonNullExpression,
    objectAllocator,
    ObjectLiteralExpression,
    OptionalChain,
    ParameterDeclaration,
    ParenthesizedExpression,
    Pattern,
    PatternAmbientModule,
    perfLogger,
    PostfixUnaryExpression,
    PrefixUnaryExpression,
    PrivateIdentifier,
    PropertyAccessChain,
    PropertyAccessEntityNameExpression,
    PropertyAccessExpression,
    PropertyDeclaration,
    PropertySignature,
    QualifiedName,
    removeFileExtension,
    ReturnStatement,
    ScriptTarget,
    SetAccessorDeclaration,
    setParent,
    setParentRecursive,
    setValueDeclaration,
    ShorthandPropertyAssignment,
    shouldPreserveConstEnums,
    SignatureDeclaration,
    skipParentheses,
    sliceAfter,
    some,
    SourceFile,
    SpreadElement,
    Statement,
    StringLiteral,
    SuperExpression,
    SwitchStatement,
    Symbol,
    SymbolFlags,
    symbolName,
    SymbolTable,
    SyntaxKind,
    TextRange,
    ThisExpression,
    ThrowStatement,
    tokenToString,
    tracing,
    TracingNode,
    tryCast,
    tryParsePattern,
    TryStatement,
    TypeLiteralNode,
    TypeOfExpression,
    TypeParameterDeclaration,
    unescapeLeadingUnderscores,
    unreachableCodeIsError,
    unusedLabelIsError,
    VariableDeclaration,
    WhileStatement,
    WithStatement,
} from "./_namespaces/ts";
import * as performance from "./_namespaces/ts.performance";

/** @internal */
export const enum ModuleInstanceState {
    NonInstantiated = 0,
    Instantiated = 1,
    ConstEnumOnly = 2,
}

interface ActiveLabel {
    next: ActiveLabel | undefined;
    name: __String;
    breakTarget: FlowLabel;
    continueTarget: FlowLabel | undefined;
    referenced: boolean;
}

/** @internal */
export function getModuleInstanceState(node: ModuleDeclaration, visited?: Map<number, ModuleInstanceState | undefined>): ModuleInstanceState {
    if (node.body && !node.body.parent) {
        // getModuleInstanceStateForAliasTarget needs to walk up the parent chain, so parent pointers must be set on this tree already
        setParent(node.body, node);
        setParentRecursive(node.body, /*incremental*/ false);
    }
    return node.body ? getModuleInstanceStateCached(node.body, visited) : ModuleInstanceState.Instantiated;
}

function getModuleInstanceStateCached(node: Node, visited = new Map<number, ModuleInstanceState | undefined>()) {
    const nodeId = getNodeId(node);
    if (visited.has(nodeId)) {
        return visited.get(nodeId) || ModuleInstanceState.NonInstantiated;
    }
    visited.set(nodeId, undefined);
    const result = getModuleInstanceStateWorker(node, visited);
    visited.set(nodeId, result);
    return result;
}

function getModuleInstanceStateWorker(node: Node, visited: Map<number, ModuleInstanceState | undefined>): ModuleInstanceState {
    // A module is uninstantiated if it contains only
    switch (node.kind) {
        // 1. interface declarations, type alias declarations
        case SyntaxKind.InterfaceDeclaration:
        case SyntaxKind.TypeAliasDeclaration:
            return ModuleInstanceState.NonInstantiated;
        // 2. const enum declarations
        case SyntaxKind.EnumDeclaration:
            if (isEnumConst(node as EnumDeclaration)) {
                return ModuleInstanceState.ConstEnumOnly;
            }
            break;
        // 3. non-exported import declarations
        case SyntaxKind.ImportDeclaration:
        case SyntaxKind.ImportEqualsDeclaration:
            if (!(hasSyntacticModifier(node, ModifierFlags.Export))) {
                return ModuleInstanceState.NonInstantiated;
            }
            break;
        // 4. Export alias declarations pointing at only uninstantiated modules or things uninstantiated modules contain
        case SyntaxKind.ExportDeclaration:
            const exportDeclaration = node as ExportDeclaration;
            if (!exportDeclaration.moduleSpecifier && exportDeclaration.exportClause && exportDeclaration.exportClause.kind === SyntaxKind.NamedExports) {
                let state = ModuleInstanceState.NonInstantiated;
                for (const specifier of exportDeclaration.exportClause.elements) {
                    const specifierState = getModuleInstanceStateForAliasTarget(specifier, visited);
                    if (specifierState > state) {
                        state = specifierState;
                    }
                    if (state === ModuleInstanceState.Instantiated) {
                        return state;
                    }
                }
                return state;
            }
            break;
        // 5. other uninstantiated module declarations.
        case SyntaxKind.ModuleBlock: {
            let state = ModuleInstanceState.NonInstantiated;
            forEachChild(node, n => {
                const childState = getModuleInstanceStateCached(n, visited);
                switch (childState) {
                    case ModuleInstanceState.NonInstantiated:
                        // child is non-instantiated - continue searching
                        return;
                    case ModuleInstanceState.ConstEnumOnly:
                        // child is const enum only - record state and continue searching
                        state = ModuleInstanceState.ConstEnumOnly;
                        return;
                    case ModuleInstanceState.Instantiated:
                        // child is instantiated - record state and stop
                        state = ModuleInstanceState.Instantiated;
                        return true;
                    default:
                        Debug.assertNever(childState);
                }
            });
            return state;
        }
        case SyntaxKind.ModuleDeclaration:
            return getModuleInstanceState(node as ModuleDeclaration, visited);
        case SyntaxKind.Identifier:
            // Only jsdoc typedef definition can exist in jsdoc namespace, and it should
            // be considered the same as type alias
            if (node.flags & NodeFlags.IdentifierIsInJSDocNamespace) {
                return ModuleInstanceState.NonInstantiated;
            }
    }
    return ModuleInstanceState.Instantiated;
}

function getModuleInstanceStateForAliasTarget(specifier: ExportSpecifier, visited: Map<number, ModuleInstanceState | undefined>) {
    const name = specifier.propertyName || specifier.name;
    let p: Node | undefined = specifier.parent;
    while (p) {
        if (isBlock(p) || isModuleBlock(p) || isSourceFile(p)) {
            const statements = p.statements;
            let found: ModuleInstanceState | undefined;
            for (const statement of statements) {
                if (nodeHasName(statement, name)) {
                    if (!statement.parent) {
                        setParent(statement, p);
                        setParentRecursive(statement, /*incremental*/ false);
                    }
                    const state = getModuleInstanceStateCached(statement, visited);
                    if (found === undefined || state > found) {
                        found = state;
                    }
                    if (found === ModuleInstanceState.Instantiated) {
                        return found;
                    }
                    if (statement.kind === SyntaxKind.ImportEqualsDeclaration) {
                        // Treat re-exports of import aliases as instantiated,
                        // since they're ambiguous. This is consistent with
                        // `export import x = mod.x` being treated as instantiated:
                        //   import x = mod.x;
                        //   export { x };
                        found = ModuleInstanceState.Instantiated;
                    }
                }
            }
            if (found !== undefined) {
                return found;
            }
        }
        p = p.parent;
    }
    return ModuleInstanceState.Instantiated; // Couldn't locate, assume could refer to a value
}

/** @internal */
export const enum ContainerFlags {
    // The current node is not a container, and no container manipulation should happen before
    // recursing into it.
    None = 0,

    // The current node is a container.  It should be set as the current container (and block-
    // container) before recursing into it.  The current node does not have locals.  Examples:
    //
    //      Classes, ObjectLiterals, TypeLiterals, Interfaces...
    IsContainer = 1 << 0,

    // The current node is a block-scoped-container.  It should be set as the current block-
    // container before recursing into it.  Examples:
    //
    //      Blocks (when not parented by functions), Catch clauses, For/For-in/For-of statements...
    IsBlockScopedContainer = 1 << 1,

    // The current node is the container of a control flow path. The current control flow should
    // be saved and restored, and a new control flow initialized within the container.
    IsControlFlowContainer = 1 << 2,

    IsFunctionLike = 1 << 3,
    IsFunctionExpression = 1 << 4,
    HasLocals = 1 << 5,
    IsInterface = 1 << 6,
    IsObjectLiteralOrClassExpressionMethodOrAccessor = 1 << 7,
}

function initFlowNode<T extends FlowNode>(node: T) {
    Debug.attachFlowNodeDebugInfo(node);
    return node;
}

const binder = /* @__PURE__ */ createBinder();

/** @internal */
export function bindSourceFile(file: SourceFile, options: CompilerOptions) {
    performance.mark("beforeBind");
    perfLogger?.logStartBindFile("" + file.fileName);
    binder(file, options);
    perfLogger?.logStopBindFile();
    performance.mark("afterBind");
    performance.measure("Bind", "beforeBind", "afterBind");
}

interface BinderOps
{
    iTsBinderObjBrand ?: any ;

    /** make it do it to it. */
    (...args: [file: SourceFile, options: CompilerOptions] ): void ;
}

/**
 * before extracting into this
 * there was mutable var `symbolCount` (with)in `createBinder`, but
 * `bindSourceFile` always reset it to `0`, so we should get it separate isolation here
 * 
 */
function createSymbolPool()
{
    
    var symbolCount: (any[] )["length"] = 0;
    
    var Symbol: new (flags: SymbolFlags, name: __String) => Symbol;

    Symbol = objectAllocator.getSymbolConstructor();

    function createSymbol(flags: SymbolFlags, name: __String): Symbol {
        symbolCount++;
        return new Symbol(flags, name);
    }

    function getSymbolCount() { return symbolCount ; }

    return {
        createSymbol ,
        getSymbolCount ,
    } as const ;
}

function createBinder(): BinderOps {
    // Why var? It avoids TDZ checks in the runtime which can be costly.
    // See: https://github.com/microsoft/TypeScript/issues/52924
    /* eslint-disable no-var */
    var file: SourceFile;
    var options: CompilerOptions;
    var languageVersion: ScriptTarget;
    var parent: Node;
    var container: IsContainer | EntityNameExpression;
    var thisParentContainer: IsContainer | EntityNameExpression; // Container one level up
    var blockScopeContainer: IsBlockScopedContainer;
    var lastContainer: HasLocals;
    var delayedTypeAliases: (JSDocTypedefTag | JSDocCallbackTag | JSDocEnumTag)[];
    var seenThisKeyword: boolean;

    // state used by control flow analysis
    var currentFlow: FlowNode;
    var currentBreakTarget: FlowLabel | undefined;
    var currentContinueTarget: FlowLabel | undefined;
    var currentReturnTarget: FlowLabel | undefined;
    var currentTrueTarget: FlowLabel | undefined;
    var currentFalseTarget: FlowLabel | undefined;
    var currentExceptionTarget: FlowLabel | undefined;
    var preSwitchCaseFlow: FlowNode | undefined;
    var activeLabelList: ActiveLabel | undefined;
    var hasExplicitReturn: boolean;

    // state used for emit helpers
    var emitFlags: NodeFlags;

    // If this file is an external module, then it is automatically in strict-mode according to
    // ES6.  If it is not an external module, then we'll determine if it is in strict mode or
    // not depending on if we see "use strict" in certain places or if we hit a class/namespace
    // or if compiler options contain alwaysStrict.
    var inStrictMode: boolean;

    // If we are binding an assignment pattern, we will bind certain expressions differently.
    var inAssignmentPattern = false;

    let symbolPool: ReturnType<typeof createSymbolPool> = createSymbolPool() ;

    var Symbol: new (flags: SymbolFlags, name: __String) => Symbol;
    var classifiableNames: Set<__String>;

    var unreachableFlow: FlowNode = { flags: FlowFlags.Unreachable };
    var reportedUnreachableFlow: FlowNode = { flags: FlowFlags.Unreachable };
    var bindBinaryExpressionFlow = createBindBinaryExpressionFlow();
    /* eslint-enable no-var */

    return bindSourceFile;

    /**
     * Inside the binder, we may create a diagnostic for an as-yet unbound node (with potentially no parent pointers, implying no accessible source file)
     * If so, the node _must_ be in the current file (as that's the only way anything could have traversed to it to yield it as the error node)
     * This version of `createDiagnosticForNode` uses the binder's context to account for this, and always yields correct diagnostics even in these situations.
     */
    function createDiagnosticForNode(node: Node, message: DiagnosticMessage, ...args: DiagnosticArguments): DiagnosticWithLocation {
        return createDiagnosticForNodeInSourceFile(getSourceFileOfNode(node) || file, node, message, ...args);
    }

    function bindSourceFile(f: SourceFile, opts: CompilerOptions) {
        file = f;
        options = opts;
        languageVersion = getEmitScriptTarget(options);
        inStrictMode = bindInStrictMode(file, opts);
        classifiableNames = new Set();
        symbolPool = createSymbolPool() ;

        Symbol = objectAllocator.getSymbolConstructor();

        // Attach debugging information if necessary
        Debug.attachFlowNodeDebugInfo(unreachableFlow);
        Debug.attachFlowNodeDebugInfo(reportedUnreachableFlow);

        if (!file.locals) {
            tracing?.push(tracing.Phase.Bind, "bindSourceFile", { path: file.path }, /*separateBeginAndEnd*/ true);
            bind(file);
            tracing?.pop();
            file.symbolCount = symbolPool.getSymbolCount() ;
            file.classifiableNames = classifiableNames;
            delayedBindJSDocTypedefTag();
        }

        file = undefined!;
        options = undefined!;
        languageVersion = undefined!;
        parent = undefined!;
        container = undefined!;
        thisParentContainer = undefined!;
        blockScopeContainer = undefined!;
        lastContainer = undefined!;
        delayedTypeAliases = undefined!;
        seenThisKeyword = false;
        currentFlow = undefined!;
        currentBreakTarget = undefined;
        currentContinueTarget = undefined;
        currentReturnTarget = undefined;
        currentTrueTarget = undefined;
        currentFalseTarget = undefined;
        currentExceptionTarget = undefined;
        activeLabelList = undefined;
        hasExplicitReturn = false;
        inAssignmentPattern = false;
        emitFlags = NodeFlags.None;
    }

    function bindInStrictMode(file: SourceFile, opts: CompilerOptions): boolean {
        if (getStrictOptionValue(opts, "alwaysStrict") && !file.isDeclarationFile) {
            // bind in strict mode source files with alwaysStrict option
            return true;
        }
        else {
            return !!file.externalModuleIndicator;
        }
    }

    function createSymbol(flags: SymbolFlags, name: __String): Symbol {
        return symbolPool.createSymbol(flags, name) ;
    }

    function addDeclarationToSymbol(symbol: Symbol, node: Declaration, symbolFlags: SymbolFlags) {
        symbol.flags |= symbolFlags;

        node.symbol = symbol;
        symbol.declarations = appendIfUnique(symbol.declarations, node);

        if (symbolFlags & (SymbolFlags.Class | SymbolFlags.Enum | SymbolFlags.Module | SymbolFlags.Variable) && !symbol.exports) {
            symbol.exports = createSymbolTable();
        }

        if (symbolFlags & (SymbolFlags.Class | SymbolFlags.Interface | SymbolFlags.TypeLiteral | SymbolFlags.ObjectLiteral) && !symbol.members) {
            symbol.members = createSymbolTable();
        }

        // On merge of const enum module with class or function, reset const enum only flag (namespaces will already recalculate)
        if (symbol.constEnumOnlyModule && (symbol.flags & (SymbolFlags.Function | SymbolFlags.Class | SymbolFlags.RegularEnum))) {
            symbol.constEnumOnlyModule = false;
        }

        if (symbolFlags & SymbolFlags.Value) {
            setValueDeclaration(symbol, node);
        }
    }

    // Should not be called on a declaration with a computed property name,
    // unless it is a well known Symbol.
    function getDeclarationName(node: Declaration): __String | undefined {
        if (node.kind === SyntaxKind.ExportAssignment) {
            return (node as ExportAssignment).isExportEquals ? InternalSymbolName.ExportEquals : InternalSymbolName.Default;
        }

        const name = getNameOfDeclaration(node);
        if (name) {
            if (isAmbientModule(node)) {
                const moduleName = getTextOfIdentifierOrLiteral(name as Identifier | StringLiteral);
                return (isGlobalScopeAugmentation(node as ModuleDeclaration) ? "__global" : `"${moduleName}"`) as __String;
            }
            if (name.kind === SyntaxKind.ComputedPropertyName) {
                const nameExpression = name.expression;
                // treat computed property names where expression is string/numeric literal as just string/numeric literal
                if (isStringOrNumericLiteralLike(nameExpression)) {
                    return escapeLeadingUnderscores(nameExpression.text);
                }
                if (isSignedNumericLiteral(nameExpression)) {
                    return tokenToString(nameExpression.operator) + nameExpression.operand.text as __String;
                }
                else {
                    Debug.fail("Only computed properties with literal names have declaration names");
                }
            }
            if (isPrivateIdentifier(name)) {
                // containingClass exists because private names only allowed inside classes
                const containingClass = getContainingClass(node);
                if (!containingClass) {
                    // we can get here in cases where there is already a parse error.
                    return undefined;
                }
                const containingClassSymbol = containingClass.symbol;
                return getSymbolNameForPrivateIdentifier(containingClassSymbol, name.escapedText);
            }
            if (isJsxNamespacedName(name)) {
                return getEscapedTextOfJsxNamespacedName(name);
            }
            return isPropertyNameLiteral(name) ? getEscapedTextOfIdentifierOrLiteral(name) : undefined;
        }
        switch (node.kind) {
            case SyntaxKind.Constructor:
                return InternalSymbolName.Constructor;
            case SyntaxKind.FunctionType:
            case SyntaxKind.CallSignature:
            case SyntaxKind.JSDocSignature:
                return InternalSymbolName.Call;
            case SyntaxKind.ConstructorType:
            case SyntaxKind.ConstructSignature:
                return InternalSymbolName.New;
            case SyntaxKind.IndexSignature:
                return InternalSymbolName.Index;
            case SyntaxKind.ExportDeclaration:
                return InternalSymbolName.ExportStar;
            case SyntaxKind.SourceFile:
                // json file should behave as
                // module.exports = ...
                return InternalSymbolName.ExportEquals;
            case SyntaxKind.BinaryExpression:
                if (getAssignmentDeclarationKind(node as BinaryExpression) === AssignmentDeclarationKind.ModuleExports) {
                    // module.exports = ...
                    return InternalSymbolName.ExportEquals;
                }
                Debug.fail("Unknown binary declaration kind");
                break;
            case SyntaxKind.JSDocFunctionType:
                return (isJSDocConstructSignature(node) ? InternalSymbolName.New : InternalSymbolName.Call);
            case SyntaxKind.Parameter:
                // Parameters with names are handled at the top of this function.  Parameters
                // without names can only come from JSDocFunctionTypes.
                Debug.assert(node.parent.kind === SyntaxKind.JSDocFunctionType, "Impossible parameter parent kind", () => `parent is: ${Debug.formatSyntaxKind(node.parent.kind)}, expected JSDocFunctionType`);
                const functionType = node.parent as JSDocFunctionType;
                const index = functionType.parameters.indexOf(node as ParameterDeclaration);
                return "arg" + index as __String;
        }
    }

    function getDisplayName(node: Declaration): string {
        return isNamedDeclaration(node) ? declarationNameToString(node.name) : unescapeLeadingUnderscores(Debug.checkDefined(getDeclarationName(node)));
    }

    /**
     * Declares a Symbol for the node and adds it to symbols. Reports errors for conflicting identifier names.
     * @param symbolTable - The symbol table which node will be added to.
     * @param parent - node's parent declaration.
     * @param node - The declaration to be added to the symbol table
     * @param includes - The SymbolFlags that node has in addition to its declaration type (eg: export, ambient, etc.)
     * @param excludes - The flags which node cannot be declared alongside in a symbol table. Used to report forbidden declarations.
     */
    function declareSymbol(symbolTable: SymbolTable, parent: Symbol | undefined, node: Declaration, includes: SymbolFlags, excludes: SymbolFlags, isReplaceableByMethod?: boolean, isComputedName?: boolean): Symbol {
        Debug.assert(isComputedName || !hasDynamicName(node));

        const isDefaultExport = hasSyntacticModifier(node, ModifierFlags.Default) || isExportSpecifier(node) && node.name.escapedText === "default";

        // The exported symbol for an export default function/class node is always named "default"
        const name = isComputedName ? InternalSymbolName.Computed
            : isDefaultExport && parent ? InternalSymbolName.Default
            : getDeclarationName(node);

        let symbol: (Symbol & DeclaredSymbol) | undefined;
        if (name === undefined) {
            symbol = createSymbol(SymbolFlags.None, InternalSymbolName.Missing);
        }
        else {
            // Check and see if the symbol table already has a symbol with this name.  If not,
            // create a new symbol with this name and add it to the table.  Note that we don't
            // give the new symbol any flags *yet*.  This ensures that it will not conflict
            // with the 'excludes' flags we pass in.
            //
            // If we do get an existing symbol, see if it conflicts with the new symbol we're
            // creating.  For example, a 'var' symbol and a 'class' symbol will conflict within
            // the same symbol table.  If we have a conflict, report the issue on each
            // declaration we have for this symbol, and then create a new symbol for this
            // declaration.
            //
            // Note that when properties declared in Javascript constructors
            // (marked by isReplaceableByMethod) conflict with another symbol, the property loses.
            // Always. This allows the common Javascript pattern of overwriting a prototype method
            // with an bound instance method of the same type: `this.method = this.method.bind(this)`
            //
            // If we created a new symbol, either because we didn't have a symbol with this name
            // in the symbol table, or we conflicted with an existing symbol, then just add this
            // node as the sole declaration of the new symbol.
            //
            // Otherwise, we'll be merging into a compatible existing symbol (for example when
            // you have multiple 'vars' with the same name in the same container).  In this case
            // just add this node into the declarations list of the symbol.
            symbol = symbolTable.get(name);

            if (includes & SymbolFlags.Classifiable) {
                classifiableNames.add(name);
            }

            if (!symbol) {
                symbolTable.set(name, symbol = createSymbol(SymbolFlags.None, name));
                if (isReplaceableByMethod) symbol.isReplaceableByMethod = true;
            }
            else if (isReplaceableByMethod && !symbol.isReplaceableByMethod) {
                // A symbol already exists, so don't add this as a declaration.
                return symbol;
            }
            else if (symbol.flags & excludes) {
                if (symbol.isReplaceableByMethod) {
                    // Javascript constructor-declared symbols can be discarded in favor of
                    // prototype symbols like methods.
                    symbolTable.set(name, symbol = createSymbol(SymbolFlags.None, name));
                }
                else if (!(includes & SymbolFlags.Variable && symbol.flags & SymbolFlags.Assignment)) {
                    // Assignment declarations are allowed to merge with variables, no matter what other flags they have.
                    if (isNamedDeclaration(node)) {
                        setParent(node.name, node);
                    }
                    // Report errors every position with duplicate declaration
                    // Report errors on previous encountered declarations
                    let message = symbol.flags & SymbolFlags.BlockScopedVariable
                        ? Diagnostics.Cannot_redeclare_block_scoped_variable_0
                        : Diagnostics.Duplicate_identifier_0;
                    let messageNeedsName = true;

                    if (symbol.flags & SymbolFlags.Enum || includes & SymbolFlags.Enum) {
                        message = Diagnostics.Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations;
                        messageNeedsName = false;
                    }

                    let multipleDefaultExports = false;
                    if (length(symbol.declarations)) {
                        // If the current node is a default export of some sort, then check if
                        // there are any other default exports that we need to error on.
                        // We'll know whether we have other default exports depending on if `symbol` already has a declaration list set.
                        if (isDefaultExport) {
                            message = Diagnostics.A_module_cannot_have_multiple_default_exports;
                            messageNeedsName = false;
                            multipleDefaultExports = true;
                        }
                        else {
                            // This is to properly report an error in the case "export default { }" is after export default of class declaration or function declaration.
                            // Error on multiple export default in the following case:
                            // 1. multiple export default of class declaration or function declaration by checking NodeFlags.Default
                            // 2. multiple export default of export assignment. This one doesn't have NodeFlags.Default on (as export default doesn't considered as modifiers)
                            if (
                                symbol.declarations && symbol.declarations.length &&
                                (node.kind === SyntaxKind.ExportAssignment && !(node as ExportAssignment).isExportEquals)
                            ) {
                                message = Diagnostics.A_module_cannot_have_multiple_default_exports;
                                messageNeedsName = false;
                                multipleDefaultExports = true;
                            }
                        }
                    }

                    const relatedInformation: DiagnosticRelatedInformation[] = [];
                    if (isTypeAliasDeclaration(node) && nodeIsMissing(node.type) && hasSyntacticModifier(node, ModifierFlags.Export) && symbol.flags & (SymbolFlags.Alias | SymbolFlags.Type | SymbolFlags.Namespace)) {
                        // export type T; - may have meant export type { T }?
                        relatedInformation.push(createDiagnosticForNode(node, Diagnostics.Did_you_mean_0, `export type { ${unescapeLeadingUnderscores(node.name.escapedText)} }`));
                    }

                    const declarationName = getNameOfDeclaration(node) || node;
                    forEach(symbol.declarations, (declaration, index) => {
                        const decl = getNameOfDeclaration(declaration) || declaration;
                        const diag = messageNeedsName ? createDiagnosticForNode(decl, message, getDisplayName(declaration)) : createDiagnosticForNode(decl, message);
                        file.bindDiagnostics.push(
                            multipleDefaultExports ? addRelatedInfo(diag, createDiagnosticForNode(declarationName, index === 0 ? Diagnostics.Another_export_default_is_here : Diagnostics.and_here)) : diag,
                        );
                        if (multipleDefaultExports) {
                            relatedInformation.push(createDiagnosticForNode(decl, Diagnostics.The_first_export_default_is_here));
                        }
                    });

                    const diag = messageNeedsName ? createDiagnosticForNode(declarationName, message, getDisplayName(node)) : createDiagnosticForNode(declarationName, message);
                    file.bindDiagnostics.push(addRelatedInfo(diag, ...relatedInformation));

                    symbol = createSymbol(SymbolFlags.None, name);
                }
            }
        }

        addDeclarationToSymbol(symbol, node, includes);
        if (symbol.parent) {
            Debug.assert(symbol.parent === parent, "Existing symbol parent should match new one");
        }
        else {
            symbol.parent = parent;
        }

        return symbol;
    }

    function declareModuleMember(node: Declaration, symbolFlags: SymbolFlags, symbolExcludes: SymbolFlags): Symbol {
        const hasExportModifier = !!(getCombinedModifierFlags(node) & ModifierFlags.Export) || jsdocTreatAsExported(node);
        if (symbolFlags & SymbolFlags.Alias) {
            if (node.kind === SyntaxKind.ExportSpecifier || (node.kind === SyntaxKind.ImportEqualsDeclaration && hasExportModifier)) {
                return declareSymbol(container.symbol.exports!, container.symbol, node, symbolFlags, symbolExcludes);
            }
            else {
                Debug.assertNode(container, canHaveLocals);
                return declareSymbol(container.locals!, /*parent*/ undefined, node, symbolFlags, symbolExcludes);
            }
        }
        else {
            // Exported module members are given 2 symbols: A local symbol that is classified with an ExportValue flag,
            // and an associated export symbol with all the correct flags set on it. There are 2 main reasons:
            //
            //   1. We treat locals and exports of the same name as mutually exclusive within a container.
            //      That means the binder will issue a Duplicate Identifier error if you mix locals and exports
            //      with the same name in the same container.
            //      TODO: Make this a more specific error and decouple it from the exclusion logic.
            //   2. When we checkIdentifier in the checker, we set its resolved symbol to the local symbol,
            //      but return the export symbol (by calling getExportSymbolOfValueSymbolIfExported). That way
            //      when the emitter comes back to it, it knows not to qualify the name if it was found in a containing scope.

            // NOTE: Nested ambient modules always should go to to 'locals' table to prevent their automatic merge
            //       during global merging in the checker. Why? The only case when ambient module is permitted inside another module is module augmentation
            //       and this case is specially handled. Module augmentations should only be merged with original module definition
            //       and should never be merged directly with other augmentation, and the latter case would be possible if automatic merge is allowed.
            if (isJSDocTypeAlias(node)) Debug.assert(isInJSFile(node)); // We shouldn't add symbols for JSDoc nodes if not in a JS file.
            if (!isAmbientModule(node) && (hasExportModifier || container.flags & NodeFlags.ExportContext)) {
                if (!canHaveLocals(container) || !container.locals || (hasSyntacticModifier(node, ModifierFlags.Default) && !getDeclarationName(node))) {
                    return declareSymbol(container.symbol.exports!, container.symbol, node, symbolFlags, symbolExcludes); // No local symbol for an unnamed default!
                }
                const exportKind = symbolFlags & SymbolFlags.Value ? SymbolFlags.ExportValue : 0;
                const local = declareSymbol(container.locals, /*parent*/ undefined, node, exportKind, symbolExcludes);
                local.exportSymbol = declareSymbol(container.symbol.exports!, container.symbol, node, symbolFlags, symbolExcludes);
                node.localSymbol = local;
                return local;
            }
            else {
                Debug.assertNode(container, canHaveLocals);
                return declareSymbol(container.locals!, /*parent*/ undefined, node, symbolFlags, symbolExcludes);
            }
        }
    }

    function jsdocTreatAsExported(node: Node) {
        if (node.parent && isModuleDeclaration(node)) {
            node = node.parent;
        }
        if (!isJSDocTypeAlias(node)) return false;
        // jsdoc typedef handling is a bit of a doozy, but to summarize, treat the typedef as exported if:
        // 1. It has an explicit name (since by default typedefs are always directly exported, either at the top level or in a container), or
        if (!isJSDocEnumTag(node) && !!node.fullName) return true;
        // 2. The thing a nameless typedef pulls its name from is implicitly a direct export (either by assignment or actual export flag).
        const declName = getNameOfDeclaration(node);
        if (!declName) return false;
        if (isPropertyAccessEntityNameExpression(declName.parent) && isTopLevelNamespaceAssignment(declName.parent)) return true;
        if (isDeclaration(declName.parent) && getCombinedModifierFlags(declName.parent) & ModifierFlags.Export) return true;
        // This could potentially be simplified by having `delayedBindJSDocTypedefTag` pass in an override for `hasExportModifier`, since it should
        // already have calculated and branched on most of this.
        return false;
    }

    function bindEachFunctionsFirst(nodes: NodeArray<Node> | undefined): void {
        bindEach(nodes, n => n.kind === SyntaxKind.FunctionDeclaration ? bind(n) : undefined);
        bindEach(nodes, n => n.kind !== SyntaxKind.FunctionDeclaration ? bind(n) : undefined);
    }

    function bindEach(nodes: NodeArray<Node> | undefined, bindFunction: (node: Node) => void = bind): void {
        if (nodes === undefined) {
            return;
        }

        forEach(nodes, bindFunction);
    }

    function bindEachChild(node: Node) {
        forEachChild(node, bind, bindEach);
    }

    function isNarrowingExpression(expr: Expression): boolean {
        switch (expr.kind) {
            case SyntaxKind.Identifier:
            case SyntaxKind.PrivateIdentifier:
            case SyntaxKind.ThisKeyword:
            case SyntaxKind.PropertyAccessExpression:
            case SyntaxKind.ElementAccessExpression:
                return containsNarrowableReference(expr);
            case SyntaxKind.CallExpression:
                return hasNarrowableArgument(expr as CallExpression);
            case SyntaxKind.ParenthesizedExpression:
                if (isJSDocTypeAssertion(expr)) {
                    return false;
                }
                // fallthrough
            case SyntaxKind.NonNullExpression:
                return isNarrowingExpression((expr as ParenthesizedExpression | NonNullExpression).expression);
            case SyntaxKind.BinaryExpression:
                return isNarrowingBinaryExpression(expr as BinaryExpression);
            case SyntaxKind.PrefixUnaryExpression:
                return (expr as PrefixUnaryExpression).operator === SyntaxKind.ExclamationToken && isNarrowingExpression((expr as PrefixUnaryExpression).operand);
            case SyntaxKind.TypeOfExpression:
                return isNarrowingExpression((expr as TypeOfExpression).expression);
        }
        return false;
    }

    function isNarrowableReference(expr: Expression): boolean {
        return isDottedName(expr)
            || (isPropertyAccessExpression(expr) || isNonNullExpression(expr) || isParenthesizedExpression(expr)) && isNarrowableReference(expr.expression)
            || isBinaryExpression(expr) && expr.operatorToken.kind === SyntaxKind.CommaToken && isNarrowableReference(expr.right)
            || isElementAccessExpression(expr) && (isStringOrNumericLiteralLike(expr.argumentExpression) || isEntityNameExpression(expr.argumentExpression)) && isNarrowableReference(expr.expression)
            || isAssignmentExpression(expr) && isNarrowableReference(expr.left);
    }

    function containsNarrowableReference(expr: Expression): boolean {
        return isNarrowableReference(expr) || isOptionalChain(expr) && containsNarrowableReference(expr.expression);
    }

    function hasNarrowableArgument(expr: CallExpression) {
        if (expr.arguments) {
            for (const argument of expr.arguments) {
                if (containsNarrowableReference(argument)) {
                    return true;
                }
            }
        }
        if (
            expr.expression.kind === SyntaxKind.PropertyAccessExpression &&
            containsNarrowableReference((expr.expression as PropertyAccessExpression).expression)
        ) {
            return true;
        }
        return false;
    }

    function isNarrowingTypeofOperands(expr1: Expression, expr2: Expression) {
        return isTypeOfExpression(expr1) && isNarrowableOperand(expr1.expression) && isStringLiteralLike(expr2);
    }

    function isNarrowingBinaryExpression(expr: BinaryExpression) {
        switch (expr.operatorToken.kind) {
            case SyntaxKind.EqualsToken:
            case SyntaxKind.BarBarEqualsToken:
            case SyntaxKind.AmpersandAmpersandEqualsToken:
            case SyntaxKind.QuestionQuestionEqualsToken:
                return containsNarrowableReference(expr.left);
            case SyntaxKind.EqualsEqualsToken:
            case SyntaxKind.ExclamationEqualsToken:
            case SyntaxKind.EqualsEqualsEqualsToken:
            case SyntaxKind.ExclamationEqualsEqualsToken:
                return isNarrowableOperand(expr.left) || isNarrowableOperand(expr.right) ||
                    isNarrowingTypeofOperands(expr.right, expr.left) || isNarrowingTypeofOperands(expr.left, expr.right) ||
                    (isBooleanLiteral(expr.right) && isNarrowingExpression(expr.left) || isBooleanLiteral(expr.left) && isNarrowingExpression(expr.right));
            case SyntaxKind.InstanceOfKeyword:
                return isNarrowableOperand(expr.left);
            case SyntaxKind.InKeyword:
                return isNarrowingExpression(expr.right);
            case SyntaxKind.CommaToken:
                return isNarrowingExpression(expr.right);
        }
        return false;
    }

    function isNarrowableOperand(expr: Expression): boolean {
        switch (expr.kind) {
            case SyntaxKind.ParenthesizedExpression:
                return isNarrowableOperand((expr as ParenthesizedExpression).expression);
            case SyntaxKind.BinaryExpression:
                switch ((expr as BinaryExpression).operatorToken.kind) {
                    case SyntaxKind.EqualsToken:
                        return isNarrowableOperand((expr as BinaryExpression).left);
                    case SyntaxKind.CommaToken:
                        return isNarrowableOperand((expr as BinaryExpression).right);
                }
        }
        return containsNarrowableReference(expr);
    }

    function createBranchLabel(): FlowLabel {
        return initFlowNode({ flags: FlowFlags.BranchLabel, antecedents: undefined });
    }

    function createLoopLabel(): FlowLabel {
        return initFlowNode({ flags: FlowFlags.LoopLabel, antecedents: undefined });
    }

    function createReduceLabel(target: FlowLabel, antecedents: FlowNode[], antecedent: FlowNode): FlowReduceLabel {
        return initFlowNode({ flags: FlowFlags.ReduceLabel, target, antecedents, antecedent });
    }

    function setFlowNodeReferenced(flow: FlowNode) {
        // On first reference we set the Referenced flag, thereafter we set the Shared flag
        flow.flags |= flow.flags & FlowFlags.Referenced ? FlowFlags.Shared : FlowFlags.Referenced;
    }

    function addAntecedent(label: FlowLabel, antecedent: FlowNode): void {
        if (!(antecedent.flags & FlowFlags.Unreachable) && !contains(label.antecedents, antecedent)) {
            (label.antecedents || (label.antecedents = [])).push(antecedent);
            setFlowNodeReferenced(antecedent);
        }
    }

    function createFlowCondition(flags: FlowFlags, antecedent: FlowNode, expression: Expression | undefined): FlowNode {
        if (antecedent.flags & FlowFlags.Unreachable) {
            return antecedent;
        }
        if (!expression) {
            return flags & FlowFlags.TrueCondition ? antecedent : unreachableFlow;
        }
        if (
            (expression.kind === SyntaxKind.TrueKeyword && flags & FlowFlags.FalseCondition ||
                expression.kind === SyntaxKind.FalseKeyword && flags & FlowFlags.TrueCondition) &&
            !isExpressionOfOptionalChainRoot(expression) && !isNullishCoalesce(expression.parent)
        ) {
            return unreachableFlow;
        }
        if (!isNarrowingExpression(expression)) {
            return antecedent;
        }
        setFlowNodeReferenced(antecedent);
        return initFlowNode({ flags, antecedent, node: expression });
    }

    function createFlowSwitchClause(antecedent: FlowNode, switchStatement: SwitchStatement, clauseStart: number, clauseEnd: number): FlowNode {
        setFlowNodeReferenced(antecedent);
        return initFlowNode({ flags: FlowFlags.SwitchClause, antecedent, switchStatement, clauseStart, clauseEnd });
    }

    function createFlowMutation(flags: FlowFlags, antecedent: FlowNode, node: Expression | VariableDeclaration | ArrayBindingElement): FlowNode {
        setFlowNodeReferenced(antecedent);
        const result = initFlowNode({ flags, antecedent, node });
        if (currentExceptionTarget) {
            addAntecedent(currentExceptionTarget, result);
        }
        return result;
    }

    function createFlowCall(antecedent: FlowNode, node: CallExpression): FlowNode {
        setFlowNodeReferenced(antecedent);
        return initFlowNode({ flags: FlowFlags.Call, antecedent, node });
    }

    function finishFlowLabel(flow: FlowLabel): FlowNode {
        const antecedents = flow.antecedents;
        if (!antecedents) {
            return unreachableFlow;
        }
        if (antecedents.length === 1) {
            return antecedents[0];
        }
        return flow;
    }

    function isStatementCondition(node: Node) {
        const parent = node.parent;
        switch (parent.kind) {
            case SyntaxKind.IfStatement:
            case SyntaxKind.WhileStatement:
            case SyntaxKind.DoStatement:
                return (parent as IfStatement | WhileStatement | DoStatement).expression === node;
            case SyntaxKind.ForStatement:
            case SyntaxKind.ConditionalExpression:
                return (parent as ForStatement | ConditionalExpression).condition === node;
        }
        return false;
    }

    function isLogicalExpression(node: Node) {
        while (true) {
            if (node.kind === SyntaxKind.ParenthesizedExpression) {
                node = (node as ParenthesizedExpression).expression;
            }
            else if (node.kind === SyntaxKind.PrefixUnaryExpression && (node as PrefixUnaryExpression).operator === SyntaxKind.ExclamationToken) {
                node = (node as PrefixUnaryExpression).operand;
            }
            else {
                return isLogicalOrCoalescingBinaryExpression(node);
            }
        }
    }

    function isLogicalAssignmentExpression(node: Node) {
        return isLogicalOrCoalescingAssignmentExpression(skipParentheses(node));
    }

    function bindInitializedVariableFlow(node: VariableDeclaration | ArrayBindingElement) {
        const name = !isOmittedExpression(node) ? node.name : undefined;
        if (isBindingPattern(name)) {
            for (const child of name.elements) {
                bindInitializedVariableFlow(child);
            }
        }
        else {
            currentFlow = createFlowMutation(FlowFlags.Assignment, currentFlow, node);
        }
    }

    function bindVariableDeclarationFlow(node: VariableDeclaration) {
        bindEachChild(node);
        if (node.initializer || isForInOrOfStatement(node.parent.parent)) {
            bindInitializedVariableFlow(node);
        }
    }

    function bindBindingElementFlow(node: BindingElement) {
        // When evaluating a binding pattern, the initializer is evaluated before the binding pattern, per:
        // - https://tc39.es/ecma262/#sec-destructuring-binding-patterns-runtime-semantics-iteratorbindinginitialization
        //   - `BindingElement: BindingPattern Initializer?`
        // - https://tc39.es/ecma262/#sec-runtime-semantics-keyedbindinginitialization
        //   - `BindingElement: BindingPattern Initializer?`
        bind(node.dotDotDotToken);
        bind(node.propertyName);
        bindInitializer(node.initializer);
        bind(node.name);
    }

    function bindParameterFlow(node: ParameterDeclaration) {
        bindEach(node.modifiers);
        bind(node.dotDotDotToken);
        bind(node.questionToken);
        bind(node.type);
        bindInitializer(node.initializer);
        bind(node.name);
    }

    // a BindingElement/Parameter does not have side effects if initializers are not evaluated and used. (see GH#49759)
    function bindInitializer(node: Expression | undefined) {
        if (!node) {
            return;
        }
        const entryFlow = currentFlow;
        bind(node);
        if (entryFlow === unreachableFlow || entryFlow === currentFlow) {
            return;
        }
        const exitFlow = createBranchLabel();
        addAntecedent(exitFlow, entryFlow);
        addAntecedent(exitFlow, currentFlow);
        currentFlow = finishFlowLabel(exitFlow);
    }

    function bindJSDocTypeAlias(node: JSDocTypedefTag | JSDocCallbackTag | JSDocEnumTag) {
        bind(node.tagName);
        if (node.kind !== SyntaxKind.JSDocEnumTag && node.fullName) {
            // don't bind the type name yet; that's delayed until delayedBindJSDocTypedefTag
            setParent(node.fullName, node);
            setParentRecursive(node.fullName, /*incremental*/ false);
        }
        if (typeof node.comment !== "string") {
            bindEach(node.comment);
        }
    }

    function bindJSDocClassTag(node: JSDocClassTag) {
        bindEachChild(node);
        const host = getHostSignatureFromJSDoc(node);
        if (host && host.kind !== SyntaxKind.MethodDeclaration) {
            addDeclarationToSymbol(host.symbol, host, SymbolFlags.Class);
        }
    }

    function bindOptionalExpression(node: Expression, trueTarget: FlowLabel, falseTarget: FlowLabel) {
        doWithConditionalBranches(bind, node, trueTarget, falseTarget);
        if (!isOptionalChain(node) || isOutermostOptionalChain(node)) {
            addAntecedent(trueTarget, createFlowCondition(FlowFlags.TrueCondition, currentFlow, node));
            addAntecedent(falseTarget, createFlowCondition(FlowFlags.FalseCondition, currentFlow, node));
        }
    }

    // The binder visits every node in the syntax tree so it is a convenient place to perform a single localized
    // check for reserved words used as identifiers in strict mode code, as well as `yield` or `await` in
    // [Yield] or [Await] contexts, respectively.
    function checkContextualIdentifier(node: Identifier) {
        // Report error only if there are no parse errors in file
        if (
            !file.parseDiagnostics.length &&
            !(node.flags & NodeFlags.Ambient) &&
            !(node.flags & NodeFlags.JSDoc) &&
            !isIdentifierName(node)
        ) {
            // strict mode identifiers
            const originalKeywordKind = identifierToKeywordKind(node);
            if (originalKeywordKind === undefined) {
                return;
            }

            if (
                inStrictMode &&
                originalKeywordKind >= SyntaxKind.FirstFutureReservedWord &&
                originalKeywordKind <= SyntaxKind.LastFutureReservedWord
            ) {
                file.bindDiagnostics.push(createDiagnosticForNode(node, getStrictModeIdentifierMessage(node), declarationNameToString(node)));
            }
            else if (originalKeywordKind === SyntaxKind.AwaitKeyword) {
                if (isExternalModule(file) && isInTopLevelContext(node)) {
                    file.bindDiagnostics.push(createDiagnosticForNode(node, Diagnostics.Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module, declarationNameToString(node)));
                }
                else if (node.flags & NodeFlags.AwaitContext) {
                    file.bindDiagnostics.push(createDiagnosticForNode(node, Diagnostics.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here, declarationNameToString(node)));
                }
            }
            else if (originalKeywordKind === SyntaxKind.YieldKeyword && node.flags & NodeFlags.YieldContext) {
                file.bindDiagnostics.push(createDiagnosticForNode(node, Diagnostics.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here, declarationNameToString(node)));
            }
        }
    }

    function getStrictModeIdentifierMessage(node: Node) {
        // Provide specialized messages to help the user understand why we think they're in
        // strict mode.
        if (getContainingClass(node)) {
            return Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode;
        }

        if (file.externalModuleIndicator) {
            return Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode;
        }

        return Diagnostics.Identifier_expected_0_is_a_reserved_word_in_strict_mode;
    }

    // The binder visits every node, so this is a good place to check for
    // the reserved private name (there is only one)
    function checkPrivateIdentifier(node: PrivateIdentifier) {
        if (node.escapedText === "#constructor") {
            // Report error only if there are no parse errors in file
            if (!file.parseDiagnostics.length) {
                file.bindDiagnostics.push(createDiagnosticForNode(node, Diagnostics.constructor_is_a_reserved_word, declarationNameToString(node)));
            }
        }
    }

    function checkStrictModeBinaryExpression(node: BinaryExpression) {
        if (inStrictMode && isLeftHandSideExpression(node.left) && isAssignmentOperator(node.operatorToken.kind)) {
            // ECMA 262 (Annex C) The identifier eval or arguments may not appear as the LeftHandSideExpression of an
            // Assignment operator(11.13) or of a PostfixExpression(11.3)
            checkStrictModeEvalOrArguments(node, node.left as Identifier);
        }
    }

    function checkStrictModeCatchClause(node: CatchClause) {
        // It is a SyntaxError if a TryStatement with a Catch occurs within strict code and the Identifier of the
        // Catch production is eval or arguments
        if (inStrictMode && node.variableDeclaration) {
            checkStrictModeEvalOrArguments(node, node.variableDeclaration.name);
        }
    }

    function checkStrictModeDeleteExpression(node: DeleteExpression) {
        // Grammar checking
        if (inStrictMode && node.expression.kind === SyntaxKind.Identifier) {
            // When a delete operator occurs within strict mode code, a SyntaxError is thrown if its
            // UnaryExpression is a direct reference to a variable, function argument, or function name
            const span = getErrorSpanForNode(file, node.expression);
            file.bindDiagnostics.push(createFileDiagnostic(file, span.start, span.length, Diagnostics.delete_cannot_be_called_on_an_identifier_in_strict_mode));
        }
    }

    function isEvalOrArgumentsIdentifier(node: Node): boolean {
        return isIdentifier(node) && (node.escapedText === "eval" || node.escapedText === "arguments");
    }

    function checkStrictModeEvalOrArguments(contextNode: Node, name: Node | undefined) {
        if (name && name.kind === SyntaxKind.Identifier) {
            const identifier = name as Identifier;
            if (isEvalOrArgumentsIdentifier(identifier)) {
                // We check first if the name is inside class declaration or class expression; if so give explicit message
                // otherwise report generic error message.
                const span = getErrorSpanForNode(file, name);
                file.bindDiagnostics.push(createFileDiagnostic(file, span.start, span.length, getStrictModeEvalOrArgumentsMessage(contextNode), idText(identifier)));
            }
        }
    }

    function getStrictModeEvalOrArgumentsMessage(node: Node) {
        // Provide specialized messages to help the user understand why we think they're in
        // strict mode.
        if (getContainingClass(node)) {
            return Diagnostics.Code_contained_in_a_class_is_evaluated_in_JavaScript_s_strict_mode_which_does_not_allow_this_use_of_0_For_more_information_see_https_Colon_Slash_Slashdeveloper_mozilla_org_Slashen_US_Slashdocs_SlashWeb_SlashJavaScript_SlashReference_SlashStrict_mode;
        }

        if (file.externalModuleIndicator) {
            return Diagnostics.Invalid_use_of_0_Modules_are_automatically_in_strict_mode;
        }

        return Diagnostics.Invalid_use_of_0_in_strict_mode;
    }

    function checkStrictModeFunctionName(node: FunctionLikeDeclaration) {
        if (inStrictMode && !(node.flags & NodeFlags.Ambient)) {
            // It is a SyntaxError if the identifier eval or arguments appears within a FormalParameterList of a strict mode FunctionDeclaration or FunctionExpression (13.1))
            checkStrictModeEvalOrArguments(node, node.name);
        }
    }

    function getStrictModeBlockScopeFunctionDeclarationMessage(node: Node) {
        // Provide specialized messages to help the user understand why we think they're in
        // strict mode.
        if (getContainingClass(node)) {
            return Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES5_Class_definitions_are_automatically_in_strict_mode;
        }

        if (file.externalModuleIndicator) {
            return Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES5_Modules_are_automatically_in_strict_mode;
        }

        return Diagnostics.Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES5;
    }

    function checkStrictModeFunctionDeclaration(node: FunctionDeclaration) {
        if (languageVersion < ScriptTarget.ES2015) {
            // Report error if function is not top level function declaration
            if (
                blockScopeContainer.kind !== SyntaxKind.SourceFile &&
                blockScopeContainer.kind !== SyntaxKind.ModuleDeclaration &&
                !isFunctionLikeOrClassStaticBlockDeclaration(blockScopeContainer)
            ) {
                // We check first if the name is inside class declaration or class expression; if so give explicit message
                // otherwise report generic error message.
                const errorSpan = getErrorSpanForNode(file, node);
                file.bindDiagnostics.push(createFileDiagnostic(file, errorSpan.start, errorSpan.length, getStrictModeBlockScopeFunctionDeclarationMessage(node)));
            }
        }
    }

    function checkStrictModePostfixUnaryExpression(node: PostfixUnaryExpression) {
        // Grammar checking
        // The identifier eval or arguments may not appear as the LeftHandSideExpression of an
        // Assignment operator(11.13) or of a PostfixExpression(11.3) or as the UnaryExpression
        // operated upon by a Prefix Increment(11.4.4) or a Prefix Decrement(11.4.5) operator.
        if (inStrictMode) {
            checkStrictModeEvalOrArguments(node, node.operand as Identifier);
        }
    }

    function checkStrictModePrefixUnaryExpression(node: PrefixUnaryExpression) {
        // Grammar checking
        if (inStrictMode) {
            if (node.operator === SyntaxKind.PlusPlusToken || node.operator === SyntaxKind.MinusMinusToken) {
                checkStrictModeEvalOrArguments(node, node.operand as Identifier);
            }
        }
    }

    function checkStrictModeWithStatement(node: WithStatement) {
        // Grammar checking for withStatement
        if (inStrictMode) {
            errorOnFirstToken(node, Diagnostics.with_statements_are_not_allowed_in_strict_mode);
        }
    }

    function checkStrictModeLabeledStatement(node: LabeledStatement) {
        // Grammar checking for labeledStatement
        if (inStrictMode && getEmitScriptTarget(options) >= ScriptTarget.ES2015) {
            if (isDeclarationStatement(node.statement) || isVariableStatement(node.statement)) {
                errorOnFirstToken(node.label, Diagnostics.A_label_is_not_allowed_here);
            }
        }
    }

    function errorOnFirstToken(node: Node, message: DiagnosticMessage, ...args: DiagnosticArguments) {
        const span = getSpanOfTokenAtPosition(file, node.pos);
        file.bindDiagnostics.push(createFileDiagnostic(file, span.start, span.length, message, ...args));
    }

    function errorOrSuggestionOnNode(isError: boolean, node: Node, message: DiagnosticMessage): void {
        errorOrSuggestionOnRange(isError, node, node, message);
    }

    function errorOrSuggestionOnRange(isError: boolean, startNode: Node, endNode: Node, message: DiagnosticMessage): void {
        addErrorOrSuggestionDiagnostic(isError, { pos: getTokenPosOfNode(startNode, file), end: endNode.end }, message);
    }

    function addErrorOrSuggestionDiagnostic(isError: boolean, range: TextRange, message: DiagnosticMessage): void {
        const diag = createFileDiagnostic(file, range.pos, range.end - range.pos, message);
        if (isError) {
            file.bindDiagnostics.push(diag);
        }
        else {
            file.bindSuggestionDiagnostics = append(file.bindSuggestionDiagnostics, { ...diag, category: DiagnosticCategory.Suggestion });
        }
    }

    function bind(node: Node | undefined): void {
        if (!node) {
            return;
        }
        setParent(node, parent);
        if (tracing) (node as TracingNode).tracingPath = file.path;
        const saveInStrictMode = inStrictMode;

        // Even though in the AST the jsdoc @typedef node belongs to the current node,
        // its symbol might be in the same scope with the current node's symbol. Consider:
        //
        //     /** @typedef {string | number} MyType */
        //     function foo();
        //
        // Here the current node is "foo", which is a container, but the scope of "MyType" should
        // not be inside "foo". Therefore we always bind @typedef before bind the parent node,
        // and skip binding this tag later when binding all the other jsdoc tags.

        // First we bind declaration nodes to a symbol if possible. We'll both create a symbol
        // and then potentially add the symbol to an appropriate symbol table. Possible
        // destination symbol tables are:
        //
        //  1) The 'exports' table of the current container's symbol.
        //  2) The 'members' table of the current container's symbol.
        //  3) The 'locals' table of the current container.
        //
        // However, not all symbols will end up in any of these tables. 'Anonymous' symbols
        // (like TypeLiterals for example) will not be put in any table.
        bindWorker(node);
        // Then we recurse into the children of the node to bind them as well. For certain
        // symbols we do specialized work when we recurse. For example, we'll keep track of
        // the current 'container' node when it changes. This helps us know which symbol table
        // a local should go into for example. Since terminal nodes are known not to have
        // children, as an optimization we don't process those.
        if (node.kind > SyntaxKind.LastToken) {
            const saveParent = parent;
            parent = node;
            const containerFlags = getContainerFlags(node);
            if (containerFlags === ContainerFlags.None) {
                bindChildren(node);
            }
            else {
                bindContainer(node as HasContainerFlags, containerFlags);
            }
            parent = saveParent;
        }
        else {
            const saveParent = parent;
            if (node.kind === SyntaxKind.EndOfFileToken) parent = node;
            bindJSDoc(node);
            parent = saveParent;
        }
        inStrictMode = saveInStrictMode;
    }

}

function eachUnreachableRange(node: Node, cb: (start: Node, last: Node) => void): void {
    if (isStatement(node) && isExecutableStatement(node) && isBlock(node.parent)) {
        const { statements } = node.parent;
        const slice = sliceAfter(statements, node);
        getRangesWhere(slice, isExecutableStatement, (start, afterEnd) => cb(slice[start], slice[afterEnd - 1]));
    }
    else {
        cb(node, node);
    }
}
// As opposed to a pure declaration like an `interface`
function isExecutableStatement(s: Statement): boolean {
    // Don't remove statements that can validly be used before they appear.
    return !isFunctionDeclaration(s) && !isPurelyTypeDeclaration(s) && !isEnumDeclaration(s) &&
        // `var x;` may declare a variable used above
        !(isVariableStatement(s) && !(getCombinedNodeFlags(s) & (NodeFlags.BlockScoped)) && s.declarationList.declarations.some(d => !d.initializer));
}

function isPurelyTypeDeclaration(s: Statement): boolean {
    switch (s.kind) {
        case SyntaxKind.InterfaceDeclaration:
        case SyntaxKind.TypeAliasDeclaration:
            return true;
        case SyntaxKind.ModuleDeclaration:
            return getModuleInstanceState(s as ModuleDeclaration) !== ModuleInstanceState.Instantiated;
        case SyntaxKind.EnumDeclaration:
            return hasSyntacticModifier(s, ModifierFlags.Const);
        default:
            return false;
    }
}

/** @internal */
export function isExportsOrModuleExportsOrAlias(sourceFile: SourceFile, node: Expression): boolean {
    let i = 0;
    const q = createQueue<Expression>();
    q.enqueue(node);
    while (!q.isEmpty() && i < 100) {
        i++;
        node = q.dequeue();
        if (isExportsIdentifier(node) || isModuleExportsAccessExpression(node)) {
            return true;
        }
        else if (isIdentifier(node)) {
            const symbol = lookupSymbolForName(sourceFile, node.escapedText);
            if (!!symbol && !!symbol.valueDeclaration && isVariableDeclaration(symbol.valueDeclaration) && !!symbol.valueDeclaration.initializer) {
                const init = symbol.valueDeclaration.initializer;
                q.enqueue(init);
                if (isAssignmentExpression(init, /*excludeCompoundAssignment*/ true)) {
                    q.enqueue(init.left);
                    q.enqueue(init.right);
                }
            }
        }
    }
    return false;
}

/** @internal */
export function getContainerFlags(node: Node): ContainerFlags {
    switch (node.kind) {
        case SyntaxKind.ClassExpression:
        case SyntaxKind.ClassDeclaration:
        case SyntaxKind.EnumDeclaration:
        case SyntaxKind.ObjectLiteralExpression:
        case SyntaxKind.TypeLiteral:
        case SyntaxKind.JSDocTypeLiteral:
        case SyntaxKind.JsxAttributes:
            return ContainerFlags.IsContainer;

        case SyntaxKind.InterfaceDeclaration:
            return ContainerFlags.IsContainer | ContainerFlags.IsInterface;

        case SyntaxKind.ModuleDeclaration:
        case SyntaxKind.TypeAliasDeclaration:
        case SyntaxKind.MappedType:
        case SyntaxKind.IndexSignature:
            return ContainerFlags.IsContainer | ContainerFlags.HasLocals;

        case SyntaxKind.SourceFile:
            return ContainerFlags.IsContainer | ContainerFlags.IsControlFlowContainer | ContainerFlags.HasLocals;

        case SyntaxKind.GetAccessor:
        case SyntaxKind.SetAccessor:
        case SyntaxKind.MethodDeclaration:
            if (isObjectLiteralOrClassExpressionMethodOrAccessor(node)) {
                return ContainerFlags.IsContainer | ContainerFlags.IsControlFlowContainer | ContainerFlags.HasLocals | ContainerFlags.IsFunctionLike | ContainerFlags.IsObjectLiteralOrClassExpressionMethodOrAccessor;
            }
            // falls through
        case SyntaxKind.Constructor:
        case SyntaxKind.FunctionDeclaration:
        case SyntaxKind.MethodSignature:
        case SyntaxKind.CallSignature:
        case SyntaxKind.JSDocSignature:
        case SyntaxKind.JSDocFunctionType:
        case SyntaxKind.FunctionType:
        case SyntaxKind.ConstructSignature:
        case SyntaxKind.ConstructorType:
        case SyntaxKind.ClassStaticBlockDeclaration:
            return ContainerFlags.IsContainer | ContainerFlags.IsControlFlowContainer | ContainerFlags.HasLocals | ContainerFlags.IsFunctionLike;

        case SyntaxKind.FunctionExpression:
        case SyntaxKind.ArrowFunction:
            return ContainerFlags.IsContainer | ContainerFlags.IsControlFlowContainer | ContainerFlags.HasLocals | ContainerFlags.IsFunctionLike | ContainerFlags.IsFunctionExpression;

        case SyntaxKind.ModuleBlock:
            return ContainerFlags.IsControlFlowContainer;
        case SyntaxKind.PropertyDeclaration:
            return (node as PropertyDeclaration).initializer ? ContainerFlags.IsControlFlowContainer : 0;

        case SyntaxKind.CatchClause:
        case SyntaxKind.ForStatement:
        case SyntaxKind.ForInStatement:
        case SyntaxKind.ForOfStatement:
        case SyntaxKind.CaseBlock:
            return ContainerFlags.IsBlockScopedContainer | ContainerFlags.HasLocals;

        case SyntaxKind.Block:
            // do not treat blocks directly inside a function as a block-scoped-container.
            // Locals that reside in this block should go to the function locals. Otherwise 'x'
            // would not appear to be a redeclaration of a block scoped local in the following
            // example:
            //
            //      function foo() {
            //          var x;
            //          let x;
            //      }
            //
            // If we placed 'var x' into the function locals and 'let x' into the locals of
            // the block, then there would be no collision.
            //
            // By not creating a new block-scoped-container here, we ensure that both 'var x'
            // and 'let x' go into the Function-container's locals, and we do get a collision
            // conflict.
            return isFunctionLike(node.parent) || isClassStaticBlockDeclaration(node.parent) ? ContainerFlags.None : ContainerFlags.IsBlockScopedContainer | ContainerFlags.HasLocals;
    }

    return ContainerFlags.None;
}

function lookupSymbolForName(container: Node, name: __String): (Symbol & DeclaredSymbol) | undefined {
    const local = tryCast(container, canHaveLocals)?.locals?.get(name);
    if (local) {
        return local.exportSymbol ?? local;
    }
    if (isSourceFile(container) && container.jsGlobalAugmentations && container.jsGlobalAugmentations.has(name)) {
        return container.jsGlobalAugmentations.get(name);
    }
    if (canHaveSymbol(container)) {
        return container.symbol?.exports?.get(name);
    }
}








