









































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
    AnyOrUnknown = Any | Unknown,
    /** @internal */
    Nullable = Undefined | Null,
    Literal = StringLiteral | NumberLiteral | BigIntLiteral | BooleanLiteral,
    Unit = Literal | UniqueESSymbol | Nullable,
    StringOrNumberLiteral = StringLiteral | NumberLiteral,
    /** @internal */
    StringOrNumberLiteralOrUnique = StringLiteral | NumberLiteral | UniqueESSymbol,
    /** @internal */
    DefinitelyFalsy = StringLiteral | NumberLiteral | BigIntLiteral | BooleanLiteral | Void | Undefined | Null,
    PossiblyFalsy = DefinitelyFalsy | String | Number | BigInt | Boolean,
    /** @internal */
    Intrinsic = Any | Unknown | String | Number | BigInt | Boolean | BooleanLiteral | ESSymbol | Void | Undefined | Null | Never | NonPrimitive,
    /** @internal */
    Primitive = String | Number | BigInt | Boolean | Enum | EnumLiteral | ESSymbol | Void | Undefined | Null | Literal | UniqueESSymbol,
    StringLike = String | StringLiteral | TemplateLiteral | StringMapping,
    NumberLike = Number | NumberLiteral | Enum,
    BigIntLike = BigInt | BigIntLiteral,
    BooleanLike = Boolean | BooleanLiteral,
    EnumLike = Enum | EnumLiteral,
    ESSymbolLike = ESSymbol | UniqueESSymbol,
    VoidLike = Void | Undefined,
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
    IncludesMask = Any | Unknown | Primitive | Never | Object | Union | Intersection | NonPrimitive | TemplateLiteral,
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
    NotPrimitiveUnion = Any | Unknown | Enum | Void | Never | Object | Intersection | IncludesInstantiable,
}




// Types included in TypeFlags.ObjectFlagsType have an objectFlags property. Some ObjectFlags
// are specific to certain types and reuse the same bit position. Those ObjectFlags require a check
// for a certain TypeFlags value to determine their meaning.
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
}




/** @internal */
export const enum MemberOverrideStatus {
    Ok,
    NeedsOverride,
    HasInvalidOverride
}

/** @internal */
export const enum UnionReduction {
    None = 0,
    Literal,
    Subtype,
}

/** @internal */
export const enum ContextFlags {
    None           = 0,
    Signature      = 1 << 0, // Obtaining contextual signature
    NoConstraints  = 1 << 1, // Don't obtain type variable constraints
    Completions    = 1 << 2, // Ignore inference to current node and parent nodes out to the containing call for completions
    SkipBindingPatterns = 1 << 3, // Ignore contextual types applied by binding patterns
}




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









































