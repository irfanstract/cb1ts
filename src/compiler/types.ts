





/** @internal */
export type MatchingKeys<TRecord, TMatch, K extends keyof TRecord = keyof TRecord> = K extends (TRecord[K] extends TMatch ? K : never) ? K : never;

export interface TextRange {
    pos: number;
    end: number;
}

export interface ReadonlyTextRange {
    readonly pos: number;
    readonly end: number;
}

// token > SyntaxKind.Identifier => token is a keyword
// Also, If you add a new SyntaxKind be sure to keep the `Markers` section at the bottom in sync
export const enum SyntaxKind {
    Unknown,
    EndOfFileToken,
    SingleLineCommentTrivia,
    MultiLineCommentTrivia,
    NewLineTrivia,
    WhitespaceTrivia,
    // We detect and preserve #! on the first line
    ShebangTrivia,
    // We detect and provide better error recovery when we encounter a git merge marker.  This
    // allows us to edit files with git-conflict markers in them in a much more pleasant manner.
    ConflictMarkerTrivia,
    // If a file is actually binary, with any luck, we'll get U+FFFD REPLACEMENT CHARACTER
    // in position zero and can just skip what is surely a doomed parse.
    NonTextFileMarkerTrivia,
    // Literals
    NumericLiteral,
    BigIntLiteral,
    StringLiteral,
    JsxText,
    JsxTextAllWhiteSpaces,
    RegularExpressionLiteral,
    NoSubstitutionTemplateLiteral,
    // Pseudo-literals
    TemplateHead,
    TemplateMiddle,
    TemplateTail,
    // Punctuation
    OpenBraceToken,
    CloseBraceToken,
    OpenParenToken,
    CloseParenToken,
    OpenBracketToken,
    CloseBracketToken,
    DotToken,
    DotDotDotToken,
    SemicolonToken,
    CommaToken,
    QuestionDotToken,
    LessThanToken,
    LessThanSlashToken,
    GreaterThanToken,
    LessThanEqualsToken,
    GreaterThanEqualsToken,
    EqualsEqualsToken,
    ExclamationEqualsToken,
    EqualsEqualsEqualsToken,
    ExclamationEqualsEqualsToken,
    EqualsGreaterThanToken,
    PlusToken,
    MinusToken,
    AsteriskToken,
    AsteriskAsteriskToken,
    SlashToken,
    PercentToken,
    PlusPlusToken,
    MinusMinusToken,
    LessThanLessThanToken,
    GreaterThanGreaterThanToken,
    GreaterThanGreaterThanGreaterThanToken,
    AmpersandToken,
    BarToken,
    CaretToken,
    ExclamationToken,
    TildeToken,
    AmpersandAmpersandToken,
    BarBarToken,
    QuestionToken,
    ColonToken,
    AtToken,
    QuestionQuestionToken,
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    BacktickToken,
    /** Only the JSDoc scanner produces HashToken. The normal scanner produces PrivateIdentifier. */
    HashToken,
    // Assignments
    EqualsToken,
    PlusEqualsToken,
    MinusEqualsToken,
    AsteriskEqualsToken,
    AsteriskAsteriskEqualsToken,
    SlashEqualsToken,
    PercentEqualsToken,
    LessThanLessThanEqualsToken,
    GreaterThanGreaterThanEqualsToken,
    GreaterThanGreaterThanGreaterThanEqualsToken,
    AmpersandEqualsToken,
    BarEqualsToken,
    BarBarEqualsToken,
    AmpersandAmpersandEqualsToken,
    QuestionQuestionEqualsToken,
    CaretEqualsToken,
    // Identifiers and PrivateIdentifiers
    Identifier,
    PrivateIdentifier,
    /**
     * Only the special JSDoc comment text scanner produces JSDocCommentTextTokes. One of these tokens spans all text after a tag comment's start and before the next @
     * @internal
     */
    JSDocCommentTextToken,
    // Reserved words
    BreakKeyword,
    CaseKeyword,
    CatchKeyword,
    ClassKeyword,
    ConstKeyword,
    ContinueKeyword,
    DebuggerKeyword,
    DefaultKeyword,
    DeleteKeyword,
    DoKeyword,
    ElseKeyword,
    EnumKeyword,
    ExportKeyword,
    ExtendsKeyword,
    FalseKeyword,
    FinallyKeyword,
    ForKeyword,
    FunctionKeyword,
    IfKeyword,
    ImportKeyword,
    InKeyword,
    InstanceOfKeyword,
    NewKeyword,
    NullKeyword,
    ReturnKeyword,
    SuperKeyword,
    SwitchKeyword,
    ThisKeyword,
    ThrowKeyword,
    TrueKeyword,
    TryKeyword,
    TypeOfKeyword,
    VarKeyword,
    VoidKeyword,
    WhileKeyword,
    WithKeyword,
    // Strict mode reserved words
    ImplementsKeyword,
    InterfaceKeyword,
    LetKeyword,
    PackageKeyword,
    PrivateKeyword,
    ProtectedKeyword,
    PublicKeyword,
    StaticKeyword,
    YieldKeyword,
    // Contextual keywords
    AbstractKeyword,
    AccessorKeyword,
    AsKeyword,
    AssertsKeyword,
    AssertKeyword,
    AnyKeyword,
    AsyncKeyword,
    AwaitKeyword,
    BooleanKeyword,
    ConstructorKeyword,
    DeclareKeyword,
    GetKeyword,
    InferKeyword,
    IntrinsicKeyword,
    IsKeyword,
    KeyOfKeyword,
    ModuleKeyword,
    NamespaceKeyword,
    NeverKeyword,
    OutKeyword,
    ReadonlyKeyword,
    RequireKeyword,
    NumberKeyword,
    ObjectKeyword,
    SatisfiesKeyword,
    SetKeyword,
    StringKeyword,
    SymbolKeyword,
    TypeKeyword,
    UndefinedKeyword,
    UniqueKeyword,
    UnknownKeyword,
    UsingKeyword,
    FromKeyword,
    GlobalKeyword,
    BigIntKeyword,
    OverrideKeyword,
    OfKeyword, // LastKeyword and LastToken and LastContextualKeyword

    // Parse tree nodes

    // Names
    QualifiedName,
    ComputedPropertyName,
    // Signature elements
    TypeParameter,
    Parameter,
    Decorator,
    // TypeMember
    PropertySignature,
    PropertyDeclaration,
    MethodSignature,
    MethodDeclaration,
    ClassStaticBlockDeclaration,
    Constructor,
    GetAccessor,
    SetAccessor,
    CallSignature,
    ConstructSignature,
    IndexSignature,
    // Type
    TypePredicate,
    TypeReference,
    FunctionType,
    ConstructorType,
    TypeQuery,
    TypeLiteral,
    ArrayType,
    TupleType,
    OptionalType,
    RestType,
    UnionType,
    IntersectionType,
    ConditionalType,
    InferType,
    ParenthesizedType,
    ThisType,
    TypeOperator,
    IndexedAccessType,
    MappedType,
    LiteralType,
    NamedTupleMember,
    TemplateLiteralType,
    TemplateLiteralTypeSpan,
    ImportType,
    // Binding patterns
    ObjectBindingPattern,
    ArrayBindingPattern,
    BindingElement,
    // Expression
    ArrayLiteralExpression,
    ObjectLiteralExpression,
    PropertyAccessExpression,
    ElementAccessExpression,
    CallExpression,
    NewExpression,
    TaggedTemplateExpression,
    TypeAssertionExpression,
    ParenthesizedExpression,
    FunctionExpression,
    ArrowFunction,
    DeleteExpression,
    TypeOfExpression,
    VoidExpression,
    AwaitExpression,
    PrefixUnaryExpression,
    PostfixUnaryExpression,
    BinaryExpression,
    ConditionalExpression,
    TemplateExpression,
    YieldExpression,
    SpreadElement,
    ClassExpression,
    OmittedExpression,
    ExpressionWithTypeArguments,
    AsExpression,
    NonNullExpression,
    MetaProperty,
    SyntheticExpression,
    SatisfiesExpression,

    // Misc
    TemplateSpan,
    SemicolonClassElement,
    // Element
    Block,
    EmptyStatement,
    VariableStatement,
    ExpressionStatement,
    IfStatement,
    DoStatement,
    WhileStatement,
    ForStatement,
    ForInStatement,
    ForOfStatement,
    ContinueStatement,
    BreakStatement,
    ReturnStatement,
    WithStatement,
    SwitchStatement,
    LabeledStatement,
    ThrowStatement,
    TryStatement,
    DebuggerStatement,
    VariableDeclaration,
    VariableDeclarationList,
    FunctionDeclaration,
    ClassDeclaration,
    InterfaceDeclaration,
    TypeAliasDeclaration,
    EnumDeclaration,
    ModuleDeclaration,
    ModuleBlock,
    CaseBlock,
    NamespaceExportDeclaration,
    ImportEqualsDeclaration,
    ImportDeclaration,
    ImportClause,
    NamespaceImport,
    NamedImports,
    ImportSpecifier,
    ExportAssignment,
    ExportDeclaration,
    NamedExports,
    NamespaceExport,
    ExportSpecifier,
    MissingDeclaration,

    // Module references
    ExternalModuleReference,

    // JSX
    JsxElement,
    JsxSelfClosingElement,
    JsxOpeningElement,
    JsxClosingElement,
    JsxFragment,
    JsxOpeningFragment,
    JsxClosingFragment,
    JsxAttribute,
    JsxAttributes,
    JsxSpreadAttribute,
    JsxExpression,
    JsxNamespacedName,

    // Clauses
    CaseClause,
    DefaultClause,
    HeritageClause,
    CatchClause,

    ImportAttributes,
    ImportAttribute,
    /** @deprecated */ AssertClause = ImportAttributes,
    /** @deprecated */ AssertEntry = ImportAttribute,
    /** @deprecated */ ImportTypeAssertionContainer,

    // Property assignments
    PropertyAssignment,
    ShorthandPropertyAssignment,
    SpreadAssignment,

    // Enum
    EnumMember,

    // Top-level nodes
    SourceFile,
    Bundle,

    // JSDoc nodes
    JSDocTypeExpression,
    JSDocNameReference,
    JSDocMemberName, // C#p
    JSDocAllType, // The * type
    JSDocUnknownType, // The ? type
    JSDocNullableType,
    JSDocNonNullableType,
    JSDocOptionalType,
    JSDocFunctionType,
    JSDocVariadicType,
    JSDocNamepathType, // https://jsdoc.app/about-namepaths.html
    JSDoc,
    /** @deprecated Use SyntaxKind.JSDoc */
    JSDocComment = JSDoc,
    JSDocText,
    JSDocTypeLiteral,
    JSDocSignature,
    JSDocLink,
    JSDocLinkCode,
    JSDocLinkPlain,
    JSDocTag,
    JSDocAugmentsTag,
    JSDocImplementsTag,
    JSDocAuthorTag,
    JSDocDeprecatedTag,
    JSDocClassTag,
    JSDocPublicTag,
    JSDocPrivateTag,
    JSDocProtectedTag,
    JSDocReadonlyTag,
    JSDocOverrideTag,
    JSDocCallbackTag,
    JSDocOverloadTag,
    JSDocEnumTag,
    JSDocParameterTag,
    JSDocReturnTag,
    JSDocThisTag,
    JSDocTypeTag,
    JSDocTemplateTag,
    JSDocTypedefTag,
    JSDocSeeTag,
    JSDocPropertyTag,
    JSDocThrowsTag,
    JSDocSatisfiesTag,

    // Synthesized list
    SyntaxList,

    // Transformation nodes
    NotEmittedStatement,
    PartiallyEmittedExpression,
    CommaListExpression,
    SyntheticReferenceExpression,

    // Enum value count
    Count,

    // Markers
    FirstAssignment = EqualsToken,
    LastAssignment = CaretEqualsToken,
    FirstCompoundAssignment = PlusEqualsToken,
    LastCompoundAssignment = CaretEqualsToken,
    FirstReservedWord = BreakKeyword,
    LastReservedWord = WithKeyword,
    FirstKeyword = BreakKeyword,
    LastKeyword = OfKeyword,
    FirstFutureReservedWord = ImplementsKeyword,
    LastFutureReservedWord = YieldKeyword,
    FirstTypeNode = TypePredicate,
    LastTypeNode = ImportType,
    FirstPunctuation = OpenBraceToken,
    LastPunctuation = CaretEqualsToken,
    FirstToken = Unknown,
    LastToken = LastKeyword,
    FirstTriviaToken = SingleLineCommentTrivia,
    LastTriviaToken = ConflictMarkerTrivia,
    FirstLiteralToken = NumericLiteral,
    LastLiteralToken = NoSubstitutionTemplateLiteral,
    FirstTemplateToken = NoSubstitutionTemplateLiteral,
    LastTemplateToken = TemplateTail,
    FirstBinaryOperator = LessThanToken,
    LastBinaryOperator = CaretEqualsToken,
    FirstStatement = VariableStatement,
    LastStatement = DebuggerStatement,
    FirstNode = QualifiedName,
    FirstJSDocNode = JSDocTypeExpression,
    LastJSDocNode = JSDocSatisfiesTag,
    FirstJSDocTagNode = JSDocTag,
    LastJSDocTagNode = JSDocSatisfiesTag,
    /** @internal */ FirstContextualKeyword = AbstractKeyword,
    /** @internal */ LastContextualKeyword = OfKeyword,
}

export type TriviaSyntaxKind =
    | SyntaxKind.SingleLineCommentTrivia
    | SyntaxKind.MultiLineCommentTrivia
    | SyntaxKind.NewLineTrivia
    | SyntaxKind.WhitespaceTrivia
    | SyntaxKind.ShebangTrivia
    | SyntaxKind.ConflictMarkerTrivia;

export type LiteralSyntaxKind =
    | SyntaxKind.NumericLiteral
    | SyntaxKind.BigIntLiteral
    | SyntaxKind.StringLiteral
    | SyntaxKind.JsxText
    | SyntaxKind.JsxTextAllWhiteSpaces
    | SyntaxKind.RegularExpressionLiteral
    | SyntaxKind.NoSubstitutionTemplateLiteral;

export type PseudoLiteralSyntaxKind =
    | SyntaxKind.TemplateHead
    | SyntaxKind.TemplateMiddle
    | SyntaxKind.TemplateTail;

export type PunctuationSyntaxKind =
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.CloseBraceToken
    | SyntaxKind.OpenParenToken
    | SyntaxKind.CloseParenToken
    | SyntaxKind.OpenBracketToken
    | SyntaxKind.CloseBracketToken
    | SyntaxKind.DotToken
    | SyntaxKind.DotDotDotToken
    | SyntaxKind.SemicolonToken
    | SyntaxKind.CommaToken
    | SyntaxKind.QuestionDotToken
    | SyntaxKind.LessThanToken
    | SyntaxKind.LessThanSlashToken
    | SyntaxKind.GreaterThanToken
    | SyntaxKind.LessThanEqualsToken
    | SyntaxKind.GreaterThanEqualsToken
    | SyntaxKind.EqualsEqualsToken
    | SyntaxKind.ExclamationEqualsToken
    | SyntaxKind.EqualsEqualsEqualsToken
    | SyntaxKind.ExclamationEqualsEqualsToken
    | SyntaxKind.EqualsGreaterThanToken
    | SyntaxKind.PlusToken
    | SyntaxKind.MinusToken
    | SyntaxKind.AsteriskToken
    | SyntaxKind.AsteriskAsteriskToken
    | SyntaxKind.SlashToken
    | SyntaxKind.PercentToken
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.MinusMinusToken
    | SyntaxKind.LessThanLessThanToken
    | SyntaxKind.GreaterThanGreaterThanToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanToken
    | SyntaxKind.AmpersandToken
    | SyntaxKind.BarToken
    | SyntaxKind.CaretToken
    | SyntaxKind.ExclamationToken
    | SyntaxKind.TildeToken
    | SyntaxKind.AmpersandAmpersandToken
    | SyntaxKind.AmpersandAmpersandEqualsToken
    | SyntaxKind.BarBarToken
    | SyntaxKind.BarBarEqualsToken
    | SyntaxKind.QuestionQuestionToken
    | SyntaxKind.QuestionQuestionEqualsToken
    | SyntaxKind.QuestionToken
    | SyntaxKind.ColonToken
    | SyntaxKind.AtToken
    | SyntaxKind.BacktickToken
    | SyntaxKind.HashToken
    | SyntaxKind.EqualsToken
    | SyntaxKind.PlusEqualsToken
    | SyntaxKind.MinusEqualsToken
    | SyntaxKind.AsteriskEqualsToken
    | SyntaxKind.AsteriskAsteriskEqualsToken
    | SyntaxKind.SlashEqualsToken
    | SyntaxKind.PercentEqualsToken
    | SyntaxKind.LessThanLessThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken
    | SyntaxKind.AmpersandEqualsToken
    | SyntaxKind.BarEqualsToken
    | SyntaxKind.CaretEqualsToken;

/** @internal */
export type PunctuationOrKeywordSyntaxKind = PunctuationSyntaxKind | KeywordSyntaxKind;

export type KeywordSyntaxKind =
    | SyntaxKind.AbstractKeyword
    | SyntaxKind.AccessorKeyword
    | SyntaxKind.AnyKeyword
    | SyntaxKind.AsKeyword
    | SyntaxKind.AssertsKeyword
    | SyntaxKind.AssertKeyword
    | SyntaxKind.AsyncKeyword
    | SyntaxKind.AwaitKeyword
    | SyntaxKind.BigIntKeyword
    | SyntaxKind.BooleanKeyword
    | SyntaxKind.BreakKeyword
    | SyntaxKind.CaseKeyword
    | SyntaxKind.CatchKeyword
    | SyntaxKind.ClassKeyword
    | SyntaxKind.ConstKeyword
    | SyntaxKind.ConstructorKeyword
    | SyntaxKind.ContinueKeyword
    | SyntaxKind.DebuggerKeyword
    | SyntaxKind.DeclareKeyword
    | SyntaxKind.DefaultKeyword
    | SyntaxKind.DeleteKeyword
    | SyntaxKind.DoKeyword
    | SyntaxKind.ElseKeyword
    | SyntaxKind.EnumKeyword
    | SyntaxKind.ExportKeyword
    | SyntaxKind.ExtendsKeyword
    | SyntaxKind.FalseKeyword
    | SyntaxKind.FinallyKeyword
    | SyntaxKind.ForKeyword
    | SyntaxKind.FromKeyword
    | SyntaxKind.FunctionKeyword
    | SyntaxKind.GetKeyword
    | SyntaxKind.GlobalKeyword
    | SyntaxKind.IfKeyword
    | SyntaxKind.ImplementsKeyword
    | SyntaxKind.ImportKeyword
    | SyntaxKind.InferKeyword
    | SyntaxKind.InKeyword
    | SyntaxKind.InstanceOfKeyword
    | SyntaxKind.InterfaceKeyword
    | SyntaxKind.IntrinsicKeyword
    | SyntaxKind.IsKeyword
    | SyntaxKind.KeyOfKeyword
    | SyntaxKind.LetKeyword
    | SyntaxKind.ModuleKeyword
    | SyntaxKind.NamespaceKeyword
    | SyntaxKind.NeverKeyword
    | SyntaxKind.NewKeyword
    | SyntaxKind.NullKeyword
    | SyntaxKind.NumberKeyword
    | SyntaxKind.ObjectKeyword
    | SyntaxKind.OfKeyword
    | SyntaxKind.PackageKeyword
    | SyntaxKind.PrivateKeyword
    | SyntaxKind.ProtectedKeyword
    | SyntaxKind.PublicKeyword
    | SyntaxKind.ReadonlyKeyword
    | SyntaxKind.OutKeyword
    | SyntaxKind.OverrideKeyword
    | SyntaxKind.RequireKeyword
    | SyntaxKind.ReturnKeyword
    | SyntaxKind.SatisfiesKeyword
    | SyntaxKind.SetKeyword
    | SyntaxKind.StaticKeyword
    | SyntaxKind.StringKeyword
    | SyntaxKind.SuperKeyword
    | SyntaxKind.SwitchKeyword
    | SyntaxKind.SymbolKeyword
    | SyntaxKind.ThisKeyword
    | SyntaxKind.ThrowKeyword
    | SyntaxKind.TrueKeyword
    | SyntaxKind.TryKeyword
    | SyntaxKind.TypeKeyword
    | SyntaxKind.TypeOfKeyword
    | SyntaxKind.UndefinedKeyword
    | SyntaxKind.UniqueKeyword
    | SyntaxKind.UnknownKeyword
    | SyntaxKind.UsingKeyword
    | SyntaxKind.VarKeyword
    | SyntaxKind.VoidKeyword
    | SyntaxKind.WhileKeyword
    | SyntaxKind.WithKeyword
    | SyntaxKind.YieldKeyword;

export type ModifierSyntaxKind =
    | SyntaxKind.AbstractKeyword
    | SyntaxKind.AccessorKeyword
    | SyntaxKind.AsyncKeyword
    | SyntaxKind.ConstKeyword
    | SyntaxKind.DeclareKeyword
    | SyntaxKind.DefaultKeyword
    | SyntaxKind.ExportKeyword
    | SyntaxKind.InKeyword
    | SyntaxKind.PrivateKeyword
    | SyntaxKind.ProtectedKeyword
    | SyntaxKind.PublicKeyword
    | SyntaxKind.ReadonlyKeyword
    | SyntaxKind.OutKeyword
    | SyntaxKind.OverrideKeyword
    | SyntaxKind.StaticKeyword;

export type KeywordTypeSyntaxKind =
    | SyntaxKind.AnyKeyword
    | SyntaxKind.BigIntKeyword
    | SyntaxKind.BooleanKeyword
    | SyntaxKind.IntrinsicKeyword
    | SyntaxKind.NeverKeyword
    | SyntaxKind.NumberKeyword
    | SyntaxKind.ObjectKeyword
    | SyntaxKind.StringKeyword
    | SyntaxKind.SymbolKeyword
    | SyntaxKind.UndefinedKeyword
    | SyntaxKind.UnknownKeyword
    | SyntaxKind.VoidKeyword;

/** @internal */
export type TypeNodeSyntaxKind =
    | KeywordTypeSyntaxKind
    | SyntaxKind.TypePredicate
    | SyntaxKind.TypeReference
    | SyntaxKind.FunctionType
    | SyntaxKind.ConstructorType
    | SyntaxKind.TypeQuery
    | SyntaxKind.TypeLiteral
    | SyntaxKind.ArrayType
    | SyntaxKind.TupleType
    | SyntaxKind.NamedTupleMember
    | SyntaxKind.OptionalType
    | SyntaxKind.RestType
    | SyntaxKind.UnionType
    | SyntaxKind.IntersectionType
    | SyntaxKind.ConditionalType
    | SyntaxKind.InferType
    | SyntaxKind.ParenthesizedType
    | SyntaxKind.ThisType
    | SyntaxKind.TypeOperator
    | SyntaxKind.IndexedAccessType
    | SyntaxKind.MappedType
    | SyntaxKind.LiteralType
    | SyntaxKind.TemplateLiteralType
    | SyntaxKind.TemplateLiteralTypeSpan
    | SyntaxKind.ImportType
    | SyntaxKind.ExpressionWithTypeArguments
    | SyntaxKind.JSDocTypeExpression
    | SyntaxKind.JSDocAllType
    | SyntaxKind.JSDocUnknownType
    | SyntaxKind.JSDocNonNullableType
    | SyntaxKind.JSDocNullableType
    | SyntaxKind.JSDocOptionalType
    | SyntaxKind.JSDocFunctionType
    | SyntaxKind.JSDocVariadicType
    | SyntaxKind.JSDocNamepathType
    | SyntaxKind.JSDocSignature
    | SyntaxKind.JSDocTypeLiteral;

export type TokenSyntaxKind =
    | SyntaxKind.Unknown
    | SyntaxKind.EndOfFileToken
    | TriviaSyntaxKind
    | LiteralSyntaxKind
    | PseudoLiteralSyntaxKind
    | PunctuationSyntaxKind
    | SyntaxKind.Identifier
    | KeywordSyntaxKind;

export type JsxTokenSyntaxKind =
    | SyntaxKind.LessThanSlashToken
    | SyntaxKind.EndOfFileToken
    | SyntaxKind.ConflictMarkerTrivia
    | SyntaxKind.JsxText
    | SyntaxKind.JsxTextAllWhiteSpaces
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.LessThanToken;

export type JSDocSyntaxKind =
    | SyntaxKind.EndOfFileToken
    | SyntaxKind.WhitespaceTrivia
    | SyntaxKind.AtToken
    | SyntaxKind.NewLineTrivia
    | SyntaxKind.AsteriskToken
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.CloseBraceToken
    | SyntaxKind.LessThanToken
    | SyntaxKind.GreaterThanToken
    | SyntaxKind.OpenBracketToken
    | SyntaxKind.CloseBracketToken
    | SyntaxKind.EqualsToken
    | SyntaxKind.CommaToken
    | SyntaxKind.DotToken
    | SyntaxKind.Identifier
    | SyntaxKind.BacktickToken
    | SyntaxKind.HashToken
    | SyntaxKind.Unknown
    | KeywordSyntaxKind
;





// dprint-ignore
export const enum NodeFlags {
    None               = 0,
    Let                = 1 << 0,  // Variable declaration
    Const              = 1 << 1,  // Variable declaration
    Using              = 1 << 2,  // Variable declaration
    AwaitUsing         = Const | Using, // Variable declaration (NOTE: on a single node these flags would otherwise be mutually exclusive)
    NestedNamespace    = 1 << 3,  // Namespace declaration
    Synthesized        = 1 << 4,  // Node was synthesized during transformation
    Namespace          = 1 << 5,  // Namespace declaration
    OptionalChain      = 1 << 6,  // Chained MemberExpression rooted to a pseudo-OptionalExpression
    ExportContext      = 1 << 7,  // Export context (initialized by binding)
    ContainsThis       = 1 << 8,  // Interface contains references to "this"
    HasImplicitReturn  = 1 << 9,  // If function implicitly returns on one of codepaths (initialized by binding)
    HasExplicitReturn  = 1 << 10,  // If function has explicit reachable return on one of codepaths (initialized by binding)
    GlobalAugmentation = 1 << 11,  // Set if module declaration is an augmentation for the global scope
    HasAsyncFunctions  = 1 << 12, // If the file has async functions (initialized by binding)
    DisallowInContext  = 1 << 13, // If node was parsed in a context where 'in-expressions' are not allowed
    YieldContext       = 1 << 14, // If node was parsed in the 'yield' context created when parsing a generator
    DecoratorContext   = 1 << 15, // If node was parsed as part of a decorator
    AwaitContext       = 1 << 16, // If node was parsed in the 'await' context created when parsing an async function
    DisallowConditionalTypesContext = 1 << 17, // If node was parsed in a context where conditional types are not allowed
    ThisNodeHasError   = 1 << 18, // If the parser encountered an error when parsing the code that created this node
    JavaScriptFile     = 1 << 19, // If node was parsed in a JavaScript
    ThisNodeOrAnySubNodesHasError = 1 << 20, // If this node or any of its children had an error
    HasAggregatedChildData = 1 << 21, // If we've computed data from children and cached it in this node

    // These flags will be set when the parser encounters a dynamic import expression or 'import.meta' to avoid
    // walking the tree if the flags are not set. However, these flags are just a approximation
    // (hence why it's named "PossiblyContainsDynamicImport") because once set, the flags never get cleared.
    // During editing, if a dynamic import is removed, incremental parsing will *NOT* clear this flag.
    // This means that the tree will always be traversed during module resolution, or when looking for external module indicators.
    // However, the removal operation should not occur often and in the case of the
    // removal, it is likely that users will add the import anyway.
    // The advantage of this approach is its simplicity. For the case of batch compilation,
    // we guarantee that users won't have to pay the price of walking the tree if a dynamic import isn't used.
    /** @internal */ PossiblyContainsDynamicImport = 1 << 22,
    /** @internal */ PossiblyContainsImportMeta    = 1 << 23,

    JSDoc                                          = 1 << 24, // If node was parsed inside jsdoc
    /** @internal */ Ambient                       = 1 << 25, // If node was inside an ambient context -- a declaration file, or inside something with the `declare` modifier.
    /** @internal */ InWithStatement               = 1 << 26, // If any ancestor of node was the `statement` of a WithStatement (not the `expression`)
    JsonFile                                       = 1 << 27, // If node was parsed in a Json
    /** @internal */ TypeCached                    = 1 << 28, // If a type was cached for node at any point
    /** @internal */ Deprecated                    = 1 << 29, // If has '@deprecated' JSDoc tag

    BlockScoped = Let | Const | Using,
    Constant = Const | Using,

    ReachabilityCheckFlags = HasImplicitReturn | HasExplicitReturn,
    ReachabilityAndEmitFlags = ReachabilityCheckFlags | HasAsyncFunctions,

    // Parsing context flags
    ContextFlags = DisallowInContext | DisallowConditionalTypesContext | YieldContext | DecoratorContext | AwaitContext | JavaScriptFile | InWithStatement | Ambient,

    // Exclude these flags when parsing a Type
    TypeExcludesFlags = YieldContext | AwaitContext,

    // Represents all flags that are potentially set once and
    // never cleared on SourceFiles which get re-used in between incremental parses.
    // See the comment above on `PossiblyContainsDynamicImport` and `PossiblyContainsImportMeta`.
    /** @internal */ PermanentlySetIncrementalFlags = PossiblyContainsDynamicImport | PossiblyContainsImportMeta,

    // The following flags repurpose other NodeFlags as different meanings for Identifier nodes
    /** @internal */ IdentifierHasExtendedUnicodeEscape = ContainsThis, // Indicates whether the identifier contains an extended unicode escape sequence
    /** @internal */ IdentifierIsInJSDocNamespace = HasAsyncFunctions, // Indicates whether the identifier is part of a JSDoc namespace
}

// dprint-ignore
export const enum ModifierFlags {
    None =               0,

    // Syntactic/JSDoc modifiers
    Public =             1 << 0,  // Property/Method
    Private =            1 << 1,  // Property/Method
    Protected =          1 << 2,  // Property/Method
    Readonly =           1 << 3,  // Property/Method
    Override =           1 << 4,  // Override method.

    // Syntactic-only modifiers
    Export =             1 << 5,  // Declarations
    Abstract =           1 << 6,  // Class/Method/ConstructSignature
    Ambient =            1 << 7,  // Declarations
    Static =             1 << 8,  // Property/Method
    Accessor =           1 << 9,  // Property
    Async =              1 << 10, // Property/Method/Function
    Default =            1 << 11, // Function/Class (export default declaration)
    Const =              1 << 12, // Const enum
    In =                 1 << 13, // Contravariance modifier
    Out =                1 << 14, // Covariance modifier
    Decorator =          1 << 15, // Contains a decorator.

    // JSDoc-only modifiers
    Deprecated =         1 << 16, // Deprecated tag.

    // Cache-only JSDoc-modifiers. Should match order of Syntactic/JSDoc modifiers, above.
    /** @internal */ JSDocPublic = 1 << 23, // if this value changes, `selectEffectiveModifierFlags` must change accordingly
    /** @internal */ JSDocPrivate = 1 << 24,
    /** @internal */ JSDocProtected = 1 << 25,
    /** @internal */ JSDocReadonly = 1 << 26,
    /** @internal */ JSDocOverride = 1 << 27,

    /** @internal */ SyntacticOrJSDocModifiers = Public | Private | Protected | Readonly | Override,
    /** @internal */ SyntacticOnlyModifiers = Export | Ambient | Abstract | Static | Accessor | Async | Default | Const | In | Out | Decorator,
    /** @internal */ SyntacticModifiers = SyntacticOrJSDocModifiers | SyntacticOnlyModifiers,
    /** @internal */ JSDocCacheOnlyModifiers = JSDocPublic | JSDocPrivate | JSDocProtected | JSDocReadonly | JSDocOverride,
    /** @internal */ JSDocOnlyModifiers = Deprecated,
    /** @internal */ NonCacheOnlyModifiers = SyntacticOrJSDocModifiers | SyntacticOnlyModifiers | JSDocOnlyModifiers,

    HasComputedJSDocModifiers = 1 << 28, // Indicates the computed modifier flags include modifiers from JSDoc.
    HasComputedFlags =   1 << 29, // Modifier flags have been computed

    AccessibilityModifier = Public | Private | Protected,
    // Accessibility modifiers and 'readonly' can be attached to a parameter in a constructor to make it a property.
    ParameterPropertyModifier = AccessibilityModifier | Readonly | Override,
    NonPublicAccessibilityModifier = Private | Protected,

    TypeScriptModifier = Ambient | Public | Private | Protected | Readonly | Abstract | Const | Override | In | Out,
    ExportDefault = Export | Default,
    All = Export | Ambient | Public | Private | Protected | Static | Readonly | Abstract | Accessor | Async | Default | Const | Deprecated | Override | In | Out | Decorator,
    Modifier = All & ~Decorator,
}

export const enum JsxFlags {
    None = 0,
    /** An element from a named property of the JSX.IntrinsicElements interface */
    IntrinsicNamedElement = 1 << 0,
    /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
    IntrinsicIndexedElement = 1 << 1,

    IntrinsicElement = IntrinsicNamedElement | IntrinsicIndexedElement,
}

// dprint-ignore
/** @internal */
export const enum RelationComparisonResult {
    None                = 0,
    Succeeded           = 1 << 0, // Should be truthy
    Failed              = 1 << 1,
    Reported            = 1 << 2,

    ReportsUnmeasurable = 1 << 3,
    ReportsUnreliable   = 1 << 4,
    ReportsMask         = ReportsUnmeasurable | ReportsUnreliable,
}

/** @internal */
export type NodeId = number & { nodeIdObjBrand ?: any ; } ;

export interface Node extends ReadonlyTextRange
{
    readonly kind: SyntaxKind;
    readonly flags: NodeFlags;
    /** @internal */ modifierFlagsCache: ModifierFlags;
    /** @internal */ readonly transformFlags: TransformFlags; // Flags for transforms
    /** @internal */ id?: NodeId; // Unique id (used to look up NodeLinks)
    readonly parent?: Node; // Parent node (not available for functionally-handled nodes )
    /** @internal */ original?: Node; // The original node if this is an updated node.
    /** @internal */ emitNode?: EmitNode; // Associated EmitNode (initialized by transforms)
    // NOTE: `symbol` and `localSymbol` have been moved to `Declaration`
    //       `locals` and `nextContainer` have been moved to `LocalsContainer`
    //       `flowNode` has been moved to `FlowContainer`
    //       see: https://github.com/microsoft/TypeScript/pull/51682
}

/**
* {@link Node}s generated functionally ;
* unlike parser-generated {@link Node} which has ref `parenr`, FG-ed {@link Node}s don't
* 
*/
export interface FunctionallyGeneratedNode extends Node
{
    readonly parent?: never; // Parent node will not be available in macro-generated Node(s)
}

export interface PhysicalNode extends Node
{
    readonly parent: Node; // Parent node
}

export interface JSDocContainer extends Node {
    _jsdocContainerBrand: any;
    /** @internal */ jsDoc?: JSDocArray; // JSDoc that directly precedes this node
}

/** @internal */
export interface JSDocArray extends ReadonlyArray<Node> {
    // jsDocCache?: readonly JSDocTag[]; // Cache for getJSDocTags
}

export interface LocalsContainer extends Node {
    _localsContainerBrand: any;
    /** @internal */ locals?: SymbolTable; // Locals associated with node (initialized by binding)
    /** @internal */ nextContainer?: HasLocals; // Next container in declaration order (initialized by binding)
}

export interface FlowContainer extends Node {
    _flowContainerBrand: any;
    /** @internal */ flowNode?: FlowNode; // Associated FlowNode (initialized by binding)
}

// export interface FlowNode {}

export interface Declaration extends Node {
    _declarationBrand: any;
    /** @internal */ symbol: Symbol; // Symbol declared by node (initialized by binding)
    /** @internal */ localSymbol?: Symbol; // Local symbol declared by node (initialized by binding only for exported nodes)
}

export interface NamedDeclaration extends Declaration {
    readonly name?: Node;
}

type TypeChecker = TypeCheckerImpl ;

interface TypeCheckerAssociatedMaybe {
    checker ?: TypeChecker ;
}





// dprint-ignore
export const enum SymbolFlags {
    None                    = 0,
    FunctionScopedVariable  = 1 << 0,   // Variable (var) or parameter
    BlockScopedVariable     = 1 << 1,   // A block-scoped variable (let or const)
    Property                = 1 << 2,   // Property or enum member
    EnumMember              = 1 << 3,   // Enum member
    Function                = 1 << 4,   // Function
    Class                   = 1 << 5,   // Class
    Interface               = 1 << 6,   // Interface
    ConstEnum               = 1 << 7,   // Const enum
    RegularEnum             = 1 << 8,   // Enum
    ValueModule             = 1 << 9,   // Instantiated module
    NamespaceModule         = 1 << 10,  // Uninstantiated module
    TypeLiteral             = 1 << 11,  // Type Literal or mapped type
    ObjectLiteral           = 1 << 12,  // Object Literal
    Method                  = 1 << 13,  // Method
    Constructor             = 1 << 14,  // Constructor
    GetAccessor             = 1 << 15,  // Get accessor
    SetAccessor             = 1 << 16,  // Set accessor
    Signature               = 1 << 17,  // Call, construct, or index signature
    TypeParameter           = 1 << 18,  // Type parameter
    TypeAlias               = 1 << 19,  // Type alias
    ExportValue             = 1 << 20,  // Exported value marker (see comment in declareModuleMember in binder)
    Alias                   = 1 << 21,  // An alias for another symbol (see comment in isAliasSymbolDeclaration in checker)
    Prototype               = 1 << 22,  // Prototype property (no source representation)
    ExportStar              = 1 << 23,  // Export * declaration
    Optional                = 1 << 24,  // Optional property
    Transient               = 1 << 25,  // Transient symbol (created during type check)
    Assignment              = 1 << 26,  // Assignment treated as declaration (eg `this.prop = 1`)
    ModuleExports           = 1 << 27,  // Symbol for CommonJS `module` of `module.exports`
    All = -1,

    Enum = RegularEnum | ConstEnum,
    Variable = FunctionScopedVariable | BlockScopedVariable,
    Value = Variable | Property | EnumMember | ObjectLiteral | Function | Class | Enum | ValueModule | Method | GetAccessor | SetAccessor,
    Type = Class | Interface | Enum | EnumMember | TypeLiteral | TypeParameter | TypeAlias,
    Namespace = ValueModule | NamespaceModule | Enum,
    Module = ValueModule | NamespaceModule,
    Accessor = GetAccessor | SetAccessor,

    // Variables can be redeclared, but can not redeclare a block-scoped declaration with the
    // same name, or any other value that is not a variable, e.g. ValueModule or Class
    FunctionScopedVariableExcludes = Value & ~FunctionScopedVariable,

    // Block-scoped declarations are not allowed to be re-declared
    // they can not merge with anything in the value space
    BlockScopedVariableExcludes = Value,

    ParameterExcludes = Value,
    PropertyExcludes = None,
    EnumMemberExcludes = Value | Type,
    FunctionExcludes = Value & ~(Function | ValueModule | Class),
    ClassExcludes = (Value | Type) & ~(ValueModule | Interface | Function), // class-interface mergability done in checker.ts
    InterfaceExcludes = Type & ~(Interface | Class),
    RegularEnumExcludes = (Value | Type) & ~(RegularEnum | ValueModule), // regular enums merge only with regular enums and modules
    ConstEnumExcludes = (Value | Type) & ~ConstEnum, // const enums merge only with const enums
    ValueModuleExcludes = Value & ~(Function | Class | RegularEnum | ValueModule),
    NamespaceModuleExcludes = 0,
    MethodExcludes = Value & ~Method,
    GetAccessorExcludes = Value & ~SetAccessor,
    SetAccessorExcludes = Value & ~GetAccessor,
    AccessorExcludes = Value & ~Accessor,
    TypeParameterExcludes = Type & ~TypeParameter,
    TypeAliasExcludes = Type,
    AliasExcludes = Alias,

    ModuleMember = Variable | Function | Class | Interface | Enum | Module | TypeAlias | Alias,

    ExportHasLocal = Function | Class | Enum | ValueModule,

    BlockScoped = BlockScopedVariable | Class | Enum,

    PropertyOrAccessor = Property | Accessor,

    ClassMember = Method | Accessor | Property,

    /** @internal */
    ExportSupportsDefaultModifier = Class | Function | Interface,

    /** @internal */
    ExportDoesNotSupportDefaultModifier = ~ExportSupportsDefaultModifier,

    /** @internal */
    // The set of things we consider semantically classifiable.  Used to speed up the LS during
    // classification.
    Classifiable = Class | Enum | TypeAlias | Interface | TypeParameter | Module | Alias,

    /** @internal */
    LateBindingContainer = Class | Interface | TypeLiteral | ObjectLiteral | Function,
}

/** @internal */
export type SymbolId = number;

// dprint-ignore
export interface Symbol {
    flags: SymbolFlags;                     // Symbol flags
    escapedName: __String;                  // Name of symbol
    members?: SymbolTable;                  // Class, interface or object literal instance members
    exports?: SymbolTable;                  // Module exports
    globalExports?: SymbolTable;            // Conditional global UMD exports
    /** @internal */ id: SymbolId;          // Unique id (used to look up SymbolLinks)
    /** @internal */ mergeId: number;       // Merge id (used to look up merged symbol)
    /** @internal */ parent?: Symbol;       // Parent symbol
    /** @internal */ exportSymbol?: Symbol; // Exported symbol associated with this symbol
    /** @internal */ constEnumOnlyModule: boolean | undefined; // True if module contains only const enums or other modules with only const enums
    /** @internal */ isReferenced?: SymbolFlags; // True if the symbol is referenced elsewhere. Keeps track of the meaning of a reference in case a symbol is both a type parameter and parameter.
    /** @internal */ lastAssignmentPos?: number; // Source position of last node that assigns value to symbol
    /** @internal */ isReplaceableByMethod?: boolean; // Can this Javascript class property be replaced by a method symbol?
}

export interface DeclaredSymbol extends Symbol
{
    declarations?: Declaration[];           // Declarations associated with this symbol
    valueDeclaration?: Declaration;         // First value declaration of the symbol
    /** @internal */ assignmentDeclarationMembers?: Map<number, Declaration>; // detected late-bound assignment declarations associated with the symbol
}

// dprint-ignore
/** @internal */
export interface SymbolLinks {
    _symbolLinksBrand: any;
    immediateTarget?: Symbol;                   // Immediate target of an alias. May be another alias. Do not access directly, use `checker.getImmediateAliasedSymbol` instead.
    aliasTarget?: Symbol,                       // Resolved (non-alias) target of an alias
    target?: Symbol;                            // Original version of an instantiated symbol
    type?: Type;                                // Type of value symbol
    writeType?: Type;                           // Type of value symbol in write contexts
    nameType?: Type;                            // Type associated with a late-bound symbol
    uniqueESSymbolType?: Type;                  // UniqueESSymbol type for a symbol
    declaredType?: Type;                        // Type of class, interface, enum, type alias, or type parameter
    typeParameters?: TypeParameter[];           // Type parameters of type alias (undefined if non-generic)
    outerTypeParameters?: TypeParameter[];      // Outer type parameters of anonymous object type
    instantiations?: Map<string, Type>;         // Instantiations of generic type alias (undefined if non-generic)
    aliasSymbol?: Symbol;                       // Alias associated with generic type alias instantiation
    aliasTypeArguments?: readonly Type[]        // Alias type arguments (if any)
    inferredClassSymbol?: Map<SymbolId, TransientSymbol>; // Symbol of an inferred ES5 constructor function
    mapper?: TypeMapper;                        // Type mapper for instantiation alias
    referenced?: boolean;                       // True if alias symbol has been referenced as a value that can be emitted
    constEnumReferenced?: boolean;              // True if alias symbol resolves to a const enum and is referenced as a value ('referenced' will be false)
    containingType?: UnionOrIntersectionType;   // Containing union or intersection type for synthetic property
    leftSpread?: Symbol;                        // Left source for synthetic spread property
    rightSpread?: Symbol;                       // Right source for synthetic spread property
    syntheticOrigin?: Symbol;                   // For a property on a mapped or spread type, points back to the original property
    isDiscriminantProperty?: boolean;           // True if discriminant synthetic property
    resolvedExports?: SymbolTable;              // Resolved exports of module or combined early- and late-bound static members of a class.
    resolvedMembers?: SymbolTable;              // Combined early- and late-bound members of a symbol
    exportsChecked?: boolean;                   // True if exports of external module have been checked
    typeParametersChecked?: boolean;            // True if type parameters of merged class and interface declarations have been checked.
    isDeclarationWithCollidingName?: boolean;   // True if symbol is block scoped redeclaration
    exportsSomeValue?: boolean;                 // True if module exports some value (not just types)
    enumKind?: EnumKind;                        // Enum declaration classification
    lateSymbol?: Symbol;                        // Late-bound symbol for a computed property
    specifierCache?: Map<ModeAwareCacheKey, string>; // For symbols corresponding to external modules, a cache of incoming path -> module specifier name mappings
    extendedContainers?: Symbol[];              // Containers (other than the parent) which this symbol is aliased in
    extendedContainersByFile?: Map<NodeId, Symbol[]>; // Containers (other than the parent) which this symbol is aliased in
    variances?: VarianceFlags[];                // Alias symbol type argument variance cache
    deferralConstituents?: Type[];              // Calculated list of constituents for a deferred type
    deferralWriteConstituents?: Type[];         // Constituents of a deferred `writeType`
    deferralParent?: Type;                      // Source union/intersection of a deferred type
    cjsExportMerged?: Symbol;                   // Version of the symbol with all non export= exports merged with the export= target
    typeOnlyExportStarName?: __String;          // Set to the name of the symbol re-exported by an 'export type *' declaration, when different from the symbol name
    isConstructorDeclaredProperty?: boolean;    // Property declared through 'this.x = ...' assignment in constructor
    accessibleChainCache?: Map<string, Symbol[] | undefined>;
    filteredIndexSymbolCache?: Map<string, Symbol> //Symbol with applicable declarations
}

// export interface DeclaredSymbolInterLinks extends SymbolLinks
// {
//   tupleLabelDeclaration?: NamedTupleMember | ParameterDeclaration; // Declaration associated with the tuple's label
//   typeOnlyDeclaration?: TypeOnlyAliasDeclaration | false; // First resolved alias declaration that makes the symbol only usable in type constructs
//   typeOnlyExportStarMap?: Map<__String, ExportDeclaration & { readonly isTypeOnly: true, readonly moduleSpecifier: Expression }>; // Set on a module symbol when some of its exports were resolved through a 'export type * from "mod"' declaration
//   bindingElement?: BindingElement;            // Binding element associated with property symbol
//   originatingImport?: ImportDeclaration | ImportCall; // Import declaration which produced the symbol, present if the symbol is marked as uncallable but had call signatures in `resolveESModuleSymbol`
// }

/** @internal */
export const enum EnumKind {
    Numeric, // Numeric enum (each member has a TypeFlags.Enum type)
    Literal, // Literal enum (each member has a TypeFlags.EnumLiteral type)
}

// dprint-ignore
/** @internal */
export const enum CheckFlags {
    None              = 0,
    Instantiated      = 1 << 0,         // Instantiated symbol
    SyntheticProperty = 1 << 1,         // Property in union or intersection type
    SyntheticMethod   = 1 << 2,         // Method in union or intersection type
    Readonly          = 1 << 3,         // Readonly transient symbol
    ReadPartial       = 1 << 4,         // Synthetic property present in some but not all constituents
    WritePartial      = 1 << 5,         // Synthetic property present in some but only satisfied by an index signature in others
    HasNonUniformType = 1 << 6,         // Synthetic property with non-uniform type in constituents
    HasLiteralType    = 1 << 7,         // Synthetic property with at least one literal type in constituents
    ContainsPublic    = 1 << 8,         // Synthetic property with public constituent(s)
    ContainsProtected = 1 << 9,         // Synthetic property with protected constituent(s)
    ContainsPrivate   = 1 << 10,        // Synthetic property with private constituent(s)
    ContainsStatic    = 1 << 11,        // Synthetic property with static constituent(s)
    Late              = 1 << 12,        // Late-bound symbol for a computed property with a dynamic name
    ReverseMapped     = 1 << 13,        // Property of reverse-inferred homomorphic mapped type
    OptionalParameter = 1 << 14,        // Optional parameter
    RestParameter     = 1 << 15,        // Rest parameter
    DeferredType      = 1 << 16,        // Calculation of the type of this symbol is deferred due to processing costs, should be fetched with `getTypeOfSymbolWithDeferredType`
    HasNeverType      = 1 << 17,        // Synthetic property with at least one never type in constituents
    Mapped            = 1 << 18,        // Property of mapped type
    StripOptional     = 1 << 19,        // Strip optionality in mapped property
    Unresolved        = 1 << 20,        // Unresolved type alias symbol
    Synthetic = SyntheticProperty | SyntheticMethod,
    Discriminant = HasNonUniformType | HasLiteralType,
    Partial = ReadPartial | WritePartial,
}

/** @internal */
export interface TransientSymbolLinks extends SymbolLinks {
    checkFlags: CheckFlags;
}

/** @internal */
export interface TransientSymbol extends Symbol {
    links: TransientSymbolLinks;
}

/** @internal */
export interface MappedSymbolLinks extends TransientSymbolLinks {
    mappedType: MappedType;
    keyType: Type;
}

/** @internal */
export interface MappedSymbol extends TransientSymbol {
    links: MappedSymbolLinks;
}

/** @internal */
export interface ReverseMappedSymbolLinks extends TransientSymbolLinks {
    propertyType: Type;
    mappedType: MappedType;
    constraintType: IndexType;
}

/** @internal */
export interface ReverseMappedSymbol extends TransientSymbol {
    links: ReverseMappedSymbolLinks;
}

export const enum InternalSymbolName {
    Call = "__call", // Call signatures
    Constructor = "__constructor", // Constructor implementations
    New = "__new", // Constructor signatures
    Index = "__index", // Index signatures
    ExportStar = "__export", // Module export * declarations
    Global = "__global", // Global self-reference
    Missing = "__missing", // Indicates missing symbol
    Type = "__type", // Anonymous type literal symbol
    Object = "__object", // Anonymous object literal declaration
    JSXAttributes = "__jsxAttributes", // Anonymous JSX attributes object literal declaration
    Class = "__class", // Unnamed class expression
    Function = "__function", // Unnamed function expression
    Computed = "__computed", // Computed property name declaration with dynamic name
    Resolving = "__resolving__", // Indicator symbol used to mark partially resolved type aliases
    ExportEquals = "export=", // Export assignment symbol
    Default = "default", // Default export symbol (technically not wholly internal, but included here for usability)
    This = "this",
    InstantiationExpression = "__instantiationExpression", // Instantiation expressions
    ImportAttributes = "__importAttributes",
}

/**
 * This represents a string whose leading underscore have been escaped by adding extra leading underscores.
 * The shape of this brand is rather unique compared to others we've used.
 * Instead of just an intersection of a string and an object, it is that union-ed
 * with an intersection of void and an object. This makes it wholly incompatible
 * with a normal string (which is good, it cannot be misused on assignment or on usage),
 * while still being comparable with a normal string via === (also good) and castable from a string.
 */
export type __String = (string & { __escapedIdentifier: void; }) | (void & { __escapedIdentifier: void; }) | InternalSymbolName;

/** @deprecated Use ReadonlyMap<__String, T> instead. */
export type ReadonlyUnderscoreEscapedMap<T> = ReadonlyMap<__String, T>;

/** @deprecated Use Map<__String, T> instead. */
export type UnderscoreEscapedMap<T> = Map<__String, T>;

/** SymbolTable based on ES6 Map interface. */
export type SymbolTable = Map<__String, Symbol>;

// export interface PatternAmbientModule {
//   pattern: Pattern;
//   symbol: Symbol;
// }

// dprint-ignore
/** @internal */
export const enum NodeCheckFlags {
    None                                     = 0,
    TypeChecked                              = 1 << 0,   // Node has been type checked
    LexicalThis                              = 1 << 1,   // Lexical 'this' reference
    CaptureThis                              = 1 << 2,   // Lexical 'this' used in body
    CaptureNewTarget                         = 1 << 3,   // Lexical 'new.target' used in body
    SuperInstance                            = 1 << 4,   // Instance 'super' reference
    SuperStatic                              = 1 << 5,   // Static 'super' reference
    ContextChecked                           = 1 << 6,   // Contextual types have been assigned
    MethodWithSuperPropertyAccessInAsync     = 1 << 7,   // A method that contains a SuperProperty access in an async context.
    MethodWithSuperPropertyAssignmentInAsync = 1 << 8,   // A method that contains a SuperProperty assignment in an async context.
    CaptureArguments                         = 1 << 9,   // Lexical 'arguments' used in body
    EnumValuesComputed                       = 1 << 10,  // Values for enum members have been computed, and any errors have been reported for them.
    LexicalModuleMergesWithClass             = 1 << 11,  // Instantiated lexical module declaration is merged with a previous class declaration.
    LoopWithCapturedBlockScopedBinding       = 1 << 12,  // Loop that contains block scoped variable captured in closure
    ContainsCapturedBlockScopeBinding        = 1 << 13,  // Part of a loop that contains block scoped variable captured in closure
    CapturedBlockScopedBinding               = 1 << 14,  // Block-scoped binding that is captured in some function
    BlockScopedBindingInLoop                 = 1 << 15,  // Block-scoped binding with declaration nested inside iteration statement
    NeedsLoopOutParameter                    = 1 << 16,  // Block scoped binding whose value should be explicitly copied outside of the converted loop
    AssignmentsMarked                        = 1 << 17,  // Parameter assignments have been marked
    ContainsConstructorReference             = 1 << 18,  // Class or class element that contains a binding that references the class constructor.
    ConstructorReference                     = 1 << 29,  // Binding to a class constructor inside of the class's body.
    ContainsClassWithPrivateIdentifiers      = 1 << 20,  // Marked on all block-scoped containers containing a class with private identifiers.
    ContainsSuperPropertyInStaticInitializer = 1 << 21,  // Marked on all block-scoped containers containing a static initializer with 'super.x' or 'super[x]'.
    InCheckIdentifier                        = 1 << 22,
}

// dprint-ignore
/** @internal */
export interface NodeLinks {
    flags: NodeCheckFlags;              // Set of flags specific to Node
    resolvedType?: Type;                // Cached type of type node
    resolvedEnumType?: Type;            // Cached constraint type from enum jsdoc tag
    resolvedSignature?: Signature;      // Cached signature of signature node or call expression
    resolvedSymbol?: Symbol;            // Cached name resolution result
    resolvedIndexInfo?: IndexInfo;      // Cached indexing info resolution result
    effectsSignature?: Signature;       // Signature with possible control flow effects
    enumMemberValue?: string | number;  // Constant value of enum member
    isVisible?: boolean;                // Is this node visible
    containsArgumentsReference?: boolean; // Whether a function-like declaration contains an 'arguments' reference
    hasReportedStatementInAmbientContext?: boolean; // Cache boolean if we report statements in ambient context
    jsxFlags: JsxFlags;                 // flags for knowing what kind of element/attributes we're dealing with
    resolvedJsxElementAttributesType?: Type; // resolved element attributes type of a JSX openinglike element
    resolvedJsxElementAllAttributesType?: Type; // resolved all element attributes type of a JSX openinglike element
    resolvedJSDocType?: Type;           // Resolved type of a JSDoc type reference
    switchTypes?: Type[];               // Cached array of switch case expression types
    jsxNamespace?: Symbol | false;      // Resolved jsx namespace symbol for this node
    jsxImplicitImportContainer?: Symbol | false; // Resolved module symbol the implicit jsx import of this file should refer to
    contextFreeType?: Type;             // Cached context-free type used by the first pass of inference; used when a function's return is partially contextually sensitive
    deferredNodes?: Set<Node>;          // Set of nodes whose checking has been deferred
    capturedBlockScopeBindings?: Symbol[]; // Block-scoped bindings captured beneath this part of an IterationStatement
    outerTypeParameters?: TypeParameter[]; // Outer type parameters of anonymous object type
    isExhaustive?: boolean | 0;         // Is node an exhaustive switch statement (0 indicates in-process resolution)
    skipDirectInference?: true;         // Flag set by the API `getContextualType` call on a node when `Completions` is passed to force the checker to skip making inferences to a node's type
    declarationRequiresScopeChange?: boolean; // Set by `useOuterVariableScopeInParameter` in checker when downlevel emit would change the name resolution scope inside of a parameter.
    serializedTypes?: Map<string, SerializedTypeEntry>; // Collection of types serialized at this location
    decoratorSignature?: Signature;     // Signature for decorator as if invoked by the runtime.
    spreadIndices?: { first: number | undefined, last: number | undefined }; // Indices of first and last spread elements in array literal
    parameterInitializerContainsUndefined?: boolean; // True if this is a parameter declaration whose type annotation contains "undefined".
    fakeScopeForSignatureDeclaration?: "params" | "typeParams"; // If present, this is a fake scope injected into an enclosing declaration chain.
    assertionExpressionType?: Type;     // Cached type of the expression of a type assertion
}

/** @internal */
export type TrackedSymbol = [symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags];





// /** @internal */
// export interface SerializedTypeEntry {
//   node: TypeNode;
//   truncating?: boolean;
//   addedLength: number;
//   trackedSymbols: readonly TrackedSymbol[] | undefined;
// }

// dprint-ignore
export const enum TypeFlags {
    Any             = 1 << 0,
    Unknown         = 1 << 1,
    String          = 1 << 2,
    Number          = 1 << 3,
    Boolean         = 1 << 4,
    Enum            = 1 << 5,   // Numeric computed enum member value
    BigInt          = 1 << 6,
    StringLiteral   = 1 << 7,
    NumberLiteral   = 1 << 8,
    BooleanLiteral  = 1 << 9,
    EnumLiteral     = 1 << 10,  // Always combined with StringLiteral, NumberLiteral, or Union
    BigIntLiteral   = 1 << 11,
    ESSymbol        = 1 << 12,  // Type of symbol primitive introduced in ES6
    UniqueESSymbol  = 1 << 13,  // unique symbol
    Void            = 1 << 14,
    Undefined       = 1 << 15,
    Null            = 1 << 16,
    Never           = 1 << 17,  // Never type
    TypeParameter   = 1 << 18,  // Type parameter
    Object          = 1 << 19,  // Object type
    Union           = 1 << 20,  // Union (T | U)
    Intersection    = 1 << 21,  // Intersection (T & U)
    Index           = 1 << 22,  // keyof T
    IndexedAccess   = 1 << 23,  // T[K]
    Conditional     = 1 << 24,  // T extends U ? X : Y
    Substitution    = 1 << 25,  // Type parameter substitution
    NonPrimitive    = 1 << 26,  // intrinsic object type
    TemplateLiteral = 1 << 27,  // Template literal type
    StringMapping   = 1 << 28,  // Uppercase/Lowercase type
    /** @internal */
    Reserved1       = 1 << 29,  // Used by union/intersection type construction
    
    /** @internal */
    AnyOrUnknown = Any | Unknown,
    /** @internal */
    Nullable = Undefined | Null,
    Literal = StringLiteral | NumberLiteral | BigIntLiteral | BooleanLiteral,
    Unit = Enum | Literal | UniqueESSymbol | Nullable,
    Freshable = Enum | Literal,
    StringOrNumberLiteral = StringLiteral | NumberLiteral,
    /** @internal */
    StringOrNumberLiteralOrUnique = StringLiteral | NumberLiteral | UniqueESSymbol,
    /** @internal */
    DefinitelyFalsy = StringLiteral | NumberLiteral | BigIntLiteral | BooleanLiteral | Void | Undefined | Null,
    PossiblyFalsy = DefinitelyFalsy | String | Number | BigInt | Boolean,
    /** @internal */
    Intrinsic = Any | Unknown | String | Number | BigInt | Boolean | BooleanLiteral | ESSymbol | Void | Undefined | Null | Never | NonPrimitive,
    StringLike = String | StringLiteral | TemplateLiteral | StringMapping,
    NumberLike = Number | NumberLiteral | Enum,
    BigIntLike = BigInt | BigIntLiteral,
    BooleanLike = Boolean | BooleanLiteral,
    EnumLike = Enum | EnumLiteral,
    ESSymbolLike = ESSymbol | UniqueESSymbol,
    VoidLike = Void | Undefined,
    /** @internal */
    Primitive = StringLike | NumberLike | BigIntLike | BooleanLike | EnumLike | ESSymbolLike | VoidLike | Null,
    /** @internal */
    DefinitelyNonNullable = StringLike | NumberLike | BigIntLike | BooleanLike | EnumLike | ESSymbolLike | Object | NonPrimitive,
    /** @internal */
    DisjointDomains = NonPrimitive | StringLike | NumberLike | BigIntLike | BooleanLike | ESSymbolLike | VoidLike | Null,
    UnionOrIntersection = Union | Intersection,
    StructuredType = Object | Union | Intersection,
    TypeVariable = TypeParameter | IndexedAccess,
    InstantiableNonPrimitive = TypeVariable | Conditional | Substitution,
    InstantiablePrimitive = Index | TemplateLiteral | StringMapping,
    Instantiable = InstantiableNonPrimitive | InstantiablePrimitive,
    StructuredOrInstantiable = StructuredType | Instantiable,
    /** @internal */
    ObjectFlagsType = Any | Nullable | Never | Object | Union | Intersection,
    /** @internal */
    Simplifiable = IndexedAccess | Conditional,
    /** @internal */
    Singleton = Any | Unknown | String | Number | Boolean | BigInt | ESSymbol | Void | Undefined | Null | Never | NonPrimitive,
    // 'Narrowable' types are types where narrowing actually narrows.
    // This *should* be every type other than null, undefined, void, and never
    Narrowable = Any | Unknown | StructuredOrInstantiable | StringLike | NumberLike | BigIntLike | BooleanLike | ESSymbol | UniqueESSymbol | NonPrimitive,
    // The following flags are aggregated during union and intersection type construction
    /** @internal */
    IncludesMask = Any | Unknown | Primitive | Never | Object | Union | Intersection | NonPrimitive | TemplateLiteral | StringMapping,
    // The following flags are used for different purposes during union and intersection type construction
    /** @internal */
    IncludesMissingType = TypeParameter,
    /** @internal */
    IncludesNonWideningType = Index,
    /** @internal */
    IncludesWildcard = IndexedAccess,
    /** @internal */
    IncludesEmptyObject = Conditional,
    /** @internal */
    IncludesInstantiable = Substitution,
    /** @internal */
    IncludesConstrainedTypeVariable = Reserved1,
    /** @internal */
    NotPrimitiveUnion = Any | Unknown | Void | Never | Object | Intersection | IncludesInstantiable,
}

// export type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;

/** @internal */
export type TypeId = number;

// Properties common to all types
// dprint-ignore
export interface Type {
    flags: TypeFlags;                // Flags
    /** @internal */ id: TypeId;      // Unique ID
    symbol: Symbol;                  // Symbol associated with type (if any)
    aliasSymbol?: Symbol;            // Alias associated with type
    aliasTypeArguments?: readonly Type[]; // Alias type arguments (if any)
    /** @internal */
    permissiveInstantiation?: Type;  // Instantiation with type parameters mapped to wildcard type
    /** @internal */
    restrictiveInstantiation?: Type; // Instantiation with type parameters mapped to unconstrained form
    /** @internal */
    immediateBaseConstraint?: Type;  // Immediate base constraint cache
    /** @internal */
    widened?: Type; // Cached widened form of the type
    
    declaration ?: {}
}

export interface DeclaredType extends Type
{
    declaration: Declaration;
}

// export interface AstTypeCheckerGeneratedTypeOps extends Type, DeclaredType, TypeCheckerAssociatedMaybe
// {
//   /** @internal */ checker: TypeChecker;
//   pattern?: DestructuringPattern;  // Destructuring pattern represented by type (if any)
// }

/** @internal */
// Intrinsic types (TypeFlags.Intrinsic)
export interface IntrinsicType extends Type {
    intrinsicName: string; // Name of intrinsic type
    debugIntrinsicName: string | undefined;
    objectFlags: ObjectFlags;
}

/** @internal */
export interface NullableType extends IntrinsicType {
    objectFlags: ObjectFlags;
}

export interface FreshableType extends Type {
    freshType: FreshableType; // Fresh version of type
    regularType: FreshableType; // Regular version of type
}

/** @internal */
export interface FreshableIntrinsicType extends FreshableType, IntrinsicType {
}

/**
 * constant-type for everything excluding the kwd `undefined`
 * 
 */
export interface LiteralType extends FreshableType {
    value: null | {} ; // Value of literal
}

// Unique symbol types (TypeFlags.UniqueESSymbol)
export interface UniqueESSymbolType extends Type {
    symbol: Symbol;
    escapedName: __String;
}

export interface StringLiteralType extends LiteralType {
    value: string;
}

export interface NumberLiteralType extends LiteralType {
    value: number;
}

export interface BigIntLiteralType extends LiteralType {
    value: PseudoBigInt;
}

// Enum types (TypeFlags.Enum)
export interface EnumType extends FreshableType {
}

// Types included in TypeFlags.ObjectFlagsType have an objectFlags property. Some ObjectFlags
// are specific to certain types and reuse the same bit position. Those ObjectFlags require a check
// for a certain TypeFlags value to determine their meaning.
// dprint-ignore
export const enum ObjectFlags {
    None             = 0,
    Class            = 1 << 0,  // Class
    Interface        = 1 << 1,  // Interface
    Reference        = 1 << 2,  // Generic type reference
    Tuple            = 1 << 3,  // Synthesized generic tuple type
    Anonymous        = 1 << 4,  // Anonymous
    Mapped           = 1 << 5,  // Mapped
    Instantiated     = 1 << 6,  // Instantiated anonymous or mapped type
    ObjectLiteral    = 1 << 7,  // Originates in an object literal
    EvolvingArray    = 1 << 8,  // Evolving array type
    ObjectLiteralPatternWithComputedProperties = 1 << 9,  // Object literal pattern with computed properties
    ReverseMapped    = 1 << 10, // Object contains a property from a reverse-mapped type
    JsxAttributes    = 1 << 11, // Jsx attributes type
    JSLiteral        = 1 << 12, // Object type declared in JS - disables errors on read/write of nonexisting members
    FreshLiteral     = 1 << 13, // Fresh object literal
    ArrayLiteral     = 1 << 14, // Originates in an array literal
    /** @internal */
    PrimitiveUnion   = 1 << 15, // Union of only primitive types
    /** @internal */
    ContainsWideningType = 1 << 16, // Type is or contains undefined or null widening type
    /** @internal */
    ContainsObjectOrArrayLiteral = 1 << 17, // Type is or contains object literal type
    /** @internal */
    NonInferrableType = 1 << 18, // Type is or contains anyFunctionType or silentNeverType
    /** @internal */
    CouldContainTypeVariablesComputed = 1 << 19, // CouldContainTypeVariables flag has been computed
    /** @internal */
    CouldContainTypeVariables = 1 << 20, // Type could contain a type variable

    ClassOrInterface = Class | Interface,
    /** @internal */
    RequiresWidening = ContainsWideningType | ContainsObjectOrArrayLiteral,
    /** @internal */
    PropagatingFlags = ContainsWideningType | ContainsObjectOrArrayLiteral | NonInferrableType,
    /** @internal */
    InstantiatedMapped = Mapped | Instantiated,
    // Object flags that uniquely identify the kind of ObjectType
    /** @internal */
    ObjectTypeKindMask = ClassOrInterface | Reference | Tuple | Anonymous | Mapped | ReverseMapped | EvolvingArray,

    // Flags that require TypeFlags.Object
    ContainsSpread   = 1 << 21,  // Object literal contains spread operation
    ObjectRestType   = 1 << 22,  // Originates in object rest declaration
    InstantiationExpressionType = 1 << 23,  // Originates in instantiation expression
    /** @internal */
    IsClassInstanceClone = 1 << 24, // Type is a clone of a class instance type
    // Flags that require TypeFlags.Object and ObjectFlags.Reference
    /** @internal */
    IdenticalBaseTypeCalculated = 1 << 25, // has had `getSingleBaseForNonAugmentingSubtype` invoked on it already
    /** @internal */
    IdenticalBaseTypeExists = 1 << 26, // has a defined cachedEquivalentBaseType member

    // Flags that require TypeFlags.UnionOrIntersection or TypeFlags.Substitution
    /** @internal */
    IsGenericTypeComputed = 1 << 21, // IsGenericObjectType flag has been computed
    /** @internal */
    IsGenericObjectType = 1 << 22, // Union or intersection contains generic object type
    /** @internal */
    IsGenericIndexType = 1 << 23, // Union or intersection contains generic index type
    /** @internal */
    IsGenericType = IsGenericObjectType | IsGenericIndexType,

    // Flags that require TypeFlags.Union
    /** @internal */
    ContainsIntersections = 1 << 24, // Union contains intersections
    /** @internal */
    IsUnknownLikeUnionComputed = 1 << 25, // IsUnknownLikeUnion flag has been computed
    /** @internal */
    IsUnknownLikeUnion = 1 << 26, // Union of null, undefined, and empty object type
    /** @internal */

    // Flags that require TypeFlags.Intersection
    /** @internal */
    IsNeverIntersectionComputed = 1 << 24, // IsNeverLike flag has been computed
    /** @internal */
    IsNeverIntersection = 1 << 25, // Intersection reduces to never
    /** @internal */
    IsConstrainedTypeVariable = 1 << 26, // T & C, where T's constraint and C are primitives, object, or {}
}

/** @internal */
export type ObjectFlagsType = NullableType | ObjectType | UnionType | IntersectionType;

// Object types (TypeFlags.ObjectType)
// dprint-ignore
export interface ObjectType extends Type {
    objectFlags: ObjectFlags;
    /** @internal */ members?: SymbolTable;             // Properties by name
    /** @internal */ properties?: Symbol[];             // Properties
    /** @internal */ callSignatures?: readonly Signature[];      // Call signatures of type
    /** @internal */ constructSignatures?: readonly Signature[]; // Construct signatures of type
    /** @internal */ indexInfos?: readonly IndexInfo[];  // Index signatures
    /** @internal */ objectTypeWithoutAbstractConstructSignatures?: ObjectType;
}

/** Class and interface types (ObjectFlags.Class and ObjectFlags.Interface). */
// dprint-ignore
export interface InterfaceType extends ObjectType {
    typeParameters: TypeParameter[] | undefined;      // Type parameters (undefined if non-generic)
    outerTypeParameters: TypeParameter[] | undefined; // Outer type parameters (undefined if none)
    localTypeParameters: TypeParameter[] | undefined; // Local type parameters (undefined if none)
    thisType: TypeParameter | undefined;              // The "this" type (undefined if none)
    /** @internal */
    resolvedBaseConstructorType?: Type;               // Resolved base constructor type of class
    /** @internal */
    resolvedBaseTypes: BaseType[];                    // Resolved base types
    /** @internal */
    baseTypesResolved?: boolean;
}

// Object type or intersection of object types
export type BaseType = ObjectType | IntersectionType | TypeVariable; // Also `any` and `object`

// dprint-ignore
export interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
    declaredProperties: Symbol[];                   // Declared members
    declaredCallSignatures: Signature[];            // Declared call signatures
    declaredConstructSignatures: Signature[];       // Declared construct signatures
    declaredIndexInfos: IndexInfo[];                // Declared index signatures
}

/**
 * Type references (ObjectFlags.Reference). When a class or interface has type parameters or
 * a "this" type, references to the class or interface are made using type references. The
 * typeArguments property specifies the types to substitute for the type parameters of the
 * class or interface and optionally includes an extra element that specifies the type to
 * substitute for "this" in the resulting instantiation. When no extra argument is present,
 * the type reference itself is substituted for "this". The typeArguments property is undefined
 * if the class or interface has no type parameters and the reference isn't specifying an
 * explicit "this" argument.
 */
export interface TypeReference extends ObjectType {
    target: GenericType; // Type reference target
    // node?: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
    node ?: Node ;
    /** @internal */
    mapper?: TypeMapper;
    /** @internal */
    resolvedTypeArguments?: readonly Type[]; // Resolved type reference type arguments
    /** @internal */
    literalType?: TypeReference; // Clone of type with ObjectFlags.ArrayLiteral set
    /** @internal */
    cachedEquivalentBaseType?: Type; // Only set on references to class or interfaces with a single base type and no augmentations
}

export interface DeferredTypeReference extends TypeReference {
    /** @internal */
    node: TypeReference["node"] & {} ;
    /** @internal */
    mapper?: TypeMapper;
    /** @internal */
    instantiations?: Map<string, Type>; // Instantiations of generic type alias (undefined if non-generic)
}

// dprint-ignore
/** @internal */
export const enum VarianceFlags {
    Invariant     =      0,  // Neither covariant nor contravariant
    Covariant     = 1 << 0,  // Covariant
    Contravariant = 1 << 1,  // Contravariant
    Bivariant     = Covariant | Contravariant,  // Both covariant and contravariant
    Independent   = 1 << 2,  // Unwitnessed type parameter
    VarianceMask  = Invariant | Covariant | Contravariant | Independent, // Mask containing all measured variances without the unmeasurable flag
    Unmeasurable  = 1 << 3,  // Variance result is unusable - relationship relies on structural comparisons which are not reflected in generic relationships
    Unreliable    = 1 << 4,  // Variance result is unreliable - checking may produce false negatives, but not false positives
    AllowsStructuralFallback = Unmeasurable | Unreliable,
}

// Generic class and interface types
export interface GenericType extends InterfaceType, TypeReference {
    /** @internal */
    instantiations: Map<string, TypeReference>; // Generic instantiation cache
    /** @internal */
    variances?: VarianceFlags[]; // Variance of each type parameter
}

// dprint-ignore
export const enum ElementFlags {
    Required    = 1 << 0,  // T
    Optional    = 1 << 1,  // T?
    Rest        = 1 << 2,  // ...T[]
    Variadic    = 1 << 3,  // ...T
    Fixed       = Required | Optional,
    Variable    = Rest | Variadic,
    NonRequired = Optional | Rest | Variadic,
    NonRest     = Required | Optional | Variadic,
}

export interface TupleType extends GenericType {
    elementFlags: readonly ElementFlags[];
    /** Number of required or variadic elements */
    minLength: number;
    /** Number of initial required or optional elements */
    fixedLength: number;
    /** True if tuple has any rest or variadic elements */
    hasRestElement: boolean;
    combinedFlags: ElementFlags;
    readonly: boolean;
}

// export interface DeclaredTupleTypeOps extends TupleType
// {
//   //
//   labeledElementDeclarations?: readonly (NamedTupleMember | ParameterDeclaration | undefined)[];
// }

// export interface TupleTypeReference extends TypeReference {
//   target: TupleType;
// }

export interface UnionOrIntersectionType extends Type {
    types: Type[]; // Constituent types
    /** @internal */
    objectFlags: ObjectFlags;
    /** @internal */
    propertyCache?: SymbolTable; // Cache of resolved properties
    /** @internal */
    propertyCacheWithoutObjectFunctionPropertyAugment?: SymbolTable; // Cache of resolved properties that does not augment function or object type properties
    /** @internal */
    resolvedProperties: Symbol[];
    /** @internal */
    resolvedIndexType: IndexType;
    /** @internal */
    resolvedStringIndexType: IndexType;
    /** @internal */
    resolvedBaseConstraint: Type;
}

export interface UnionType extends UnionOrIntersectionType {
    /** @internal */
    resolvedReducedType?: Type;
    /** @internal */
    regularType?: UnionType;
    /** @internal */
    origin?: Type; // Denormalized union, intersection, or index type in which union originates
    /** @internal */
    keyPropertyName?: __String; // Property with unique unit type that exists in every object/intersection in union type
    /** @internal */
    constituentMap?: Map<TypeId, Type>; // Constituents keyed by unit type discriminants
    /** @internal */
    arrayFallbackSignatures?: readonly Signature[]; // Special remapped signature list for unions of arrays
}

export interface IntersectionType extends UnionOrIntersectionType {
    /** @internal */
    resolvedApparentType: Type;
    /** @internal */
    uniqueLiteralFilledInstantiation?: Type; // Instantiation with type parameters mapped to never type
}

export type StructuredType = ObjectType | UnionType | IntersectionType;

/** @internal */
// An instantiated anonymous type has a target and a mapper
export interface AnonymousType extends ObjectType {
    target?: AnonymousType; // Instantiation target
    mapper?: TypeMapper; // Instantiation mapper
    instantiations?: Map<string, Type>; // Instantiations of generic type alias (undefined if non-generic)
}

// /** @internal */
// export interface InstantiationExpressionType extends AnonymousType {
//   node: NodeWithTypeArguments;
// }

/** @internal */
export interface MappedType extends AnonymousType {
    typeParameter?: TypeParameter;
    constraintType?: Type;
    nameType?: Type;
    templateType?: Type;
    modifiersType?: Type;
    resolvedApparentType?: Type;
    containsError?: boolean;
}

// export interface DeclaredMappedType extends MappedType
// {
//   declaration: MappedTypeNode;
// }

export interface EvolvingArrayType extends ObjectType {
    elementType: Type; // Element expressions of evolving array type
    finalArrayType?: Type; // Final array type of evolving array type
}

/** @internal */
export interface ReverseMappedType extends ObjectType {
    source: Type;
    mappedType: MappedType;
    constraintType: IndexType;
}

/** @internal */
// Resolved object, union, or intersection type
// dprint-ignore
export interface ResolvedType extends ObjectType, UnionOrIntersectionType {
    members: SymbolTable;             // Properties by name
    properties: Symbol[];             // Properties
    callSignatures: readonly Signature[];      // Call signatures of type
    constructSignatures: readonly Signature[]; // Construct signatures of type
    indexInfos: readonly IndexInfo[];  // Index signatures
}

/** @internal */
// Object literals are initially marked fresh. Freshness disappears following an assignment,
// before a type assertion, or when an object literal's type is widened. The regular
// version of a fresh type is identical except for the TypeFlags.FreshObjectLiteral flag.
export interface FreshObjectLiteralType extends ResolvedType {
    regularType: ResolvedType; // Regular version of fresh type
}

/** @internal */
export interface IterationTypes {
    readonly yieldType: Type;
    readonly returnType: Type;
    readonly nextType: Type;
}

// Just a place to cache element types of iterables and iterators
/** @internal */
export interface IterableOrIteratorType extends ObjectType, UnionType {
    iterationTypesOfGeneratorReturnType?: IterationTypes;
    iterationTypesOfAsyncGeneratorReturnType?: IterationTypes;
    iterationTypesOfIterable?: IterationTypes;
    iterationTypesOfIterator?: IterationTypes;
    iterationTypesOfAsyncIterable?: IterationTypes;
    iterationTypesOfAsyncIterator?: IterationTypes;
    iterationTypesOfIteratorResult?: IterationTypes;
}

/** @internal */
export interface PromiseOrAwaitableType extends ObjectType, UnionType {
    promiseTypeOfPromiseConstructor?: Type;
    promisedTypeOfPromise?: Type;
    awaitedTypeOfType?: Type;
}

/** @internal */
export interface SyntheticDefaultModuleType extends Type {
    syntheticType?: Type;
    defaultOnlyType?: Type;
}

export interface InstantiableType extends Type {
    /** @internal */
    resolvedBaseConstraint?: Type;
    /** @internal */
    resolvedIndexType?: IndexType;
    /** @internal */
    resolvedStringIndexType?: IndexType;
}

// Type parameters (TypeFlags.TypeParameter)
// dprint-ignore
export interface TypeParameter extends InstantiableType {
    /**
    * Retrieve using getConstraintFromTypeParameter
    *
    * @internal
    */
    constraint?: Type;        // Constraint
    /** @internal */
    default?: Type;
    /** @internal */
    target?: TypeParameter;  // Instantiation target
    /** @internal */
    mapper?: TypeMapper;     // Instantiation mapper
    /** @internal */
    isThisType?: boolean;
    /** @internal */
    resolvedDefaultType?: Type;
}

/** @internal */
export const enum AccessFlags {
    None = 0,
    IncludeUndefined = 1 << 0,
    NoIndexSignatures = 1 << 1,
    Writing = 1 << 2,
    CacheSymbol = 1 << 3,
    NoTupleBoundsCheck = 1 << 4,
    ExpressionPosition = 1 << 5,
    ReportDeprecated = 1 << 6,
    SuppressNoImplicitAnyError = 1 << 7,
    Contextual = 1 << 8,
    Persistent = IncludeUndefined,
}

// Indexed access types (TypeFlags.IndexedAccess)
// Possible forms are T[xxx], xxx[T], or xxx[keyof T], where T is a type variable
export interface IndexedAccessType extends InstantiableType {
    objectType: Type;
    indexType: Type;
    /** @internal */
    accessFlags: AccessFlags; // Only includes AccessFlags.Persistent
    constraint?: Type;
    simplifiedForReading?: Type;
    simplifiedForWriting?: Type;
}

export type TypeVariable = TypeParameter | IndexedAccessType;

/** @internal */
export const enum IndexFlags {
    None = 0,
    StringsOnly = 1 << 0,
    NoIndexSignatures = 1 << 1,
    NoReducibleCheck = 1 << 2,
}

// keyof T types (TypeFlags.Index)
export interface IndexType extends InstantiableType {
    type: InstantiableType | UnionOrIntersectionType;
    /** @internal */
    indexFlags: IndexFlags;
}

export interface ConditionalRoot {
    checkType: Type;
    extendsType: Type;
    isDistributive: boolean;
    inferTypeParameters?: TypeParameter[];
    outerTypeParameters?: TypeParameter[];
    instantiations?: Map<string, Type>;
    aliasSymbol?: Symbol;
    aliasTypeArguments?: Type[];
}

export interface PhysicalConditionalRoot extends ConditionalRoot {
    //
    node: Node;
}

// T extends U ? X : Y (TypeFlags.Conditional)
export interface ConditionalType extends InstantiableType {
    root: ConditionalRoot;
    checkType: Type;
    extendsType: Type;
    resolvedTrueType?: Type;
    resolvedFalseType?: Type;
    /** @internal */
    resolvedInferredTrueType?: Type; // The `trueType` instantiated with the `combinedMapper`, if present
    /** @internal */
    resolvedDefaultConstraint?: Type;
    /** @internal */
    resolvedConstraintOfDistributive?: Type | false;
    /** @internal */
    mapper?: TypeMapper;
    /** @internal */
    combinedMapper?: TypeMapper;
}

export interface TemplateLiteralType extends InstantiableType {
    texts: readonly string[]; // Always one element longer than types
    types: readonly Type[]; // Always at least one element
}

export interface StringMappingType extends InstantiableType {
    symbol: Symbol;
    type: Type;
}

// Type parameter substitution (TypeFlags.Substitution)
// Substitution types are created for type parameters or indexed access types that occur in the
// true branch of a conditional type. For example, in 'T extends string ? Foo<T> : Bar<T>', the
// reference to T in Foo<T> is resolved as a substitution type that substitutes 'string & T' for T.
// Thus, if Foo has a 'string' constraint on its type parameter, T will satisfy it.
// Substitution type are also created for NoInfer<T> types. Those are represented as substitution
// types where the constraint is type 'unknown' (which is never generated for the case above).
export interface SubstitutionType extends InstantiableType {
    objectFlags: ObjectFlags;
    baseType: Type; // Target type
    constraint: Type; // Constraint that target type is known to satisfy
}

/** @internal */
export const enum JsxReferenceKind {
    Component,
    Function,
    Mixed,
}

export const enum SignatureKind {
    Call,
    Construct,
}

// dprint-ignore
/** @internal */
export const enum SignatureFlags {
    None = 0,

    // Propagating flags
    HasRestParameter = 1 << 0,          // Indicates last parameter is rest parameter
    HasLiteralTypes = 1 << 1,           // Indicates signature is specialized
    Abstract = 1 << 2,                  // Indicates signature comes from an abstract class, abstract construct signature, or abstract constructor type

    // Non-propagating flags
    IsInnerCallChain = 1 << 3,          // Indicates signature comes from a CallChain nested in an outer OptionalChain
    IsOuterCallChain = 1 << 4,          // Indicates signature comes from a CallChain that is the outermost chain of an optional expression
    IsUntypedSignatureInJSFile = 1 << 5, // Indicates signature is from a js file and has no types
    IsNonInferrable = 1 << 6,           // Indicates signature comes from a non-inferrable type
    IsSignatureCandidateForOverloadFailure = 1 << 7,

    // We do not propagate `IsInnerCallChain` or `IsOuterCallChain` to instantiated signatures, as that would result in us
    // attempting to add `| undefined` on each recursive call to `getReturnTypeOfSignature` when
    // instantiating the return type.
    PropagatingFlags = HasRestParameter | HasLiteralTypes | Abstract | IsUntypedSignatureInJSFile | IsSignatureCandidateForOverloadFailure,

    CallChainFlags = IsInnerCallChain | IsOuterCallChain,
}

// dprint-ignore
export interface Signature
extends TypeCheckerAssociatedMaybe
{
    /** @internal */ flags: SignatureFlags;
    /** @internal */ checker?: TypeChecker;
    typeParameters?: readonly TypeParameter[];   // Type parameters (undefined if non-generic)
    parameters: readonly Symbol[];               // Parameters
    thisParameter?: Symbol;             // symbol of this-type parameter
    /** @internal */
    // See comment in `instantiateSignature` for why these are set lazily.
    resolvedReturnType?: Type;          // Lazily set by `getReturnTypeOfSignature`.
    /** @internal */
    // Lazily set by `getTypePredicateOfSignature`.
    // `undefined` indicates a type predicate that has not yet been computed.
    // Uses a special `noTypePredicate` sentinel value to indicate that there is no type predicate. This looks like a TypePredicate at runtime to avoid polymorphism.
    resolvedTypePredicate?: TypePredicate;
    /** @internal */
    minArgumentCount: number;           // Number of non-optional parameters
    /** @internal */
    resolvedMinArgumentCount?: number;  // Number of non-optional parameters (excluding trailing `void`)
    /** @internal */
    target?: Signature;                 // Instantiation target
    /** @internal */
    mapper?: TypeMapper;                // Instantiation mapper
    /** @internal */
    compositeSignatures?: Signature[];  // Underlying signatures of a union/intersection signature
    /** @internal */
    compositeKind?: TypeFlags;          // TypeFlags.Union if the underlying signatures are from union members, otherwise TypeFlags.Intersection
    /** @internal */
    erasedSignatureCache?: Signature;   // Erased version of signature (deferred)
    /** @internal */
    canonicalSignatureCache?: Signature; // Canonical version of signature (deferred)
    /** @internal */
    baseSignatureCache?: Signature;      // Base version of signature (deferred)
    /** @internal */
    optionalCallSignatureCache?: { inner?: Signature, outer?: Signature }; // Optional chained call version of signature (deferred)
    /** @internal */
    isolatedSignatureType?: ObjectType; // A manufactured type that just contains the signature for purposes of signature comparison
    /** @internal */
    instantiations?: Map<string, Signature>;    // Generic signature instantiation cache
}

// export interface DeclaredSignature extends Signature {
//   //
//   declaration?: SignatureDeclaration | JSDocSignature; // Originating declaration
// }

export const enum IndexKind {
    String,
    Number,
}

export interface IndexInfo {
    keyType: Type;
    type: Type;
    isReadonly: boolean;
    declaration?: Node ;
}

// export interface DeclaredIndexInfo extends IndexInfo {
//   declaration?: IndexSignatureDeclaration;
// }

/** @internal */
export const enum TypeMapKind {
    Simple,
    Array,
    Deferred,
    Function,
    Composite,
    Merged,
}

/** @internal */
export type TypeMapper =
    | { kind: TypeMapKind.Simple; source: Type; target: Type; }
    | { kind: TypeMapKind.Array; sources: readonly Type[]; targets: readonly Type[] | undefined; }
    | { kind: TypeMapKind.Deferred; sources: readonly Type[]; targets: (() => Type)[]; }
    | { kind: TypeMapKind.Function; func: (t: Type) => Type; debugInfo?: () => string; }
    | { kind: TypeMapKind.Composite | TypeMapKind.Merged; mapper1: TypeMapper; mapper2: TypeMapper; };





/** @internal */
export const enum TransformFlags {
    None = 0,
    
    // Facts
    // - Flags used to indicate that a node or subtree contains syntax that requires transformation.
    ContainsTypeScript = 1 << 0,
    ContainsJsx = 1 << 1,
    ContainsESNext = 1 << 2,
    ContainsES2022 = 1 << 3,
    ContainsES2021 = 1 << 4,
    ContainsES2020 = 1 << 5,
    ContainsES2019 = 1 << 6,
    ContainsES2018 = 1 << 7,
    ContainsES2017 = 1 << 8,
    ContainsES2016 = 1 << 9,
    ContainsES2015 = 1 << 10,
    ContainsGenerator = 1 << 11,
    ContainsDestructuringAssignment = 1 << 12,
    
    // Markers
    // - Flags used to indicate that a subtree contains a specific transformation.
    ContainsTypeScriptClassSyntax = 1 << 13, // Property Initializers, Parameter Property Initializers
    ContainsLexicalThis = 1 << 14,
    ContainsRestOrSpread = 1 << 15,
    ContainsObjectRestOrSpread = 1 << 16,
    ContainsComputedPropertyName = 1 << 17,
    ContainsBlockScopedBinding = 1 << 18,
    ContainsBindingPattern = 1 << 19,
    ContainsYield = 1 << 20,
    ContainsAwait = 1 << 21,
    ContainsHoistedDeclarationOrCompletion = 1 << 22,
    ContainsDynamicImport = 1 << 23,
    ContainsClassFields = 1 << 24,
    ContainsDecorators = 1 << 25,
    ContainsPossibleTopLevelAwait = 1 << 26,
    ContainsLexicalSuper = 1 << 27,
    ContainsUpdateExpressionForIdentifier = 1 << 28,
    ContainsPrivateIdentifierInExpression = 1 << 29,
    
    HasComputedFlags = 1 << 31, // Transform flags have been computed.
    
    // Assertions
    // - Bitmasks that are used to assert facts about the syntax of a node and its subtree.
    AssertTypeScript = ContainsTypeScript,
    AssertJsx = ContainsJsx,
    AssertESNext = ContainsESNext,
    AssertES2022 = ContainsES2022,
    AssertES2021 = ContainsES2021,
    AssertES2020 = ContainsES2020,
    AssertES2019 = ContainsES2019,
    AssertES2018 = ContainsES2018,
    AssertES2017 = ContainsES2017,
    AssertES2016 = ContainsES2016,
    AssertES2015 = ContainsES2015,
    AssertGenerator = ContainsGenerator,
    AssertDestructuringAssignment = ContainsDestructuringAssignment,
    
    // Scope Exclusions
    // - Bitmasks that exclude flags from propagating out of a specific context
    //   into the subtree flags of their container.
    OuterExpressionExcludes = HasComputedFlags,
    PropertyAccessExcludes = OuterExpressionExcludes,
    NodeExcludes = PropertyAccessExcludes,
    ArrowFunctionExcludes = NodeExcludes | ContainsTypeScriptClassSyntax | ContainsBlockScopedBinding | ContainsYield | ContainsAwait | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRestOrSpread | ContainsPossibleTopLevelAwait,
    FunctionExcludes = NodeExcludes | ContainsTypeScriptClassSyntax | ContainsLexicalThis | ContainsLexicalSuper | ContainsBlockScopedBinding | ContainsYield | ContainsAwait | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRestOrSpread | ContainsPossibleTopLevelAwait,
    ConstructorExcludes = NodeExcludes | ContainsLexicalThis | ContainsLexicalSuper | ContainsBlockScopedBinding | ContainsYield | ContainsAwait | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRestOrSpread | ContainsPossibleTopLevelAwait,
    MethodOrAccessorExcludes = NodeExcludes | ContainsLexicalThis | ContainsLexicalSuper | ContainsBlockScopedBinding | ContainsYield | ContainsAwait | ContainsHoistedDeclarationOrCompletion | ContainsBindingPattern | ContainsObjectRestOrSpread,
    PropertyExcludes = NodeExcludes | ContainsLexicalThis | ContainsLexicalSuper,
    ClassExcludes = NodeExcludes | ContainsTypeScriptClassSyntax | ContainsComputedPropertyName,
    ModuleExcludes = NodeExcludes | ContainsTypeScriptClassSyntax | ContainsLexicalThis | ContainsLexicalSuper | ContainsBlockScopedBinding | ContainsHoistedDeclarationOrCompletion | ContainsPossibleTopLevelAwait,
    TypeExcludes = ~ContainsTypeScript,
    ObjectLiteralExcludes = NodeExcludes | ContainsTypeScriptClassSyntax | ContainsComputedPropertyName | ContainsObjectRestOrSpread,
    ArrayLiteralOrCallOrNewExcludes = NodeExcludes | ContainsRestOrSpread,
    VariableDeclarationListExcludes = NodeExcludes | ContainsBindingPattern | ContainsObjectRestOrSpread,
    ParameterExcludes = NodeExcludes,
    CatchClauseExcludes = NodeExcludes | ContainsObjectRestOrSpread,
    BindingPatternExcludes = NodeExcludes | ContainsRestOrSpread,
    ContainsLexicalThisOrSuper = ContainsLexicalThis | ContainsLexicalSuper,
    
    // Propagating flags
    // - Bitmasks for flags that should propagate from a child
    PropertyNamePropagatingFlags = ContainsLexicalThis | ContainsLexicalSuper,
    // Masks
    // - Additional bitmasks
}





