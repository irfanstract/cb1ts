// @strict: true
// @noImplicitAny: true
// @noUncheckedIndexedAccess: true
// @inferredTypeSpecificity: medium
// @lib: es2015,es2016,es2017,dom,scripthost






export namespace VTCB {
    {
        class Stru<out A extends { me: string ; }> {
            constructor(public chap: A["me"]) {
            }
            goneGe(v: A["me"]): void {
                (
                    ([v] satisfies string[])
                    .forEach(Object)
                ) ;
            }
            gottenBee(v: string): void {
                this.goneGe(v) ;
            }
        }
        type StruSt = Stru<{ me: "st" ; }> ;
    }
    {
        type KeyOfNumberConstructor100 = (keyof (valueof Number)) & {} ;
        type KeyOfNumberConstructor101 = (keyof (typeof Number)) & {} ;
        type KeyOfNumberConstructor110 = (keyof NumberConstructor) & {} ;
        type NumECrazy = (valueof Number)["EPSILON"];
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
    {
        // type mismatch
        const goodEpsilonPih1 = (
            Number.MAX_SAFE_INTEGER satisfies (valueof goodEpsilon)
        ) ;
    }
    const goodNumber = (
        myOwnNamespace.EULCNST satisfies number
    ) ;
    const arrayOfOneEpsilon = [
        myOwnNamespace.EPSILON ,
    ] ;
    const arrayOfOneEulersConstant = [
        myOwnNamespace.EULCNST ,
    ] ;
}






