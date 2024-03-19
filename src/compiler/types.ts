import {
    // BaseNodeFactory,
    // CreateSourceFileOptions,
    // EmitHelperFactory,
    // GetCanonicalFileName,
    MapLike,
    // ModeAwareCache,
    // ModeAwareCacheKey,
    // ModuleResolutionCache,
    // MultiMap,
    // NodeFactoryFlags,
    // OptionsNameMap,
    // PackageJsonInfo,
    // PackageJsonInfoCache,
    // Pattern,
    // ProgramBuildInfo,
    // SymlinkCache,
    // ThisContainer,
    Path ,
} from "./_namespaces/ts";






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
    readonly parent?: Node; // Parent node (not available in functionally-generated nodes )
    /** @internal */ original?: Node; // The original node if this is an updated node.
    /** @internal */ emitNode?: EmitNode; // Associated EmitNode (initialized by transforms)
    // NOTE: `symbol` and `localSymbol` have been moved to `Declaration`
    //       `locals` and `nextContainer` have been moved to `LocalsContainer`
    //       `flowNode` has been moved to `FlowContainer`
    //       see: https://github.com/microsoft/TypeScript/pull/51682
}

/**
 * {@link Node}s generated functionally ;
 * typically immutable ;
 * unlike parser-generated {@link Node} which has ref `parent`, FG-ed {@link Node}s don't ;
 * 
 */
export interface FunctionallyGeneratedNode extends Node
{
    readonly parent?: never; // Parent node will not be available in macro-generated Node(s)
}

/**
 * {@link SyntacticNode } is {@link Node} modeling syntactic language features.
 * 
 * contrast this with
 * alternative subclasses like {@link FlowNode} intended as semantic, analytical repr rather than syntactic.
 * 
 */
export interface SyntacticNode extends Node
{
    //
    readonly parent?: SyntacticNode; // Parent node (not available in functionally-generated nodes )
}

/**
 * {@link SyntacticNode}s generated functionally ;
 * typically immutable ;
 * unlike parser-generated {@link ParsedNode} which has ref `parent`, FG-ed {@link SyntacticNode}s don't ;
 * 
 */
export type FunctionallyGeneratedSyntacticNode = SyntacticNode & FunctionallyGeneratedNode ;

/**
 * {@link SyntacticNode }s originating from Parser.
 * 
 */
export interface ParsedNode extends SyntacticNode
{
    readonly parent: ParsedNode; // every ParsedNode is __guaranteed__ to reference a parent, except for the topmost one
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

/** @internal */
export interface MutableNodeArray<T extends Node> extends Array<T>, TextRange {
    hasTrailingComma: boolean;
    /** @internal */ transformFlags: TransformFlags; // Flags for transforms, possibly undefined
}

export interface NodeArray<T extends Node> extends ReadonlyArray<T>, ReadonlyTextRange {
    readonly hasTrailingComma: boolean;
    /** @internal */ transformFlags: TransformFlags; // Flags for transforms, possibly undefined
}

// TODO(rbuckton): Constraint 'TKind' to 'TokenSyntaxKind'
export interface Token<TKind extends SyntaxKind> extends SyntacticNode
{
    readonly kind: TKind;
}

export type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> & JSDocContainer;

// Punctuation
export interface PunctuationToken<TKind extends PunctuationSyntaxKind> extends Token<TKind> {
}

export type DotToken = PunctuationToken<SyntaxKind.DotToken>;
export type DotDotDotToken = PunctuationToken<SyntaxKind.DotDotDotToken>;
export type QuestionToken = PunctuationToken<SyntaxKind.QuestionToken>;
export type ExclamationToken = PunctuationToken<SyntaxKind.ExclamationToken>;
export type ColonToken = PunctuationToken<SyntaxKind.ColonToken>;
export type EqualsToken = PunctuationToken<SyntaxKind.EqualsToken>;
export type AmpersandAmpersandEqualsToken = PunctuationToken<SyntaxKind.AmpersandAmpersandEqualsToken>;
export type BarBarEqualsToken = PunctuationToken<SyntaxKind.BarBarEqualsToken>;
export type QuestionQuestionEqualsToken = PunctuationToken<SyntaxKind.QuestionQuestionEqualsToken>;
export type AsteriskToken = PunctuationToken<SyntaxKind.AsteriskToken>;
export type EqualsGreaterThanToken = PunctuationToken<SyntaxKind.EqualsGreaterThanToken>;
export type PlusToken = PunctuationToken<SyntaxKind.PlusToken>;
export type MinusToken = PunctuationToken<SyntaxKind.MinusToken>;
export type QuestionDotToken = PunctuationToken<SyntaxKind.QuestionDotToken>;

// Keywords
export interface KeywordToken<TKind extends KeywordSyntaxKind> extends Token<TKind> {
}

export type AssertsKeyword = KeywordToken<SyntaxKind.AssertsKeyword>;
export type AssertKeyword = KeywordToken<SyntaxKind.AssertKeyword>;
export type AwaitKeyword = KeywordToken<SyntaxKind.AwaitKeyword>;
export type CaseKeyword = KeywordToken<SyntaxKind.CaseKeyword>;

export interface ModifierToken<TKind extends ModifierSyntaxKind> extends KeywordToken<TKind> {
}

export type AbstractKeyword = ModifierToken<SyntaxKind.AbstractKeyword>;
export type AccessorKeyword = ModifierToken<SyntaxKind.AccessorKeyword>;
export type AsyncKeyword = ModifierToken<SyntaxKind.AsyncKeyword>;
export type ConstKeyword = ModifierToken<SyntaxKind.ConstKeyword>;
export type DeclareKeyword = ModifierToken<SyntaxKind.DeclareKeyword>;
export type DefaultKeyword = ModifierToken<SyntaxKind.DefaultKeyword>;
export type ExportKeyword = ModifierToken<SyntaxKind.ExportKeyword>;
export type InKeyword = ModifierToken<SyntaxKind.InKeyword>;
export type PrivateKeyword = ModifierToken<SyntaxKind.PrivateKeyword>;
export type ProtectedKeyword = ModifierToken<SyntaxKind.ProtectedKeyword>;
export type PublicKeyword = ModifierToken<SyntaxKind.PublicKeyword>;
export type ReadonlyKeyword = ModifierToken<SyntaxKind.ReadonlyKeyword>;
export type OutKeyword = ModifierToken<SyntaxKind.OutKeyword>;
export type OverrideKeyword = ModifierToken<SyntaxKind.OverrideKeyword>;
export type StaticKeyword = ModifierToken<SyntaxKind.StaticKeyword>;

export type Modifier =
    | AbstractKeyword
    | AccessorKeyword
    | AsyncKeyword
    | ConstKeyword
    | DeclareKeyword
    | DefaultKeyword
    | ExportKeyword
    | InKeyword
    | PrivateKeyword
    | ProtectedKeyword
    | PublicKeyword
    | OutKeyword
    | OverrideKeyword
    | ReadonlyKeyword
    | StaticKeyword;

export type ModifierLike = Modifier | Decorator;

export type AccessibilityModifier =
    | PublicKeyword
    | PrivateKeyword
    | ProtectedKeyword;

export type ParameterPropertyModifier =
    | AccessibilityModifier
    | ReadonlyKeyword;

export type ClassMemberModifier =
    | AccessibilityModifier
    | ReadonlyKeyword
    | StaticKeyword
    | AccessorKeyword;

export type ModifiersArray = NodeArray<Modifier>;

// dprint-ignore
export const enum GeneratedIdentifierFlags {
    // Kinds
    None = 0,                           // Not automatically generated.
    /** @internal */ Auto = 1,             // Automatically generated identifier.
    /** @internal */ Loop = 2,             // Automatically generated identifier with a preference for '_i'.
    /** @internal */ Unique = 3,           // Unique name based on the 'text' property.
    /** @internal */ Node = 4,             // Unique name based on the node in the 'original' property.
    /** @internal */ KindMask = 7,         // Mask to extract the kind of identifier from its flags.

    // Flags
    ReservedInNestedScopes = 1 << 3,    // Reserve the generated name in nested scopes
    Optimistic = 1 << 4,                // First instance won't use '_#' if there's no conflict
    FileLevel = 1 << 5,                 // Use only the file identifiers list and not generated names to search for conflicts
    AllowNameSubstitution = 1 << 6, // Used by `module.ts` to indicate generated nodes which can have substitutions performed upon them (as they were generated by an earlier transform phase)
}

export interface Identifier extends PrimaryExpression, Declaration, JSDocContainer, FlowContainer {
    readonly kind: SyntaxKind.Identifier;
    /**
     * Prefer to use `id.unescapedText`. (Note: This is available only in services, not internally to the TypeScript compiler.)
     * Text of identifier, but if the identifier begins with two underscores, this will begin with three.
     */
    readonly escapedText: __String;
}

export type DeclarationName =
    // | PropertyName
    // | JsxAttributeName
    // | StringLiteralLike
    // | ElementAccessExpression
    // | BindingPattern
    // | EntityNameExpression
    | neverDeclarationName
;

export interface Declaration extends Node {
    _declarationBrand: any;
    /** @internal */ symbol: Symbol; // Symbol declared by node (initialized by binding)
    /** @internal */ localSymbol?: Symbol; // Local symbol declared by node (initialized by binding only for exported nodes)
}

export type PhysicalDeclaration = SyntacticNode & Declaration ;

export interface NamedDeclaration extends Declaration {
    readonly name?: Node;
}

export interface PrimaryExpression extends MemberExpression {
    _primaryExpressionBrand: any;
}

// The text property of a LiteralExpression stores the interpreted value of the literal in text form. For a StringLiteral,
// or any literal of a template, this means quotes have been removed and escapes have been converted to actual characters.
// For a NumericLiteral, the stored value is the toString() representation of the number. For example 1, 1.00, and 1e0 are all stored as just "1".
export interface LiteralLikeNode extends Node {
    text: string;
    isUnterminated?: boolean;
    hasExtendedUnicodeEscape?: boolean;
}

export interface TemplateLiteralLikeNode extends LiteralLikeNode {
    rawText?: string;
    /** @internal */
    templateFlags?: TokenFlags;
}

// The text property of a LiteralExpression stores the interpreted value of the literal in text form. For a StringLiteral,
// or any literal of a template, this means quotes have been removed and escapes have been converted to actual characters.
// For a NumericLiteral, the stored value is the toString() representation of the number. For example 1, 1.00, and 1e0 are all stored as just "1".
export interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
    _literalExpressionBrand: any;
}

export interface RegularExpressionLiteral extends LiteralExpression {
    readonly kind: SyntaxKind.RegularExpressionLiteral;
}

export interface NoSubstitutionTemplateLiteral extends LiteralExpression, TemplateLiteralLikeNode, Declaration {
    readonly kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    /** @internal */
    templateFlags?: TokenFlags;
}

// dprint-ignore
export const enum TokenFlags {
    None = 0,
    /** @internal */
    PrecedingLineBreak = 1 << 0,
    /** @internal */
    PrecedingJSDocComment = 1 << 1,
    /** @internal */
    Unterminated = 1 << 2,
    /** @internal */
    ExtendedUnicodeEscape = 1 << 3,     // e.g. `\u{10ffff}`
    Scientific = 1 << 4,                // e.g. `10e2`
    Octal = 1 << 5,                     // e.g. `0777`
    HexSpecifier = 1 << 6,              // e.g. `0x00000000`
    BinarySpecifier = 1 << 7,           // e.g. `0b0110010000000000`
    OctalSpecifier = 1 << 8,            // e.g. `0o777`
    /** @internal */
    ContainsSeparator = 1 << 9,         // e.g. `0b1100_0101`
    /** @internal */
    UnicodeEscape = 1 << 10,            // e.g. `\u00a0`
    /** @internal */
    ContainsInvalidEscape = 1 << 11,    // e.g. `\uhello`
    /** @internal */
    HexEscape = 1 << 12,                // e.g. `\xa0`
    /** @internal */
    ContainsLeadingZero = 1 << 13,      // e.g. `0888`
    /** @internal */
    ContainsInvalidSeparator = 1 << 14, // e.g. `0_1`
    /** @internal */
    BinaryOrOctalSpecifier = BinarySpecifier | OctalSpecifier,
    /** @internal */
    WithSpecifier = HexSpecifier | BinaryOrOctalSpecifier,
    /** @internal */
    StringLiteralFlags = HexEscape | UnicodeEscape | ExtendedUnicodeEscape | ContainsInvalidEscape,
    /** @internal */
    NumericLiteralFlags = Scientific | Octal | ContainsLeadingZero | WithSpecifier | ContainsSeparator | ContainsInvalidSeparator,
    /** @internal */
    TemplateLiteralLikeFlags = HexEscape | UnicodeEscape | ExtendedUnicodeEscape | ContainsInvalidEscape,
    /** @internal */
    IsInvalid = Octal | ContainsLeadingZero | ContainsInvalidSeparator | ContainsInvalidEscape,
}

export interface NumericLiteral extends LiteralExpression, Declaration {
    readonly kind: SyntaxKind.NumericLiteral;
    /** @internal */
    readonly numericLiteralFlags: TokenFlags;
}

interface TypeCheckerAssociatedMaybe {
    checker ?: TypeChecker ;
}





export interface FileReference extends TextRange {
    fileName: string;
    resolutionMode?: ResolutionMode;
}

export interface CheckJsDirective extends TextRange {
    enabled: boolean;
}

export type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;

export interface CommentRange extends TextRange {
    hasTrailingNewLine?: boolean;
    kind: CommentKind;
}

export interface SynthesizedComment extends CommentRange {
    text: string;
    pos: -1;
    end: -1;
    hasLeadingNewline?: boolean;
}

// NOTE: Ensure this is up-to-date with src/debug/debug.ts
// dprint-ignore
export const enum FlowFlags {
    Unreachable    = 1 << 0,  // Unreachable code
    Start          = 1 << 1,  // Start of flow graph
    BranchLabel    = 1 << 2,  // Non-looping junction
    LoopLabel      = 1 << 3,  // Looping junction
    Assignment     = 1 << 4,  // Assignment
    TrueCondition  = 1 << 5,  // Condition known to be true
    FalseCondition = 1 << 6,  // Condition known to be false
    SwitchClause   = 1 << 7,  // Switch statement clause
    ArrayMutation  = 1 << 8,  // Potential array mutation
    Call           = 1 << 9,  // Potential assertion call
    ReduceLabel    = 1 << 10, // Temporarily reduce antecedents of label
    Referenced     = 1 << 11, // Referenced as antecedent once
    Shared         = 1 << 12, // Referenced as antecedent more than once

    Label = BranchLabel | LoopLabel,
    Condition = TrueCondition | FalseCondition,
}

export type FlowNode =
    | FlowStart
    | FlowLabel
    | FlowAssignment
    | FlowCondition
    | FlowSwitchClause
    | FlowArrayMutation
    | FlowCall
    | FlowReduceLabel;

export interface FlowNodeBase {
    flags: FlowFlags;
    id?: number; // Node id used by flow type cache in checker
}

interface MonoFlowNodeBase extends FlowNodeBase {
    readonly node: Node
}

// FlowStart represents the start of a control flow. For a function expression or arrow
// function, the node property references the function (which in turn has a flowNode
// property for the containing control flow).
export interface FlowStart extends FlowNodeBase, MonoFlowNodeBase
{
    node?: FunctionExpression | ArrowFunction | MethodDeclaration | GetAccessorDeclaration | SetAccessorDeclaration;
}

// FlowLabel represents a junction with multiple possible preceding control flows.
export interface FlowLabel extends FlowNodeBase {
    antecedents: FlowNode[] | undefined;
}

// FlowAssignment represents a node that assigns a value to a narrowable reference,
// i.e. an identifier or a dotted name that starts with an identifier or 'this'.
export interface FlowAssignment extends FlowNodeBase, MonoFlowNodeBase
{
    node: Expression | VariableDeclaration | BindingElement;
    antecedent: FlowNode;
}

export interface FlowCall extends FlowNodeBase, MonoFlowNodeBase
{
    node: CallExpression;
    antecedent: FlowNode;
}

// FlowCondition represents a condition that is known to be true or false at the
// node's location in the control flow.
export interface FlowCondition extends FlowNodeBase, MonoFlowNodeBase
{
    node: Expression;
    antecedent: FlowNode;
}

// dprint-ignore
export interface FlowSwitchClause extends FlowNodeBase {
    switchStatement: SwitchStatement;
    clauseStart: number;   // Start index of case/default clause range
    clauseEnd: number;     // End index of case/default clause range
    antecedent: FlowNode;
}

// FlowArrayMutation represents a node potentially mutates an array, i.e. an
// operation of the form 'x.push(value)', 'x.unshift(value)' or 'x[n] = value'.
export interface FlowArrayMutation extends FlowNodeBase, MonoFlowNodeBase
{
    node: CallExpression | BinaryExpression;
    antecedent: FlowNode;
}

export interface FlowReduceLabel extends FlowNodeBase {
    target: FlowLabel;
    antecedents: FlowNode[];
    antecedent: FlowNode;
}

export type FlowType = Type | IncompleteType;

// Incomplete types occur during control flow analysis of loops. An IncompleteType
// is distinguished from a regular type by a flags value of zero. Incomplete type
// objects are internal to the getFlowTypeOfReference function and never escape it.
// dprint-ignore
export interface IncompleteType {
    flags: TypeFlags | 0;  // No flags set
    type: Type;            // The type marked incomplete
}

export interface AmdDependency {
    path: string;
    name?: string;
}

/**
 * Subset of properties from SourceFile that are used in multiple utility functions
 */
export interface SourceFileLike {
    readonly text: string;
    /** @internal */
    lineMap?: readonly number[];
    /** @internal */
    getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
}

/** @internal */
export interface RedirectInfo {
    /** Source file this redirects to. */
    readonly redirectTarget: SourceFile;
    /**
     * Source file for the duplicate package. This will not be used by the Program,
     * but we need to keep this around so we can watch for changes in underlying.
     */
    readonly unredirected: SourceFile;
}

export type ResolutionMode = ModuleKind.ESNext | ModuleKind.CommonJS | undefined;

export interface SourceFile extends Declaration, LocalsContainer
{}

/** @internal */
export interface ReadonlyPragmaContext {
    languageVersion: ScriptTarget;
    pragmas?: ReadonlyPragmaMap;
    checkJsDirective?: CheckJsDirective;
    referencedFiles: readonly FileReference[];
    typeReferenceDirectives: readonly FileReference[];
    libReferenceDirectives: readonly FileReference[];
    amdDependencies: readonly AmdDependency[];
    hasNoDefaultLib?: boolean;
    moduleName?: string;
}

/** @internal */
export interface PragmaContext extends ReadonlyPragmaContext {
    pragmas?: PragmaMap;
    referencedFiles: FileReference[];
    typeReferenceDirectives: FileReference[];
    libReferenceDirectives: FileReference[];
    amdDependencies: AmdDependency[];
}

/** @internal */
export interface SourceFile extends ReadonlyPragmaContext {}

/** @internal */
export interface CommentDirective {
    range: TextRange;
    type: CommentDirectiveType;
}

/** @internal */
export const enum CommentDirectiveType {
    ExpectError,
    Ignore,
}

/** @internal */
export type ExportedModulesFromDeclarationEmit = readonly Symbol[];

export interface Bundle extends Node {
    readonly kind: SyntaxKind.Bundle;
    readonly sourceFiles: readonly SourceFile[];
    /** @internal */ syntheticFileReferences?: readonly FileReference[];
    /** @internal */ syntheticTypeReferences?: readonly FileReference[];
    /** @internal */ syntheticLibReferences?: readonly FileReference[];
    /** @internal */ hasNoDefaultLib?: boolean;
}

export interface JsonSourceFile extends SourceFile {
    readonly statements: NodeArray<JsonObjectExpressionStatement>;
}

export interface TsConfigSourceFile extends JsonSourceFile {
    extendedSourceFiles?: string[];
    /** @internal */ configFileSpecs?: ConfigFileSpecs;
}

export interface JsonMinusNumericLiteral extends PrefixUnaryExpression {
    readonly kind: SyntaxKind.PrefixUnaryExpression;
    readonly operator: SyntaxKind.MinusToken;
    readonly operand: NumericLiteral;
}

export type JsonObjectExpression =
    // | ObjectLiteralExpression
    // | ArrayLiteralExpression
    // | JsonMinusNumericLiteral
    // | NumericLiteral
    // | StringLiteral
    // | BooleanLiteral
    // | NullLiteral
    | JsonObjectExpressionImpl
;

export interface JsonObjectExpressionStatement extends ExpressionStatement {
    readonly expression: JsonObjectExpression;
}

export interface ScriptReferenceHost {
    getCompilerOptions(): CompilerOptions;
    getSourceFile(fileName: string): SourceFile | undefined;
    getSourceFileByPath(path: Path): SourceFile | undefined;
    getCurrentDirectory(): string;
}

/** @internal */
export enum FileIncludeKind {
    RootFile,
    SourceFromProjectReference,
    OutputFromProjectReference,
    Import,
    ReferenceFile,
    TypeReferenceDirective,
    LibFile,
    LibReferenceDirective,
    AutomaticTypeDirectiveFile,
}

/** @internal */
export interface RootFile {
    kind: FileIncludeKind.RootFile;
    index: number;
}

/** @internal */
export interface LibFile {
    kind: FileIncludeKind.LibFile;
    index?: number;
}

/** @internal */
export type ProjectReferenceFileKind =
    | FileIncludeKind.SourceFromProjectReference
    | FileIncludeKind.OutputFromProjectReference;

/** @internal */
export interface ProjectReferenceFile {
    kind: ProjectReferenceFileKind;
    index: number;
}

/** @internal */
export type ReferencedFileKind =
    | FileIncludeKind.Import
    | FileIncludeKind.ReferenceFile
    | FileIncludeKind.TypeReferenceDirective
    | FileIncludeKind.LibReferenceDirective;

/** @internal */
export interface ReferencedFile {
    kind: ReferencedFileKind;
    file: Path;
    index: number;
}

/** @internal */
export interface AutomaticTypeDirectiveFile {
    kind: FileIncludeKind.AutomaticTypeDirectiveFile;
    typeReference: string;
    packageId: PackageId | undefined;
}

/** @internal */
export type FileIncludeReason =
    | RootFile
    | LibFile
    | ProjectReferenceFile
    | ReferencedFile
    | AutomaticTypeDirectiveFile;

/** @internal */
export const enum FilePreprocessingDiagnosticsKind {
    FilePreprocessingReferencedDiagnostic,
    FilePreprocessingFileExplainingDiagnostic,
    ResolutionDiagnostics,
}

/** @internal */
export interface FilePreprocessingReferencedDiagnostic {
    kind: FilePreprocessingDiagnosticsKind.FilePreprocessingReferencedDiagnostic;
    reason: ReferencedFile;
    diagnostic: DiagnosticMessage;
    args?: DiagnosticArguments;
}

/** @internal */
export interface FilePreprocessingFileExplainingDiagnostic {
    kind: FilePreprocessingDiagnosticsKind.FilePreprocessingFileExplainingDiagnostic;
    file?: Path;
    fileProcessingReason: FileIncludeReason;
    diagnostic: DiagnosticMessage;
    args?: DiagnosticArguments;
}

/** @internal */
export interface ResolutionDiagnostics {
    kind: FilePreprocessingDiagnosticsKind.ResolutionDiagnostics;
    diagnostics: readonly Diagnostic[];
}

/** @internal */
export type FilePreprocessingDiagnostics = FilePreprocessingReferencedDiagnostic | FilePreprocessingFileExplainingDiagnostic | ResolutionDiagnostics;

/** @internal */
export const enum EmitOnly {
    Js,
    Dts,
}

/** @internal */
export interface LibResolution<T extends ResolvedModuleWithFailedLookupLocations = ResolvedModuleWithFailedLookupLocations> {
    resolution: T;
    actual: string;
}
export interface Program extends ScriptReferenceHost {
    // TODO
}

export interface TypeCheckerHost extends ModuleSpecifierResolutionHost {
    //
}

type TypeChecker = TypeCheckerImpl ;

/** @internal */
export const enum MemberOverrideStatus {
    Ok,
    NeedsOverride,
    HasInvalidOverride,
}

/** @internal */
export const enum UnionReduction {
    None = 0,
    Literal,
    Subtype,
}

// dprint-ignore
/** @internal */
export const enum ContextFlags {
    None           = 0,
    Signature      = 1 << 0, // Obtaining contextual signature
    NoConstraints  = 1 << 1, // Don't obtain type variable constraints
    Completions    = 1 << 2, // Ignore inference to current node and parent nodes out to the containing call for completions
    SkipBindingPatterns = 1 << 3, // Ignore contextual types applied by binding patterns
}

// NOTE: If modifying this enum, must modify `TypeFormatFlags` too!
// dprint-ignore
export const enum NodeBuilderFlags {
    None                                    = 0,
    // Options
    NoTruncation                            = 1 << 0,   // Don't truncate result
    WriteArrayAsGenericType                 = 1 << 1,   // Write Array<T> instead T[]
    GenerateNamesForShadowedTypeParams      = 1 << 2,   // When a type parameter T is shadowing another T, generate a name for it so it can still be referenced
    UseStructuralFallback                   = 1 << 3,   // When an alias cannot be named by its symbol, rather than report an error, fallback to a structural printout if possible
    ForbidIndexedAccessSymbolReferences     = 1 << 4,   // Forbid references like `I["a"]["b"]` - print `typeof I.a<x>.b<y>` instead
    WriteTypeArgumentsOfSignature           = 1 << 5,   // Write the type arguments instead of type parameters of the signature
    UseFullyQualifiedType                   = 1 << 6,   // Write out the fully qualified type name (eg. Module.Type, instead of Type)
    UseOnlyExternalAliasing                 = 1 << 7,   // Only use external aliases for a symbol
    SuppressAnyReturnType                   = 1 << 8,   // If the return type is any-like and can be elided, don't offer a return type.
    WriteTypeParametersInQualifiedName      = 1 << 9,
    MultilineObjectLiterals                 = 1 << 10,  // Always write object literals across multiple lines
    WriteClassExpressionAsTypeLiteral       = 1 << 11,  // Write class {} as { new(): {} } - used for mixin declaration emit
    UseTypeOfFunction                       = 1 << 12,  // Build using typeof instead of function type literal
    OmitParameterModifiers                  = 1 << 13,  // Omit modifiers on parameters
    UseAliasDefinedOutsideCurrentScope      = 1 << 14,  // Allow non-visible aliases
    UseSingleQuotesForStringLiteralType     = 1 << 28,  // Use single quotes for string literal type
    NoTypeReduction                         = 1 << 29,  // Don't call getReducedType
    OmitThisParameter                       = 1 << 25,

    // Error handling
    AllowThisInObjectLiteral                = 1 << 15,
    AllowQualifiedNameInPlaceOfIdentifier   = 1 << 16,
    AllowAnonymousIdentifier                = 1 << 17,
    AllowEmptyUnionOrIntersection           = 1 << 18,
    AllowEmptyTuple                         = 1 << 19,
    AllowUniqueESSymbolType                 = 1 << 20,
    AllowEmptyIndexInfoType                 = 1 << 21,
    /** @internal */ WriteComputedProps      = 1 << 30, // { [E.A]: 1 }

    // Errors (cont.)
    AllowNodeModulesRelativePaths           = 1 << 26,
    /** @internal */ DoNotIncludeSymbolChain = 1 << 27,    // Skip looking up and printing an accessible symbol chain

    IgnoreErrors = AllowThisInObjectLiteral | AllowQualifiedNameInPlaceOfIdentifier | AllowAnonymousIdentifier | AllowEmptyUnionOrIntersection | AllowEmptyTuple | AllowEmptyIndexInfoType | AllowNodeModulesRelativePaths,

    // State
    InObjectTypeLiteral                     = 1 << 22,
    InTypeAlias                             = 1 << 23,    // Writing type in type alias declaration
    InInitialEntityName                     = 1 << 24,    // Set when writing the LHS of an entity name or entity name expression
}

// Ensure the shared flags between this and `NodeBuilderFlags` stay in alignment
// dprint-ignore
export const enum TypeFormatFlags {
    None                                    = 0,
    NoTruncation                            = 1 << 0,  // Don't truncate typeToString result
    WriteArrayAsGenericType                 = 1 << 1,  // Write Array<T> instead T[]
    GenerateNamesForShadowedTypeParams      = 1 << 2,   // When a type parameter T is shadowing another T, generate a name for it so it can still be referenced
    UseStructuralFallback                   = 1 << 3,   // When an alias cannot be named by its symbol, rather than report an error, fallback to a structural printout if possible
    // hole because there's a hole in node builder flags
    WriteTypeArgumentsOfSignature           = 1 << 5,  // Write the type arguments instead of type parameters of the signature
    UseFullyQualifiedType                   = 1 << 6,  // Write out the fully qualified type name (eg. Module.Type, instead of Type)
    // hole because `UseOnlyExternalAliasing` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` instead
    SuppressAnyReturnType                   = 1 << 8,  // If the return type is any-like, don't offer a return type.
    // hole because `WriteTypeParametersInQualifiedName` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` for this instead
    MultilineObjectLiterals                 = 1 << 10, // Always print object literals across multiple lines (only used to map into node builder flags)
    WriteClassExpressionAsTypeLiteral       = 1 << 11, // Write a type literal instead of (Anonymous class)
    UseTypeOfFunction                       = 1 << 12, // Write typeof instead of function type literal
    OmitParameterModifiers                  = 1 << 13, // Omit modifiers on parameters

    UseAliasDefinedOutsideCurrentScope      = 1 << 14, // For a `type T = ... ` defined in a different file, write `T` instead of its value, even though `T` can't be accessed in the current scope.
    UseSingleQuotesForStringLiteralType     = 1 << 28, // Use single quotes for string literal type
    NoTypeReduction                         = 1 << 29, // Don't call getReducedType
    OmitThisParameter                       = 1 << 25,

    // Error Handling
    AllowUniqueESSymbolType                 = 1 << 20, // This is bit 20 to align with the same bit in `NodeBuilderFlags`

    // TypeFormatFlags exclusive
    AddUndefined                            = 1 << 17, // Add undefined to types of initialized, non-optional parameters
    WriteArrowStyleSignature                = 1 << 18, // Write arrow style signature

    // State
    InArrayType                             = 1 << 19, // Writing an array element type
    InElementType                           = 1 << 21, // Writing an array or union element type
    InFirstTypeArgument                     = 1 << 22, // Writing first type argument of the instantiated type
    InTypeAlias                             = 1 << 23, // Writing type in type alias declaration

    NodeBuilderFlagsMask = NoTruncation | WriteArrayAsGenericType | GenerateNamesForShadowedTypeParams | UseStructuralFallback | WriteTypeArgumentsOfSignature |
        UseFullyQualifiedType | SuppressAnyReturnType | MultilineObjectLiterals | WriteClassExpressionAsTypeLiteral |
        UseTypeOfFunction | OmitParameterModifiers | UseAliasDefinedOutsideCurrentScope | AllowUniqueESSymbolType | InTypeAlias |
        UseSingleQuotesForStringLiteralType | NoTypeReduction | OmitThisParameter,
}

// dprint-ignore
export const enum SymbolFormatFlags {
    None                                    = 0,

    // Write symbols's type argument if it is instantiated symbol
    // eg. class C<T> { p: T }   <-- Show p as C<T>.p here
    //     var a: C<number>;
    //     var p = a.p; <--- Here p is property of C<number> so show it as C<number>.p instead of just C.p
    WriteTypeParametersOrArguments          = 1 << 0,

    // Use only external alias information to get the symbol name in the given context
    // eg.  module m { export class c { } } import x = m.c;
    // When this flag is specified m.c will be used to refer to the class instead of alias symbol x
    UseOnlyExternalAliasing                 = 1 << 1,

    // Build symbol name using any nodes needed, instead of just components of an entity name
    AllowAnyNodeKind                        = 1 << 2,

    // Prefer aliases which are not directly visible
    UseAliasDefinedOutsideCurrentScope      = 1 << 3,

    // { [E.A]: 1 }
    /** @internal */ WriteComputedProps      = 1 << 4,

    // Skip building an accessible symbol chain
    /** @internal */ DoNotIncludeSymbolChain = 1 << 5,
}

/** @internal */
export interface SymbolWalker {
    /** Note: Return values are not ordered. */
    walkType(root: Type): { visitedTypes: readonly Type[]; visitedSymbols: readonly Symbol[]; };
    /** Note: Return values are not ordered. */
    walkSymbol(root: Symbol): { visitedTypes: readonly Type[]; visitedSymbols: readonly Symbol[]; };
}

// This was previously deprecated in our public API, but is still used internally
/** @internal */
export interface SymbolWriter {
    writeKeyword(text: string): void;
    writeOperator(text: string): void;
    writePunctuation(text: string): void;
    writeSpace(text: string): void;
    writeStringLiteral(text: string): void;
    writeParameter(text: string): void;
    writeProperty(text: string): void;
    writeSymbol(text: string, symbol: Symbol): void;
    writeLine(force?: boolean): void;
    increaseIndent(): void;
    decreaseIndent(): void;
    clear(): void;
}

/** @internal */
export const enum SymbolAccessibility {
    Accessible,
    NotAccessible,
    CannotBeNamed,
}

/** @internal */
export const enum SyntheticSymbolKind {
    UnionOrIntersection,
    Spread,
}

export const enum TypePredicateKind {
    This,
    Identifier,
    AssertsThis,
    AssertsIdentifier,
}

export interface TypePredicateBase {
    kind: TypePredicateKind;
    type: Type | undefined;
}

export interface ThisTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.This;
    parameterName: undefined;
    parameterIndex: undefined;
    type: Type;
}

export interface IdentifierTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.Identifier;
    parameterName: string;
    parameterIndex: number;
    type: Type;
}

export interface AssertsThisTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.AssertsThis;
    parameterName: undefined;
    parameterIndex: undefined;
    type: Type | undefined;
}

export interface AssertsIdentifierTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.AssertsIdentifier;
    parameterName: string;
    parameterIndex: number;
    type: Type | undefined;
}

export type TypePredicate = ThisTypePredicate | IdentifierTypePredicate | AssertsThisTypePredicate | AssertsIdentifierTypePredicate;

/** @internal */
export interface EmitResolver {
    // 
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

// /**
//  * Used to track a `declare module "foo*"`-like declaration.
//  *
//  * @internal
//  */
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

// dprint-ignore
export const enum InferencePriority {
    None                         = 0,
    NakedTypeVariable            = 1 << 0,  // Naked type variable in union or intersection type
    SpeculativeTuple             = 1 << 1,  // Speculative tuple inference
    SubstituteSource             = 1 << 2,  // Source of inference originated within a substitution type's substitute
    HomomorphicMappedType        = 1 << 3,  // Reverse inference for homomorphic mapped type
    PartialHomomorphicMappedType = 1 << 4,  // Partial reverse inference for homomorphic mapped type
    MappedTypeConstraint         = 1 << 5,  // Reverse inference for mapped type
    ContravariantConditional     = 1 << 6,  // Conditional type in contravariant position
    ReturnType                   = 1 << 7,  // Inference made from return type of generic function
    LiteralKeyof                 = 1 << 8,  // Inference made from a string literal to a keyof T
    NoConstraints                = 1 << 9,  // Don't infer from constraints of instantiable types
    AlwaysStrict                 = 1 << 10, // Always use strict rules for contravariant inferences
    MaxValue                     = 1 << 11, // Seed for inference priority tracking

    PriorityImpliesCombination = ReturnType | MappedTypeConstraint | LiteralKeyof, // These priorities imply that the resulting type should be a combination of all candidates
    Circularity = -1,  // Inference circularity (value less than all other priorities)
}

// dprint-ignore
/** @internal */
export const enum InferenceFlags {
    None            =      0,  // No special inference behaviors
    NoDefault       = 1 << 0,  // Infer silentNeverType for no inferences (otherwise anyType or unknownType)
    AnyDefault      = 1 << 1,  // Infer anyType (in JS files) for no inferences (otherwise unknownType)
    SkippedGenericFunction = 1 << 2, // A generic function was skipped during inference
}

// dprint-ignore
/** @internal */
export interface InferenceContext {
    inferences: InferenceInfo[];                  // Inferences made for each type parameter
    signature?: Signature;                        // Generic signature for which inferences are made (if any)
    flags: InferenceFlags;                        // Inference flags
    compareTypes: TypeComparer;                   // Type comparer function
    mapper: TypeMapper;                           // Mapper that fixes inferences
    nonFixingMapper: TypeMapper;                  // Mapper that doesn't fix inferences
    returnMapper?: TypeMapper;                    // Type mapper for inferences from return types (if any)
    inferredTypeParameters?: readonly TypeParameter[]; // Inferred type parameters for function result
    intraExpressionInferenceSites?: IntraExpressionInferenceSite[];
}

/** @internal */
export interface IntraExpressionInferenceSite {
    node: Expression | MethodDeclaration;
    type: Type;
}

// dprint-ignore
/** @internal */
export interface WideningContext {
    parent?: WideningContext;       // Parent context
    propertyName?: __String;        // Name of property in parent
    siblings?: Type[];              // Types of siblings
    resolvedProperties?: Symbol[];  // Properties occurring in sibling object literals
}

/** @internal */
export const enum AssignmentDeclarationKind {
    None,
    /// exports.name = expr
    /// module.exports.name = expr
    ExportsProperty,
    /// module.exports = expr
    ModuleExports,
    /// className.prototype.name = expr
    PrototypeProperty,
    /// this.name = expr
    ThisProperty,
    // F.name = expr
    Property,
    // F.prototype = { ... }
    Prototype,
    // Object.defineProperty(x, 'name', { value: any, writable?: boolean (false by default) });
    // Object.defineProperty(x, 'name', { get: Function, set: Function });
    // Object.defineProperty(x, 'name', { get: Function });
    // Object.defineProperty(x, 'name', { set: Function });
    ObjectDefinePropertyValue,
    // Object.defineProperty(exports || module.exports, 'name', ...);
    ObjectDefinePropertyExports,
    // Object.defineProperty(Foo.prototype, 'name', ...);
    ObjectDefinePrototypeProperty,
}




;

export interface FileExtensionInfo {
    extension: string;
    isMixedContent: boolean;
    scriptKind?: ScriptKind;
}

export interface DiagnosticMessage {
    key: string;
    category: DiagnosticCategory;
    code: number;
    message: string;
    reportsUnnecessary?: {};
    reportsDeprecated?: {};
    /** @internal */
    elidedInCompatabilityPyramid?: boolean;
}

/** @internal */
export interface RepopulateModuleNotFoundDiagnosticChain {
    moduleReference: string;
    mode: ResolutionMode;
    packageName: string | undefined;
}

/** @internal */
export type RepopulateDiagnosticChainInfo = RepopulateModuleNotFoundDiagnosticChain;

/**
 * A linked list of formatted diagnostic messages to be used as part of a multiline message.
 * It is built from the bottom up, leaving the head to be the "main" diagnostic.
 * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
 * the difference is that messages are all preformatted in DMC.
 */
export interface DiagnosticMessageChain {
    messageText: string;
    category: DiagnosticCategory;
    code: number;
    next?: DiagnosticMessageChain[];
    /** @internal */
    repopulateInfo?: () => RepopulateDiagnosticChainInfo;
}

export interface Diagnostic extends DiagnosticRelatedInformation {
    /** May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic. */
    reportsUnnecessary?: {};

    reportsDeprecated?: {};
    source?: string;
    relatedInformation?: DiagnosticRelatedInformation[];
    /** @internal */ skippedOn?: keyof CompilerOptions;
}

/** @internal */
export type DiagnosticArguments = (string | number)[];

/** @internal */
export type DiagnosticAndArguments = [message: DiagnosticMessage, ...args: DiagnosticArguments];

export interface DiagnosticRelatedInformation {
    category: DiagnosticCategory;
    code: number;
    file: SourceFile | undefined;
    start: number | undefined;
    length: number | undefined;
    messageText: string | DiagnosticMessageChain;
}

export interface DiagnosticWithLocation extends Diagnostic {
    file: SourceFile;
    start: number;
    length: number;
}

/** @internal */
export interface DiagnosticWithDetachedLocation extends Diagnostic {
    file: undefined;
    fileName: string;
    start: number;
    length: number;
}

export enum DiagnosticCategory {
    Warning,
    Error,
    Suggestion,
    Message,
}
/** @internal */
export function diagnosticCategoryName(d: { category: DiagnosticCategory; }, lowerCase = true): string {
    const name = DiagnosticCategory[d.category];
    return lowerCase ? name.toLowerCase() : name;
}

export enum ModuleResolutionKind {
    Classic = 1,
    /**
     * @deprecated
     * `NodeJs` was renamed to `Node10` to better reflect the version of Node that it targets.
     * Use the new name or consider switching to a modern module resolution target.
     */
    NodeJs = 2,
    Node10 = 2,
    // Starting with node12, node's module resolver has significant departures from traditional cjs resolution
    // to better support ECMAScript modules and their use within node - however more features are still being added.
    // TypeScript's Node ESM support was introduced after Node 12 went end-of-life, and Node 14 is the earliest stable
    // version that supports both pattern trailers - *but*, Node 16 is the first version that also supports ECMAScript 2022.
    // In turn, we offer both a `NodeNext` moving resolution target, and a `Node16` version-anchored resolution target
    Node16 = 3,
    NodeNext = 99, // Not simply `Node16` so that compiled code linked against TS can use the `Next` value reliably (same as with `ModuleKind`)
    Bundler = 100,
}

export enum ModuleDetectionKind {
    /**
     * Files with imports, exports and/or import.meta are considered modules
     */
    Legacy = 1,
    /**
     * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
     */
    Auto = 2,
    /**
     * Consider all non-declaration files modules, regardless of present syntax
     */
    Force = 3,
}

export interface PluginImport {
    name: string;
}

export interface ProjectReference {
    /** A normalized path on disk */
    path: string;
    /** The path as the user originally wrote it */
    originalPath?: string;
    /** @deprecated */
    prepend?: boolean;
    /** True if it is intended that this reference form a circularity */
    circular?: boolean;
}

export enum WatchFileKind {
    FixedPollingInterval,
    PriorityPollingInterval,
    DynamicPriorityPolling,
    FixedChunkSizePolling,
    UseFsEvents,
    UseFsEventsOnParentDirectory,
}

export enum WatchDirectoryKind {
    UseFsEvents,
    FixedPollingInterval,
    DynamicPriorityPolling,
    FixedChunkSizePolling,
}

export enum PollingWatchKind {
    FixedInterval,
    PriorityInterval,
    DynamicPriority,
    FixedChunkSize,
}

export type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | ProjectReference[] | null | undefined;

export interface CompilerOptions {
    /** @internal */ all?: boolean;
    allowImportingTsExtensions?: boolean;
    allowJs?: boolean;
    /** @internal */ allowNonTsExtensions?: boolean;
    allowArbitraryExtensions?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean; // Always combine with strict property
    baseUrl?: string;
    /**
     * An error if set - this should only go through the -b pipeline and not actually be observed
     *
     * @internal
     */
    build?: boolean;
    /** @deprecated */
    charset?: string;
    checkJs?: boolean;
    /** @internal */ configFilePath?: string;
    /**
     * configFile is set as non enumerable property so as to avoid checking of json source files
     *
     * @internal
     */
    readonly configFile?: TsConfigSourceFile;
    customConditions?: string[];
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
    /** @internal */ diagnostics?: boolean;
    /** @internal */ extendedDiagnostics?: boolean;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    disableSolutionSearching?: boolean;
    disableReferencedProjectLoad?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
    exactOptionalPropertyTypes?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    /** @internal */ generateCpuProfile?: string;
    /** @internal */ generateTrace?: string;
    /** @internal */ help?: boolean;
    ignoreDeprecations?: string;
    importHelpers?: boolean;
    /** @deprecated */
    importsNotUsedAsValues?: ImportsNotUsedAsValues;
    /** @internal */ init?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedModules?: boolean;
    jsx?: JsxEmit;
    /** @deprecated */
    keyofStringsOnly?: boolean;
    lib?: string[];
    /** @internal */ listEmittedFiles?: boolean;
    /** @internal */ listFiles?: boolean;
    /** @internal */ explainFiles?: boolean;
    /** @internal */ listFilesOnly?: boolean;
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: ModuleKind;
    moduleResolution?: ModuleResolutionKind;
    moduleSuffixes?: string[];
    moduleDetection?: ModuleDetectionKind;
    newLine?: NewLineKind;
    noEmit?: boolean;
    /** @internal */ noEmitForJsFiles?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean; // Always combine with strict property
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean; // Always combine with strict property
    /** @deprecated */
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    /** @deprecated */
    noImplicitUseStrict?: boolean;
    noPropertyAccessFromIndexSignature?: boolean;
    assumeChangesOnlyAffectDirectDependencies?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    /** @internal */
    noDtsResolution?: boolean;
    noUncheckedIndexedAccess?: boolean;
    /** @deprecated */
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MapLike<string[]>;
    /**
     * The directory of the config file that specified 'paths'. Used to resolve relative paths when 'baseUrl' is absent.
     *
     * @internal
     */
    pathsBasePath?: string;
    /** @internal */ plugins?: PluginImport[];
    preserveConstEnums?: boolean;
    noImplicitOverride?: boolean;
    preserveSymlinks?: boolean;
    /** @deprecated */
    preserveValueImports?: boolean;
    /** @internal */ preserveWatchOutput?: boolean;
    project?: string;
    /** @internal */ pretty?: boolean;
    reactNamespace?: string;
    jsxFactory?: string;
    jsxFragmentFactory?: string;
    jsxImportSource?: string;
    composite?: boolean;
    incremental?: boolean;
    tsBuildInfoFile?: string;
    removeComments?: boolean;
    resolvePackageJsonExports?: boolean;
    resolvePackageJsonImports?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictFunctionTypes?: boolean; // Always combine with strict property
    strictBindCallApply?: boolean; // Always combine with strict property
    strictNullChecks?: boolean; // Always combine with strict property
    strictPropertyInitialization?: boolean; // Always combine with strict property
    stripInternal?: boolean;
    /** @deprecated */
    suppressExcessPropertyErrors?: boolean;
    /** @deprecated */
    suppressImplicitAnyIndexErrors?: boolean;
    /** @internal */ suppressOutputPathCheck?: boolean;
    target?: ScriptTarget;
    traceResolution?: boolean;
    useUnknownInCatchVariables?: boolean;
    resolveJsonModule?: boolean;
    types?: string[];
    /** Paths used to compute primary types search locations */
    typeRoots?: string[];
    verbatimModuleSyntax?: boolean;
    /** @internal */ version?: boolean;
    /** @internal */ watch?: boolean;
    esModuleInterop?: boolean;
    /** @internal */ showConfig?: boolean;
    useDefineForClassFields?: boolean;

    [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined;
}

export interface WatchOptions {
    watchFile?: WatchFileKind;
    watchDirectory?: WatchDirectoryKind;
    fallbackPolling?: PollingWatchKind;
    synchronousWatchDirectory?: boolean;
    excludeDirectories?: string[];
    excludeFiles?: string[];

    [option: string]: CompilerOptionsValue | undefined;
}

export interface TypeAcquisition {
    enable?: boolean;
    include?: string[];
    exclude?: string[];
    disableFilenameBasedTypeAcquisition?: boolean;
    [option: string]: CompilerOptionsValue | undefined;
}

export enum ModuleKind {
    None = 0,
    CommonJS = 1,
    AMD = 2,
    UMD = 3,
    System = 4,

    // NOTE: ES module kinds should be contiguous to more easily check whether a module kind is *any* ES module kind.
    //       Non-ES module kinds should not come between ES2015 (the earliest ES module kind) and ESNext (the last ES
    //       module kind).
    ES2015 = 5,
    ES2020 = 6,
    ES2022 = 7,
    ESNext = 99,

    // Node16+ is an amalgam of commonjs (albeit updated) and es2022+, and represents a distinct module system from es2020/esnext
    Node16 = 100,
    NodeNext = 199,

    // Emit as written
    Preserve = 200,
}

export const enum JsxEmit {
    None = 0,
    Preserve = 1,
    React = 2,
    ReactNative = 3,
    ReactJSX = 4,
    ReactJSXDev = 5,
}

/** @deprecated */
export const enum ImportsNotUsedAsValues {
    Remove,
    Preserve,
    Error,
}

export const enum NewLineKind {
    CarriageReturnLineFeed = 0,
    LineFeed = 1,
}

export interface LineAndCharacter {
    /** 0-based. */
    line: number;
    /*
     * 0-based. This value denotes the character position in line and is different from the 'column' because of tab characters.
     */
    character: number;
}

export const enum ScriptKind {
    Unknown = 0,
    JS = 1,
    JSX = 2,
    TS = 3,
    TSX = 4,
    External = 5,
    JSON = 6,
    /**
     * Used on extensions that doesn't define the ScriptKind but the content defines it.
     * Deferred extensions are going to be included in all project contexts.
     */
    Deferred = 7,
}

// NOTE: We must reevaluate the target for upcoming features when each successive TC39 edition is ratified in
//       June of each year. This includes changes to `LanguageFeatureMinimumTarget`, `ScriptTarget`,
//       transformers/esnext.ts, commandLineParser.ts, and the contents of each lib/esnext.*.d.ts file.
export const enum ScriptTarget {
    /** @deprecated */
    ES3 = 0,
    ES5 = 1,
    ES2015 = 2,
    ES2016 = 3,
    ES2017 = 4,
    ES2018 = 5,
    ES2019 = 6,
    ES2020 = 7,
    ES2021 = 8,
    ES2022 = 9,
    ESNext = 99,
    JSON = 100,
    Latest = ESNext,
}

export const enum LanguageVariant {
    Standard,
    JSX,
}

/** Either a parsed command line or a parsed tsconfig.json */
export interface ParsedCommandLine {
    options: CompilerOptions;
    typeAcquisition?: TypeAcquisition;
    fileNames: string[];
    projectReferences?: readonly ProjectReference[];
    watchOptions?: WatchOptions;
    raw?: any;
    errors: Diagnostic[];
    wildcardDirectories?: MapLike<WatchDirectoryFlags>;
    compileOnSave?: boolean;
}

export const enum WatchDirectoryFlags {
    None = 0,
    Recursive = 1 << 0,
}

/** @internal */
export interface ConfigFileSpecs {
    filesSpecs: readonly string[] | undefined;
    /**
     * Present to report errors (user specified specs), validatedIncludeSpecs are used for file name matching
     */
    includeSpecs: readonly string[] | undefined;
    /**
     * Present to report errors (user specified specs), validatedExcludeSpecs are used for file name matching
     */
    excludeSpecs: readonly string[] | undefined;
    validatedFilesSpec: readonly string[] | undefined;
    validatedIncludeSpecs: readonly string[] | undefined;
    validatedExcludeSpecs: readonly string[] | undefined;
    pathPatterns: readonly (string | Pattern)[] | undefined;
    isDefaultIncludeSpec: boolean;
}

/** @internal */
export type ModuleImportResult<T = {}> =
    | { module: T; modulePath?: string; error: undefined; }
    | { module: undefined; modulePath?: undefined; error: { stack?: string; message?: string; }; };

export interface CreateProgramOptions {
    rootNames: readonly string[];
    options: CompilerOptions;
    projectReferences?: readonly ProjectReference[];
    host?: CompilerHost;
    oldProgram?: Program;
    configFileParsingDiagnostics?: readonly Diagnostic[];
    /** @internal */
    typeScriptVersion?: string;
}

// dprint-ignore
/** @internal */
export const enum CharacterCodes {
    nullCharacter = 0,
    maxAsciiCharacter = 0x7F,

    lineFeed = 0x0A,              // \n
    carriageReturn = 0x0D,        // \r
    lineSeparator = 0x2028,
    paragraphSeparator = 0x2029,
    nextLine = 0x0085,

    // Unicode 3.0 space characters
    space = 0x0020,   // " "
    nonBreakingSpace = 0x00A0,   //
    enQuad = 0x2000,
    emQuad = 0x2001,
    enSpace = 0x2002,
    emSpace = 0x2003,
    threePerEmSpace = 0x2004,
    fourPerEmSpace = 0x2005,
    sixPerEmSpace = 0x2006,
    figureSpace = 0x2007,
    punctuationSpace = 0x2008,
    thinSpace = 0x2009,
    hairSpace = 0x200A,
    zeroWidthSpace = 0x200B,
    narrowNoBreakSpace = 0x202F,
    ideographicSpace = 0x3000,
    mathematicalSpace = 0x205F,
    ogham = 0x1680,

    _ = 0x5F,
    $ = 0x24,

    _0 = 0x30,
    _1 = 0x31,
    _2 = 0x32,
    _3 = 0x33,
    _4 = 0x34,
    _5 = 0x35,
    _6 = 0x36,
    _7 = 0x37,
    _8 = 0x38,
    _9 = 0x39,

    a = 0x61,
    b = 0x62,
    c = 0x63,
    d = 0x64,
    e = 0x65,
    f = 0x66,
    g = 0x67,
    h = 0x68,
    i = 0x69,
    j = 0x6A,
    k = 0x6B,
    l = 0x6C,
    m = 0x6D,
    n = 0x6E,
    o = 0x6F,
    p = 0x70,
    q = 0x71,
    r = 0x72,
    s = 0x73,
    t = 0x74,
    u = 0x75,
    v = 0x76,
    w = 0x77,
    x = 0x78,
    y = 0x79,
    z = 0x7A,

    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
    E = 0x45,
    F = 0x46,
    G = 0x47,
    H = 0x48,
    I = 0x49,
    J = 0x4A,
    K = 0x4B,
    L = 0x4C,
    M = 0x4D,
    N = 0x4E,
    O = 0x4F,
    P = 0x50,
    Q = 0x51,
    R = 0x52,
    S = 0x53,
    T = 0x54,
    U = 0x55,
    V = 0x56,
    W = 0x57,
    X = 0x58,
    Y = 0x59,
    Z = 0x5a,

    ampersand = 0x26,             // &
    asterisk = 0x2A,              // *
    at = 0x40,                    // @
    backslash = 0x5C,             // \
    backtick = 0x60,              // `
    bar = 0x7C,                   // |
    caret = 0x5E,                 // ^
    closeBrace = 0x7D,            // }
    closeBracket = 0x5D,          // ]
    closeParen = 0x29,            // )
    colon = 0x3A,                 // :
    comma = 0x2C,                 // ,
    dot = 0x2E,                   // .
    doubleQuote = 0x22,           // "
    equals = 0x3D,                // =
    exclamation = 0x21,           // !
    greaterThan = 0x3E,           // >
    hash = 0x23,                  // #
    lessThan = 0x3C,              // <
    minus = 0x2D,                 // -
    openBrace = 0x7B,             // {
    openBracket = 0x5B,           // [
    openParen = 0x28,             // (
    percent = 0x25,               // %
    plus = 0x2B,                  // +
    question = 0x3F,              // ?
    semicolon = 0x3B,             // ;
    singleQuote = 0x27,           // '
    slash = 0x2F,                 // /
    tilde = 0x7E,                 // ~

    backspace = 0x08,             // \b
    formFeed = 0x0C,              // \f
    byteOrderMark = 0xFEFF,
    tab = 0x09,                   // \t
    verticalTab = 0x0B,           // \v
}

export interface ModuleResolutionHost {
    // TODO: GH#18217 Optional methods frequently used as non-optional

    fileExists(fileName: string): boolean;
    // readFile function is used to read arbitrary text files on disk, i.e. when resolution procedure needs the content of 'package.json'
    // to determine location of bundled typings for node module
    readFile(fileName: string): string | undefined;
    trace?(s: string): void;
    directoryExists?(directoryName: string): boolean;
    /**
     * Resolve a symbolic link.
     * @see https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options
     */
    realpath?(path: string): string;
    getCurrentDirectory?(): string;
    getDirectories?(path: string): string[];
    useCaseSensitiveFileNames?: boolean | (() => boolean) | undefined;
}

/**
 * Used by services to specify the minimum host area required to set up source files under any compilation settings
 */
export interface MinimalResolutionCacheHost extends ModuleResolutionHost {
    getCompilationSettings(): CompilerOptions;
    getCompilerHost?(): CompilerHost | undefined;
}

/**
 * Represents the result of module resolution.
 * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
 * The Program will then filter results based on these flags.
 *
 * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
 */
export interface ResolvedModule {
    /** Path of the file the module was resolved to. */
    resolvedFileName: string;
    /** True if `resolvedFileName` comes from `node_modules`. */
    isExternalLibraryImport?: boolean;
    /**
     * True if the original module reference used a .ts extension to refer directly to a .ts file,
     * which should produce an error during checking if emit is enabled.
     */
    resolvedUsingTsExtension?: boolean;
}

/**
 * ResolvedModule with an explicitly provided `extension` property.
 * Prefer this over `ResolvedModule`.
 * If changing this, remember to change `moduleResolutionIsEqualTo`.
 */
export interface ResolvedModuleFull extends ResolvedModule {
    /**
     * @internal
     * This is a file name with preserved original casing, not a normalized `Path`.
     */
    readonly originalPath?: string;
    /**
     * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
     * This is optional for backwards-compatibility, but will be added if not provided.
     */
    extension: string;
    packageId?: PackageId;
}

/**
 * Unique identifier with a package name and version.
 * If changing this, remember to change `packageIdIsEqual`.
 */
export interface PackageId {
    /**
     * Name of the package.
     * Should not include `@types`.
     * If accessing a non-index file, this should include its name e.g. "foo/bar".
     */
    name: string;
    /**
     * Name of a submodule within this package.
     * May be "".
     */
    subModuleName: string;
    /** Version of the package, e.g. "1.2.3" */
    version: string;
}

export const enum Extension {
    Ts = ".ts",
    Tsx = ".tsx",
    Dts = ".d.ts",
    Js = ".js",
    Jsx = ".jsx",
    Json = ".json",
    TsBuildInfo = ".tsbuildinfo",
    Mjs = ".mjs",
    Mts = ".mts",
    Dmts = ".d.mts",
    Cjs = ".cjs",
    Cts = ".cts",
    Dcts = ".d.cts",
}

export interface ResolvedModuleWithFailedLookupLocations {
    readonly resolvedModule: ResolvedModuleFull | undefined;
    /** @internal */
    failedLookupLocations?: string[];
    /** @internal */
    affectingLocations?: string[];
    /** @internal */
    resolutionDiagnostics?: Diagnostic[];
    /**
     * @internal
     * Used to issue a better diagnostic when an unresolvable module may
     * have been resolvable under different module resolution settings.
     */
    alternateResult?: string;
}

export interface ResolvedTypeReferenceDirective {
    // True if the type declaration file was found in a primary lookup location
    primary: boolean;
    // The location of the .d.ts file we located, or undefined if resolution failed
    resolvedFileName: string | undefined;
    /**
     * @internal
     * The location of the symlink to the .d.ts file we found, if `resolvedFileName` was the realpath.
     * This is a file name with preserved original casing, not a normalized `Path`.
     */
    originalPath?: string;
    packageId?: PackageId;
    /** True if `resolvedFileName` comes from `node_modules`. */
    isExternalLibraryImport?: boolean;
}

export interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
    readonly resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective | undefined;
    /** @internal */ failedLookupLocations?: string[];
    /** @internal */ affectingLocations?: string[];
    /** @internal */ resolutionDiagnostics?: Diagnostic[];
}

/** @internal */
export type HasInvalidatedResolutions = (sourceFile: Path) => boolean;
/** @internal */
export type HasInvalidatedLibResolutions = (libFileName: string) => boolean;
/** @internal */
export type HasChangedAutomaticTypeDirectiveNames = () => boolean;

export interface CompilerHost extends ModuleResolutionHost {
    // TODO
}

/** true if --out otherwise source file name *
 * @internal
 */
export type SourceOfProjectReferenceRedirect = string | true;

/** @internal */
export interface ResolvedProjectReferenceCallbacks {
    getSourceOfProjectReferenceRedirect(fileName: string): SourceOfProjectReferenceRedirect | undefined;
    forEachResolvedProjectReference<T>(cb: (resolvedProjectReference: ResolvedProjectReference) => T | undefined): T | undefined;
}

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

export interface SourceMapRange extends TextRange {
    source?: SourceMapSource;
}

export interface SourceMapSource {
    fileName: string;
    text: string;
    /** @internal */ lineMap: readonly number[];
    skipTrivia?: (pos: number) => number;
}

/** @internal */
export type SnippetElement = TabStop | Placeholder;

/** @internal */
export interface TabStop {
    kind: SnippetKind.TabStop;
    order: number;
}

/** @internal */
export interface Placeholder {
    kind: SnippetKind.Placeholder;
    order: number;
}

// Reference: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax
// dprint-ignore
/** @internal */
export const enum SnippetKind {
    TabStop,                                // `$1`, `$2`
    Placeholder,                            // `${1:foo}`
    Choice,                                 // `${1|one,two,three|}`
    Variable,                               // `$name`, `${name:default}`
}

// dprint-ignore
export const enum EmitFlags {
    None = 0,
    SingleLine = 1 << 0,                    // The contents of this node should be emitted on a single line.
    MultiLine = 1 << 1,
    AdviseOnEmitNode = 1 << 2,              // The printer should invoke the onEmitNode callback when printing this node.
    NoSubstitution = 1 << 3,                // Disables further substitution of an expression.
    CapturesThis = 1 << 4,                  // The function captures a lexical `this`
    NoLeadingSourceMap = 1 << 5,            // Do not emit a leading source map location for this node.
    NoTrailingSourceMap = 1 << 6,           // Do not emit a trailing source map location for this node.
    NoSourceMap = NoLeadingSourceMap | NoTrailingSourceMap, // Do not emit a source map location for this node.
    NoNestedSourceMaps = 1 << 7,            // Do not emit source map locations for children of this node.
    NoTokenLeadingSourceMaps = 1 << 8,      // Do not emit leading source map location for token nodes.
    NoTokenTrailingSourceMaps = 1 << 9,     // Do not emit trailing source map location for token nodes.
    NoTokenSourceMaps = NoTokenLeadingSourceMaps | NoTokenTrailingSourceMaps, // Do not emit source map locations for tokens of this node.
    NoLeadingComments = 1 << 10,            // Do not emit leading comments for this node.
    NoTrailingComments = 1 << 11,           // Do not emit trailing comments for this node.
    NoComments = NoLeadingComments | NoTrailingComments, // Do not emit comments for this node.
    NoNestedComments = 1 << 12,
    HelperName = 1 << 13,                   // The Identifier refers to an *unscoped* emit helper (one that is emitted at the top of the file)
    ExportName = 1 << 14,                   // Ensure an export prefix is added for an identifier that points to an exported declaration with a local name (see SymbolFlags.ExportHasLocal).
    LocalName = 1 << 15,                    // Ensure an export prefix is not added for an identifier that points to an exported declaration.
    InternalName = 1 << 16,                 // The name is internal to an ES5 class body function.
    Indented = 1 << 17,                     // Adds an explicit extra indentation level for class and function bodies when printing (used to match old emitter).
    NoIndentation = 1 << 18,                // Do not indent the node.
    AsyncFunctionBody = 1 << 19,
    ReuseTempVariableScope = 1 << 20,       // Reuse the existing temp variable scope during emit.
    CustomPrologue = 1 << 21,               // Treat the statement as if it were a prologue directive (NOTE: Prologue directives are *not* transformed).
    NoHoisting = 1 << 22,                   // Do not hoist this declaration in --module system
    Iterator = 1 << 23,                     // The expression to a `yield*` should be treated as an Iterator when down-leveling, not an Iterable.
    NoAsciiEscaping = 1 << 24,              // When synthesizing nodes that lack an original node or textSourceNode, we want to write the text on the node with ASCII escaping substitutions.
}

// dprint-ignore
/** @internal */
export const enum InternalEmitFlags {
    None = 0,
    TypeScriptClassWrapper = 1 << 0, // The node is an IIFE class wrapper created by the ts transform.
    NeverApplyImportHelper = 1 << 1, // Indicates the node should never be wrapped with an import star helper (because, for example, it imports tslib itself)
    IgnoreSourceNewlines = 1 << 2,   // Overrides `printerOptions.preserveSourceNewlines` to print this node (and all descendants) with default whitespace.
    Immutable = 1 << 3,              // Indicates a node is a singleton intended to be reused in multiple locations. Any attempt to make further changes to the node will result in an error.
    IndirectCall = 1 << 4,           // Emit CallExpression as an indirect call: `(0, f)()`
    TransformPrivateStaticElements = 1 << 5, // Indicates static private elements in a file or class should be transformed regardless of --target (used by esDecorators transform)
}

// dprint-ignore
export interface EmitHelperBase {
    readonly name: string;                                          // A unique name for this helper.
    readonly scoped: boolean;                                       // Indicates whether the helper MUST be emitted in the current scope.
    readonly text: string | ((node: EmitHelperUniqueNameCallback) => string);  // ES3-compatible raw script text, or a function yielding such a string
    readonly priority?: number;                                     // Helpers with a higher priority are emitted earlier than other helpers on the node.
    readonly dependencies?: EmitHelper[]
}

export interface ScopedEmitHelper extends EmitHelperBase {
    readonly scoped: true;
}

// dprint-ignore
export interface UnscopedEmitHelper extends EmitHelperBase {
    readonly scoped: false;                                         // Indicates whether the helper MUST be emitted in the current scope.
    /** @internal */
    readonly importName?: string;                                   // The name of the helper to use when importing via `--importHelpers`.
    readonly text: string;                                          // ES3-compatible raw script text, or a function yielding such a string
}

export type EmitHelper = ScopedEmitHelper | UnscopedEmitHelper;

/** @internal */
export type UniqueNameHandler = (baseName: string, checkFn?: (name: string) => boolean, optimistic?: boolean) => string;

export type EmitHelperUniqueNameCallback = (name: string) => string;

/**
 * Indicates the minimum `ScriptTarget` (inclusive) after which a specific language feature is no longer transpiled.
 *
 * @internal
 */
export const enum LanguageFeatureMinimumTarget {
    // ES2015 Features
    Classes = ScriptTarget.ES2015,
    ForOf = ScriptTarget.ES2015,
    Generators = ScriptTarget.ES2015,
    Iteration = ScriptTarget.ES2015,
    SpreadElements = ScriptTarget.ES2015,
    RestElements = ScriptTarget.ES2015,
    TaggedTemplates = ScriptTarget.ES2015,
    DestructuringAssignment = ScriptTarget.ES2015,
    BindingPatterns = ScriptTarget.ES2015,
    ArrowFunctions = ScriptTarget.ES2015,
    BlockScopedVariables = ScriptTarget.ES2015,
    ObjectAssign = ScriptTarget.ES2015,

    // ES2016 Features
    Exponentiation = ScriptTarget.ES2016, // `x ** y`

    // ES2017 Features
    AsyncFunctions = ScriptTarget.ES2017, // `async function f() {}`

    // ES2018 Features
    ForAwaitOf = ScriptTarget.ES2018, // `for await (const x of y)`
    AsyncGenerators = ScriptTarget.ES2018, // `async function * f() { }`
    AsyncIteration = ScriptTarget.ES2018, // `Symbol.asyncIterator`
    ObjectSpreadRest = ScriptTarget.ES2018, // `{ ...obj }`

    // ES2019 Features
    BindinglessCatch = ScriptTarget.ES2019, // `try { } catch { }`

    // ES2020 Features
    BigInt = ScriptTarget.ES2020, // `0n`
    NullishCoalesce = ScriptTarget.ES2020, // `a ?? b`
    OptionalChaining = ScriptTarget.ES2020, // `a?.b`

    // ES2021 Features
    LogicalAssignment = ScriptTarget.ES2021, // `a ||= b`, `a &&= b`, `a ??= b`

    // ES2022 Features
    TopLevelAwait = ScriptTarget.ES2022,
    ClassFields = ScriptTarget.ES2022,
    PrivateNamesAndClassStaticBlocks = ScriptTarget.ES2022, // `class C { static {} #x = y, #m() {} }`, `#x in y`

    // ES2023 Features
    ShebangComments = ScriptTarget.ESNext,

    // Upcoming Features
    // NOTE: We must reevaluate the target for upcoming features when each successive TC39 edition is ratified in
    //       June of each year. This includes changes to `LanguageFeatureMinimumTarget`, `ScriptTarget`,
    //       transformers/esnext.ts, commandLineParser.ts, and the contents of each lib/esnext.*.d.ts file.
    UsingAndAwaitUsing = ScriptTarget.ESNext, // `using x = y`, `await using x = y`
    ClassAndClassElementDecorators = ScriptTarget.ESNext, // `@dec class C {}`, `class C { @dec m() {} }`
}

// dprint-ignore
/**
 * Used by the checker, this enum keeps track of external emit helpers that should be type
 * checked.
 *
 * @internal
 */
export const enum ExternalEmitHelpers {
    Extends = 1 << 0,               // __extends (used by the ES2015 class transformation)
    Assign = 1 << 1,                // __assign (used by Jsx and ESNext object spread transformations)
    Rest = 1 << 2,                  // __rest (used by ESNext object rest transformation)
    Decorate = 1 << 3,              // __decorate (used by TypeScript decorators transformation)
    ESDecorateAndRunInitializers = Decorate, // __esDecorate and __runInitializers (used by ECMAScript decorators transformation)
    Metadata = 1 << 4,              // __metadata (used by TypeScript decorators transformation)
    Param = 1 << 5,                 // __param (used by TypeScript decorators transformation)
    Awaiter = 1 << 6,               // __awaiter (used by ES2017 async functions transformation)
    Generator = 1 << 7,             // __generator (used by ES2015 generator transformation)
    Values = 1 << 8,                // __values (used by ES2015 for..of and yield* transformations)
    Read = 1 << 9,                  // __read (used by ES2015 iterator destructuring transformation)
    SpreadArray = 1 << 10,          // __spreadArray (used by ES2015 array spread and argument list spread transformations)
    Await = 1 << 11,                // __await (used by ES2017 async generator transformation)
    AsyncGenerator = 1 << 12,       // __asyncGenerator (used by ES2017 async generator transformation)
    AsyncDelegator = 1 << 13,       // __asyncDelegator (used by ES2017 async generator yield* transformation)
    AsyncValues = 1 << 14,          // __asyncValues (used by ES2017 for..await..of transformation)
    ExportStar = 1 << 15,           // __exportStar (used by CommonJS/AMD/UMD module transformation)
    ImportStar = 1 << 16,           // __importStar (used by CommonJS/AMD/UMD module transformation)
    ImportDefault = 1 << 17,        // __importStar (used by CommonJS/AMD/UMD module transformation)
    MakeTemplateObject = 1 << 18,   // __makeTemplateObject (used for constructing template string array objects)
    ClassPrivateFieldGet = 1 << 19, // __classPrivateFieldGet (used by the class private field transformation)
    ClassPrivateFieldSet = 1 << 20, // __classPrivateFieldSet (used by the class private field transformation)
    ClassPrivateFieldIn = 1 << 21,  // __classPrivateFieldIn (used by the class private field transformation)
    SetFunctionName = 1 << 22,      // __setFunctionName (used by class fields and ECMAScript decorators)
    PropKey = 1 << 23,              // __propKey (used by class fields and ECMAScript decorators)
    AddDisposableResourceAndDisposeResources = 1 << 24, // __addDisposableResource and __disposeResources (used by ESNext transformations)

    FirstEmitHelper = Extends,
    LastEmitHelper = AddDisposableResourceAndDisposeResources,

    // Helpers included by ES2015 for..of
    ForOfIncludes = Values,

    // Helpers included by ES2017 for..await..of
    ForAwaitOfIncludes = AsyncValues,

    // Helpers included by ES2017 async generators
    AsyncGeneratorIncludes = Await | AsyncGenerator,

    // Helpers included by yield* in ES2017 async generators
    AsyncDelegatorIncludes = Await | AsyncDelegator | AsyncValues,

    // Helpers included by ES2015 spread
    SpreadIncludes = Read | SpreadArray,
}

// dprint-ignore
export const enum EmitHint {
    SourceFile,              // Emitting a SourceFile
    Expression,              // Emitting an Expression
    IdentifierName,          // Emitting an IdentifierName
    MappedTypeParameter,     // Emitting a TypeParameterDeclaration inside of a MappedTypeNode
    Unspecified,             // Emitting an otherwise unspecified node
    EmbeddedStatement,       // Emitting an embedded statement
    JsxAttributeValue,       // Emitting a JSX attribute value
    ImportTypeNodeAttributes,// Emitting attributes as part of an ImportTypeNode
}





