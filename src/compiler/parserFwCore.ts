

const emptyArray = [] as const ;
import {
    BindingPattern,
    Block,
    BreakOrContinueStatement,
    BreakStatement,
    CallExpression,
    CallSignatureDeclaration,
    CharacterCodes,
    ClassDeclaration,
    ClassExpression,
    ConstructSignatureDeclaration,
    ContinueStatement,
    Debug,
    DiagnosticArguments,
    DiagnosticMessage,
    DiagnosticWithDetachedLocation,
    EndOfFileToken,
    EntityName,
    ExportSpecifier,
    Expression,
    Identifier,
    ImportOrExportSpecifier,
    ImportSpecifier,
    IntersectionTypeNode,
    JSDocNonNullableType,
    JSDocNullableType,
    JSDocOptionalType,
    JSDocParameterTag,
    JSDocParsingMode,
    JSDocPropertyTag,
    JSDocSyntaxKind,
    JSDocTypeExpression,
    JSDocVariadicType,
    JsonSourceFile,
    JsxOpeningLikeElement,
    LanguageVariant,
    ModuleBlock,
    NamedExports,
    NamedImports,
    NamedImportsOrExports,
    NewExpression,
    Node,
    NodeArray,
    NodeFlags,
    OptionalTypeNode,
    PackageJsonInfo,
    ParenthesizedTypeNode,
    PartiallyEmittedExpression,
    PragmaContext,
    PunctuationOrKeywordSyntaxKind,
    ReadonlyPragmaContext,
    ReadonlyPragmaMap,
    ResolutionMode,
    RestTypeNode,
    ScriptKind,
    ScriptTarget,
    SourceFile,
    SyntaxKind,
    TextRange,
    Token,
    TypeFlags, 
    TypeOperatorNode, 
    UnionOrIntersectionTypeNode, 
    UnionTypeNode, 
    YieldExpression,
    isArray,
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
    return Parser.parseIsolatedEntityName(text, languageVersion);
}

/**
 * Parse json text into SyntaxTree and return node and parse errors if any
 * @param fileName
 * @param sourceText
 */
export function parseJsonText(fileName: string, sourceText: string): JsonSourceFile {
    return Parser.parseJsonText(fileName, sourceText);
}

// See also `isExternalOrCommonJsModule` in utilities.ts
export function isExternalModule(file: SourceFile): boolean {
    return file.externalModuleIndicator !== undefined;
}

;

import {
    createScanner,
} from "./scanner";








