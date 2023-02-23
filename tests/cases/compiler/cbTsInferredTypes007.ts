// @target: ES2016
// @inferredTypeSpecificity: medium

// with the ITS flag being set to `medium` or `much`,
// a type-omitted const initialised with bare query of existing variable `my.bar` shall be typed `valueof my.bar`










/**   
 * the implementation demonstrates.
 * 
 * note: `felt` as a parameter would effectively be non-const, so we can't do much
 * 
 */
function stringMeInFunction11B(felt : string): string {
    const feltOne = felt ;
    type FeltOneValue = typeof feltOne ;
    const feltTwo = feltOne ;
    const feltTwoStrong1D: valueof feltOne = feltOne ;
    const feltTwoStrong1C: typeof feltTwo = feltOne ;
    // type FeltTwoValue = typeof feltTwo ;
    // const feltThree = feltOne ;
    // const feltFour = feltThree ;
    // const feltFive = feltFour ;
    // const feltFiveAgain = feltFive ;
    return feltTwo ;
}

{
    const m1B = class {} ;
    const m1C = m1B ;
    const m1D: typeof m1B = m1B ;
}

{
    // const string1 = "hello" ;
    
    // const stringStrong11: "hello" | "hi" = "hi" ;
        
    // const stringStrong12: typeof stringStrong11 = stringStrong11 ;
        
    const stringHello1 = "hello" ;
    
    const stringHelloOrHi11: "hello" | "hi" = "hi" ;
        
    /** 
     * the RHS happens to conform to singleton type (specifically, a constant type), so
     * the resulting type shall not use the `typeof` notation but instead the contant type directly.
     */
    const stringMeIn11A = stringHello1 ;
    
    /** 
     * the RHS do not conform to singleton type, so
     * the resulting type shall keep using the `typeof` nttn.
     */
    const stringMeIn11B = stringHelloOrHi11 ;
    
    /** 
     * use the explicitly-given type instead.
     */
    const stringMeIn11C: string = stringHelloOrHi11 ;
    
    /** 
     * use the explicitly-given type instead.
     */
    const stringMeIn11D: "hello" | "hi" = stringHelloOrHi11 ;
    
}






{
    const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;
    
    /** 
     * the RHS happens to conform to singleton type (specifically, a constant type), so
     * the resulting type shall not use the `typeof` notation but instead the contant type directly.
     */
    const minorVersionsAgainAgain = minorVersions ;
    
    const minorVersionsAgainAgainEven: typeof minorVersions = minorVersions ;
    
}
{
    /** 
     * like the above one, but with the last one widened
     */
    const minorVersions: [0, 1, 2, number, ] = [0, 1, 2, 3, ] ;
    
    /** 
     * this time
     * the resulting type shall remain written `typeof` type since 
     * the referend does not have singleton-type guarantee
     */
    const minorVersionsAgainAgain = minorVersions ;
    
    const minorVersionsAgainAgainEven: typeof minorVersions = minorVersions ;
    
}




