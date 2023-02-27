// @strict: true
// @noImplicitAny: true
// @noUncheckedIndexedAccess: true
// @inferredTypeSpecificity: medium
// @lib: es2015,es2016,es2017,dom,scripthost




/*
 * important :
 *  - make sure the editor supports the feats used here 
 *     - the `@inferredTypeSpecificity` setting 
 *     - the `valueof` syntax
 *  - editors wight receive type-mismatch complaints for `myOwnNamespace.EPSILON` being inferred opaque `number` ;
 *    just ignore it because this unit has `@inferredTypeSpecificity: medium` switch at the top (so the var would infer specific `(valueof Number)["EPSILON"]` instead)
 */









export namespace VTCB {
    {
        // type KeyOfNumberConstructor100 = (keyof (valueof Number)) & {} ;
        // type KeyOfNumberConstructor101 = (keyof (typeof Number)) & {} ;
        // type KeyOfNumberConstructor110 = (keyof NumberConstructor) & {} ;
        // type NumECrazy = (valueof Number)["EPSILON"];
    }
    
    
    export namespace myOwnNamespace {
        export const EPSILON = Number.EPSILON ;
        export const EULCNST = 2.718181 ; // will have constant-type. todo the actual value.
    }

    
    type MyOwnEpsilon = (
        valueof myOwnNamespace.EPSILON
    ) ;
    type MyOwnEulersConstant = (
        valueof myOwnNamespace.EULCNST
    ) ;

    
    const goodEpsilon = (
        myOwnNamespace.EPSILON satisfies number
    ) ;
    const goodNumber = (
        myOwnNamespace.EULCNST satisfies number
    ) ;


    {
        const goodEpsilonAgain1 = (
            goodEpsilon satisfies (valueof goodEpsilon)
        ) ;
    }
    {
        const goodEpsilonEh1 = (
            myOwnNamespace.EPSILON satisfies (valueof goodEpsilon)
        ) ;
    }


    const arrayOfOneEpsilon = [
        myOwnNamespace.EPSILON ,
    ] ;
    const arrayOfOneEulersConstant = [
        myOwnNamespace.EULCNST ,
    ] ;


}






