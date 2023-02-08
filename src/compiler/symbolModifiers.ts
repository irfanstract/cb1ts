















export const enum ModifierFlags {
    None =               0,
    Export =             1 << 0,  // Declarations
    Ambient =            1 << 1,  // Declarations
    Public =             1 << 2,  // Property/Method
    Private =            1 << 3,  // Property/Method
    Protected =          1 << 4,  // Property/Method
    Static =             1 << 5,  // Property/Method
    Readonly =           1 << 6,  // Property/Method
    Accessor =           1 << 7,  // Property
    Abstract =           1 << 8,  // Class/Method/ConstructSignature
    Async =              1 << 9,  // Property/Method/Function
    Default =            1 << 10, // Function/Class (export default declaration)
    Const =              1 << 11, // Const enum
    HasComputedJSDocModifiers = 1 << 12, // Indicates the computed modifier flags include modifiers from JSDoc.

    Deprecated =         1 << 13, // Deprecated tag.
    Override =           1 << 14, // Override method.
    In =                 1 << 15, // Contravariance modifier
    Out =                1 << 16, // Covariance modifier
    Decorator =          1 << 17, // Contains a decorator.
    HasComputedFlags =   1 << 29, // Modifier flags have been computed

    AccessibilityModifier = Public | Private | Protected,
    // Accessibility modifiers and 'readonly' can be attached to a parameter in a constructor to make it a property.
    ParameterPropertyModifier = AccessibilityModifier | Readonly | Override,
    NonPublicAccessibilityModifier = Private | Protected,

    TypeScriptModifier = Ambient | Public | Private | Protected | Readonly | Abstract | Const | Override | In | Out,
    ExportDefault = Export | Default,
    All = Export | Ambient | Public | Private | Protected | Static | Readonly | Abstract | Accessor | Async | Default | Const | Deprecated | Override | In | Out | Decorator,
    Modifier = All & ~Decorator
}















