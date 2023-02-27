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
 *  - editors wight receive type-mismatch complaints for `fiveAndSeven` being inferred opaque `number[]` ;
 *    just ignore it because this unit has `@inferredTypeSpecificity: medium` switch at the top (so the var would infer specific `[5, 7]` instead)
 */









// note the `@inferredTypeSpecificity: medium` switch at the beginning of this file!
export namespace VNT7 {

    export const EPSILON = Number.EPSILON ;
    export const EULCNST = 2.718181 ; // will have constant-type. todo the actual value.

    export const fiveAndThenSeven = (
        [5, 7]
    ) ;
    // important :
    // - editors wight receive type-mismatch complaints for `fiveAndSeven` being inferred opaque `number[]` ;
    //   just ignore it because this unit has `@inferredTypeSpecificity: medium` at the top (so the var 'd infer specific `[5, 7]` instead)
    // - the `[number, number]` ascription is necessary in this case, since,
    //   due to `@inferredTypeSpecificity: medium` above, 
    //   when a type happens to be monomorphic/singleton, the typechecker would inline the type
    export const somePairOfTwoNumbersC: [number, number] = (
        fiveAndThenSeven
    ) ;
    // without explicit ascription like that, would be inlined if u're lucky
    export const somePairOfTwoNumbersD = (
        fiveAndThenSeven
    ) ;

    export const anotherArray = (
        // the `.files` output shall retain the `valueof` form
        somePairOfTwoNumbersC
    ) ;
    export const anotherArrayAgain = (
        // further alias ;
        // since the (inferred) type is (already) a `valueof` type, this should not create another distinct `valueof` type.
        anotherArray
    ) ;

}
{
    const randomPairOfTwoNumbers1 = (
        VNT7.somePairOfTwoNumbersC
    ) ;
    {
        const num1 = (
            randomPairOfTwoNumbers1[0]
        ) ;
    }
}
{
    const randomPairOfTwoNumbers1 = (
        VNT7.fiveAndThenSeven
    ) ;
    {
        const num1 = (
            randomPairOfTwoNumbers1[0]
        ) ;
    }
}







