// @strict: true
// @noImplicitAny: true
// @noUncheckedIndexedAccess: true
// @inferredTypeSpecificity: medium
// @lib: es2015,es2016,es2017,dom,scripthost






export namespace VTCB {

    
    export namespace myOwnNamespace {
        export const EPSILON = Number.EPSILON ;
        export const EULCNST = 2.718181 ; // will have constant-type. todo the actual value.
    }

    
    const goodEpsilon = (
        myOwnNamespace.EPSILON satisfies number
    ) ;
    const goodNumber = (
        myOwnNamespace.EULCNST satisfies number
    ) ;


    {
        // no mismatch expected - reflective/reflexive usage
        const goodEpsilonAgain1 = (
            goodEpsilon satisfies (valueof goodEpsilon)
        ) ;
    }
    {
        // no mismatch expected - persistence
        const goodEpsilonEh1 = (
            myOwnNamespace.EPSILON satisfies (valueof goodEpsilon)
        ) ;
    }
    {
        // some mismatch expected - opaquity
        const goodEpsilonPih1 = (
            Number.MAX_SAFE_INTEGER satisfies (valueof goodEpsilon)
        ) ;
    }



}






