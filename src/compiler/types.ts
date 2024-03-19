import {
    // BaseNodeFactory,
    // CreateSourceFileOptions,
    // EmitHelperFactory,
    // GetCanonicalFileName,
    MapLike, SymbolFlags,
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
    // Path ,
} from "./_namespaces/ts";

// branded string type used to store absolute, normalized and canonicalized paths
// arbitrary file name can be converted to Path via toPath function
export type Path = string & { __pathBrand: any; };






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
    ByKeyword,
    ByRefKeyword,
    ConstructorKeyword,
    DeclareKeyword,
    DoingKeyword,
    GetKeyword,
    ValueOfKeyword,
    InferKeyword,
    OneOfKeyword, // https://github.com/microsoft/TypeScript/issues/27808
    EitherKeyword, // https://github.com/microsoft/TypeScript/issues/27808
    NeitherKeyword,
    UnlessKeyword,
    UntilKeyword,
    WhenKeyword,
    IntrinsicKeyword,
    IsKeyword,
    KeyOfKeyword,
    ModuleKeyword,
    NamespaceKeyword,
    AintKeyword,
    NoKeyword,
    NotKeyword,
    NoneKeyword,
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
    UnsignedKeyword,
    SignedKeyword,
    SuchKeyword,
    SoKeyword,
    ThatKeyword,
    TheyKeyword,
    WhoKeyword,
    FromKeyword,
    GlobalKeyword,
    BigIntKeyword,
    VirtualKeyword,
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
    IgnoreWildcardType,
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
    /**
     * `<T2> operand` ; legacy feature superseded with `operand as T2`.
     */
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
    | SyntaxKind.IgnoreWildcardType
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

export interface CompilableTree
{
    //
    readonly kind: SyntaxKind;
    readonly flags: NodeFlags;
    /** @internal */ modifierFlagsCache: ModifierFlags;
    /** @internal */ readonly transformFlags: TransformFlags; // Flags for transforms
    /** @internal */ id?: NodeId; // Unique id (used to look up NodeLinks)
    readonly parent?: CompilableTree; // Parent node (not available in functionally-generated nodes )
    /** @internal */ original?: CompilableTree; // The original node if this is an updated node.
    /** @internal */ emitNode?: EmitNode; // Associated EmitNode (initialized by transforms)
    // NOTE: `symbol` and `localSymbol` have been moved to `Declaration`
    //       `locals` and `nextContainer` have been moved to `LocalsContainer`
    //       `flowNode` has been moved to `FlowContainer`
    //       see: https://github.com/microsoft/TypeScript/pull/51682
}

/**
 * 
 * @deprecated
 * 
 * @see {@link ParsedNode}
 * @see {@link SyntacticNode}
 * @see {@link CompilableTree}
 */
export interface Node extends ParsedNode
{}

export interface Node1 extends CompilableTree, ReadonlyTextRange
{
    // readonly kind: SyntaxKind;
    // readonly flags: NodeFlags;
    // /** @internal */ modifierFlagsCache: ModifierFlags;
    // /** @internal */ readonly transformFlags: TransformFlags; // Flags for transforms
    // /** @internal */ id?: NodeId; // Unique id (used to look up NodeLinks)
    readonly parent?: Node1; // Parent node (not available in functionally-generated nodes )
    /** @internal */ original?: Node1; // The original node if this is an updated node.
    // /** @internal */ emitNode?: EmitNode; // Associated EmitNode (initialized by transforms)
    // // NOTE: `symbol` and `localSymbol` have been moved to `Declaration`
    // //       `locals` and `nextContainer` have been moved to `LocalsContainer`
    // //       `flowNode` has been moved to `FlowContainer`
    // //       see: https://github.com/microsoft/TypeScript/pull/51682
}

// export interface Node extends CompilableTree, ReadonlyTextRange
// {
//     // readonly kind: SyntaxKind;
//     // readonly flags: NodeFlags;
//     // /** @internal */ modifierFlagsCache: ModifierFlags;
//     // /** @internal */ readonly transformFlags: TransformFlags; // Flags for transforms
//     // /** @internal */ id?: NodeId; // Unique id (used to look up NodeLinks)
//     readonly parent?: Node; // Parent node (not available in functionally-generated nodes )
//     /** @internal */ original?: Node; // The original node if this is an updated node.
//     // /** @internal */ emitNode?: EmitNode; // Associated EmitNode (initialized by transforms)
//     // // NOTE: `symbol` and `localSymbol` have been moved to `Declaration`
//     // //       `locals` and `nextContainer` have been moved to `LocalsContainer`
//     // //       `flowNode` has been moved to `FlowContainer`
//     // //       see: https://github.com/microsoft/TypeScript/pull/51682
// }

// // TODO reomve this
// export interface Node
// {
//     /** @deprecated */
//     escapedText ?: string ;
// }

export interface ImmutableNode extends Node1
{
    iImmutableNodeObjBrand ?: any ;
}

export interface MutableNode extends Node1
{
    iMutableNodeObjBrand ?: any ;
}

/**  
 * {@link Node1}s generated functionally ;
 * typically immutable ;
 * unlike parser-generated {@link Node1} which has ref `parent`, FG-ed {@link Node1}s don't ;
 * 
 */
export interface FunctionallyGeneratedNode extends Node1, ImmutableNode
{
    readonly parent?: never; // Parent node will not be available in macro-generated Node1(s)
}

interface TypeCheckerAssociatedMaybe {
    checker ?: TypeChecker ;
}

/**
 * like {@link Statement} yet not necessarily {@link SyntacticNode}.
 * 
 */
export interface InstructiveNode extends Node1, JSDocContainer {
    _statementBrand: any;
}

/**
 * like {@link Expression} yet not necessarily {@link SyntacticNode}.
 * 
 * {@link TermQuerylikeNode } is *proper* *reference*, while
 * - {@link PartialTermQuerylikeNode } is not necessarily *proper*
 * 
 */
export interface TermQuerylikeNode extends Node1, PartialTermQuerylikeNode
{
    _TermQuerylikeNodeBrand: any;
}

/**
 * {@link TermQuerylikeNode } is *proper* *reference*, while
 * - {@link PartialTermQuerylikeNode } is not necessarily *proper*
 * 
 */
export interface PartialTermQuerylikeNode extends Node1
{
    _TermQuerylikeNodeBrand: any;
}

/**
 * {@link SyntacticNode } is {@link Node1} modeling syntactic language features.
 * 
 * contrast this with
 * alternative subclasses like {@link FlowNode} intended as semantic, analytical repr rather than syntactic.
 * 
 */
export interface SyntacticNode extends Node1, ReadonlyTextRange
{
    //
    readonly parent?: SyntacticNode; // Parent node (not available in functionally-generated nodes )
}

export interface MutableOrParsedNode extends SyntacticNode
{
    readonly parent: ParsedNode; // every MutableOrParsedNode is __guaranteed__ to reference a parent, except for the topmost one
}

export type MutableSyntacticNode = SyntacticNode & MutableOrParsedNode & MutableNode ;

/**
 * {@link SyntacticNode}s generated functionally ;
 * typically immutable ;
 * unlike parser-generated {@link ParsedNode} which has ref `parent`, FG-ed {@link SyntacticNode}s don't ;
 * 
 */
export type FunctionallyGeneratedSyntacticNode = SyntacticNode & MutableOrParsedNode & FunctionallyGeneratedNode ;

/**
 * {@link SyntacticNode }s originating from Parser.
 * 
 */
export interface ParsedNode extends SyntacticNode, MutableOrParsedNode
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
export type HasFlowNode =
    | Identifier
    | ThisExpression
    | SuperExpression
    | QualifiedName
    | MetaProperty
    | ElementAccessExpression
    | PropertyAccessExpression
    | BindingElement
    | FunctionExpression
    | ArrowFunction
    | MethodDeclaration
    | GetAccessorDeclaration
    | SetAccessorDeclaration
    | VariableStatement
    | ExpressionStatement
    | IfStatement
    | DoStatement
    | WhileStatement
    | ForStatement
    | ForInStatement
    | ForOfStatement
    | ContinueStatement
    | BreakStatement
    | ReturnStatement
    | WithStatement
    | SwitchStatement
    | LabeledStatement
    | ThrowStatement
    | TryStatement
    | DebuggerStatement
    | DebuggerStatement;
;

export type HasJSDoc =
    | Statement
    | Declaration
    | Expression
    | BindingName
;

/**
 * Corresponds with `ContainerFlags.IsInterface` in binder.ts.
 *
 * @internal
 */
export type IsInterface = InterfaceDeclaration;

/**
 * Corresponds with `ContainerFlags.IsObjectLiteralOrClassExpressionMethodOrAccessor` in binder.ts.
 *
 * @internal
 */
export type IsObjectLiteralOrClassExpressionMethodOrAccessor =
    | GetAccessorDeclaration
    | SetAccessorDeclaration
    | MethodDeclaration;

/** @internal */
export interface MutableNodeArray<T extends Node1> extends Array<T>, TextRange {
    hasTrailingComma: boolean;
    /** @internal */ transformFlags: TransformFlags; // Flags for transforms, possibly undefined
}

export interface NodeArray<T extends Node1> extends ReadonlyArray<T>, ReadonlyTextRange {
    readonly hasTrailingComma: boolean;
    /** @internal */ transformFlags: TransformFlags; // Flags for transforms, possibly undefined
}

// TODO
export interface TokenReprCompatibleNode extends SyntacticNode, Node
{
    parent: Node ;
}

// TODO(rbuckton): Constraint 'TKind' to 'TokenSyntaxKind'
export interface Token<TKind extends SyntaxKind> extends TokenReprCompatibleNode
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

// dprint-ignore
/** @internal */
export interface AutoGenerateInfo {
    flags: GeneratedIdentifierFlags;            // Specifies whether to auto-generate the text for an identifier.
    readonly id: number;                        // Ensures unique generated identifiers get unique names, but clones get the same name.
    readonly prefix?: string | GeneratedNamePart;
    readonly suffix?: string;
}

export interface QualifiedName extends Node, FlowContainer {
    readonly kind: SyntaxKind.QualifiedName;
    readonly left: EntityName;
    readonly right: Identifier;
}

export type EntityName = Identifier | QualifiedName;

export type PropertyName = Identifier | StringLiteral | NoSubstitutionTemplateLiteral | NumericLiteral | ComputedPropertyName | PrivateIdentifier;

export type MemberName = Identifier | PrivateIdentifier;

export type DeclarationName =
    | PropertyName
    | JsxAttributeName
    | StringLiteralLike
    | ElementAccessExpression
    | BindingPattern
    | EntityNameExpression
    // | neverDeclarationName
;

export interface Declaration extends Node {
    _declarationBrand: any;
    /** @internal */ symbol: DeclaredSymbol; // Symbol declared by node (initialized by binding)
    /** @internal */ localSymbol?: Symbol; // Local symbol declared by node (initialized by binding only for exported nodes)
}

// export type PhysicalDeclaration = SyntacticNode & Declaration ;
export interface PhysicalDeclaration extends SyntacticNode , Declaration
{
    //
    /** @internal */ symbol: PhysicallyDeclaredSymbol; // Symbol declared by node (initialized by binding)
}

export interface NamedDeclaration extends Declaration {
    readonly name?: DeclarationName;
}

/** @internal */
export interface DynamicNamedDeclaration extends NamedDeclaration {
    readonly name: ComputedPropertyName;
}

/** @internal */
export interface DynamicNamedBinaryExpression extends BinaryExpression {
    readonly left: ElementAccessExpression;
}

/** @internal */
// A declaration that supports late-binding (used in checker)
export interface LateBoundDeclaration extends DynamicNamedDeclaration {
    readonly name: LateBoundName;
}

/** @internal */
export interface LateBoundBinaryExpressionDeclaration extends DynamicNamedBinaryExpression {
    readonly left: LateBoundElementAccessExpression;
}

/** @internal */
export interface LateBoundElementAccessExpression extends ElementAccessExpression {
    readonly argumentExpression: EntityNameExpression;
}

export interface DeclarationStatement extends NamedDeclaration, Statement {
    readonly name?: Identifier | StringLiteral | NumericLiteral;
}

export interface ComputedPropertyName extends Node {
    readonly kind: SyntaxKind.ComputedPropertyName;
    readonly parent: Declaration;
    readonly expression: Expression;
}

// Typed as a PrimaryExpression due to its presence in BinaryExpressions (#field in expr)
export interface PrivateIdentifier extends PrimaryExpression {
    readonly kind: SyntaxKind.PrivateIdentifier;
    // escaping not strictly necessary
    // avoids gotchas in transforms and utils
    readonly escapedText: __String;
}

/** @internal */
export interface GeneratedPrivateIdentifier extends PrivateIdentifier {
    readonly emitNode: EmitNode & { autoGenerate: AutoGenerateInfo; };
}

/** @internal */
// A name that supports late-binding (used in checker)
export interface LateBoundName extends ComputedPropertyName {
    readonly expression: EntityNameExpression;
}

export interface Decorator extends Node {
    readonly kind: SyntaxKind.Decorator;
    readonly parent: NamedDeclaration;
    readonly expression: LeftHandSideExpression;
}

export interface TypeParameterDeclaration extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.TypeParameter;
    readonly parent: DeclarationWithTypeParameterChildren | InferTypeNode;
    readonly modifiers?: NodeArray<Modifier>;
    readonly name: Identifier;
    readonly constraintMode: TypeParameterConstraintMode ;
    /** Note: Consider calling `getEffectiveConstraintOfTypeParameter` */
    readonly constraint?: TypeNode;
    readonly default?: TypeNode;

    // For error recovery purposes (see `isGrammarError` in utilities.ts).
    expression?: Expression;
}

export enum TypeParameterConstraintMode
{

    /** simply subtype it ; nothing else necessary */
    EXTENDS_CONSTRAINT = 1 << 1 ,

    /*
     * these two
     * assumes that the constraint is {@link UnionTypeNode}
     * and is the essence of https://github.com/microsoft/TypeScript/issues/27808 
     * 
     */
    /** expects the constraint to be {@link UnionTypeNode alternated-type (`A | B | ...`)} and then enforces subtyping of any of {@link UnionTypeNode.types its constituents} */ EXTENDS_ONEOF_CONSTRAINING_UNIONTYPE_CONSTITUENT = 1 << 2 ,
    /** expects the constraint to be {@link UnionTypeNode alternated-type (`A | B | ...`)} and then enforces exacting  to any of {@link UnionTypeNode.types its constituents} */ EXACTLY_ONEOF_CONSTRAINING_UNIONTYPE_CONSTITUENT = 1 << 3 ,

    /**
     * in all cases
     * the instantiation would (strictly) subtype the constraint
     * 
     */
}

export interface SignatureDeclarationBase extends NamedDeclaration, JSDocContainer {
    readonly kind: SignatureDeclaration["kind"];
    readonly name?: PropertyName;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
    readonly parameters: NodeArray<ParameterDeclaration>;
    readonly type?: TypeNode | undefined;
    /** @internal */ typeArguments?: NodeArray<TypeNode>; // Used for quick info, replaces typeParameters for instantiated signatures
}

export type SignatureDeclaration =
    | CallSignatureDeclaration
    | ConstructSignatureDeclaration
    | MethodSignature
    | IndexSignatureDeclaration
    | FunctionTypeNode
    | ConstructorTypeNode
    | JSDocFunctionType
    | FunctionDeclaration
    | MethodDeclaration
    | ConstructorDeclaration
    | AccessorDeclaration
    | FunctionExpression
    | ArrowFunction
;

export interface CallSignatureDeclaration extends SignatureDeclarationBase, TypeElement, LocalsContainer {
    readonly kind: SyntaxKind.CallSignature;
}

export interface ConstructSignatureDeclaration extends SignatureDeclarationBase, TypeElement, LocalsContainer {
    readonly kind: SyntaxKind.ConstructSignature;
}

export type BindingName = Identifier | BindingPattern;

// dprint-ignore
export interface VariableDeclaration extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.VariableDeclaration;
    readonly parent: VariableDeclarationList | CatchClause;
    readonly name: BindingName;                    // Declared variable name
    readonly exclamationToken?: ExclamationToken;  // Optional definite assignment assertion
    readonly type?: TypeNode;                      // Optional type annotation
    readonly initializer?: Expression;             // Optional initializer
}

/** @internal */
export type InitializedVariableDeclaration = VariableDeclaration & { readonly initializer: Expression; };

export interface VariableDeclarationList extends Node {
    readonly kind: SyntaxKind.VariableDeclarationList;
    readonly parent: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
    readonly declarations: NodeArray<VariableDeclaration>;
}

// dprint-ignore
export interface ParameterDeclaration extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.Parameter;
    readonly parent: SignatureDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly dotDotDotToken?: DotDotDotToken;    // Present on rest parameter
    readonly name: BindingName;                  // Declared parameter name.
    readonly questionToken?: QuestionToken;      // Present on optional parameter
    readonly type?: TypeNode;                    // Optional type annotation
    readonly initializer?: Expression;           // Optional initializer
}

// dprint-ignore
export interface BindingElement extends NamedDeclaration, FlowContainer {
    readonly kind: SyntaxKind.BindingElement;
    readonly parent: BindingPattern;
    readonly propertyName?: PropertyName;        // Binding property name (in object binding pattern)
    readonly dotDotDotToken?: DotDotDotToken;    // Present on rest element (in object binding pattern)
    readonly name: BindingName;                  // Declared binding element name
    readonly initializer?: Expression;           // Optional initializer
}

// dprint-ignore
export interface PropertySignature extends TypeElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertySignature;
    readonly parent: TypeLiteralNode | InterfaceDeclaration;
    readonly modifiers?: NodeArray<Modifier>;
    readonly name: PropertyName;                 // Declared property name
    readonly questionToken?: QuestionToken;      // Present on optional property
    readonly type?: TypeNode;                    // Optional type annotation

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly initializer?: Expression | undefined; // A property signature cannot have an initializer
}

// dprint-ignore
export interface PropertyDeclaration extends ClassElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertyDeclaration;
    readonly parent: ClassLikeDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: PropertyName;
    readonly questionToken?: QuestionToken;      // Present for use with reporting a grammar error for auto-accessors (see `isGrammarError` in utilities.ts)
    readonly exclamationToken?: ExclamationToken;
    readonly type?: TypeNode;
    readonly initializer?: Expression;           // Optional initializer
}

export interface AutoAccessorPropertyDeclaration extends PropertyDeclaration {
    _autoAccessorBrand: any;
}

/** @internal */
export interface PrivateIdentifierPropertyDeclaration extends PropertyDeclaration {
    name: PrivateIdentifier;
}
/** @internal */
export interface PrivateIdentifierAutoAccessorPropertyDeclaration extends AutoAccessorPropertyDeclaration {
    name: PrivateIdentifier;
}
/** @internal */
export interface PrivateIdentifierMethodDeclaration extends MethodDeclaration {
    name: PrivateIdentifier;
}
/** @internal */
export interface PrivateIdentifierGetAccessorDeclaration extends GetAccessorDeclaration {
    name: PrivateIdentifier;
}
/** @internal */
export interface PrivateIdentifierSetAccessorDeclaration extends SetAccessorDeclaration {
    name: PrivateIdentifier;
}
/** @internal */
export type PrivateIdentifierAccessorDeclaration = PrivateIdentifierGetAccessorDeclaration | PrivateIdentifierSetAccessorDeclaration;
/** @internal */
export type PrivateClassElementDeclaration =
    | PrivateIdentifierPropertyDeclaration
    | PrivateIdentifierAutoAccessorPropertyDeclaration
    | PrivateIdentifierMethodDeclaration
    | PrivateIdentifierGetAccessorDeclaration
    | PrivateIdentifierSetAccessorDeclaration;

/** @internal */
export type InitializedPropertyDeclaration = PropertyDeclaration & { readonly initializer: Expression; };

export interface ObjectLiteralElement extends NamedDeclaration {
    _objectLiteralBrand: any;
    readonly name?: PropertyName;
}

/** Unlike ObjectLiteralElement, excludes JSXAttribute and JSXSpreadAttribute. */
export type ObjectLiteralElementLike =
    | PropertyAssignment
    | ShorthandPropertyAssignment
    | SpreadAssignment
    | MethodDeclaration
    | AccessorDeclaration;

export interface PropertyAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertyAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly name: PropertyName;
    readonly initializer: Expression;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly modifiers?: NodeArray<ModifierLike> | undefined; // property assignment cannot have decorators or modifiers
    /** @internal */ readonly questionToken?: QuestionToken | undefined; // property assignment cannot have a question token
    /** @internal */ readonly exclamationToken?: ExclamationToken | undefined; // property assignment cannot have an exclamation token
}

export interface ShorthandPropertyAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.ShorthandPropertyAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly name: Identifier;
    // used when ObjectLiteralExpression is used in ObjectAssignmentPattern
    // it is a grammar error to appear in actual object initializer (see `isGrammarError` in utilities.ts):
    readonly equalsToken?: EqualsToken;
    readonly objectAssignmentInitializer?: Expression;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly modifiers?: NodeArray<ModifierLike> | undefined; // shorthand property assignment cannot have decorators or modifiers
    /** @internal */ readonly questionToken?: QuestionToken | undefined; // shorthand property assignment cannot have a question token
    /** @internal */ readonly exclamationToken?: ExclamationToken | undefined; // shorthand property assignment cannot have an exclamation token
}

export interface SpreadAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.SpreadAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly expression: Expression;
}

export type VariableLikeDeclaration =
    | VariableDeclaration
    | ParameterDeclaration
    | BindingElement
    | PropertyDeclaration
    | PropertyAssignment
    | PropertySignature
    | JsxAttribute
    | ShorthandPropertyAssignment
    | EnumMember
    | JSDocPropertyTag
    | JSDocParameterTag;

export interface ObjectBindingPattern extends Node {
    readonly kind: SyntaxKind.ObjectBindingPattern;
    readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
    readonly elements: NodeArray<BindingElement>;
}

export interface ArrayBindingPattern extends Node {
    readonly kind: SyntaxKind.ArrayBindingPattern;
    readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
    readonly elements: NodeArray<ArrayBindingElement>;
}

export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;

export type ArrayBindingElement = BindingElement | OmittedExpression;

/**
 * Several node kinds share function-like features such as a signature,
 * a name, and a body. These nodes should extend FunctionLikeDeclarationBase.
 * Examples:
 * - FunctionDeclaration
 * - MethodDeclaration
 * - AccessorDeclaration
 */
export interface FunctionLikeDeclarationBase extends SignatureDeclarationBase {
    _functionLikeDeclarationBrand: any;

    readonly asteriskToken?: AsteriskToken | undefined;
    readonly questionToken?: QuestionToken | undefined;
    readonly exclamationToken?: ExclamationToken | undefined;
    readonly body?: Block | Expression | undefined;
    /** @internal */ endFlowNode?: FlowNode;
    /** @internal */ returnFlowNode?: FlowNode;
}

export type FunctionLikeDeclaration =
    | FunctionDeclaration
    | MethodDeclaration
    | GetAccessorDeclaration
    | SetAccessorDeclaration
    | ConstructorDeclaration
    | FunctionExpression
    | ArrowFunction;
/** @deprecated Use SignatureDeclaration */
export type FunctionLike = SignatureDeclaration;

export interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement, LocalsContainer {
    readonly kind: SyntaxKind.FunctionDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name?: Identifier;
    readonly body?: FunctionBody;
}

export interface MethodSignature extends SignatureDeclarationBase, TypeElement, LocalsContainer {
    readonly kind: SyntaxKind.MethodSignature;
    readonly parent: TypeLiteralNode | InterfaceDeclaration;
    readonly modifiers?: NodeArray<Modifier>;
    readonly name: PropertyName;
}

// Note that a MethodDeclaration is considered both a ClassElement and an ObjectLiteralElement.
// Both the grammars for ClassDeclaration and ObjectLiteralExpression allow for MethodDeclarations
// as child elements, and so a MethodDeclaration satisfies both interfaces.  This avoids the
// alternative where we would need separate kinds/types for ClassMethodDeclaration and
// ObjectLiteralMethodDeclaration, which would look identical.
//
// Because of this, it may be necessary to determine what sort of MethodDeclaration you have
// at later stages of the compiler pipeline.  In that case, you can either check the parent kind
// of the method, or use helpers like isObjectLiteralMethodDeclaration
export interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
    readonly kind: SyntaxKind.MethodDeclaration;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression;
    readonly modifiers?: NodeArray<ModifierLike> | undefined;
    readonly name: PropertyName;
    readonly body?: FunctionBody | undefined;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly exclamationToken?: ExclamationToken | undefined; // A method cannot have an exclamation token
}

export interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement, JSDocContainer, LocalsContainer {
    readonly kind: SyntaxKind.Constructor;
    readonly parent: ClassLikeDeclaration;
    readonly modifiers?: NodeArray<ModifierLike> | undefined;
    readonly body?: FunctionBody | undefined;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly typeParameters?: NodeArray<TypeParameterDeclaration>; // A constructor cannot have type parameters
    /** @internal */ readonly type?: TypeNode; // A constructor cannot have a return type annotation
}

/** For when we encounter a semicolon in a class declaration. ES6 allows these as class elements. */
export interface SemicolonClassElement extends ClassElement, JSDocContainer {
    readonly kind: SyntaxKind.SemicolonClassElement;
    readonly parent: ClassLikeDeclaration;
}

// See the comment on MethodDeclaration for the intuition behind GetAccessorDeclaration being a
// ClassElement and an ObjectLiteralElement.
export interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
    readonly kind: SyntaxKind.GetAccessor;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: PropertyName;
    readonly body?: FunctionBody;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined; // A get accessor cannot have type parameters
}

// See the comment on MethodDeclaration for the intuition behind SetAccessorDeclaration being a
// ClassElement and an ObjectLiteralElement.
export interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer, LocalsContainer, FlowContainer {
    readonly kind: SyntaxKind.SetAccessor;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: PropertyName;
    readonly body?: FunctionBody;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined; // A set accessor cannot have type parameters
    /** @internal */ readonly type?: TypeNode | undefined; // A set accessor cannot have a return type
}

export type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;

export interface IndexSignatureDeclaration extends SignatureDeclarationBase, ClassElement, TypeElement, LocalsContainer {
    readonly kind: SyntaxKind.IndexSignature;
    readonly parent: ObjectTypeDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly type: TypeNode;
}

export interface ClassStaticBlockDeclaration extends ClassElement, JSDocContainer, LocalsContainer {
    readonly kind: SyntaxKind.ClassStaticBlockDeclaration;
    readonly parent: ClassDeclaration | ClassExpression;
    readonly body: Block;

    /** @internal */ endFlowNode?: FlowNode;
    /** @internal */ returnFlowNode?: FlowNode;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly modifiers?: NodeArray<ModifierLike> | undefined;
}

;

// TODO
/**
 * 
 * @deprecated
 * 
 * @see {@link ParsedNode}
 * @see {@link SyntacticNode}
 * @see {@link CompilableTree}
 */
export interface TNode extends Node
{
    readonly parent : Node ;
}

export interface TypeNode extends TNode {
    _typeNodeBrand: any;
}

/** @internal */
export interface TypeNode extends TNode {
    readonly kind: TypeNodeSyntaxKind;
}

/** @internal */
export interface TypeNode extends TNode {
    // TODO
    cachedResolvedRepr ?: Type ;
    cachedRedux ?: TypeNode ;
}

/** @internal */
// export interface SyntacticTypeNode extends SyntacticNode, TypeNode
// {
//     readonly kind: TypeNodeSyntaxKind;
// }
export type SyntacticTypeNode = SyntacticNode & TypeNode ;

export interface KeywordTypeNode<TKind extends KeywordTypeSyntaxKind = KeywordTypeSyntaxKind> extends KeywordToken<TKind>, TypeNode {
    readonly kind: TKind;
}

/** @deprecated */
export interface ImportTypeAssertionContainer extends Node {
    readonly kind: SyntaxKind.ImportTypeAssertionContainer;
    readonly parent: ImportTypeNode;
    /** @deprecated */ readonly assertClause: AssertClause;
    readonly multiLine?: boolean;
}

export interface ImportTypeNode extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.ImportType;
    readonly isTypeOf: boolean;
    readonly argument: TypeNode;
    /** @deprecated */ readonly assertions?: ImportTypeAssertionContainer;
    readonly attributes?: ImportAttributes;
    readonly qualifier?: EntityName;
}

/** @internal */
export type LiteralImportTypeNode = ImportTypeNode & { readonly argument: LiteralTypeNode & { readonly literal: StringLiteral; }; };

export interface ThisTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ThisType;
}

export type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;

export interface FunctionOrConstructorTypeNodeBase extends TypeNode, SignatureDeclarationBase {
    readonly kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType;
    readonly type: TypeNode;
}

export interface FunctionTypeNode extends FunctionOrConstructorTypeNodeBase, LocalsContainer {
    readonly kind: SyntaxKind.FunctionType;

    // A function type cannot have modifiers
    /** @internal */ readonly modifiers?: undefined;
}

export interface ConstructorTypeNode extends FunctionOrConstructorTypeNodeBase, LocalsContainer {
    readonly kind: SyntaxKind.ConstructorType;
    readonly modifiers?: NodeArray<Modifier>;
}

export interface NodeWithTypeArguments extends TypeNode {
    readonly typeArguments?: NodeArray<TypeNode>;
}

export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;

export interface TypeReferenceNode extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.TypeReference;
    readonly typeName: EntityName;
}

export interface TypePredicateNode extends TypeNode {
    readonly kind: SyntaxKind.TypePredicate;
    readonly parent: SignatureDeclaration | JSDocTypeExpression;
    readonly assertsModifier?: AssertsKeyword;
    readonly parameterName: Identifier | ThisTypeNode;
    readonly type?: TypeNode;
}

/**
 * type-query:
 * -    `valueof a.s.d` ({@link TypeReferenceIMode.VALUEOF}, the exact value of the term )
 * - `out typeof a.s.d` ({@link TypeReferenceIMode.READ_TYPE_OF }, usually (not always) the declared type)
 * - ` in typeof a.s.d` ({@link TypeReferenceIMode.WRITE_TYPE_OF}, usually (not always) the declared type)
 * -     `typeof a.s.d` ({@link TypeReferenceIMode.CONSTRAINT_OF}, usually (not always) the declared type) (behaves as either of the former two depending on occurence ; discourages)
 * 
 */
export interface TypeQueryNode extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.TypeQuery;
    readonly iMode: (
        | TypeReferenceIMode.VALUEOF
        | DRWT_MODE
    );
    readonly exprName: EntityName;
}

// A TypeLiteral is the declaration node for an anonymous symbol.
export interface TypeLiteralNode extends TypeNode, Declaration {
    readonly kind: SyntaxKind.TypeLiteral;
    readonly members: NodeArray<TypeElement>;
}

export interface ArrayTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ArrayType;
    readonly elementType: TypeNode;
}

export interface TupleTypeNode extends TypeNode {
    readonly kind: SyntaxKind.TupleType;
    readonly elements: NodeArray<TypeNode | NamedTupleMember>;
}

export interface NamedTupleMember extends TypeNode, Declaration, JSDocContainer {
    readonly kind: SyntaxKind.NamedTupleMember;
    readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
    readonly name: Identifier;
    readonly questionToken?: Token<SyntaxKind.QuestionToken>;
    readonly type: TypeNode;
}

export interface OptionalTypeNode extends TypeNode {
    readonly kind: SyntaxKind.OptionalType;
    readonly type: TypeNode;
}

export interface RestTypeNode extends TypeNode {
    readonly kind: SyntaxKind.RestType;
    readonly type: TypeNode;
}

export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;

export interface UnionTypeNode extends TypeNode {
    readonly kind: SyntaxKind.UnionType;
    readonly types: NodeArray<TypeNode>;
}

export interface IntersectionTypeNode extends TypeNode {
    readonly kind: SyntaxKind.IntersectionType;
    readonly types: NodeArray<TypeNode>;
}

export interface ConditionalTypeNode extends TypeNode, LocalsContainer {
    readonly kind: SyntaxKind.ConditionalType;
    readonly checkType: TypeNode;
    readonly extendsType: TypeNode;
    readonly trueType: TypeNode;
    readonly falseType: TypeNode;
}

export interface WildcardTypeNode extends TypeNode
{
    readonly kind: SyntaxKind.InferType | SyntaxKind.IgnoreWildcardType;
    readonly typeParameter?: TypeParameterDeclaration;
}

/** `Array<? extends ConnectOptions | string>`, `Record<? extends Keys, ? extends (? extends string)[] >` */
export interface IgnoreWildcardTypeNode extends WildcardTypeNode
{
    readonly kind: SyntaxKind.IgnoreWildcardType;
    readonly typeParameter?: never;
}

export interface InferTypeNode extends WildcardTypeNode {
    readonly kind: SyntaxKind.InferType;
    readonly typeParameter: TypeParameterDeclaration;
}

export interface ParenthesizedTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ParenthesizedType;
    readonly type: TypeNode;
}

export interface TypeOperatorNode extends TypeNode {
    readonly kind: SyntaxKind.TypeOperator;
    readonly operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
    readonly type: TypeNode;
}

/** @internal */
export interface UniqueTypeOperatorNode extends TypeOperatorNode {
    readonly operator: SyntaxKind.UniqueKeyword;
}

export interface IndexedAccessTypeNode extends TypeNode {
    readonly kind: SyntaxKind.IndexedAccessType;
    readonly objectType: TypeNode;
    readonly indexType: TypeNode;
}

export interface MappedTypeNode extends TypeNode, Declaration, LocalsContainer {
    readonly kind: SyntaxKind.MappedType;
    readonly readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken;
    readonly typeParameter: TypeParameterDeclaration;
    readonly nameType?: TypeNode;
    readonly questionToken?: QuestionToken | PlusToken | MinusToken;
    readonly type?: TypeNode;
    /** Used only to produce grammar errors */
    readonly members?: NodeArray<TypeElement>;
}

export interface LiteralTypeNode extends TypeNode {
    readonly kind: SyntaxKind.LiteralType;
    readonly literal: NullLiteral | BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
}

export interface StringLiteral extends LiteralExpression, Declaration {
    readonly kind: SyntaxKind.StringLiteral;
    /** @internal */ readonly textSourceNode?: Identifier | StringLiteralLike | NumericLiteral | PrivateIdentifier | JsxNamespacedName; // Allows a StringLiteral to get its text from another node (used by transforms).
    /**
     * Note: this is only set when synthesizing a node, not during parsing.
     *
     * @internal
     */
    readonly singleQuote?: boolean;
}

export type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
export type PropertyNameLiteral = Identifier | StringLiteralLike | NumericLiteral | JsxNamespacedName;

export interface TemplateLiteralTypeNode extends TypeNode {
    kind: SyntaxKind.TemplateLiteralType;
    readonly head: TemplateHead;
    readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
}

export interface TemplateLiteralTypeSpan extends TypeNode {
    readonly kind: SyntaxKind.TemplateLiteralTypeSpan;
    readonly parent: TemplateLiteralTypeNode;
    readonly type: TypeNode;
    readonly literal: TemplateMiddle | TemplateTail;
}

// Note: 'brands' in our syntax nodes serve to give us a small amount of nominal typing.
// Consider 'Expression'.  Without the brand, 'Expression' is actually no different
// (structurally) than 'Node'.  Because of this you can pass any Node to a function that
// takes an Expression without any error.  By using the 'brands' we ensure that the type
// checker actually thinks you have something of the right type.  Note: the brands are
// never actually given values.  At runtime they have zero cost.

// TODO
/**
 * 
 * @see {@link ParsedNode}
 * @see {@link SyntacticNode}
 * @see {@link CompilableTree}
 */
export interface ENode extends Node, SyntacticNode
{
    parent : Node ;
}

/**
 * a {@link SyntacticNode} representing
 * - an expression usable where a value is expected
 * - {@link BindingName binding/destructuring pattern }
 * 
 * {@link TermQuerylikeNode } which is {@link SyntacticNode }
 * 
 * {@link Expression } represents source-level construct properly denoting exactly a single value-or-call, while
 * - {@link SemiExpression } is not necessarily *proper* (eg {@link OmittedExpression}, {@link SpreadElement} )
 * - {@link TermQuerylikeNode } is not necessarily *syntactic* (eg more of being an internal, semantic/analytical repr like {@link FlowCondition} )
 * 
 */
export interface Expression extends ENode, SemiExpression, TermQuerylikeNode
{
    _expressionBrand: any;
    readonly parent : ENode["parent"] ;
}

/**
 * a "generalised" form of {@link Expression } - additionally allowing examples each not a well-formed reference to single value-or-call ;
 * examples are those represented by {@link OmittedExpression} and {@link SpreadElement } ;
 * expressions repr-ed by such {@link SyntacticNode}s (generally) cannot be used where a value is expected
 * (IOW "as values such expressions are ill-formed")
 * 
 * {@link Expression } represents source-level construct properly denoting exactly a single value-or-call, while
 * - {@link SemiExpression } is not necessarily *proper* (eg {@link OmittedExpression}, {@link SpreadElement} )
 * - {@link TermQuerylikeNode } is not necessarily *syntactic* (eg more of being an internal, semantic/analytical repr like {@link FlowCondition} )
 * 
 */
export interface SemiExpression extends ENode, PartialTermQuerylikeNode
{
    _PartialExpressionBrand: any;
    readonly parent : ENode["parent"] ;
}

export interface OmittedExpression extends SemiExpression
{
    readonly kind: SyntaxKind.OmittedExpression;
}

// Represents an expression that is elided as part of a transformation to emit comments on a
// not-emitted node. The 'expression' property of a PartiallyEmittedExpression should be emitted.
export interface PartiallyEmittedExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.PartiallyEmittedExpression;
    readonly expression: Expression;
}

export interface UnaryExpression extends Expression {
    _unaryExpressionBrand: any;
}

/** Deprecated, please use UpdateExpression */
export type IncrementExpression = UpdateExpression;
export interface UpdateExpression extends UnaryExpression {
    _updateExpressionBrand: any;
}

// see: https://tc39.github.io/ecma262/#prod-UpdateExpression
// see: https://tc39.github.io/ecma262/#prod-UnaryExpression
export type PrefixUnaryOperator =
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.MinusMinusToken
    | SyntaxKind.PlusToken
    | SyntaxKind.MinusToken
    | SyntaxKind.TildeToken
    | SyntaxKind.ExclamationToken;

export interface PrefixUnaryExpression extends UpdateExpression {
    readonly kind: SyntaxKind.PrefixUnaryExpression;
    readonly operator: PrefixUnaryOperator;
    readonly operand: UnaryExpression;
}

// see: https://tc39.github.io/ecma262/#prod-UpdateExpression
export type PostfixUnaryOperator =
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.MinusMinusToken;

export interface PostfixUnaryExpression extends UpdateExpression {
    readonly kind: SyntaxKind.PostfixUnaryExpression;
    readonly operand: LeftHandSideExpression;
    readonly operator: PostfixUnaryOperator;
}

export interface LeftHandSideExpression extends UpdateExpression {
    _leftHandSideExpressionBrand: any;
}

export interface MemberExpression extends LeftHandSideExpression {
    _memberExpressionBrand: any;
}

export interface PrimaryExpression extends MemberExpression {
    _primaryExpressionBrand: any;
}

export interface NullLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.NullKeyword;
}

export interface TrueLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.TrueKeyword;
}

export interface FalseLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.FalseKeyword;
}

export type BooleanLiteral = TrueLiteral | FalseLiteral;

export interface ThisExpression extends PrimaryExpression, FlowContainer {
    readonly kind: SyntaxKind.ThisKeyword;
}

export interface SuperExpression extends PrimaryExpression, FlowContainer {
    readonly kind: SyntaxKind.SuperKeyword;
}

export interface ImportExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.ImportKeyword;
}

export interface DeleteExpression extends UnaryExpression {
    readonly kind: SyntaxKind.DeleteExpression;
    readonly expression: UnaryExpression;
}

export interface TypeOfExpression extends UnaryExpression {
    readonly kind: SyntaxKind.TypeOfExpression;
    readonly expression: UnaryExpression;
}

export interface VoidExpression extends UnaryExpression {
    readonly kind: SyntaxKind.VoidExpression;
    readonly expression: UnaryExpression;
}

export interface AwaitExpression extends UnaryExpression {
    readonly kind: SyntaxKind.AwaitExpression;
    readonly expression: UnaryExpression;
}

export interface YieldExpression extends Expression {
    readonly kind: SyntaxKind.YieldExpression;
    readonly asteriskToken?: AsteriskToken;
    readonly expression?: Expression;
}

export interface SyntheticExpression extends Expression {
    readonly kind: SyntaxKind.SyntheticExpression;
    readonly isSpread: boolean;
    readonly type: Type;
    readonly tupleNameSource?: ParameterDeclaration | NamedTupleMember;
}

// see: https://tc39.github.io/ecma262/#prod-ExponentiationExpression
export type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;

// see: https://tc39.github.io/ecma262/#prod-MultiplicativeOperator
export type MultiplicativeOperator =
    | SyntaxKind.AsteriskToken
    | SyntaxKind.SlashToken
    | SyntaxKind.PercentToken;

// see: https://tc39.github.io/ecma262/#prod-MultiplicativeExpression
export type MultiplicativeOperatorOrHigher =
    | ExponentiationOperator
    | MultiplicativeOperator;

// see: https://tc39.github.io/ecma262/#prod-AdditiveExpression
export type AdditiveOperator =
    | SyntaxKind.PlusToken
    | SyntaxKind.MinusToken;

// see: https://tc39.github.io/ecma262/#prod-AdditiveExpression
export type AdditiveOperatorOrHigher =
    | MultiplicativeOperatorOrHigher
    | AdditiveOperator;

// see: https://tc39.github.io/ecma262/#prod-ShiftExpression
export type ShiftOperator =
    | SyntaxKind.LessThanLessThanToken
    | SyntaxKind.GreaterThanGreaterThanToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;

// see: https://tc39.github.io/ecma262/#prod-ShiftExpression
export type ShiftOperatorOrHigher =
    | AdditiveOperatorOrHigher
    | ShiftOperator;

// see: https://tc39.github.io/ecma262/#prod-RelationalExpression
export type RelationalOperator =
    | SyntaxKind.LessThanToken
    | SyntaxKind.LessThanEqualsToken
    | SyntaxKind.GreaterThanToken
    | SyntaxKind.GreaterThanEqualsToken
    | SyntaxKind.InstanceOfKeyword
    | SyntaxKind.InKeyword;

// see: https://tc39.github.io/ecma262/#prod-RelationalExpression
export type RelationalOperatorOrHigher =
    | ShiftOperatorOrHigher
    | RelationalOperator;

// see: https://tc39.github.io/ecma262/#prod-EqualityExpression
export type EqualityOperator =
    | SyntaxKind.EqualsEqualsToken
    | SyntaxKind.EqualsEqualsEqualsToken
    | SyntaxKind.ExclamationEqualsEqualsToken
    | SyntaxKind.ExclamationEqualsToken;

// see: https://tc39.github.io/ecma262/#prod-EqualityExpression
export type EqualityOperatorOrHigher =
    | RelationalOperatorOrHigher
    | EqualityOperator;

// see: https://tc39.github.io/ecma262/#prod-BitwiseANDExpression
// see: https://tc39.github.io/ecma262/#prod-BitwiseXORExpression
// see: https://tc39.github.io/ecma262/#prod-BitwiseORExpression
export type BitwiseOperator =
    | SyntaxKind.AmpersandToken
    | SyntaxKind.BarToken
    | SyntaxKind.CaretToken;

// see: https://tc39.github.io/ecma262/#prod-BitwiseANDExpression
// see: https://tc39.github.io/ecma262/#prod-BitwiseXORExpression
// see: https://tc39.github.io/ecma262/#prod-BitwiseORExpression
export type BitwiseOperatorOrHigher =
    | EqualityOperatorOrHigher
    | BitwiseOperator;

// see: https://tc39.github.io/ecma262/#prod-LogicalANDExpression
// see: https://tc39.github.io/ecma262/#prod-LogicalORExpression
export type LogicalOperator =
    | SyntaxKind.AmpersandAmpersandToken
    | SyntaxKind.BarBarToken;

// see: https://tc39.github.io/ecma262/#prod-LogicalANDExpression
// see: https://tc39.github.io/ecma262/#prod-LogicalORExpression
export type LogicalOperatorOrHigher =
    | BitwiseOperatorOrHigher
    | LogicalOperator;

// see: https://tc39.github.io/ecma262/#prod-AssignmentOperator
export type CompoundAssignmentOperator =
    | SyntaxKind.PlusEqualsToken
    | SyntaxKind.MinusEqualsToken
    | SyntaxKind.AsteriskAsteriskEqualsToken
    | SyntaxKind.AsteriskEqualsToken
    | SyntaxKind.SlashEqualsToken
    | SyntaxKind.PercentEqualsToken
    | SyntaxKind.AmpersandEqualsToken
    | SyntaxKind.BarEqualsToken
    | SyntaxKind.CaretEqualsToken
    | SyntaxKind.LessThanLessThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanEqualsToken
    | SyntaxKind.BarBarEqualsToken
    | SyntaxKind.AmpersandAmpersandEqualsToken
    | SyntaxKind.QuestionQuestionEqualsToken;

// see: https://tc39.github.io/ecma262/#prod-AssignmentExpression
export type AssignmentOperator =
    | SyntaxKind.EqualsToken
    | CompoundAssignmentOperator;

// see: https://tc39.github.io/ecma262/#prod-AssignmentExpression
export type AssignmentOperatorOrHigher =
    | SyntaxKind.QuestionQuestionToken
    | LogicalOperatorOrHigher
    | AssignmentOperator;

// see: https://tc39.github.io/ecma262/#prod-Expression
export type BinaryOperator =
    | AssignmentOperatorOrHigher
    | SyntaxKind.CommaToken;

export type LogicalOrCoalescingAssignmentOperator =
    | SyntaxKind.AmpersandAmpersandEqualsToken
    | SyntaxKind.BarBarEqualsToken
    | SyntaxKind.QuestionQuestionEqualsToken;

export type BinaryOperatorToken = Token<BinaryOperator>;

export interface BinaryExpression extends Expression, Declaration, JSDocContainer {
    readonly kind: SyntaxKind.BinaryExpression;
    readonly left: Expression;
    readonly operatorToken: BinaryOperatorToken;
    readonly right: Expression;
}

export type AssignmentOperatorToken = Token<AssignmentOperator>;

export interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
    readonly left: LeftHandSideExpression;
    readonly operatorToken: TOperator;
}

export interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
    readonly left: ObjectLiteralExpression;
}

export interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
    readonly left: ArrayLiteralExpression;
}

export type DestructuringAssignment =
    | ObjectDestructuringAssignment
    | ArrayDestructuringAssignment;

export type BindingOrAssignmentElement =
    | VariableDeclaration
    | ParameterDeclaration
    | ObjectBindingOrAssignmentElement
    | ArrayBindingOrAssignmentElement;

export type ObjectBindingOrAssignmentElement =
    | BindingElement
    | PropertyAssignment // AssignmentProperty
    | ShorthandPropertyAssignment // AssignmentProperty
    | SpreadAssignment // AssignmentRestProperty
;

/** @internal */
export type ObjectAssignmentElement = Exclude<ObjectBindingOrAssignmentElement, BindingElement>;

export type ArrayBindingOrAssignmentElement =
    | BindingElement
    | OmittedExpression // Elision
    | SpreadElement // AssignmentRestElement
    | ArrayLiteralExpression // ArrayAssignmentPattern
    | ObjectLiteralExpression // ObjectAssignmentPattern
    | AssignmentExpression<EqualsToken> // AssignmentElement
    | Identifier // DestructuringAssignmentTarget
    | PropertyAccessExpression // DestructuringAssignmentTarget
    | ElementAccessExpression // DestructuringAssignmentTarget
;

/** @internal */
export type ArrayAssignmentElement = Exclude<ArrayBindingOrAssignmentElement, BindingElement>;

export type ArrayElementExpression1 =
    | Expression
    | SpreadElement
    | OmittedExpression
;

export type BindingOrAssignmentElementRestIndicator =
    | DotDotDotToken // from BindingElement
    | SpreadElement // AssignmentRestElement
    | SpreadAssignment // AssignmentRestProperty
;

export type BindingOrAssignmentElementTarget =
    | BindingOrAssignmentPattern
    | Identifier
    | PropertyAccessExpression
    | ElementAccessExpression
    | OmittedExpression;

/** @internal */
export type AssignmentElementTarget = Exclude<BindingOrAssignmentElementTarget, BindingPattern>;

export type ObjectBindingOrAssignmentPattern =
    | ObjectBindingPattern
    | ObjectLiteralExpression // ObjectAssignmentPattern
;

export type ArrayBindingOrAssignmentPattern =
    | ArrayBindingPattern
    | ArrayLiteralExpression // ArrayAssignmentPattern
;

export type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;

export type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;

export interface ConditionalExpression extends Expression {
    readonly kind: SyntaxKind.ConditionalExpression;
    readonly condition: Expression;
    readonly questionToken: QuestionToken;
    readonly whenTrue: Expression;
    readonly colonToken: ColonToken;
    readonly whenFalse: Expression;
}

export type FunctionBody = Block;
export type ConciseBody = FunctionBody | Expression;

export interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase, JSDocContainer, LocalsContainer, FlowContainer {
    readonly kind: SyntaxKind.FunctionExpression;
    readonly modifiers?: NodeArray<Modifier>;
    readonly name?: Identifier;
    readonly body: FunctionBody; // Required, whereas the member inherited from FunctionDeclaration is optional
}

export interface ArrowFunction extends Expression, FunctionLikeDeclarationBase, JSDocContainer, LocalsContainer, FlowContainer {
    readonly kind: SyntaxKind.ArrowFunction;
    readonly modifiers?: NodeArray<Modifier>;
    readonly equalsGreaterThanToken: EqualsGreaterThanToken;
    readonly body: ConciseBody;
    readonly name: never;
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

export interface BigIntLiteral extends LiteralExpression {
    readonly kind: SyntaxKind.BigIntLiteral;
}

export type LiteralToken =
    | NumericLiteral
    | BigIntLiteral
    | StringLiteral
    | JsxText
    | RegularExpressionLiteral
    | NoSubstitutionTemplateLiteral;

export interface TemplateHead extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateHead;
    readonly parent: TemplateExpression | TemplateLiteralTypeNode;
    /** @internal */
    templateFlags?: TokenFlags;
}

export interface TemplateMiddle extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateMiddle;
    readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    /** @internal */
    templateFlags?: TokenFlags;
}

export interface TemplateTail extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateTail;
    readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    /** @internal */
    templateFlags?: TokenFlags;
}

export type PseudoLiteralToken =
    | TemplateHead
    | TemplateMiddle
    | TemplateTail;

export type TemplateLiteralToken =
    | NoSubstitutionTemplateLiteral
    | PseudoLiteralToken;

export interface TemplateExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.TemplateExpression;
    readonly head: TemplateHead;
    readonly templateSpans: NodeArray<TemplateSpan>;
}

export type TemplateLiteral =
    | TemplateExpression
    | NoSubstitutionTemplateLiteral;

// Each of these corresponds to a substitution expression and a template literal, in that order.
// The template literal must have kind TemplateMiddleLiteral or TemplateTailLiteral.
export interface TemplateSpan extends Node {
    readonly kind: SyntaxKind.TemplateSpan;
    readonly parent: TemplateExpression;
    readonly expression: Expression;
    readonly literal: TemplateMiddle | TemplateTail;
}

export interface ParenthesizedExpression extends PrimaryExpression, JSDocContainer {
    readonly kind: SyntaxKind.ParenthesizedExpression;
    readonly expression: Expression;
}

/** @internal */
export interface JSDocTypeAssertion extends ParenthesizedExpression {
    readonly _jsDocTypeAssertionBrand: never;
}

export interface ArrayLiteralExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.ArrayLiteralExpression;
    readonly elements: NodeArray<ArrayElementExpression1>;
    /** @internal */
    multiLine?: boolean;
}

export interface SpreadElement extends SemiExpression {
    readonly kind: SyntaxKind.SpreadElement;
    readonly parent: ArrayLiteralExpression | CallExpression | NewExpression;
    readonly expression: Expression;
}

/**
 * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
 * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
 * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
 * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
 */
export interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
    readonly properties: NodeArray<T>;
}

// An ObjectLiteralExpression is the declaration node for an anonymous symbol.
export interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike>, JSDocContainer {
    readonly kind: SyntaxKind.ObjectLiteralExpression;
    /** @internal */
    multiLine?: boolean;
}

export type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression;
export type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
export type AccessExpression = PropertyAccessExpression | ElementAccessExpression;

export interface PropertyAccessExpression extends MemberExpression, NamedDeclaration, JSDocContainer, FlowContainer {
    readonly kind: SyntaxKind.PropertyAccessExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly name: MemberName;
}

/** @internal */
export interface PrivateIdentifierPropertyAccessExpression extends PropertyAccessExpression {
    readonly name: PrivateIdentifier;
}

export interface PropertyAccessChain extends PropertyAccessExpression {
    _optionalChainBrand: any;
    readonly name: MemberName;
}

/** @internal */
export interface PropertyAccessChainRoot extends PropertyAccessChain {
    readonly questionDotToken: QuestionDotToken;
}

export interface SuperPropertyAccessExpression extends PropertyAccessExpression {
    readonly expression: SuperExpression;
}

/** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
export interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
    _propertyAccessExpressionLikeQualifiedNameBrand?: any;
    readonly expression: EntityNameExpression;
    readonly name: Identifier;
}

export interface ElementAccessExpression extends MemberExpression, Declaration, JSDocContainer, FlowContainer {
    readonly kind: SyntaxKind.ElementAccessExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly argumentExpression: Expression;
}

export interface ElementAccessChain extends ElementAccessExpression {
    _optionalChainBrand: any;
}

/** @internal */
export interface ElementAccessChainRoot extends ElementAccessChain {
    readonly questionDotToken: QuestionDotToken;
}

export interface SuperElementAccessExpression extends ElementAccessExpression {
    readonly expression: SuperExpression;
}

// see: https://tc39.github.io/ecma262/#prod-SuperProperty
export type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;

export interface CallExpression extends LeftHandSideExpression, Declaration {
    readonly kind: SyntaxKind.CallExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly arguments: NodeArray<Expression>;
}

export interface CallChain extends CallExpression {
    _optionalChainBrand: any;
}

/** @internal */
export interface CallChainRoot extends CallChain {
    readonly questionDotToken: QuestionDotToken;
}

export type OptionalChain =
    | PropertyAccessChain
    | ElementAccessChain
    | CallChain
    | NonNullChain
;

/** @internal */
export type OptionalChainRoot =
    | PropertyAccessChainRoot
    | ElementAccessChainRoot
    | CallChainRoot
;

/** @internal */
export type BindableObjectDefinePropertyCall = CallExpression & {
    readonly arguments: readonly [BindableStaticNameExpression, StringLiteralLike | NumericLiteral, ObjectLiteralExpression] & Readonly<TextRange>;
};

/** @internal */
export type BindableStaticNameExpression =
    | EntityNameExpression
    | BindableStaticElementAccessExpression;

/** @internal */
export type LiteralLikeElementAccessExpression = ElementAccessExpression & Declaration & {
    readonly argumentExpression: StringLiteralLike | NumericLiteral;
};

/** @internal */
export type BindableStaticElementAccessExpression = LiteralLikeElementAccessExpression & {
    readonly expression: BindableStaticNameExpression;
};

/** @internal */
export type BindableElementAccessExpression = ElementAccessExpression & {
    readonly expression: BindableStaticNameExpression;
};

/** @internal */
export type BindableStaticAccessExpression =
    | PropertyAccessEntityNameExpression
    | BindableStaticElementAccessExpression;

/** @internal */
export type BindableAccessExpression =
    | PropertyAccessEntityNameExpression
    | BindableElementAccessExpression;

/** @internal */
export interface BindableStaticPropertyAssignmentExpression extends BinaryExpression {
    readonly left: BindableStaticAccessExpression;
}

/** @internal */
export interface BindablePropertyAssignmentExpression extends BinaryExpression {
    readonly left: BindableAccessExpression;
}

// see: https://tc39.github.io/ecma262/#prod-SuperCall
export interface SuperCall extends CallExpression {
    readonly expression: SuperExpression;
}

export interface ImportCall extends CallExpression {
    readonly expression: ImportExpression;
}

export interface ExpressionWithTypeArguments extends MemberExpression, NodeWithTypeArguments {
    readonly kind: SyntaxKind.ExpressionWithTypeArguments;
    readonly expression: LeftHandSideExpression;
}

export interface NewExpression extends PrimaryExpression, Declaration {
    readonly kind: SyntaxKind.NewExpression;
    readonly expression: LeftHandSideExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly arguments?: NodeArray<Expression>;
}

export interface TaggedTemplateExpression extends MemberExpression {
    readonly kind: SyntaxKind.TaggedTemplateExpression;
    readonly tag: LeftHandSideExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly template: TemplateLiteral;
    /** @internal */ questionDotToken?: QuestionDotToken; // NOTE: Invalid syntax, only used to report a grammar error.
}

export interface InstanceofExpression extends BinaryExpression {
    readonly operatorToken: Token<SyntaxKind.InstanceOfKeyword>;
}

export type CallLikeExpression =
    | CallExpression
    | NewExpression
    | TaggedTemplateExpression
    | Decorator
    | JsxOpeningLikeElement
    | InstanceofExpression;

/**
 * `operand as T2`.
 */
export interface AsExpression extends Expression {
    readonly kind: SyntaxKind.AsExpression;
    readonly expression: Expression;
    readonly type: TypeNode;
}

/**
 * `<T2> operand`.
 * legacy feature superseded with `operand as T2`.
 */
export interface TypeAssertion extends UnaryExpression {
    readonly kind: SyntaxKind.TypeAssertionExpression;
    readonly type: TypeNode;
    readonly expression: UnaryExpression;
}

export interface SatisfiesExpression extends Expression {
    readonly kind: SyntaxKind.SatisfiesExpression;
    readonly expression: Expression;
    readonly type: TypeNode;
}

export type AssertionExpression =
    | TypeAssertion
    | AsExpression;

export interface NonNullExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.NonNullExpression;
    readonly expression: Expression;
}

export interface NonNullChain extends NonNullExpression {
    _optionalChainBrand: any;
}

// NOTE: MetaProperty is really a MemberExpression, but we consider it a PrimaryExpression
//       for the same reasons we treat NewExpression as a PrimaryExpression.
export interface MetaProperty extends PrimaryExpression, FlowContainer {
    readonly kind: SyntaxKind.MetaProperty;
    readonly keywordToken: SyntaxKind.NewKeyword | SyntaxKind.ImportKeyword;
    readonly name: Identifier;
}

/** @internal */
export interface ImportMetaProperty extends MetaProperty {
    readonly keywordToken: SyntaxKind.ImportKeyword;
    readonly name: Identifier & { readonly escapedText: __String & "meta"; };
}

/// A JSX expression of the form <TagName attrs>...</TagName>
export interface JsxElement extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxElement;
    readonly openingElement: JsxOpeningElement;
    readonly children: NodeArray<JsxChild>;
    readonly closingElement: JsxClosingElement;
}

/// Either the opening tag in a <Tag>...</Tag> pair or the lone <Tag /> in a self-closing form
export type JsxOpeningLikeElement =
    | JsxSelfClosingElement
    | JsxOpeningElement;

export type JsxAttributeLike =
    | JsxAttribute
    | JsxSpreadAttribute
;

export type JsxAttributeName =
    | Identifier
    | JsxNamespacedName;

export type JsxTagNameExpression =
    | Identifier
    | ThisExpression
    | JsxTagNamePropertyAccess
    | JsxNamespacedName;

export interface JsxTagNamePropertyAccess extends PropertyAccessExpression {
    readonly expression: Identifier | ThisExpression | JsxTagNamePropertyAccess;
}

export interface JsxAttributes extends PrimaryExpression, Declaration {
    readonly properties: NodeArray<JsxAttributeLike>;
    readonly kind: SyntaxKind.JsxAttributes;
    readonly parent: JsxOpeningLikeElement;
}

export interface JsxNamespacedName extends Node {
    readonly kind: SyntaxKind.JsxNamespacedName;
    readonly name: Identifier;
    readonly namespace: Identifier;
}

/// The opening element of a <Tag>...</Tag> JsxElement
export interface JsxOpeningElement extends Expression {
    readonly kind: SyntaxKind.JsxOpeningElement;
    readonly parent: JsxElement;
    readonly tagName: JsxTagNameExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly attributes: JsxAttributes;
}

/// A JSX expression of the form <TagName attrs />
export interface JsxSelfClosingElement extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxSelfClosingElement;
    readonly tagName: JsxTagNameExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly attributes: JsxAttributes;
}

/// A JSX expression of the form <>...</>
export interface JsxFragment extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxFragment;
    readonly openingFragment: JsxOpeningFragment;
    readonly children: NodeArray<JsxChild>;
    readonly closingFragment: JsxClosingFragment;
}

/// The opening element of a <>...</> JsxFragment
export interface JsxOpeningFragment extends Expression {
    readonly kind: SyntaxKind.JsxOpeningFragment;
    readonly parent: JsxFragment;
}

/// The closing element of a <>...</> JsxFragment
export interface JsxClosingFragment extends Expression {
    readonly kind: SyntaxKind.JsxClosingFragment;
    readonly parent: JsxFragment;
}

export interface JsxAttribute extends Declaration {
    readonly kind: SyntaxKind.JsxAttribute;
    readonly parent: JsxAttributes;
    readonly name: JsxAttributeName;
    /// JSX attribute initializers are optional; <X y /> is sugar for <X y={true} />
    readonly initializer?: JsxAttributeValue;
}

export type JsxAttributeValue =
    | StringLiteral
    | JsxExpression
    | JsxElement
    | JsxSelfClosingElement
    | JsxFragment;

export interface JsxSpreadAttribute extends ObjectLiteralElement {
    readonly kind: SyntaxKind.JsxSpreadAttribute;
    readonly parent: JsxAttributes;
    readonly expression: Expression;
}

export interface JsxClosingElement extends Node {
    readonly kind: SyntaxKind.JsxClosingElement;
    readonly parent: JsxElement;
    readonly tagName: JsxTagNameExpression;
}

export interface JsxExpression extends Expression {
    readonly kind: SyntaxKind.JsxExpression;
    readonly parent: JsxElement | JsxFragment | JsxAttributeLike;
    readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
    readonly expression?: Expression;
}

export interface JsxText extends LiteralLikeNode {
    readonly kind: SyntaxKind.JsxText;
    readonly parent: JsxElement | JsxFragment;
    readonly containsOnlyTriviaWhiteSpaces: boolean;
}

export type JsxChild =
    | JsxText
    | JsxExpression
    | JsxElement
    | JsxSelfClosingElement
    | JsxFragment
;

type StmNodeBase = Node & SyntacticNode & InstructiveNode & JSDocContainer ;

export interface Statement extends StmNodeBase {
    _statementBrand: any;
}

/* https://github.com/microsoft/TypeScript/issues/16936 */
export type FlowContainingStmt = Statement & FlowContainer ;

/* https://github.com/microsoft/TypeScript/issues/16936 */
export type LocalVarContainingStmt = Statement & LocalsContainer ;

/**
 * Represents a statement that is elided as part of a transformation to emit comments on a
 * not-emitted node.
 * 
 * @deprecated
 */
export interface NotEmittedStatement extends Statement, FunctionallyGeneratedNode
{
    readonly kind: SyntaxKind.NotEmittedStatement;
}

/**
 * A list of comma-separated expressions. This node is only created by transformations.
 */
export interface CommaListExpression extends Expression {
    readonly kind: SyntaxKind.CommaListExpression;
    readonly elements: NodeArray<Expression>;
}

/** @internal */
export interface SyntheticReferenceExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.SyntheticReferenceExpression;
    readonly expression: Expression;
    readonly thisArg: Expression;
}

export interface EmptyStatement extends Statement {
    readonly kind: SyntaxKind.EmptyStatement;
}

export interface DebuggerStatement extends Statement, FlowContainingStmt {
    readonly kind: SyntaxKind.DebuggerStatement;
}

export interface MissingDeclaration extends DeclarationStatement, PrimaryExpression {
    readonly kind: SyntaxKind.MissingDeclaration;
    readonly name?: Identifier;

    // The following properties are used only to report grammar errors
    /** @internal */ readonly modifiers?: NodeArray<ModifierLike> | undefined;
}

export type BlockLike =
    | SourceFile
    | Block
    | ModuleBlock
    | CaseOrDefaultClause
;

export interface Block extends Statement, LocalVarContainingStmt {
    readonly kind: SyntaxKind.Block;
    readonly statements: NodeArray<Statement>;
    /** @internal */ multiLine?: boolean;
}

export interface VariableStatement extends Statement, FlowContainingStmt {
    readonly kind: SyntaxKind.VariableStatement;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly declarationList: VariableDeclarationList;
}

export interface ExpressionStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.ExpressionStatement;
    readonly expression: Expression;
}

/** @internal */
export interface PrologueDirective extends ExpressionStatement {
    readonly expression: StringLiteral;
}

export interface IfStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.IfStatement;
    readonly expression: Expression;
    readonly thenStatement: Statement;
    readonly elseStatement?: Statement;
}

export interface IterationStatement extends Statement {
    readonly statement: Statement;
}

export interface DoStatement extends IterationStatement, FlowContainingStmt
{
    readonly kind: SyntaxKind.DoStatement;
    readonly expression: Expression;
}

export interface WhileStatement extends IterationStatement, FlowContainingStmt
{
    readonly kind: SyntaxKind.WhileStatement;
    readonly expression: Expression;
}

export type ForInitializer =
    | VariableDeclarationList
    | Expression;

export interface ForStatement extends IterationStatement, LocalVarContainingStmt, FlowContainingStmt
{
    readonly kind: SyntaxKind.ForStatement;
    readonly initializer?: ForInitializer;
    readonly condition?: Expression;
    readonly incrementor?: Expression;
}

export type ForInOrOfStatement =
    | ForInStatement
    | ForOfStatement;

export interface ForInStatement extends IterationStatement, LocalVarContainingStmt, FlowContainingStmt
{
    readonly kind: SyntaxKind.ForInStatement;
    readonly initializer: ForInitializer;
    readonly expression: Expression;
}

export interface ForOfStatement extends IterationStatement, LocalVarContainingStmt, FlowContainingStmt
{
    readonly kind: SyntaxKind.ForOfStatement;
    readonly awaitModifier?: AwaitKeyword;
    readonly initializer: ForInitializer;
    readonly expression: Expression;
}

export interface BreakStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.BreakStatement;
    readonly label?: Identifier;
}

export interface ContinueStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.ContinueStatement;
    readonly label?: Identifier;
}

export type BreakOrContinueStatement =
    | BreakStatement
    | ContinueStatement;

export interface ReturnStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.ReturnStatement;
    readonly expression?: Expression;
}

export interface WithStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.WithStatement;
    readonly expression: Expression;
    readonly statement: Statement;
}

export interface SwitchStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.SwitchStatement;
    readonly expression: Expression;
    readonly caseBlock: CaseBlock;
    possiblyExhaustive?: boolean; // initialized by binding
}

export interface CaseBlock extends Node, LocalsContainer {
    readonly kind: SyntaxKind.CaseBlock;
    readonly parent: SwitchStatement;
    readonly clauses: NodeArray<CaseOrDefaultClause>;
}

export interface CaseClause extends Node, JSDocContainer {
    readonly kind: SyntaxKind.CaseClause;
    readonly parent: CaseBlock;
    readonly expression: Expression;
    readonly statements: NodeArray<Statement>;
    /** @internal */ fallthroughFlowNode?: FlowNode;
}

export interface DefaultClause extends Node {
    readonly kind: SyntaxKind.DefaultClause;
    readonly parent: CaseBlock;
    readonly statements: NodeArray<Statement>;
    /** @internal */ fallthroughFlowNode?: FlowNode;
}

export type CaseOrDefaultClause =
    | CaseClause
    | DefaultClause;

export interface LabeledStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.LabeledStatement;
    readonly label: Identifier;
    readonly statement: Statement;
}

export interface ThrowStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.ThrowStatement;
    readonly expression: Expression;
}

export interface TryStatement extends Statement, FlowContainingStmt
{
    readonly kind: SyntaxKind.TryStatement;
    readonly tryBlock: Block;
    readonly catchClause?: CatchClause;
    readonly finallyBlock?: Block;
}

export interface CatchClause extends Node, LocalsContainer {
    readonly kind: SyntaxKind.CatchClause;
    readonly parent: TryStatement;
    readonly variableDeclaration?: VariableDeclaration;
    readonly block: Block;
}

export type ObjectTypeDeclaration =
    | ClassLikeDeclaration
    | InterfaceDeclaration
    | TypeLiteralNode;

export type DeclarationWithTypeParameters =
    | DeclarationWithTypeParameterChildren
    | JSDocTypedefTag
    | JSDocCallbackTag
    | JSDocSignature;

export type DeclarationWithTypeParameterChildren =
    | SignatureDeclaration
    | ClassLikeDeclaration
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | JSDocTemplateTag;

export interface ClassLikeDeclarationBase extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression;
    readonly name?: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly heritageClauses?: NodeArray<HeritageClause>;
    readonly members: NodeArray<ClassElement>;
}

export interface ClassDeclaration extends ClassLikeDeclarationBase, DeclarationStatement {
    readonly kind: SyntaxKind.ClassDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    /** May be undefined in `export default class { ... }`. */
    readonly name?: Identifier;
}

export interface ClassExpression extends ClassLikeDeclarationBase, PrimaryExpression {
    readonly kind: SyntaxKind.ClassExpression;
    readonly modifiers?: NodeArray<ModifierLike>;
}

export type ClassLikeDeclaration =
    | ClassDeclaration
    | ClassExpression;

export interface ClassElement extends NamedDeclaration {
    _classElementBrand: any;
    readonly name?: PropertyName;
}

export interface TypeElement extends NamedDeclaration {
    _typeElementBrand: any;
    readonly name?: PropertyName;
    readonly questionToken?: QuestionToken | undefined;
}

export interface InterfaceDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.InterfaceDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly heritageClauses?: NodeArray<HeritageClause>;
    readonly members: NodeArray<TypeElement>;
}

export interface HeritageClause extends Node {
    readonly kind: SyntaxKind.HeritageClause;
    readonly parent: InterfaceDeclaration | ClassLikeDeclaration;
    readonly token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
    readonly types: NodeArray<ExpressionWithTypeArguments>;
}

export interface TypeAliasDeclaration extends DeclarationStatement, JSDocContainer, LocalsContainer {
    readonly kind: SyntaxKind.TypeAliasDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly type: TypeNode;
}

export interface EnumMember extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.EnumMember;
    readonly parent: EnumDeclaration;
    // This does include ComputedPropertyName, but the parser will give an error
    // if it parses a ComputedPropertyName in an EnumMember
    readonly name: PropertyName;
    readonly initializer?: Expression;
}

export interface EnumDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.EnumDeclaration;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: Identifier;
    readonly members: NodeArray<EnumMember>;
}

export type ModuleName =
    | Identifier
    | StringLiteral;

export type ModuleBody =
    | NamespaceBody
    | JSDocNamespaceBody;

/** @internal */
export interface AmbientModuleDeclaration extends ModuleDeclaration {
    readonly body?: ModuleBlock;
}

export interface ModuleDeclaration extends DeclarationStatement, JSDocContainer, LocalsContainer {
    readonly kind: SyntaxKind.ModuleDeclaration;
    readonly parent: ModuleBody | SourceFile;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: ModuleName;
    readonly body?: ModuleBody | JSDocNamespaceDeclaration;
}

export type NamespaceBody =
    | ModuleBlock
    | NamespaceDeclaration;

export interface NamespaceDeclaration extends ModuleDeclaration {
    readonly name: Identifier;
    readonly body: NamespaceBody;
}

export type JSDocNamespaceBody =
    | Identifier
    | JSDocNamespaceDeclaration;

export interface JSDocNamespaceDeclaration extends ModuleDeclaration {
    readonly name: Identifier;
    readonly body?: JSDocNamespaceBody;
}

export interface ModuleBlock extends Node, Statement {
    readonly kind: SyntaxKind.ModuleBlock;
    readonly parent: ModuleDeclaration;
    readonly statements: NodeArray<Statement>;
}

export type ModuleReference =
    | EntityName
    | ExternalModuleReference;

/**
 * One of:
 * - import x = require("mod");
 * - import x = M.x;
 */
export interface ImportEqualsDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ImportEqualsDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly name: Identifier;
    readonly isTypeOnly: boolean;

    // 'EntityName' for an internal module reference, 'ExternalModuleReference' for an external
    // module reference.
    readonly moduleReference: ModuleReference;
}

export interface ExternalModuleReference extends Node {
    readonly kind: SyntaxKind.ExternalModuleReference;
    readonly parent: ImportEqualsDeclaration;
    readonly expression: Expression;
}

// In case of:
// import "mod"  => importClause = undefined, moduleSpecifier = "mod"
// In rest of the cases, module specifier is string literal corresponding to module
// ImportClause information is shown at its declaration below.
export interface ImportDeclaration extends Statement {
    readonly kind: SyntaxKind.ImportDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly importClause?: ImportClause;
    /** If this is not a StringLiteral it will be a grammar error. */
    readonly moduleSpecifier: Expression;
    /** @deprecated */ readonly assertClause?: AssertClause;
    readonly attributes?: ImportAttributes;
}

export type NamedImportBindings =
    | NamespaceImport
    | NamedImports;

export type NamedExportBindings =
    | NamespaceExport
    | NamedExports;

// In case of:
// import d from "mod" => name = d, namedBinding = undefined
// import * as ns from "mod" => name = undefined, namedBinding: NamespaceImport = { name: ns }
// import d, * as ns from "mod" => name = d, namedBinding: NamespaceImport = { name: ns }
// import { a, b as x } from "mod" => name = undefined, namedBinding: NamedImports = { elements: [{ name: a }, { name: x, propertyName: b}]}
// import d, { a, b as x } from "mod" => name = d, namedBinding: NamedImports = { elements: [{ name: a }, { name: x, propertyName: b}]}
export interface ImportClause extends NamedDeclaration {
    readonly kind: SyntaxKind.ImportClause;
    readonly parent: ImportDeclaration;
    readonly isTypeOnly: boolean;
    readonly name?: Identifier; // Default binding
    readonly namedBindings?: NamedImportBindings;
}

/** @deprecated */
export type AssertionKey = ImportAttributeName;

/** @deprecated */
export interface AssertEntry extends ImportAttribute {}

/** @deprecated */
export interface AssertClause extends ImportAttributes {}

export type ImportAttributeName = Identifier | StringLiteral;

export interface ImportAttribute extends Node {
    readonly kind: SyntaxKind.ImportAttribute;
    readonly parent: ImportAttributes;
    readonly name: ImportAttributeName;
    readonly value: Expression;
}

export interface ImportAttributes extends Node {
    readonly token: SyntaxKind.WithKeyword | SyntaxKind.AssertKeyword;
    readonly kind: SyntaxKind.ImportAttributes;
    readonly parent: ImportDeclaration | ExportDeclaration;
    readonly elements: NodeArray<ImportAttribute>;
    readonly multiLine?: boolean;
}

export interface NamespaceImport extends NamedDeclaration {
    readonly kind: SyntaxKind.NamespaceImport;
    readonly parent: ImportClause;
    readonly name: Identifier;
}

export interface NamespaceExport extends NamedDeclaration {
    readonly kind: SyntaxKind.NamespaceExport;
    readonly parent: ExportDeclaration;
    readonly name: Identifier;
}

export interface NamespaceExportDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.NamespaceExportDeclaration;
    readonly name: Identifier;

    // The following properties are used only to report grammar errors (see `isGrammarError` in utilities.ts)
    /** @internal */ readonly modifiers?: NodeArray<ModifierLike> | undefined;
}

export interface ExportDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ExportDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly isTypeOnly: boolean;
    /** Will not be assigned in the case of `export * from "foo";` */
    readonly exportClause?: NamedExportBindings;
    /** If this is not a StringLiteral it will be a grammar error. */
    readonly moduleSpecifier?: Expression;
    /** @deprecated */ readonly assertClause?: AssertClause;
    readonly attributes?: ImportAttributes;
}

export interface NamedImports extends Node {
    readonly kind: SyntaxKind.NamedImports;
    readonly parent: ImportClause;
    readonly elements: NodeArray<ImportSpecifier>;
}

export interface NamedExports extends Node {
    readonly kind: SyntaxKind.NamedExports;
    readonly parent: ExportDeclaration;
    readonly elements: NodeArray<ExportSpecifier>;
}

export type NamedImportsOrExports = NamedImports | NamedExports;

export interface ImportSpecifier extends NamedDeclaration {
    readonly kind: SyntaxKind.ImportSpecifier;
    readonly parent: NamedImports;
    readonly propertyName?: Identifier; // Name preceding "as" keyword (or undefined when "as" is absent)
    readonly name: Identifier; // Declared name
    readonly isTypeOnly: boolean;
}

export interface ExportSpecifier extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.ExportSpecifier;
    readonly parent: NamedExports;
    readonly isTypeOnly: boolean;
    readonly propertyName?: Identifier; // Name preceding "as" keyword (or undefined when "as" is absent)
    readonly name: Identifier; // Declared name
}

export type ImportOrExportSpecifier =
    | ImportSpecifier
    | ExportSpecifier;

export type TypeOnlyCompatibleAliasDeclaration =
    | ImportClause
    | ImportEqualsDeclaration
    | NamespaceImport
    | ImportOrExportSpecifier
    | ExportDeclaration
    | NamespaceExport;

export type TypeOnlyImportDeclaration =
    | ImportClause & { readonly isTypeOnly: true; readonly name: Identifier; }
    | ImportEqualsDeclaration & { readonly isTypeOnly: true; }
    | NamespaceImport & { readonly parent: ImportClause & { readonly isTypeOnly: true; }; }
    | ImportSpecifier & ({ readonly isTypeOnly: true; } | { readonly parent: NamedImports & { readonly parent: ImportClause & { readonly isTypeOnly: true; }; }; });

export type TypeOnlyExportDeclaration =
    | ExportSpecifier & ({ readonly isTypeOnly: true; } | { readonly parent: NamedExports & { readonly parent: ExportDeclaration & { readonly isTypeOnly: true; }; }; })
    | ExportDeclaration & { readonly isTypeOnly: true; readonly moduleSpecifier: Expression; } // export * from "mod"
    | NamespaceExport & { readonly parent: ExportDeclaration & { readonly isTypeOnly: true; readonly moduleSpecifier: Expression; }; } // export * as ns from "mod"
;

export type TypeOnlyAliasDeclaration = TypeOnlyImportDeclaration | TypeOnlyExportDeclaration;

/**
 * This is either an `export =` or an `export default` declaration.
 * Unless `isExportEquals` is set, this node was parsed as an `export default`.
 */
export interface ExportAssignment extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ExportAssignment;
    readonly parent: SourceFile;
    readonly modifiers?: NodeArray<ModifierLike>;
    readonly isExportEquals?: boolean;
    readonly expression: Expression;
}
/** `export default ...` */ export interface ExportDefaultAssignment extends ExportAssignment { readonly isExportEquals: false, }
/** `export =       ...` */ export interface ExportEqualsAssignment  extends ExportAssignment { readonly isExportEquals: true , }

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

// represents a top level: { type } expression in a JSDoc comment.
export interface JSDocTypeExpression extends TypeNode {
    readonly kind: SyntaxKind.JSDocTypeExpression;
    readonly type: TypeNode;
}

export interface JSDocNameReference extends Node {
    readonly kind: SyntaxKind.JSDocNameReference;
    readonly name: EntityName | JSDocMemberName;
}

/** Class#method reference in JSDoc */
export interface JSDocMemberName extends Node {
    readonly kind: SyntaxKind.JSDocMemberName;
    readonly left: EntityName | JSDocMemberName;
    readonly right: Identifier;
}

export interface JSDocType extends TypeNode {
    _jsDocTypeBrand: any;
}

export interface JSDocAllType extends JSDocType {
    readonly kind: SyntaxKind.JSDocAllType;
}

export interface JSDocUnknownType extends JSDocType {
    readonly kind: SyntaxKind.JSDocUnknownType;
}

export interface JSDocNonNullableType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNonNullableType;
    readonly type: TypeNode;
    readonly postfix: boolean;
}

export interface JSDocNullableType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNullableType;
    readonly type: TypeNode;
    readonly postfix: boolean;
}

export interface JSDocOptionalType extends JSDocType {
    readonly kind: SyntaxKind.JSDocOptionalType;
    readonly type: TypeNode;
}

export interface JSDocFunctionType extends JSDocType, SignatureDeclarationBase, LocalsContainer {
    readonly kind: SyntaxKind.JSDocFunctionType;
}

export interface JSDocVariadicType extends JSDocType {
    readonly kind: SyntaxKind.JSDocVariadicType;
    readonly type: TypeNode;
}

export interface JSDocNamepathType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNamepathType;
    readonly type: TypeNode;
}

export type JSDocTypeReferencingNode =
    | JSDocVariadicType
    | JSDocOptionalType
    | JSDocNullableType
    | JSDocNonNullableType;

export interface JSDoc extends Node {
    readonly kind: SyntaxKind.JSDoc;
    readonly parent: HasJSDoc;
    readonly tags?: NodeArray<JSDocTag>;
    readonly comment?: string | NodeArray<JSDocComment>;
}

export interface JSDocTag extends Node {
    readonly parent: JSDoc | JSDocTypeLiteral;
    readonly tagName: Identifier;
    readonly comment?: string | NodeArray<JSDocComment>;
}

export interface JSDocLink extends Node {
    readonly kind: SyntaxKind.JSDocLink;
    readonly name?: EntityName | JSDocMemberName;
    text: string;
}

export interface JSDocLinkCode extends Node {
    readonly kind: SyntaxKind.JSDocLinkCode;
    readonly name?: EntityName | JSDocMemberName;
    text: string;
}

export interface JSDocLinkPlain extends Node {
    readonly kind: SyntaxKind.JSDocLinkPlain;
    readonly name?: EntityName | JSDocMemberName;
    text: string;
}

export type JSDocComment = JSDocText | JSDocLink | JSDocLinkCode | JSDocLinkPlain;

export interface JSDocText extends Node {
    readonly kind: SyntaxKind.JSDocText;
    text: string;
}

export interface JSDocUnknownTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTag;
}

/**
 * Note that `@extends` is a synonym of `@augments`.
 * Both tags are represented by this interface.
 */
export interface JSDocAugmentsTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocAugmentsTag;
    readonly class: ExpressionWithTypeArguments & { readonly expression: Identifier | PropertyAccessEntityNameExpression; };
}

export interface JSDocImplementsTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocImplementsTag;
    readonly class: ExpressionWithTypeArguments & { readonly expression: Identifier | PropertyAccessEntityNameExpression; };
}

export interface JSDocAuthorTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocAuthorTag;
}

export interface JSDocDeprecatedTag extends JSDocTag {
    kind: SyntaxKind.JSDocDeprecatedTag;
}

export interface JSDocClassTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocClassTag;
}

export interface JSDocPublicTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocPublicTag;
}

export interface JSDocPrivateTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocPrivateTag;
}

export interface JSDocProtectedTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocProtectedTag;
}

export interface JSDocReadonlyTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocReadonlyTag;
}

export interface JSDocOverrideTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocOverrideTag;
}

export interface JSDocEnumTag extends JSDocTag, Declaration, LocalsContainer {
    readonly kind: SyntaxKind.JSDocEnumTag;
    readonly parent: JSDoc;
    readonly typeExpression: JSDocTypeExpression;
}

export interface JSDocThisTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocThisTag;
    readonly typeExpression: JSDocTypeExpression;
}

export interface JSDocTemplateTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTemplateTag;
    readonly constraint: JSDocTypeExpression | undefined;
    readonly typeParameters: NodeArray<TypeParameterDeclaration>;
}

export interface JSDocSeeTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocSeeTag;
    readonly name?: JSDocNameReference;
}

export interface JSDocReturnTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocReturnTag;
    readonly typeExpression?: JSDocTypeExpression;
}

export interface JSDocTypeTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTypeTag;
    readonly typeExpression: JSDocTypeExpression;
}

export interface JSDocTypedefTag extends JSDocTag, NamedDeclaration, LocalsContainer {
    readonly kind: SyntaxKind.JSDocTypedefTag;
    readonly parent: JSDoc;
    readonly fullName?: JSDocNamespaceDeclaration | Identifier;
    readonly name?: Identifier;
    readonly typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
}

export interface JSDocCallbackTag extends JSDocTag, NamedDeclaration, LocalsContainer {
    readonly kind: SyntaxKind.JSDocCallbackTag;
    readonly parent: JSDoc;
    readonly fullName?: JSDocNamespaceDeclaration | Identifier;
    readonly name?: Identifier;
    readonly typeExpression: JSDocSignature;
}

export interface JSDocOverloadTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocOverloadTag;
    readonly parent: JSDoc;
    readonly typeExpression: JSDocSignature;
}

export interface JSDocThrowsTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocThrowsTag;
    readonly typeExpression?: JSDocTypeExpression;
}

export interface JSDocSignature extends JSDocType, Declaration, JSDocContainer, LocalsContainer {
    readonly kind: SyntaxKind.JSDocSignature;
    readonly typeParameters?: readonly JSDocTemplateTag[];
    readonly parameters: readonly JSDocParameterTag[];
    readonly type: JSDocReturnTag | undefined;
}

export interface JSDocPropertyLikeTag extends JSDocTag, Declaration {
    readonly parent: JSDoc;
    readonly name: EntityName;
    readonly typeExpression?: JSDocTypeExpression;
    /** Whether the property name came before the type -- non-standard for JSDoc, but Typescript-like */
    readonly isNameFirst: boolean;
    readonly isBracketed: boolean;
}

export interface JSDocPropertyTag extends JSDocPropertyLikeTag {
    readonly kind: SyntaxKind.JSDocPropertyTag;
}

export interface JSDocParameterTag extends JSDocPropertyLikeTag {
    readonly kind: SyntaxKind.JSDocParameterTag;
}

export interface JSDocTypeLiteral extends JSDocType, Declaration {
    readonly kind: SyntaxKind.JSDocTypeLiteral;
    readonly jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
    /** If true, then this type literal represents an *array* of its type. */
    readonly isArrayType: boolean;
}

export interface JSDocSatisfiesTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocSatisfiesTag;
    readonly typeExpression: JSDocTypeExpression;
}

/** @internal */
export interface JSDocSatisfiesExpression extends ParenthesizedExpression {
    readonly _jsDocSatisfiesExpressionBrand: never;
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

interface FlowNodeWithCtrlExprBase extends FlowNodeBase
{
    readonly node?: Node
}

interface FlowAfterOneNodeBase extends FlowNodeBase
{
    antecedent: FlowNode;
}
interface FlowAfterMultipleNodeBase extends FlowNodeBase
{
    antecedents ?: FlowNode[];
}

// FlowStart represents the start of a control flow. For a function expression or arrow
// function, the node property references the function (which in turn has a flowNode
// property for the containing control flow).
export interface FlowStart extends FlowNodeBase, FlowNodeWithCtrlExprBase
{
    node?: Node;
}

// FlowLabel represents a junction with multiple possible preceding control flows.
export interface FlowLabel extends FlowNodeBase, FlowAfterMultipleNodeBase
{
    antecedents: FlowNode[] | undefined;
}

// FlowAssignment represents a node that assigns a value to a narrowable reference,
// i.e. an identifier or a dotted name that starts with an identifier or 'this'.
export interface FlowAssignment extends FlowNodeBase, FlowNodeWithCtrlExprBase, FlowAfterOneNodeBase
{
    node: Expression | VariableDeclaration | BindingElement | ArrayBindingElement;
    antecedent: FlowNode;
}

export interface FlowCall extends FlowNodeBase, FlowNodeWithCtrlExprBase, FlowAfterOneNodeBase
{
    node: CallExpression;
    antecedent: FlowNode;
}

// FlowCondition represents a condition that is known to be true or false at the
// node's location in the control flow.
export interface FlowCondition extends FlowNodeBase, FlowNodeWithCtrlExprBase, FlowAfterOneNodeBase
{
    node: Expression;
    antecedent: FlowNode;
}

// dprint-ignore
export interface FlowSwitchClause extends FlowNodeBase, FlowAfterOneNodeBase
{
    switchStatement: SwitchStatement;
    clauseStart: number;   // Start index of case/default clause range
    clauseEnd: number;     // End index of case/default clause range
    antecedent: FlowNode;
}

// FlowArrayMutation represents a node potentially mutates an array, i.e. an
// operation of the form 'x.push(value)', 'x.unshift(value)' or 'x[n] = value'.
export interface FlowArrayMutation extends FlowNodeBase, FlowNodeWithCtrlExprBase, FlowAfterOneNodeBase
{
    node: CallExpression | BinaryExpression;
    antecedent: FlowNode;
}

export interface FlowReduceLabel extends FlowNodeBase, FlowAfterOneNodeBase
{
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

export interface SourceFile extends Declaration, LocalsContainer, SourceFileAttribs
{
    readonly kind: SyntaxKind.SourceFile;
    
    hasNoDefaultLib: boolean;

}

// Source files are declarations when they are external modules.
export interface SourceFileAttribs extends LocalsContainer
{
    readonly kind: SyntaxKind.SourceFile;
    readonly statements: NodeArray<Statement>;
    readonly endOfFileToken: Token<SyntaxKind.EndOfFileToken>;

    fileName: string;
    /** @internal */ path: Path;
    text: string;
    /** Resolved path can be different from path property,
     * when file is included through project reference is mapped to its output instead of source
     * in that case resolvedPath = path to output file
     * path = input file's path
     *
     * @internal
     */
    resolvedPath: Path;
    /** Original file name that can be different from fileName,
     * when file is included through project reference is mapped to its output instead of source
     * in that case originalFileName = name of input file
     * fileName = output file's name
     *
     * @internal
     */
    originalFileName: string;

    /**
     * If two source files are for the same version of the same package, one will redirect to the other.
     * (See `createRedirectSourceFile` in program.ts.)
     * The redirect will have this set. The redirected-to source file will be in `redirectTargetsMap`.
     *
     * @internal
     */
    redirectInfo?: RedirectInfo;

    amdDependencies: readonly AmdDependency[];
    moduleName?: string;
    referencedFiles: readonly FileReference[];
    typeReferenceDirectives: readonly FileReference[];
    libReferenceDirectives: readonly FileReference[];
    languageVariant: LanguageVariant;
    isDeclarationFile: boolean;

    // this map is used by transpiler to supply alternative names for dependencies (i.e. in case of bundling)
    /** @internal */
    renamedDependencies?: ReadonlyMap<string, string>;

    /**
     * lib.d.ts should have a reference comment like
     *
     *  /// <reference no-default-lib="true"/>
     *
     * If any other file has this comment, it signals not to include lib.d.ts
     * because this containing file is intended to act as a default library.
     */
    hasNoDefaultLib: boolean;

    languageVersion: ScriptTarget;

    /**
     * When `module` is `Node16` or `NodeNext`, this field controls whether the
     * source file in question is an ESNext-output-format file, or a CommonJS-output-format
     * module. This is derived by the module resolver as it looks up the file, since
     * it is derived from either the file extension of the module, or the containing
     * `package.json` context, and affects both checking and emit.
     *
     * It is _public_ so that (pre)transformers can set this field,
     * since it switches the builtin `node` module transform. Generally speaking, if unset,
     * the field is treated as though it is `ModuleKind.CommonJS`.
     *
     * Note that this field is only set by the module resolution process when
     * `moduleResolution` is `Node16` or `NodeNext`, which is implied by the `module` setting
     * of `Node16` or `NodeNext`, respectively, but may be overriden (eg, by a `moduleResolution`
     * of `node`). If so, this field will be unset and source files will be considered to be
     * CommonJS-output-format by the node module transformer and type checker, regardless of extension or context.
     */
    impliedNodeFormat?: ResolutionMode;
    /** @internal */ packageJsonLocations?: readonly string[];
    /** @internal */ packageJsonScope?: PackageJsonInfo;

    /** @internal */ scriptKind: ScriptKind;

    /**
     * The first "most obvious" node that makes a file an external module.
     * This is intended to be the first top-level import/export,
     * but could be arbitrarily nested (e.g. `import.meta`).
     *
     * @internal
     */
    externalModuleIndicator?: Node | true;
    /**
     * The callback used to set the external module indicator - this is saved to
     * be later reused during incremental reparsing, which otherwise lacks the information
     * to set this field
     *
     * @internal
     */
    setExternalModuleIndicator?: (file: SourceFile) => void;
    // The first node that causes this file to be a CommonJS module
    /** @internal */ commonJsModuleIndicator?: Node;
    // JS identifier-declarations that are intended to merge with globals
    /** @internal */ jsGlobalAugmentations?: SymbolTable;

    /** @internal */ identifiers: ReadonlyMap<string, string>; // Map from a string to an interned string
    /** @internal */ nodeCount: number;
    /** @internal */ identifierCount: number;
    /** @internal */ symbolCount: number;

    // File-level diagnostics reported by the parser (includes diagnostics about /// references
    // as well as code diagnostics).
    /** @internal */ parseDiagnostics: DiagnosticWithLocation[];

    // File-level diagnostics reported by the binder.
    /** @internal */ bindDiagnostics: DiagnosticWithLocation[];
    /** @internal */ bindSuggestionDiagnostics?: DiagnosticWithLocation[];

    // File-level JSDoc diagnostics reported by the JSDoc parser
    /** @internal */ jsDocDiagnostics?: DiagnosticWithLocation[];

    // Stores additional file-level diagnostics reported by the program
    /** @internal */ additionalSyntacticDiagnostics?: readonly DiagnosticWithLocation[];

    // Stores a line map for the file.
    // This field should never be used directly to obtain line map, use getLineMap function instead.
    /** @internal */ lineMap: readonly number[];
    /** @internal */ classifiableNames?: ReadonlySet<__String>;
    // Comments containing @ts-* directives, in order.
    /** @internal */ commentDirectives?: CommentDirective[];
    /** @internal */ imports: readonly StringLiteralLike[];
    // Identifier only if `declare global`
    /** @internal */ moduleAugmentations: readonly (StringLiteral | Identifier)[];
    /** @internal */ patternAmbientModules?: PatternAmbientModule[];
    /** @internal */ ambientModuleNames: readonly string[];
    /** @internal */ checkJsDirective?: CheckJsDirective;
    /** @internal */ version: string;
    /** @internal */ pragmas: ReadonlyPragmaMap;
    /** @internal */ localJsxNamespace?: __String;
    /** @internal */ localJsxFragmentNamespace?: __String;
    /** @internal */ localJsxFactory?: EntityName;
    /** @internal */ localJsxFragmentFactory?: EntityName;

    /** @internal */ exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
    /** @internal */ endFlowNode?: FlowNode;

    /** @internal */ jsDocParsingMode?: JSDocParsingMode;
}

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
    | ObjectLiteralExpression
    | ArrayLiteralExpression
    | JsonMinusNumericLiteral
    | NumericLiteral
    | StringLiteral
    | BooleanLiteral
    | NullLiteral
    // | JsonObjectExpressionImpl
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

export interface ParseConfigHost extends ModuleResolutionHost {
    useCaseSensitiveFileNames: boolean;

    readDirectory(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): readonly string[];

    /**
     * Gets a value indicating whether the specified path exists and is a file.
     * @param path The path to test.
     */
    fileExists(path: string): boolean;

    readFile(path: string): string | undefined;
    trace?(s: string): void;
}

/**
 * Branded string for keeping track of when we've turned an ambiguous path
 * specified like "./blah" to an absolute path to an actual
 * tsconfig file, e.g. "/root/blah/tsconfig.json"
 */
export type ResolvedConfigFileName = string & { _isResolvedConfigFileName: never; };

export interface WriteFileCallbackData {
    /** @internal */ sourceMapUrlPos?: number;
    /** @internal */ buildInfo?: BuildInfo;
    /** @internal */ diagnostics?: readonly DiagnosticWithLocation[];
    /** @internal */ differsOnlyInMap?: true;
}
export type WriteFileCallback = (
    fileName: string,
    text: string,
    writeByteOrderMark: boolean,
    onError?: (message: string) => void,
    sourceFiles?: readonly SourceFile[],
    data?: WriteFileCallbackData,
) => void;

export class OperationCanceledException {}

export interface CancellationToken {
    isCancellationRequested(): boolean;

    /** @throws OperationCanceledException if isCancellationRequested is true */
    throwIfCancellationRequested(): void;
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

/** @internal */
export interface Program extends TypeCheckerHost, ModuleSpecifierResolutionHost {
}

/** @internal */
export type RedirectTargetsMap = ReadonlyMap<Path, readonly string[]>;

export interface ResolvedProjectReference {
    commandLine: ParsedCommandLine;
    sourceFile: SourceFile;
    references?: readonly (ResolvedProjectReference | undefined)[];
}

/** @internal */
export const enum StructureIsReused {
    Not,
    SafeModules,
    Completely,
}

export type CustomTransformerFactory = (context: TransformationContext) => CustomTransformer;

export interface CustomTransformer {
    transformSourceFile(node: SourceFile): SourceFile;
    transformBundle(node: Bundle): Bundle;
}

export interface TypeCheckerHost extends ModuleSpecifierResolutionHost {
    //
}

export interface TypeChecker
{

    // TODO: GH#18217 `xToDeclaration` calls are frequently asserted as defined.
    /** Note that the resulting nodes cannot be checked. */
    typeToTypeNode(type: Type, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeNode | undefined;
    /** @internal */ typeToTypeNode(type: Type, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): TypeNode | undefined; // eslint-disable-line @typescript-eslint/unified-signatures
    /** Note that the resulting nodes cannot be checked. */
    signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): SignatureDeclaration & { typeArguments?: NodeArray<TypeNode>; } | undefined;
    /** @internal */ signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): SignatureDeclaration & { typeArguments?: NodeArray<TypeNode>; } | undefined; // eslint-disable-line @typescript-eslint/unified-signatures
    /** Note that the resulting nodes cannot be checked. */
    indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): IndexSignatureDeclaration | undefined;
    /** @internal */ indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): IndexSignatureDeclaration | undefined; // eslint-disable-line @typescript-eslint/unified-signatures
    /** Note that the resulting nodes cannot be checked. */
    symbolToEntityName(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): EntityName | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToExpression(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): Expression | undefined;
    /**
     * Note that the resulting nodes cannot be checked.
     *
     * @internal
     */
    symbolToNode(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): Node | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToTypeParameterDeclarations(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): NodeArray<TypeParameterDeclaration> | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToParameterDeclaration(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): ParameterDeclaration | undefined;
    /** Note that the resulting nodes cannot be checked. */
    typeParameterToDeclaration(parameter: TypeParameter, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeParameterDeclaration | undefined;

    signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
    typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
    symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): string;
    typePredicateToString(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;

    tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
    /**
     * Unlike `tryGetMemberInModuleExports`, this includes properties of an `export =` value.
     * Does *not* return properties of primitive types.
     *
     * @internal
     */
    tryGetMemberInModuleExportsAndProperties(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
    getApparentType(type: Type): Type;
    /** @internal */ getSuggestedSymbolForNonexistentProperty(name: MemberName | string, containingType: Type): Symbol | undefined;
    /** @internal */ getSuggestedSymbolForNonexistentJSXAttribute(name: Identifier | string, containingType: Type): Symbol | undefined;
    /** @internal */ getSuggestionForNonexistentProperty(name: MemberName | string, containingType: Type): string | undefined;
    /** @internal */ getSuggestedSymbolForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): Symbol | undefined;
    /** @internal */ getSuggestionForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): string | undefined;
    /** @internal */ getSuggestedSymbolForNonexistentModule(node: Identifier, target: Symbol): Symbol | undefined;
    /** @internal */ getSuggestedSymbolForNonexistentClassMember(name: string, baseType: Type): Symbol | undefined;
    /** @internal */ getSuggestionForNonexistentExport(node: Identifier, target: Symbol): string | undefined;
    getBaseConstraintOfType(type: Type): Type | undefined;
    getDefaultFromTypeParameter(type: Type): Type | undefined;

    /**
     * computes the {@link Type} expressed by the {@link TypeNode} {@link x}.
     */
    typeFromTypeNode(x: TypeNode): Type | undefined ;

    /**
     * Gets the intrinsic `any` type. There are multiple types that act as `any` used internally in the compiler,
     * so the type returned by this function should not be used in equality checks to determine if another type
     * is `any`. Instead, use `type.flags & TypeFlags.Any`.
     * @deprecated see {@link getProperAnyType}
     */
    getAnyType(): Type;
    getProperAnyType(): TypeManifest<any>;
    getLiteralType<const T extends null | {}>(value: T): LiteralType<T>;
    getStringLiteralType(value: string): StringLiteralType;
    getNumberLiteralType(value: number): NumberLiteralType;
    getStringType(): TypeManifest<string>;
    getNumberType(): TypeManifest<number>;
    getBigIntType(): Type;
    getBooleanType(): AnyBooleanType;
    /* eslint-disable @typescript-eslint/unified-signatures */
    /** @internal */
    getFalseType(fresh?: boolean): Type;
    getFalseType(): LiteralType<false>;
    /** @internal */
    getTrueType(fresh?: boolean): Type;
    getTrueType(): LiteralType<true>;
    /* eslint-enable @typescript-eslint/unified-signatures */
    getVoidType(): GeneralisedStaticLiteralType<void>;
    getAssertsAnyIsAnyType(): GeneralisedLiteralType<void>;
    /**
     * Gets the intrinsic `undefined` type. There are multiple types that act as `undefined` used internally in the compiler
     * depending on compiler options, so the type returned by this function should not be used in equality checks to determine
     * if another type is `undefined`. Instead, use `type.flags & TypeFlags.Undefined`.
     * @deprecated see {@link getProperUndefinedType}
     */
    getUndefinedType(): GeneralisedLiteralType<undefined>;
    getProperUndefinedType(): GeneralisedStaticLiteralType<undefined>;
    /**
     * Gets the intrinsic `null` type. There are multiple types that act as `null` used internally in the compiler,
     * so the type returned by this function should not be used in equality checks to determine if another type
     * is `null`. Instead, use `type.flags & TypeFlags.Null`.
     * @deprecated see {@link getProperNullType}
     */
    getNullType      (): GeneralisedLiteralType<null>;
    getProperNullType(): LiteralType<null>;
    getESSymbolType(): Type;
    /**
     * Gets the intrinsic `never` type. There are multiple types that act as `never` used internally in the compiler,
     * so the type returned by this function should not be used in equality checks to determine if another type
     * is `never`. Instead, use `type.flags & TypeFlags.Never`.
     * @deprecated see {@link getNeverType}
     */
    getNeverType(): SubtypeManifest<never>;
    getEffectiveNeverType(): SubtypeManifest<never>;
    getProperNeverType   (): TypeManifest<never>;
    /** @internal */ getOptionalType(): Type;
    /** @internal */ getUnionType(types: Type[], subtypeReduction?: UnionReduction): Type;
    /** @internal */ createReadonlyArrayType<T>(elementType: SubtypeManifest<T>): SubtypeManifest<readonly T[]>;
    /** @internal */ createReadonlyArrayType<T>(elementType:    TypeManifest<T>):    TypeManifest<readonly T[]>;
    /** @internal */ createArrayType<T>(elementType: TypeManifest<T>): TypeManifest<T[] >;
    /** @internal */ getElementTypeOfArrayType(arrayType: Type): Type | undefined;
    /** @internal */ createPromiseType(type: Type): Type;
    /** @internal */ getPromiseType(): Type;
    /** @internal */ getPromiseLikeType(): Type;
    /** @internal */ getAsyncIterableType(): Type | undefined;

    /**
     * Returns true if the "source" type is assignable to the "target" type.
     *
     * ```ts
     * declare const abcLiteral: ts.Type; // Type of "abc"
     * declare const stringType: ts.Type; // Type of string
     *
     * isTypeAssignableTo(abcLiteral, abcLiteral); // true; "abc" is assignable to "abc"
     * isTypeAssignableTo(abcLiteral, stringType); // true; "abc" is assignable to string
     * isTypeAssignableTo(stringType, abcLiteral); // false; string is not assignable to "abc"
     * isTypeAssignableTo(stringType, stringType); // true; string is assignable to string
     * ```
     */
    isTypeAssignableTo(source: Type, target: Type): boolean;
    /** @internal */ createAnonymousType(symbol: Symbol | undefined, members: SymbolTable, callSignatures: Signature[], constructSignatures: Signature[], indexInfos: IndexInfo[]): Type;
    /** @internal */ createSignature(
        declaration: SignatureDeclaration | undefined,
        typeParameters: readonly TypeParameter[] | undefined,
        thisParameter: Symbol | undefined,
        parameters: readonly Symbol[],
        resolvedReturnType: Type,
        typePredicate: TypePredicate | undefined,
        minArgumentCount: number,
        flags: SignatureFlags,
    ): Signature;
    /** @internal */ createSymbol(flags: SymbolFlags, name: __String): TransientSymbol;
    /** @internal */ createIndexInfo(keyType: Type, type: Type, isReadonly: boolean, declaration?: SignatureDeclaration): IndexInfo;
    /** @internal */ isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
    /** @internal */ tryFindAmbientModule(moduleName: string): Symbol | undefined;
    /** @internal */ tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol | undefined;

    /** @internal */ getSymbolWalker(accept?: (symbol: Symbol) => boolean): SymbolWalker;
    
}

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
export type NodeBuilderFlags = TypeFormatFlags ;

// Ensure the shared flags between this and `NodeBuilderFlags` stay in alignment
// dprint-ignore
export const enum TypeFormatFlags {
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
    AllowUniqueESSymbolType                 = 1 << 20, // This is bit 20 to align with the same bit in `NodeBuilderFlags`
    AllowEmptyIndexInfoType                 = 1 << 21,
    /** @internal */ WriteComputedProps      = 1 << 30, // { [E.A]: 1 }

    // Errors (cont.)
    AllowNodeModulesRelativePaths           = 1 << 26,
    /** @internal */ DoNotIncludeSymbolChain = 1 << 27,    // Skip looking up and printing an accessible symbol chain

    IgnoreErrors = AllowThisInObjectLiteral | AllowQualifiedNameInPlaceOfIdentifier | AllowAnonymousIdentifier | AllowEmptyUnionOrIntersection | AllowEmptyTuple | AllowEmptyIndexInfoType | AllowNodeModulesRelativePaths,

    // TypeFormatFlags exclusive
    AddUndefined                            = 1 << 17, // Add undefined to types of initialized, non-optional parameters
    WriteArrowStyleSignature                = 1 << 18, // Write arrow style signature

    // State
    InArrayType                             = 1 << 19, // Writing an array element type
    InElementType                           = 1 << 21, // Writing an array or union element type
    InFirstTypeArgument                     = 1 << 22, // Writing first type argument of the instantiated type
    InTypeAlias                             = 1 << 23, // Writing type in type alias declaration
    InInitialEntityName     ,
    InObjectTypeLiteral                     = 1 << 22,

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
    Asserts,
    HasDoneSomething ,
}

export interface TypePredicateBase {
    kind: TypePredicateKind;
    type: Type | null;
    parameterName ?: Expression | string;
    parameterIndex?: (any[])["length"];
}

/**
 * both fields shall be unset -
 * this TypePredicate is only an operator-ish.
 * 
 */
interface FwdTypePredicateBase extends TypePredicateBase
{
    parameterName ?: never;
    parameterIndex?: never;
}

export interface ThisTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.This;
    parameterName ?: never;
    parameterIndex?: never;
    type: Type;
}

export interface TermTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.Identifier;
    parameterName : Expression | string;
    parameterIndex: (any[] )["length"] ;
    type: Type;
}

export interface AssertingTypePredicate extends TypePredicateBase, FwdTypePredicateBase
{
    kind: TypePredicateKind.Asserts;
    parameterName ?: never;
    parameterIndex?: never;
    type: TypeSelectiveType ;
}

export interface AssertsThisTypePredicate       extends AssertingTypePredicate { type: ThisTypePredicativeType  ; }
export interface AssertsTermTypePredicate extends AssertingTypePredicate { type: ParamTypePredicativeType ; }

/** 
 * "has done something" ; {@link StatementRunType}
 * 
 */
export interface EffectSignedTypePredicate extends TypePredicateBase, FwdTypePredicateBase
{
    kind: TypePredicateKind.HasDoneSomething;
    parameterName ?: never;
    parameterIndex?: never;
    type: StatementRunType;
}

export type TypeSelecte =
    | ThisTypePredicate
    | TermTypePredicate
;

export type VoidAssertsConditioningPredicate =
    | AssertingTypePredicate
;

export type SideEffectsTypePredicate =
    | EffectSignedTypePredicate
;

export type PostConditioningPredicate =
    | VoidAssertsConditioningPredicate
    | SideEffectsTypePredicate
;

export type TypePredicate =
    | TypeSelecte | PostConditioningPredicate
    | ThisTypePredicate | TermTypePredicate
    | AssertsThisTypePredicate | AssertsTermTypePredicate
;

/** @internal */
export type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;

/** @internal */
export type AnyImportOrRequire = AnyImportSyntax | VariableDeclarationInitializedTo<RequireOrImportCall>;

/** @internal */
export type AnyImportOrBareOrAccessedRequire = AnyImportSyntax | VariableDeclarationInitializedTo<RequireOrImportCall | AccessExpression>;

/** @internal */
export type AliasDeclarationNode =
    | ImportEqualsDeclaration
    | VariableDeclarationInitializedTo<
        | RequireOrImportCall
        | AccessExpression
    >
    | ImportClause
    | NamespaceImport
    | ImportSpecifier
    | ExportSpecifier
    | NamespaceExport
    | BindingElementOfBareOrAccessedRequire;

/** @internal */
export type BindingElementOfBareOrAccessedRequire = BindingElement & { parent: { parent: VariableDeclarationInitializedTo<RequireOrImportCall | AccessExpression>; }; };

/** @internal */
export type AnyImportOrRequireStatement = AnyImportSyntax | RequireVariableStatement;

/** @internal */
export type AnyImportOrReExport = AnyImportSyntax | ExportDeclaration;

/** @internal */
export interface ValidImportTypeNode extends ImportTypeNode {
    argument: LiteralTypeNode & { literal: StringLiteral; };
}

/** @internal */
export type RequireOrImportCall = CallExpression & { expression: Identifier; arguments: [StringLiteralLike]; };

/** @internal */
export interface VariableDeclarationInitializedTo<T extends Expression> extends VariableDeclaration {
    readonly initializer: T;
}

/** @internal */
export interface RequireVariableStatement extends VariableStatement {
    readonly declarationList: RequireVariableDeclarationList;
}

/** @internal */
export interface RequireVariableDeclarationList extends VariableDeclarationList {
    readonly declarations: NodeArray<VariableDeclarationInitializedTo<RequireOrImportCall>>;
}

/** @internal */
export type LateVisibilityPaintedStatement =
    | AnyImportSyntax
    | VariableStatement
    | ClassDeclaration
    | FunctionDeclaration
    | ModuleDeclaration
    | TypeAliasDeclaration
    | InterfaceDeclaration
    | EnumDeclaration;

/** @internal */
export interface SymbolVisibilityResult {
    accessibility: SymbolAccessibility;
    aliasesToMakeVisible?: LateVisibilityPaintedStatement[]; // aliases that need to have this symbol visible
    errorSymbolName?: string; // Optional symbol name that results in error
    errorNode?: Node; // optional node that results in error
}

/** @internal */
export interface SymbolAccessibilityResult extends SymbolVisibilityResult {
    errorModuleName?: string; // If the symbol is not visible from module, module's name
}

/** @internal */
export interface AllAccessorDeclarations {
    firstAccessor: AccessorDeclaration;
    secondAccessor: AccessorDeclaration | undefined;
    getAccessor: GetAccessorDeclaration | undefined;
    setAccessor: SetAccessorDeclaration | undefined;
}

/** @internal */
export interface AllDecorators {
    decorators: readonly Decorator[] | undefined;
    parameters?: readonly (readonly Decorator[] | undefined)[];
    getDecorators?: readonly Decorator[] | undefined;
    setDecorators?: readonly Decorator[] | undefined;
}

/**
 * Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata
 *
 * @internal
 */
export enum TypeReferenceSerializationKind {
    // The TypeReferenceNode could not be resolved.
    // The type name should be emitted using a safe fallback.
    Unknown,

    // The TypeReferenceNode resolves to a type with a constructor
    // function that can be reached at runtime (e.g. a `class`
    // declaration or a `var` declaration for the static side
    // of a type, such as the global `Promise` type in lib.d.ts).
    TypeWithConstructSignatureAndValue,

    // The TypeReferenceNode resolves to a Void-like, Nullable, or Never type.
    VoidNullableOrNeverType,

    // The TypeReferenceNode resolves to a Number-like type.
    NumberLikeType,

    // The TypeReferenceNode resolves to a BigInt-like type.
    BigIntLikeType,

    // The TypeReferenceNode resolves to a String-like type.
    StringLikeType,

    // The TypeReferenceNode resolves to a Boolean-like type.
    BooleanType,

    // The TypeReferenceNode resolves to an Array-like type.
    ArrayLikeType,

    // The TypeReferenceNode resolves to the ESSymbol type.
    ESSymbolType,

    // The TypeReferenceNode resolved to the global Promise constructor symbol.
    Promise,

    // The TypeReferenceNode resolves to a Function type or a type with call signatures.
    TypeWithCallSignature,

    // The TypeReferenceNode resolves to any other type.
    ObjectType,
}

/** @internal */
export interface EmitResolver {
    // 
}

/**
 * (flags) accessibility to a given symbol
 */
export const enum SymbolVisibilitySpanFlags {
    //
    None                    = 0,
    FunctionScopedVariable  = 1 << 0,   // Variable (var) or parameter
    BlockScopedVariable     = 1 << 1,   // A block-scoped variable (let or const)
    Property                = 1 << 2,   // Property or enum member
}

/**
 * (flags) the kind(s) of constructs a given Symbol points to
 */
export const enum SymbolPointedConstructKingFlags {
    //
    None                    = 0,
    Variable                = 1 << 1,
    Property                = 1 << 2,   // Property or enum member
    Function                = 1 << 4,   // Function
    Class                   = 1 << 5,   // Class
    Interface               = 1 << 6,   // Interface
    ConstEnum               = 1 << 7,   // Const enum
    RegularEnum             = 1 << 8,   // Enum
    ObjectLiteral           = 1 << 12,  // Object Literal
    Method                  = 1 << 13,  // Method
    Constructor             = 1 << 14,  // Constructor
    GetAccessor             = 1 << 15,  // Get accessor
    SetAccessor             = 1 << 16,  // Set accessor
    Signature               = 1 << 17,  // Call, construct, or index signature
    TypeParameter           = 1 << 18,  // Type parameter
    TypeAlias               = 1 << 19,  // Type alias
}

// // dprint-ignore
// export const enum SymbolFlags {
//     None                    = 0,
//     FunctionScopedVariable  = 1 << 0,   // Variable (var) or parameter
//     BlockScopedVariable     = 1 << 1,   // A block-scoped variable (let or const)
//     Property                = 1 << 2,   // Property or enum member
//     EnumMember              = 1 << 3,   // Enum member
//     Function                = 1 << 4,   // Function
//     Class                   = 1 << 5,   // Class
//     Interface               = 1 << 6,   // Interface
//     ConstEnum               = 1 << 7,   // Const enum
//     RegularEnum             = 1 << 8,   // Enum
//     ValueModule             = 1 << 9,   // Instantiated module
//     NamespaceModule         = 1 << 10,  // Uninstantiated module
//     TypeLiteral             = 1 << 11,  // Type Literal or mapped type
//     ObjectLiteral           = 1 << 12,  // Object Literal
//     Method                  = 1 << 13,  // Method
//     Constructor             = 1 << 14,  // Constructor
//     GetAccessor             = 1 << 15,  // Get accessor
//     SetAccessor             = 1 << 16,  // Set accessor
//     Signature               = 1 << 17,  // Call, construct, or index signature
//     TypeParameter           = 1 << 18,  // Type parameter
//     TypeAlias               = 1 << 19,  // Type alias
//     ExportValue             = 1 << 20,  // Exported value marker (see comment in declareModuleMember in binder)
//     Alias                   = 1 << 21,  // An alias for another symbol (see comment in isAliasSymbolDeclaration in checker)
//     Prototype               = 1 << 22,  // Prototype property (no source representation)
//     ExportStar              = 1 << 23,  // Export * declaration
//     Optional                = 1 << 24,  // Optional property
//     Transient               = 1 << 25,  // Transient symbol (created during type check)
//     Assignment              = 1 << 26,  // Assignment treated as declaration (eg `this.prop = 1`)
//     ModuleExports           = 1 << 27,  // Symbol for CommonJS `module` of `module.exports`
//     All = -1,

//     Enum = RegularEnum | ConstEnum,
//     Variable = FunctionScopedVariable | BlockScopedVariable,
//     Value = Variable | Property | EnumMember | ObjectLiteral | Function | Class | Enum | ValueModule | Method | GetAccessor | SetAccessor,
//     Type = Class | Interface | Enum | EnumMember | TypeLiteral | TypeParameter | TypeAlias,
//     Namespace = ValueModule | NamespaceModule | Enum,
//     Module = ValueModule | NamespaceModule,
//     Accessor = GetAccessor | SetAccessor,

//     // Variables can be redeclared, but can not redeclare a block-scoped declaration with the
//     // same name, or any other value that is not a variable, e.g. ValueModule or Class
//     FunctionScopedVariableExcludes = Value & ~FunctionScopedVariable,

//     // Block-scoped declarations are not allowed to be re-declared
//     // they can not merge with anything in the value space
//     BlockScopedVariableExcludes = Value,

//     ParameterExcludes = Value,
//     PropertyExcludes = None,
//     EnumMemberExcludes = Value | Type,
//     FunctionExcludes = Value & ~(Function | ValueModule | Class),
//     ClassExcludes = (Value | Type) & ~(ValueModule | Interface | Function), // class-interface mergability done in checker.ts
//     InterfaceExcludes = Type & ~(Interface | Class),
//     RegularEnumExcludes = (Value | Type) & ~(RegularEnum | ValueModule), // regular enums merge only with regular enums and modules
//     ConstEnumExcludes = (Value | Type) & ~ConstEnum, // const enums merge only with const enums
//     ValueModuleExcludes = Value & ~(Function | Class | RegularEnum | ValueModule),
//     NamespaceModuleExcludes = 0,
//     MethodExcludes = Value & ~Method,
//     GetAccessorExcludes = Value & ~SetAccessor,
//     SetAccessorExcludes = Value & ~GetAccessor,
//     AccessorExcludes = Value & ~Accessor,
//     TypeParameterExcludes = Type & ~TypeParameter,
//     TypeAliasExcludes = Type,
//     AliasExcludes = Alias,

//     ModuleMember = Variable | Function | Class | Interface | Enum | Module | TypeAlias | Alias,

//     ExportHasLocal = Function | Class | Enum | ValueModule,

//     BlockScoped = BlockScopedVariable | Class | Enum,

//     PropertyOrAccessor = Property | Accessor,

//     ClassMember = Method | Accessor | Property,

//     /** @internal */
//     ExportSupportsDefaultModifier = Class | Function | Interface,

//     /** @internal */
//     ExportDoesNotSupportDefaultModifier = ~ExportSupportsDefaultModifier,

//     /** @internal */
//     // The set of things we consider semantically classifiable.  Used to speed up the LS during
//     // classification.
//     Classifiable = Class | Enum | TypeAlias | Interface | TypeParameter | Module | Alias,

//     /** @internal */
//     LateBindingContainer = Class | Interface | TypeLiteral | ObjectLiteral | Function,
// }

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

export interface PhysicallyDeclaredSymbol extends DeclaredSymbol
{
    declarations     ?: PhysicalDeclaration[];           // Declarations associated with this symbol
    valueDeclaration ?: PhysicalDeclaration  ;           // First value declaration of the symbol
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

/** 
 * SymbolTable based on ES6 Map interface.
 */
export type OneToOneSymbolTable = Map<__String, Symbol>;

/** Symbol Table */
export type SymbolTable = (
    OneToOneSymbolTable
) ;

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
export enum TypeReprFlags {
    //

    /**
     * combination:
     * - {@link NEVERISH} -->  `never`, which is "alternation between no type at all"
     * - {@link NEVERISH} and {@link ALTERNATIVETYPE} --> conjunction, `A & B `
     * 
     */
    NEVERISH = 1 << 17 ,

    /**
     * combination:
     * ```
     * ANYISH --> `unknown`
     * ANYISH & VARIANT2 --> `any`
     * ```
     */
    ANYISH = 1 << 1 ,

    /**
     * it's `undefined` or `null`
     */
    NULLPOINTERISH = 1 << 15 ,

    /**
     * its `string` or Array-like or Iterable
     */
    LENGTHY = 1 << 26 ,

    /**
     * 
     */
    NUMERIC = 1 << 3 ,

    ES_SYMBOLTYPE = 1 << 12 ,
    
    BOOLEAN = 1 << 4 ,

    NAMESPACELIKE = 1 << 19 ,

    /**
     * except as otherwise noted, means `void`
     */
    VARIANT3_OR_VOID = 1 << 14 ,
    /**
     * except as otherwise noted, means `string`
     */
    VARIANT2 = 1 << 2 ,

    /**
     * combination:
     * - {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> {@link TypeQuery `typeof a.b.c`}
     * - {@link PATHDEPENDENT_OR_INTERPOLATIVE} & {@link ANYISH } --> *failing* {@link TypeQuery `typeof a.b.c`}
     * -
     * - {@link VARIANT2} & {@link SYNTACTICALLY_LITERAL} & {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> `interpolated-string literal`
     * - 
     * - {@link VARIANT3_OR_VOID} & {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> {@link PostConditioningVoidKwdType `asserts x is T`}
     * - {@link BOOLEAN         } & {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> {@link TypePredicativeType `x is T`}
     * - 
     * - {@link ES_SYMBOLTYPE}  & {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> shadow ES Symbol(s) generated due to path-dependent typing
     * 
     */
    PATHDEPENDENT_OR_INTERPOLATIVE = 1 << 27 ,

    /** combine-only flag */ VARIANT4 = 1 << 30 ,
    /** combine-only flag */ VARIANT5 = 1 << 16 ,
    /** combine-only flag */ VARIANT6 = 1 << 17 ,

    /**
     * a single-instance type:
     * 
     * - {@link PATHDEPENDENT_OR_INTERPOLATIVE `typeof a.b.c`}
     * - {@link LiteralType } (do not confuse with "syntactically-literal types"!)
     *   - {@link StringLiteralType}, {@link NumericLiteral}, 
     * - types declared by {@link EnumDeclaration } or {@link EnumLiteral}
     * 
     */
    SINGLETON = 1 << 7 ,

    /**
     * combined flag:
     * - {@link SYNTACTICALLY_LITERAL} & {@link VARIANT2} --> `string literal`
     * - {@link SYNTACTICALLY_LITERAL} & {@link VARIANT2} & {@link PATHDEPENDENT_OR_INTERPOLATIVE} --> `interpolated-string literal`
     * - {@link SYNTACTICALLY_LITERAL} & {@link NUMERIC} --> `numeric literal`
     * - {@link SYNTACTICALLY_LITERAL} & {@link BOOLEAN} --> `boolean literal`
     */
    SYNTACTICALLY_LITERAL = 1 << 8 ,

    /**
     * combination:
     * - {@link ALTERNATIVETYPE} --> `alternative type, A | B`
     * - {@link ALTERNATIVETYPE} & {@link VARIANT2} --> `conditional type ((T extends C) ? A : B )`
     * - {@link ALTERNATIVETYPE} & {@link NEVERISH} --> `conjunctive type, A & B`
     * 
     */
    ALTERNATIVETYPE = 1 << 20 ,

    /** combine-only flag */ VARIANT7 = 1 << 29 ,

    //
}
export const enum TypeFlags {
    /** `any` */
    Any             = 1 << 0,
    /** the upper-bound of pass-by-ref-ible(s), `unknown` */
    ByRefTopType    = 1 << 1, 
    String          = 1 << 2,
    /**
     * numeric type - `number` or `bigint`
     */
    Number          = 1 << 3,
    Boolean         = 1 << 4,
    /** Enum-like */
    Enum            = 1 << 5,   
    VariantBit6         = 1 << 6,
    /** known to be single-instance */
    SingletonType   = 1 << 9,  
    /** expressed with syntactic literal eg String Literal */
    ExpressedLiterally = 1 << 7 ,
    /**  enum constant. always combined with StringLiteral, NumberLiteral, or Union. */
    EnumConstant    = 1 << 10,
    ESSymbol        = 1 << 12,  // symbol primitive introduced in ES6
    UniqueESSymbol  = 1 << 13,  // unique symbol treated as such by type-checker
    Void            = 1 << 14,
    UndefinedOrNull = 1 << 15,
    Never           = 1 << 17,  // Never type
    /**
     * a type parameter, or
     * a Scala-style (or Rust-style) unbound inner-type
     */
    TypeParameter   = 1 << 18,  // a type parameter, or a Scala-style (or Rust-style) unbound inner-type
    /**
     * `object` or `namespace`, those effectively acting as namespaces :
     * - object-literals:
     *   ```
     *   return {
     *     getName: () => ... ,
     *     getLongDescription: () => ... ,
     *     getVersionNumber: () => ... ,
     *   } ;
     *   ```
     * - `namespace`:
     *   ```
     *   namespace ArrayStat {
     *     export function maxOf<T>(d: readonly T[] ) : T { ... ... }
     *     export function minOf<T>(d: readonly T[] ) : T { ... ... }
     *     export function avgOf<T>(d: readonly T[] ) : T { ... ... }
     *     export function sumOf<T>(d: readonly T[] ) : T { ... ... }
     *   }
     *   ```
     *   including also
     *     - synthetic `namespace`s introduced by {@link EnumDeclaration `enum T { ... ... }`s}
     *     - the static scope of `class <optional-name> { ... ... }`
     * 
     */
    Namespace       = 1 << 19,  // namespace object type
    Union           = 1 << 20,  // Union (T | U)
    Intersection    = 1 << 21,  // Intersection (T & U)
    Keyof           = 1 << 22,  // keyof T
    ItemReferenceType  = 1 << 23,  // T[K]
    /**
     * Unreduced Match Type:
     * - `T extends U ? X : Y`
     * - `switch (T) { case T1 return X ; case T2 return Y ; }`
     */
    UnreducedMatchType  = 1 << 24,  // T extends U ? X : Y
    Substitution    = 1 << 25,  // Type parameter substitution
    /**
     * involves, or is itself,
     * directly-or-indirectly,
     * {@link TypeQueryNode term-depndent types}
     */
    PathDependent = 1 << 26,
    /**
     * result of string-like manip(s)
     */
    StringMapping   = 1 << 28,  // Uppercase/Lowercase type
    /**
     * {@link InterpolatingSubtype}:
     * - has CFA-catchy notation, and
     *    is a {@link FlowAnalyticsSpecificType }:
     *    - {@link TypeSelectiveType `x.y.z is T`         (returning `boolean`) } 
     *    - {@link AssertingVoidKwdType       `asserts x.y.z is T` (returning `void`   ) }
     *    - {@link EffectSignedVoidKwdType } (`void`)
     * - is {@link TemplateLiteralType (unreduced) interpolating string-literal type (a subtype of `string`) }
     * 
     */
    InterpolatingSubtype = 1 << 27
    ,
    /**
     * contains *synchronous post-conditioning*:
     * - {@link PostConditioningVoidKwdType  `asserts x.y.z is CT`             (returning `void`    )}
     * - {@link PostConditioningNonvoidReturnType    `(asserts x.y.z is CT ; Result )` (returning `Result`  )}
     */
    SynchronouslyPostConditioningReturnType = 1 << 29
    ,
    // VariantBit29         = 1 << 29,
    VariantBit30         = 1 << 30,
    VariantBit16         = 1 << 16,

}

export const enum TypeFactFlags20
{
    FUNCTIONCALLEXPR_TYPE = 1 << 2 ,
    AWAITEXPR_TYPE = 1 << 3 ,
    INFIXOPEREXPR_TYPE = 1 << 4 ,
    UNARYOPEREXPR_TYPE = 1 << 5 ,
    /** type-level `throw T`s */
    THROWNOW_TYPE = 1 << 6 ,

    /** known to be a singleton-type */
    SINGLETON_TYPE = 1 << 1 ,
    /** names a */
    SYNTHETIC_COMPANION = 1 << 7 ,
}

export type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;

/** @internal */
export type TypeId = number;

// Properties common to all types
// dprint-ignore
export interface TypeReprOps<Type extends TypeReprOps<Type> >
{
    // flags: TypeFlags;                // Flags
    // /** @internal */ id: TypeId;      // Unique ID
    symbol: Symbol;                  // Symbol associated with type (if any)
    aliasSymbol?: Symbol;            // Alias associated with type
    aliasTypeArguments?: readonly Type[]; // Alias type arguments (if any)
    /** @internal */
    permissiveInstantiation?: Type;  // Instantiation with type parameters mapped to wildcard type
    /** @internal */
    restrictiveInstantiation?: Type; // Instantiation with type parameters mapped to unconstrained form
    // cachedFactFlags1  : TypeFactFlags1  ; // Cached Facts Flags 1
    cachedFactFlags20 : TypeFactFlags20 ; // Cached Facts Flags 2
    /** @internal */
    immediateBaseConstraint?: Type;  // Immediate base constraint cache
    /** @internal */
    widened?: Type; // Cached widened form of the type
    
    declaration ?: {}

    objectFlags: ObjectFlags; // if any
}

// Properties common to all types
// TODO
/**
 * 
 * @see {@link TypeChecker }
 * @see {@link TypeFlags }
 * @see {@link ObjectFlags }
 * @see {@link IntrinsicType }
 * 
 * @see the syntactic repr, {@link TypeNode }
 * 
 * @see
 * in future
 * most existing subclasses of this `class`/`interface` would go away,
 * substituted by conversions from {@link Type} to {@link TypeNode}
 */
export interface Type extends TypeReprOps<Type>
{}
// export interface TypeNode extends TypeReprOps<TypeNode>
// {
//     reprFlags: TypeFlags;  // Flags
//     /** @internal */ reprId: TypeId;      // Unique ID
// }
// export type Type = TypeNode ;
// export interface TypeNode extends Type {}
//

/** manifest for type extending `T`. */ export interface SubtypeManifest<out T> extends Type {}
/** manifest for type exactly   `T`. */ export interface TypeManifest<T>        extends Type, SubtypeManifest<T> {}

export interface DeclaredType extends Type
{
    declaration: Declaration;
}

export interface AstTypeCheckerGeneratedTypeOps extends Type, DeclaredType, TypeCheckerAssociatedMaybe
{
  /** @internal */ checker: TypeChecker;
  declaration: Declaration;
  pattern?: DestructuringPattern;  // Destructuring pattern represented by type (if any)
}

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
 * a {@link FlowFlags non-narrowable} type
 * 
 */
export interface FlowNonNarrowableType
extends Type
{
    iFlowInertTypeBrnd : any ;
    objectFlags: ObjectFlags;
}

/**
 * generalised literal type, which *shall* be single-valued,
 * there are multiple such:
 * - {@link GeneralisedStaticLiteralType}:
 *   - {@link LiteralType  } (static literal types)
 *   - {@link UndefinedKwdType } (`undefined`)
 * - certain {@link TypePredicativeType }s evaluating to a literal-type
 * - {@link DeferredTermTypeReference}:
 *   - `valueof a.c.b` or `typeof a.c.b`
 *   - deferred binary-op types
 * 
 * @see {@link LiteralType}
 * 
 */
export interface GeneralisedLiteralType<out BaseT = unknown>
extends SubtypeManifest<BaseT>, FreshableType
{
    iGeneralisedLiteralTypeBrnd : any ;
    objectFlags: ObjectFlags;
}

/**
 * generalised literal type, which *shall* be single-valued, and static -
 * also {@link FlowNonNarrowableType }, and is typically intrinsic-or-keywd-type
 * 
 * @see {@link LiteralType}
 * 
 */
export interface GeneralisedStaticLiteralType<out T = unknown>
extends GeneralisedLiteralType<T>, SubtypeManifest<T>, FlowNonNarrowableType
{
    iGeneralisedLiteralTypeBrnd : any ;
}

export interface VoidSubtype extends                                   GeneralisedLiteralType<void>,  SubtypeManifest<void> { iVoidTypeBrnd : any ; }
export interface VoidType    extends IntrinsicType, VoidSubtype, GeneralisedStaticLiteralType<void>,     TypeManifest<void> { iVoidTypeBrnd : any ; }

export interface UndefinedKwdSubtype extends                                            GeneralisedLiteralType<undefined>, SubtypeManifest<undefined> { iUndfTypeBrnd : any ; }
export interface UndefinedKwdType    extends IntrinsicType , UndefinedKwdSubtype, GeneralisedStaticLiteralType<undefined>,    TypeManifest<undefined> { iUndfTypeBrnd : any ; }

/**
 * a type which is subtype of `boolean`
 * 
 * @internal
 */
export interface BooleanValuedType extends Type, SubtypeManifest<boolean>
{
    iBooleanReturningTypeBrand ?: any ; // if were obligatory, would prevent raw plain `LiteralType<T extends boolean>`s from being treated as subtype
    objectFlags: ObjectFlags;
}

/** @internal */
export interface AnyBooleanType extends IntrinsicType, BooleanValuedType, TypeManifest<boolean>
{ }

/**
 * constant-type for everything excluding the kwd `undefined`
 * 
 */
export interface LiteralType<out T extends null | {} = null | {}>
extends GeneralisedStaticLiteralType<T>, IntrinsicType, FlowNonNarrowableType, SubtypeManifest<T>
{
    iLIteralTypeBrnd : any ;
    readonly value: T ; // Value of literal
}

// Unique symbol types (TypeFlags.UniqueESSymbol)
export interface UniqueESSymbolType extends Type, GeneralisedStaticLiteralType<symbol>, SubtypeManifest<symbol>
{
    symbol: Symbol;
    escapedName: __String;
}

export interface StringLiteralType<out T extends string = string>
extends LiteralType<T>
{  }

export interface NumberLiteralType<out T extends number = number>
extends LiteralType<T>
{ }

export interface BigIntLiteralType<out T extends PseudoBigInt = PseudoBigInt>
extends LiteralType<T>
{  }

export interface BooleanLiteralType<out T extends boolean = boolean>
extends LiteralType<T>, BooleanValuedType
{  }

export interface EnumConstantLiteralType<out T extends {} = {}>
extends LiteralType<T>
{  }

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

export type FixedInterfaceType = InterfaceType & FlowNonNarrowableType ;

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
 * Type references (ObjectFlags.Reference).
 * 
 * When a class or interface has type parameters or
 * a "this" type, references to the class or interface are made using type references.
 * The typeArguments property specifies the types to substitute for the type parameters of the
 * class or interface and optionally includes an extra element that specifies the type to
 * substitute for "this" in the resulting instantiation. When no extra argument is present,
 * the type reference itself is substituted for "this".
 * The typeArguments property is undefined
 * if the class or interface has no type parameters and the reference isn't specifying an
 * explicit "this" argument.
 * 
 */
export interface TypeReference extends ObjectType {
    /**
     * the resulting type
     */
    target: Type;
    /**
     * the operand as written possibly reduced
     */
    node ?: Node ;
    iMode : TypeReferenceIMode ;
    /** @internal */
    mapper?: TypeMapper;
    /** @internal */
    resolvedTypeArguments?: readonly Type[]; // Resolved type reference type arguments
    /** @internal */
    literalType?: TypeReference; // Clone of type with ObjectFlags.ArrayLiteral set
    /** @internal */
    cachedEquivalentBaseType?: Type; // Only set on references to class or interfaces with a single base type and no augmentations
}

export enum TypeReferenceIMode {
    VALUEOF = 1 << 1 ,
    CONSTRAINT_OF = 1 << 3 ,
    READ_TYPE_OF = 1 << 5 ,
    WRITE_TYPE_OF = 1 << 4 ,
    TYPE_ALIAS = 1 << 11 ,
}

type DRWT_MODE =
    | TypeReferenceIMode.CONSTRAINT_OF
    | TypeReferenceIMode.READ_TYPE_OF
    | TypeReferenceIMode.WRITE_TYPE_OF
;

export interface DeferredTypeReferenceBase extends TypeReference
{
    /**
     * the operand as written possibly reduced
     */
    node : Node ;
    iMode : TypeReferenceIMode ;
    /** @internal */
    mapper?: TypeMapper;
    /** @internal */
    instantiations?: Map<string, Type>; // Instantiations of generic type alias (undefined if non-generic)
}

export interface DeferredTermTypeReference extends DeferredTypeReferenceBase {
    /** @internal */
    node: Expression ;
    /**
     * by default we'll give the `valueof` variant ({@link TypeReferenceIMode.VALUEOF}) ;
     * set this to {@link TypeReferenceIMode.VALUEOF} to force widening to the type the resolved {@link Symbol}'s `returnType` tells.
     */
    iMode : TypeReferenceIMode.VALUEOF | DRWT_MODE ;
    /** @internal */
    mapper?: never;
    /** @internal */
    instantiations?: Map<string, Type>; // Instantiations of generic type alias (undefined if non-generic)
}

export interface DeferredTermQuantifyingType1 extends DeferredTermTypeReference, GeneralisedLiteralType
{
    iMode : TypeReferenceIMode.VALUEOF;
    instantiations ?: never ;
}

export interface DeferredTermDeclaredTypeofType1 extends DeferredTermTypeReference
{
    iMode : DRWT_MODE;
}

export interface DeferredTypeReference1 extends DeferredTypeReferenceBase {
    /** @internal */
    node: TypeNode ;
    iMode : TypeReferenceIMode.TYPE_ALIAS ;
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

export interface ArrayType1 extends ObjectType, SubtypeManifest<readonly unknown[]>
{
    // ;
}

export interface UniformArrayType1 extends ArrayType1
{
    writable: boolean;
    isShallowConst: boolean;
}

export interface TupleType extends ArrayType1, GenericType {
    elementFlags: readonly ElementFlags[];
    /** Number of required or variadic elements */
    minLength: number;
    /** Number of initial required or optional elements */
    fixedLength: number;
    /** True if tuple has any rest or variadic elements */
    hasRestElement: boolean;
    combinedFlags: ElementFlags;
    labeledElementDeclarations?: readonly (NamedTupleMember | ParameterDeclaration | undefined)[];
}

export interface FromArgsTupleType extends TupleType, UniformArrayType1
{
}

export interface ShlwConstArrayType extends UniformArrayType1
{
    writable        : false;
    isShallowConst: true;
}

export interface ShlwConstTupleType extends FromArgsTupleType, ShlwConstArrayType
{
    writable        : false;
    isShallowConst: true;
}

// export interface DeclaredTupleTypeOps extends TupleType
// {
//   //
//   labeledElementDeclarations?: readonly (NamedTupleMember | ParameterDeclaration | undefined)[];
// }

export interface TupleTypeReference extends TypeReference {
    target: TupleType;
}

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

/** @internal */
export interface InstantiationExpressionType extends AnonymousType {
    node: NodeWithTypeArguments;
}

/** @internal */
export interface MappedType extends AnonymousType {
    typeParameter?: TypeParameter;
    constraintType?: Type;
    nameType?: Type;
    templateType?: Type;
    modifiersType?: Type;
    resolvedApparentType?: Type;
    containsError?: boolean;
    // declaration?: MappedTypeNode;
}

export interface DeclaredMappedType extends MappedType
{
    declaration: MappedTypeNode;
}

// export interface EvolvingArrayType extends ObjectType, UniformAccessArrayType1
// {
//     elementType: Type; // Element expressions of evolving array type
//     finalArrayType?: Type; // Final array type of evolving array type
// }

// export interface ShlwConstEvolvingArrayType extends UniformAccessArrayType1, EvolvingArrayType, ShlwConstArrayType
// {
//     writable        : false;
//     isShallowConst: true;
// }

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

/**
 * 
 * Indexed access types (TypeFlags.IndexedAccess)
 * Possible forms are T[xxx], xxx[T], or xxx[keyof T], where T is a type variable
 */
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

/**
 * `keyof T` types ({@link TypeFlags.Index})
 */
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

/**
 * `T extends U ? X : Y` ({@link TypeFlags.Conditional})
 */
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

/**
 * a base class for the different kinds of {@link FlowNode CFA-directing} types:
 * - {@link TypeSelectiveType } (`x.y.z is T` ; special sub-type(s) of `boolean` )
 * - {@link PostConditioningPredicate } (special sub-type(s) of `void`)
 *   - {@link AssertingTypePredicate } (`asserts z.y.z is T`)
 *   - {@link EffectSignedVoidKwdType } (`done { x() ; y(z) ; }`)
 * 
 */
export interface TypePredicativeType extends Type, InstantiableType
{
    readonly subjectedPremise: TypePredicate ;
}

/**
 * when a `boolean` sub-type is a type-predicate, and additionally it's shown `true` or `false`,
 * CFA-narrowing should be applied ;
 * 
 * ```
 * const valid1 : (x1 is NonnegativeNumber ) = ... ;
 * x1 // merely `number` ; `valid1` is not yet proven `true`
 * if (valid1) {
 *    // `x1` narrowed to NonnegativeNumber
 *    x1 // NonnegativeNumber
 * }
 * else {
 *    x1 // NotBeing<NonnegativeNumber>
 * }
 * ```
 * (see also {@link ImplementativeNegatedType} )
 * 
 * `boolean` {@link TypePredicativeType}s
 * can be {@link IntersectionType `&`-ed } asisthecase with regular `boolean` constant-type,
 * like this, inwhichcase proving `true` will apply narrowings implied by both :
 * ```
 * const valid1 : (x1 is NonnegativeNumber ) & (x2 is NonnegativeNumber ) = ... ;
 * 
 * const valid2 : (nameArg is ValidName ) & (addressArg is ValidAddressString ) & (there ) = ... ;
 * 
 * if (valid2) {
 *   // `nameArg`, `addressArg`, `there` are all narrowed here
 *   ... ...
 * }
 * ```
 * 
 */
export interface TypeSelectiveType extends TypePredicativeType, GeneralisedLiteralType
{
    resolvedBaseConstraint: BooleanValuedType ;
    readonly subjectedPremise: TypeSelecte ;
}

export interface ParamTypePredicativeType extends TypePredicativeType { readonly subjectedPremise: TermTypePredicate ; }
export interface ThisTypePredicativeType extends TypePredicativeType { readonly subjectedPremise: ThisTypePredicate ; }

/**
 * a {@link TypeChecker sub-type} of {@link TypeChecker.getVoidType `void`} (see {@link PostConditioningNonvoidReturnType} for the non-`void` one!) with added post-cond.
 * occuring as return-type of a method,
 * whenever {@link CallLikeExpression the method gets called},
 * {@link ExpressionStatement statements} following the call can only be reached if the call succees, in which case
 * CFA would automatically apply narrowings implied from the sgture
 * 
 * ```
 * // `cond` typed as `string | number`
 * Debug.assert(cond) ; // `Debug.assert` being typed as `(x: unknown) => asserts x is string `
 * cond // necessarily `string`
 * ```
 * 
 * ```
 * // `cond` typed as `{ kind: SyntaxKind, } | false`
 * Debug.assert(cond) ; // `Debug.assert` being typed as `(x: unknown) => asserts x `
 * cond // necessarily `{ kind: SyntaxKind  }`
 * ```
 * 
 * ideally type-checker(s) should reject snippets using this directly as types of `const`s or *parameter*s ;
 * this *type* should only occur directly
 * as return-type(s) (eg in `(x: number ) => asserts x is Integer `), or
 * as {@link TypeParameter type-argument} (eg in `ReadonlyArray<asserts x is Integer>`, `Uppercase<asserts x is {}>`, please don't do this! ☺)
 * 
 * also occur as {@link PostConditioningNonvoidReturnType.postcondT} and {@link Signature.resolvedPreCondition}.
 * 
 */
export interface AssertingVoidKwdType extends TypePredicativeType, PostConditioningVoidKwdType, PostConditioningSgnedType, GeneralisedLiteralType
{
    resolvedBaseConstraint: VoidType ;
    readonly subjectedPremise: AssertingTypePredicate ;
    readonly subjectedTyp: TypeSelectiveType ;
}

/**
 * {@link PostConditioningVoidKwdType} for {@link EffectSignedTypePredicate } 
 */
export interface EffectSignedVoidKwdType extends PostConditioningVoidKwdType
{ readonly subjectedPremise: EffectSignedTypePredicate }

/**
 * a {@link TypeChecker sub-type} of {@link TypeChecker.getVoidType `void`} (see {@link PostConditioningNonvoidReturnType} for the non-`void` one!) with added post-cond.
 * occuring as return-type of a method,
 * ```
 * // `asserts x is T` or `asserts cond`
 * (v: T1) => asserts v is T2
 * (cond: boolean) => asserts cond
 * 
 * // side-effect-encoding types
 * (...args: Chore03Args) => (done { y () ; x(...args) } ; Result )
 * ```
 * 
 * it's also possible to obtain non-`void` return-types tagged with these,
 * by switching to {@link PostConditioningNonvoidReturnType} since they {@link PostConditioningNonvoidReturnType.postcondT reference this } ;
 * 
 * ideally type-checker(s) should reject snippets using this directly as types of `const`s or *parameter*s ;
 * this *type* should only occur directly
 * as return-type(s) (eg in `(x: number ) => asserts x is Integer `), or
 * as {@link TypeParameter type-argument} (eg in `ReadonlyArray<asserts x is Integer>`, `Uppercase<asserts x is {}>`, please don't do this! ☺)
 * 
 * also occur as {@link PostConditioningNonvoidReturnType.postcondT} and {@link Signature.resolvedPreCondition}.
 * 
 */
export interface PostConditioningVoidKwdType extends TypePredicativeType, PostConditioningSgnedType, GeneralisedLiteralType
{
    resolvedBaseConstraint: VoidType ;
    readonly subjectedPremise: PostConditioningPredicate ;
}

/**
 * {@link CommaListExpression comma-operator type} `(asserts x is T ; Result )` or `(done x() ; Result )` .
 * essentially
 * the return-type, preceded by {@link PostConditioningVoidKwdType post-conditioning `void`-subtype(s)} -
 * for example `(asserts x is T ; Result )`, `(asserts cond ; Result )`
 * 
 */
export interface PostConditioningNonvoidReturnType extends Type, InstantiableType, PostConditioningSgnedType
{
    //
    readonly postcondT: PostConditioningVoidKwdType ;
    readonly returnType: Type ;
}

/**
 * __the 'unconditional' version of__ {@link Signature return-types} warranting {@link FlowNodeBase CFA-done} type-narrowing(s):
 * ```
 * // RETURN-TYPE(S) IMPLYING UNCONDITIONAL NARROWING:
 * asserts x is T                (void return-value)
 * asserts cond                  (void return-value)
 * (assertx x is T ; Return )    (non-void return-value)
 * ```
 * BUT the following are all NOT:
 * ```
 * // `x.y.z is T` do not directly prove anything unless it's itself proven `true` :
 * x     is T1    (needs additional `if(cond)`-check to make it do its thing )
 * x.y.z is T2    (needs additional `if(cond)`-check to make it do its thing )
 * ```
 * 
 * subclassed by {@link PostConditioningVoidKwdType} and {@link PostConditioningNonvoidReturnType}.
 * 
 * ideally type-checker(s) should reject snippets using this directly as types of `const`s or *parameter*s ;
 * this *type* should only occur directly
 * as return-type(s) (eg in `(x: number ) => asserts x is Integer `), or
 * as {@link TypeParameter type-argument} (eg in `ReadonlyArray<asserts x is Integer>`, `Uppercase<asserts x is {}>`, please don't do this! ☺)
 * 
 */
export interface PostConditioningSgnedType extends Type, InstantiableType
{
    readonly postcondT : PostConditioningVoidKwdType ;
}

export type FlowAnalyticsSpecificType =
    | PostConditioningSgnedType
    | TypePredicativeType
;

/**
 * a type encoding the evaluation of some {@link Statement}:
 * ```
 * doChore01 : () => (done { x() ; y(z) ; z() ; } )
 * doChore02 : () => (done { x() ; y(z) ; } ; Chore02Result )
 * ```
 * 
 */
export interface StatementRunType extends Type
{
    mainCode: InstructiveNode ;
}

/**
 * quantitative `throw T` (do not confuse with {@link Signature `throws S` in call-signatures }!)
 * 
 * may get *approximated* to `never`
 * 
 */
export interface ThrowExceptionType extends TrivialUnaryType
{}

export interface UnaryOnSubjectType extends Type
{
    //
    readonly operand: {} ;
}

export interface TrivialUnaryType extends UnaryOnSubjectType
{
    //
    readonly operand: Type ;
}

export interface TrivialCombnType extends Type
{
    //
    subjects: Type[] ;
}

/**
 * "not an instance of T", `NotBeing<T>` ;
 * 
 * TYPE_CHECKER NOTE --
 * for efficiency,
 * consider representing those, as combination of {@link IntersectionType `&`s} with this, like
 * `ImplementativeNegatedType(IntersectionType(T1, T2, T3) )`
 * 
 */
export interface ImplementativeNegatedType extends TrivialUnaryType
{}

/**
 * `!expr`, whether boolean or bitwise ops
 */
export interface CoerceNegatedType extends TrivialUnaryType
{}

/**
 * `expr!` (TS only)
 */
export interface CoerceNonNullUnaryType extends TrivialUnaryType
{}

/**
 * `+expr
 */
export interface CoerceUnaryPlusOperatedType extends TrivialUnaryType
{}

/**
 * `-expr`
 */
export interface AdditiveNegatedType extends TrivialUnaryType
{}

/** */
export interface NumericRangeType extends Type
{
    minBound: NumericRangePresentEndDesc | false ;
    maxBound: NumericRangePresentEndDesc | false ;
}
/** boundary desc unless `false` */
export interface NumericRangePresentEndDesc { pos: Type, itselfToo: boolean, }

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
    /**
     * not used in this version of the toolchain, but is used in the upstream one:
     * > Lazily set by `getTypePredicateOfSignature`.
     * > `undefined` indicates a type predicate that has not yet been computed.
     * > Uses a special `noTypePredicate` sentinel value to indicate that there is no type predicate. This looks like a TypePredicate at runtime to avoid polymorphism.
     * 
     * here, rather than slapping {@link TypePredicate} on this (optional) field,
     * we instead slap, as {@link resolvedReturnType}, {@link TypePredicativeType a `x is T`-ish sub-type of `boolean` or `void` or `IVoid` } ;
     * this avoids the existing limitation - of not being able to aggregate multiple such -
     * by making use of {@link IntersectionType `&`s} over {@link TypePredicativeType}s .
     * 
     * ```
     * const valid1 : (x1 is NonnegativeNumber ) & (x2 is NonnegativeNumber ) = ... ;
     * 
     * const valid2 : (nameArg is ValidName ) & (addressArg is ValidAddressString ) = ... ;
     * ```
     * 
     * use - as {@link resolvedReturnType } - {@link PostConditioningVoidKwdType}
     * 
     * @internal
     * @deprecated
     * 
     */
    resolvedTypePredicate?: TypePredicate;
    /**
     * optional pre-condition, as {@link PostConditioningVoidKwdType}
     * 
     * @see {@link PostConditioningVoidKwdType}
     */
    resolvedPreCondition ?: PostConditioningVoidKwdType ;
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

export interface InferenceInfo {}

// dprint-ignore
/** @internal */
export const enum InferenceFlags {
    None            =      0,  // No special inference behaviors
    NoDefault       = 1 << 0,  // Infer silentNeverType for no inferences (otherwise anyType or unknownType)
    AnyDefault      = 1 << 1,  // Infer anyType (in JS files) for no inferences (otherwise unknownType)
    SkippedGenericFunction = 1 << 2, // A generic function was skipped during inference
}

// /**
//  * Ternary values are defined such that
//  * x & y picks the lesser in the order False < Unknown < Maybe < True, and
//  * x | y picks the greater in the order False < Unknown < Maybe < True.
//  * Generally, Ternary.Maybe is used as the result of a relation that depends on itself, and
//  * Ternary.Unknown is used as the result of a variance check that depends on itself. We make
//  * a distinction because we don't want to cache circular variance check results.
//  *
//  * @internal
//  */
// export const enum Ternary {
//     False = 0,
//     Unknown = 1,
//     Maybe = 3,
//     True = -1,
// }

/** @internal */
export type TypeComparer = (s: Type, t: Type, reportErrors?: boolean) => Ternary;

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
    Node16ExactPathNames = 3.125,
    NodeNext = 99, // Not simply `Node16` so that compiled code linked against TS can use the `Next` value reliably (same as with `ModuleKind`)
    NodeNextExactPathNames = 99.125,
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

export interface GetEffectiveTypeRootsHost {
    getCurrentDirectory?(): string;
}

/** @internal */
export interface HasCurrentDirectory {
    getCurrentDirectory(): string;
}

/** @internal */
export interface ModuleSpecifierResolutionHost {
    useCaseSensitiveFileNames?(): boolean;
    fileExists(path: string): boolean;
    getCurrentDirectory(): string;
    directoryExists?(path: string): boolean;
    readFile?(path: string): string | undefined;
    realpath?(path: string): string;
    getSymlinkCache?(): SymlinkCache;
    getModuleSpecifierCache?(): ModuleSpecifierCache;
    getPackageJsonInfoCache?(): PackageJsonInfoCache | undefined;
    getGlobalTypingsCacheLocation?(): string | undefined;
    getNearestAncestorDirectoryWithPackageJson?(fileName: string, rootDir?: string): string | undefined;

    readonly redirectTargetsMap: RedirectTargetsMap;
    getProjectReferenceRedirect(fileName: string): string | undefined;
    isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    getFileIncludeReasons(): MultiMap<Path, FileIncludeReason>;
    getCommonSourceDirectory(): string;
}

/** @internal */
export interface ModulePath {
    path: string;
    isInNodeModules: boolean;
    isRedirect: boolean;
}

/** @internal */
export interface ResolvedModuleSpecifierInfo {
    modulePaths: readonly ModulePath[] | undefined;
    moduleSpecifiers: readonly string[] | undefined;
    isBlockedByPackageJsonDependencies: boolean | undefined;
}

/** @internal */
export interface ModuleSpecifierOptions {
    overrideImportMode?: ResolutionMode;
}

/** @internal */
export interface ModuleSpecifierCache {
    get(fromFileName: Path, toFileName: Path, preferences: UserPreferences, options: ModuleSpecifierOptions): Readonly<ResolvedModuleSpecifierInfo> | undefined;
    set(fromFileName: Path, toFileName: Path, preferences: UserPreferences, options: ModuleSpecifierOptions, modulePaths: readonly ModulePath[], moduleSpecifiers: readonly string[]): void;
    setBlockedByPackageJsonDependencies(fromFileName: Path, toFileName: Path, preferences: UserPreferences, options: ModuleSpecifierOptions, isBlockedByPackageJsonDependencies: boolean): void;
    setModulePaths(fromFileName: Path, toFileName: Path, preferences: UserPreferences, options: ModuleSpecifierOptions, modulePaths: readonly ModulePath[]): void;
    clear(): void;
    count(): number;
}

// Note: this used to be deprecated in our public API, but is still used internally
/** @internal */
export interface SymbolTracker {
    // Called when the symbol writer encounters a symbol to write.  Currently only used by the
    // declaration emitter to help determine if it should patch up the final declaration file
    // with import statements it previously saw (but chose not to emit).
    trackSymbol?(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags): boolean;
    reportInaccessibleThisError?(): void;
    reportPrivateInBaseOfClassExpression?(propertyName: string): void;
    reportInaccessibleUniqueSymbolError?(): void;
    reportCyclicStructureError?(): void;
    reportLikelyUnsafeImportRequiredError?(specifier: string): void;
    reportTruncationError?(): void;
    moduleResolverHost?: ModuleSpecifierResolutionHost & { getCommonSourceDirectory(): string; };
    trackReferencedAmbientModule?(decl: ModuleDeclaration, symbol: Symbol): void;
    trackExternalModuleSymbolOfImportTypeNode?(symbol: Symbol): void;
    reportNonlocalAugmentation?(containingFile: SourceFile, parentSymbol: Symbol, augmentingSymbol: Symbol): void;
    reportNonSerializableProperty?(propertyName: string): void;
}

export interface TextSpan {
    start: number;
    length: number;
}

export interface TextChangeRange {
    span: TextSpan;
    newLength: number;
}

/** @internal */
export interface DiagnosticCollection {
    // Adds a diagnostic to this diagnostic collection.
    add(diagnostic: Diagnostic): void;

    // Returns the first existing diagnostic that is equivalent to the given one (sans related information)
    lookup(diagnostic: Diagnostic): Diagnostic | undefined;

    // Gets all the diagnostics that aren't associated with a file.
    getGlobalDiagnostics(): Diagnostic[];

    // If fileName is provided, gets all the diagnostics associated with that file name.
    // Otherwise, returns all the diagnostics (global and file associated) in this collection.
    getDiagnostics(): Diagnostic[];
    getDiagnostics(fileName: string): DiagnosticWithLocation[];
}

// SyntaxKind.SyntaxList
export interface SyntaxList extends Node {
    kind: SyntaxKind.SyntaxList;
    _children: Node[];
}

// dprint-ignore
export const enum ListFormat {
    None = 0,

    // Line separators
    SingleLine = 0,                 // Prints the list on a single line (default).
    MultiLine = 1 << 0,             // Prints the list on multiple lines.
    PreserveLines = 1 << 1,         // Prints the list using line preservation if possible.
    LinesMask = SingleLine | MultiLine | PreserveLines,

    // Delimiters
    NotDelimited = 0,               // There is no delimiter between list items (default).
    BarDelimited = 1 << 2,          // Each list item is space-and-bar (" |") delimited.
    AmpersandDelimited = 1 << 3,    // Each list item is space-and-ampersand (" &") delimited.
    CommaDelimited = 1 << 4,        // Each list item is comma (",") delimited.
    AsteriskDelimited = 1 << 5,     // Each list item is asterisk ("\n *") delimited, used with JSDoc.
    DelimitersMask = BarDelimited | AmpersandDelimited | CommaDelimited | AsteriskDelimited,

    AllowTrailingComma = 1 << 6,    // Write a trailing comma (",") if present.

    // Whitespace
    Indented = 1 << 7,              // The list should be indented.
    SpaceBetweenBraces = 1 << 8,    // Inserts a space after the opening brace and before the closing brace.
    SpaceBetweenSiblings = 1 << 9,  // Inserts a space between each sibling node.

    // Brackets/Braces
    Braces = 1 << 10,                // The list is surrounded by "{" and "}".
    Parenthesis = 1 << 11,          // The list is surrounded by "(" and ")".
    AngleBrackets = 1 << 12,        // The list is surrounded by "<" and ">".
    SquareBrackets = 1 << 13,       // The list is surrounded by "[" and "]".
    BracketsMask = Braces | Parenthesis | AngleBrackets | SquareBrackets,

    OptionalIfUndefined = 1 << 14,  // Do not emit brackets if the list is undefined.
    OptionalIfEmpty = 1 << 15,      // Do not emit brackets if the list is empty.
    Optional = OptionalIfUndefined | OptionalIfEmpty,

    // Other
    PreferNewLine = 1 << 16,        // Prefer adding a LineTerminator between synthesized nodes.
    NoTrailingNewLine = 1 << 17,    // Do not emit a trailing NewLine for a MultiLine list.
    NoInterveningComments = 1 << 18, // Do not emit comments between each node
    NoSpaceIfEmpty = 1 << 19,       // If the literal is empty, do not add spaces between braces.
    SingleElement = 1 << 20,
    SpaceAfterList = 1 << 21,       // Add space after list

    // Precomputed Formats
    Modifiers = SingleLine | SpaceBetweenSiblings | NoInterveningComments | SpaceAfterList,
    HeritageClauses = SingleLine | SpaceBetweenSiblings,
    SingleLineTypeLiteralMembers = SingleLine | SpaceBetweenBraces | SpaceBetweenSiblings,
    MultiLineTypeLiteralMembers = MultiLine | Indented | OptionalIfEmpty,

    SingleLineTupleTypeElements = CommaDelimited | SpaceBetweenSiblings | SingleLine,
    MultiLineTupleTypeElements = CommaDelimited | Indented | SpaceBetweenSiblings | MultiLine,
    UnionTypeConstituents = BarDelimited | SpaceBetweenSiblings | SingleLine,
    IntersectionTypeConstituents = AmpersandDelimited | SpaceBetweenSiblings | SingleLine,
    ObjectBindingPatternElements = SingleLine | AllowTrailingComma | SpaceBetweenBraces | CommaDelimited | SpaceBetweenSiblings | NoSpaceIfEmpty,
    ArrayBindingPatternElements = SingleLine | AllowTrailingComma | CommaDelimited | SpaceBetweenSiblings | NoSpaceIfEmpty,
    ObjectLiteralExpressionProperties = PreserveLines | CommaDelimited | SpaceBetweenSiblings | SpaceBetweenBraces | Indented | Braces | NoSpaceIfEmpty,
    ImportAttributes = PreserveLines | CommaDelimited | SpaceBetweenSiblings | SpaceBetweenBraces | Indented | Braces | NoSpaceIfEmpty,
    /** @deprecated */ ImportClauseEntries = ImportAttributes,
    ArrayLiteralExpressionElements = PreserveLines | CommaDelimited | SpaceBetweenSiblings | AllowTrailingComma | Indented | SquareBrackets,
    CommaListElements = CommaDelimited | SpaceBetweenSiblings | SingleLine,
    CallExpressionArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis,
    NewExpressionArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis | OptionalIfUndefined,
    TemplateExpressionSpans = SingleLine | NoInterveningComments,
    SingleLineBlockStatements = SpaceBetweenBraces | SpaceBetweenSiblings | SingleLine,
    MultiLineBlockStatements = Indented | MultiLine,
    VariableDeclarationList = CommaDelimited | SpaceBetweenSiblings | SingleLine,
    SingleLineFunctionBodyStatements = SingleLine | SpaceBetweenSiblings | SpaceBetweenBraces,
    MultiLineFunctionBodyStatements = MultiLine,
    ClassHeritageClauses = SingleLine,
    ClassMembers = Indented | MultiLine,
    InterfaceMembers = Indented | MultiLine,
    EnumMembers = CommaDelimited | Indented | MultiLine,
    CaseBlockClauses = Indented | MultiLine,
    NamedImportsOrExportsElements = CommaDelimited | SpaceBetweenSiblings | AllowTrailingComma | SingleLine | SpaceBetweenBraces | NoSpaceIfEmpty,
    JsxElementOrFragmentChildren = SingleLine | NoInterveningComments,
    JsxElementAttributes = SingleLine | SpaceBetweenSiblings | NoInterveningComments,
    CaseOrDefaultClauseStatements = Indented | MultiLine | NoTrailingNewLine | OptionalIfEmpty,
    HeritageClauseTypes = CommaDelimited | SpaceBetweenSiblings | SingleLine,
    SourceFileStatements = MultiLine | NoTrailingNewLine,
    Decorators = MultiLine | Optional | SpaceAfterList,
    TypeArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | AngleBrackets | Optional,
    TypeParameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | AngleBrackets | Optional,
    Parameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis,
    IndexSignatureParameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | Indented | SquareBrackets,
    JSDocComment = MultiLine | AsteriskDelimited,
}

/** @internal */
export const enum PragmaKindFlags {
    None = 0,
    /**
     * Triple slash comment of the form
     * /// <pragma-name argname="value" />
     */
    TripleSlashXML = 1 << 0,
    /**
     * Single line comment of the form
     * // @pragma-name argval1 argval2
     * or
     * /// @pragma-name argval1 argval2
     */
    SingleLine = 1 << 1,
    /**
     * Multiline non-jsdoc pragma of the form
     * /* @pragma-name argval1 argval2 * /
     */
    MultiLine = 1 << 2,
    All = TripleSlashXML | SingleLine | MultiLine,
    Default = All,
}

/** @internal */
export interface PragmaArgumentSpecification<TName extends string> {
    name: TName; // Determines the name of the key in the resulting parsed type, type parameter to cause literal type inference
    optional?: boolean;
    captureSpan?: boolean;
}

/** @internal */
export interface PragmaDefinition<T1 extends string = string, T2 extends string = string, T3 extends string = string, T4 extends string = string> {
    args?:
        | readonly [PragmaArgumentSpecification<T1>]
        | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>]
        | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>]
        | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>, PragmaArgumentSpecification<T4>];
    // If not present, defaults to PragmaKindFlags.Default
    kind?: PragmaKindFlags;
}

// While not strictly a type, this is here because `PragmaMap` needs to be here to be used with `SourceFile`, and we don't
//  fancy effectively defining it twice, once in value-space and once in type-space
/** @internal */
export const commentPragmas = {
    "reference": {
        args: [
            { name: "types", optional: true, captureSpan: true },
            { name: "lib", optional: true, captureSpan: true },
            { name: "path", optional: true, captureSpan: true },
            { name: "no-default-lib", optional: true },
            { name: "resolution-mode", optional: true },
        ],
        kind: PragmaKindFlags.TripleSlashXML,
    },
    "amd-dependency": {
        args: [{ name: "path" }, { name: "name", optional: true }],
        kind: PragmaKindFlags.TripleSlashXML,
    },
    "amd-module": {
        args: [{ name: "name" }],
        kind: PragmaKindFlags.TripleSlashXML,
    },
    "ts-check": {
        kind: PragmaKindFlags.SingleLine,
    },
    "ts-nocheck": {
        kind: PragmaKindFlags.SingleLine,
    },
    "jsx": {
        args: [{ name: "factory" }],
        kind: PragmaKindFlags.MultiLine,
    },
    "jsxfrag": {
        args: [{ name: "factory" }],
        kind: PragmaKindFlags.MultiLine,
    },
    "jsximportsource": {
        args: [{ name: "factory" }],
        kind: PragmaKindFlags.MultiLine,
    },
    "jsxruntime": {
        args: [{ name: "factory" }],
        kind: PragmaKindFlags.MultiLine,
    },
} as const;

export const enum JSDocParsingMode {
    /**
     * Always parse JSDoc comments and include them in the AST.
     *
     * This is the default if no mode is provided.
     */
    ParseAll,
    /**
     * Never parse JSDoc comments, mo matter the file type.
     */
    ParseNone,
    /**
     * Parse only JSDoc comments which are needed to provide correct type errors.
     *
     * This will always parse JSDoc in non-TS files, but only parse JSDoc comments
     * containing `@see` and `@link` in TS files.
     */
    ParseForTypeErrors,
    /**
     * Parse only JSDoc comments which are needed to provide correct type info.
     *
     * This will always parse JSDoc in non-TS files, but never in TS files.
     *
     * Note: Do not use this mode if you require accurate type errors; use {@link ParseForTypeErrors} instead.
     */
    ParseForTypeInfo,
}

/** @internal */
export type PragmaArgTypeMaybeCapture<TDesc> = TDesc extends { captureSpan: true; } ? { value: string; pos: number; end: number; } : string;

/** @internal */
export type PragmaArgTypeOptional<TDesc, TName extends string> = TDesc extends { optional: true; } ? { [K in TName]?: PragmaArgTypeMaybeCapture<TDesc>; }
    : { [K in TName]: PragmaArgTypeMaybeCapture<TDesc>; };

/** @internal */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

/** @internal */
export type ArgumentDefinitionToFieldUnion<T extends readonly PragmaArgumentSpecification<any>[]> = {
    [K in keyof T]: PragmaArgTypeOptional<T[K], T[K] extends { name: infer TName; } ? TName extends string ? TName : never : never>;
}[Extract<keyof T, number>]; // The mapped type maps over only the tuple members, but this reindex gets _all_ members - by extracting only `number` keys, we get only the tuple members

/**
 * Maps a pragma definition into the desired shape for its arguments object
 *
 * @internal
 */
export type PragmaArgumentType<KPrag extends keyof ConcretePragmaSpecs> = ConcretePragmaSpecs[KPrag] extends { args: readonly PragmaArgumentSpecification<any>[]; } ? UnionToIntersection<ArgumentDefinitionToFieldUnion<ConcretePragmaSpecs[KPrag]["args"]>>
    : never;

/** @internal */
export type ConcretePragmaSpecs = typeof commentPragmas;

/** @internal */
export type PragmaPseudoMap = { [K in keyof ConcretePragmaSpecs]: { arguments: PragmaArgumentType<K>; range: CommentRange; }; };

/** @internal */
export type PragmaPseudoMapEntry = { [K in keyof PragmaPseudoMap]: { name: K; args: PragmaPseudoMap[K]; }; }[keyof PragmaPseudoMap];

/** @internal */
export interface ReadonlyPragmaMap extends ReadonlyMap<string, PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]> {
    get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
    forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey, map: ReadonlyPragmaMap) => void): void;
}

/**
 * A strongly-typed es6 map of pragma entries, the values of which are either a single argument
 * value (if only one was found), or an array of multiple argument values if the pragma is present
 * in multiple places
 *
 * @internal
 */
export interface PragmaMap extends Map<string, PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]>, ReadonlyPragmaMap {
    set<TKey extends keyof PragmaPseudoMap>(key: TKey, value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][]): this;
    get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
    forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey, map: PragmaMap) => void): void;
}

/** @internal */
export interface CommentDirectivesMap {
    getUnusedExpectations(): CommentDirective[];
    markUsed(matchedLine: number): boolean;
}





export interface UserPreferences {
    readonly disableSuggestions?: boolean;
    readonly quotePreference?: "auto" | "double" | "single";
    /**
     * If enabled, TypeScript will search through all external modules' exports and add them to the completions list.
     * This affects lone identifier completions but not completions on the right hand side of `obj.`.
     */
    readonly includeCompletionsForModuleExports?: boolean;
    /**
     * Enables auto-import-style completions on partially-typed import statements. E.g., allows
     * `import write|` to be completed to `import { writeFile } from "fs"`.
     */
    readonly includeCompletionsForImportStatements?: boolean;
    /**
     * Allows completions to be formatted with snippet text, indicated by `CompletionItem["isSnippet"]`.
     */
    readonly includeCompletionsWithSnippetText?: boolean;
    /**
     * Unless this option is `false`, or `includeCompletionsWithInsertText` is not enabled,
     * member completion lists triggered with `.` will include entries on potentially-null and potentially-undefined
     * values, with insertion text to replace preceding `.` tokens with `?.`.
     */
    readonly includeAutomaticOptionalChainCompletions?: boolean;
    /**
     * If enabled, the completion list will include completions with invalid identifier names.
     * For those entries, The `insertText` and `replacementSpan` properties will be set to change from `.x` property access to `["x"]`.
     */
    readonly includeCompletionsWithInsertText?: boolean;
    /**
     * If enabled, completions for class members (e.g. methods and properties) will include
     * a whole declaration for the member.
     * E.g., `class A { f| }` could be completed to `class A { foo(): number {} }`, instead of
     * `class A { foo }`.
     */
    readonly includeCompletionsWithClassMemberSnippets?: boolean;
    /**
     * If enabled, object literal methods will have a method declaration completion entry in addition
     * to the regular completion entry containing just the method name.
     * E.g., `const objectLiteral: T = { f| }` could be completed to `const objectLiteral: T = { foo(): void {} }`,
     * in addition to `const objectLiteral: T = { foo }`.
     */
    readonly includeCompletionsWithObjectLiteralMethodSnippets?: boolean;
    /**
     * Indicates whether {@link CompletionEntry.labelDetails completion entry label details} are supported.
     * If not, contents of `labelDetails` may be included in the {@link CompletionEntry.name} property.
     */
    readonly useLabelDetailsInCompletionEntries?: boolean;
    readonly allowIncompleteCompletions?: boolean;
    readonly importModuleSpecifierPreference?: "shortest" | "project-relative" | "relative" | "non-relative";
    /** Determines whether we import `foo/index.ts` as "foo", "foo/index", or "foo/index.js" */
    readonly importModuleSpecifierEnding?: "auto" | "minimal" | "index" | "js";
    readonly allowTextChangesInNewFiles?: boolean;
    readonly providePrefixAndSuffixTextForRename?: boolean;
    readonly includePackageJsonAutoImports?: "auto" | "on" | "off";
    readonly provideRefactorNotApplicableReason?: boolean;
    readonly jsxAttributeCompletionStyle?: "auto" | "braces" | "none";
    readonly includeInlayParameterNameHints?: "none" | "literals" | "all";
    readonly includeInlayParameterNameHintsWhenArgumentMatchesName?: boolean;
    readonly includeInlayFunctionParameterTypeHints?: boolean;
    readonly includeInlayVariableTypeHints?: boolean;
    readonly includeInlayVariableTypeHintsWhenTypeMatchesName?: boolean;
    readonly includeInlayPropertyDeclarationTypeHints?: boolean;
    readonly includeInlayFunctionLikeReturnTypeHints?: boolean;
    readonly includeInlayEnumMemberValueHints?: boolean;
    readonly interactiveInlayHints?: boolean;
    readonly allowRenameOfImportPath?: boolean;
    readonly autoImportFileExcludePatterns?: string[];
    readonly preferTypeOnlyAutoImports?: boolean;
    /**
     * Indicates whether imports should be organized in a case-insensitive manner.
     */
    readonly organizeImportsIgnoreCase?: "auto" | boolean;
    /**
     * Indicates whether imports should be organized via an "ordinal" (binary) comparison using the numeric value
     * of their code points, or via "unicode" collation (via the
     * [Unicode Collation Algorithm](https://unicode.org/reports/tr10/#Scope)) using rules associated with the locale
     * specified in {@link organizeImportsCollationLocale}.
     *
     * Default: `"ordinal"`.
     */
    readonly organizeImportsCollation?: "ordinal" | "unicode";
    /**
     * Indicates the locale to use for "unicode" collation. If not specified, the locale `"en"` is used as an invariant
     * for the sake of consistent sorting. Use `"auto"` to use the detected UI locale.
     *
     * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
     *
     * Default: `"en"`
     */
    readonly organizeImportsLocale?: string;
    /**
     * Indicates whether numeric collation should be used for digit sequences in strings. When `true`, will collate
     * strings such that `a1z < a2z < a100z`. When `false`, will collate strings such that `a1z < a100z < a2z`.
     *
     * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
     *
     * Default: `false`
     */
    readonly organizeImportsNumericCollation?: boolean;
    /**
     * Indicates whether accents and other diacritic marks are considered unequal for the purpose of collation. When
     * `true`, characters with accents and other diacritics will be collated in the order defined by the locale specified
     * in {@link organizeImportsCollationLocale}.
     *
     * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`.
     *
     * Default: `true`
     */
    readonly organizeImportsAccentCollation?: boolean;
    /**
     * Indicates whether upper case or lower case should sort first. When `false`, the default order for the locale
     * specified in {@link organizeImportsCollationLocale} is used.
     *
     * This preference is ignored if {@link organizeImportsCollation} is not `"unicode"`. This preference is also
     * ignored if we are using case-insensitive sorting, which occurs when {@link organizeImportsIgnoreCase} is `true`,
     * or if {@link organizeImportsIgnoreCase} is `"auto"` and the auto-detected case sensitivity is determined to be
     * case-insensitive.
     *
     * Default: `false`
     */
    readonly organizeImportsCaseFirst?: "upper" | "lower" | false;
    /**
     * Indicates where named type-only imports should sort. "inline" sorts named imports without regard to if the import is
     * type-only.
     *
     * Default: `last`
     */
    readonly organizeImportsTypeOrder?: OrganizeImportsTypeOrder;
    /**
     * Indicates whether to exclude standard library and node_modules file symbols from navTo results.
     */
    readonly excludeLibrarySymbolsInNavTo?: boolean;
    readonly lazyConfiguredProjectsFromExternalProject?: boolean;
    readonly displayPartsForJSDoc?: boolean;
    readonly generateReturnInDocTemplate?: boolean;
    readonly disableLineTextInReferences?: boolean;
}

export type OrganizeImportsTypeOrder = "last" | "inline" | "first";

/** Represents a bigint literal value without requiring bigint support */
export interface PseudoBigInt {
    negative: boolean;
    base10Value: string;
}

/** @internal */
export interface Queue<T> {
    enqueue(...items: T[]): void;
    dequeue(): T;
    isEmpty(): boolean;
}







