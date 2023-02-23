// @strict: true
// @noImplicitAny: true
// @noUncheckedIndexedAccess: true
// @lib: es2015,es2016,es2017,dom,scripthost






{
    type NumberUtilKey = keyof NumberConstructor ;
    // type TypeOfFCP = typeof Function.prototype ;
    type NumberConstructor1 = typeof Number ;
    type NumberUtilKey1 = { [k in keyof NumberConstructor]-?: [k] ; }[keyof NumberConstructor][0] ;
    type TypeOfDenormal = typeof Number.EPSILON ;
    type MyNaN = valueof Number.NaN ;
    // type EulersConstant = valueof Number.E ;
    type NodeUtil1 = typeof Node ;
    type TypeOfEN = typeof Node.ELEMENT_NODE ;
}






