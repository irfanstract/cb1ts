// @inferredTypeSpecificity: medium

// with the ITS flag being set to `medium` or `much`,
// a type-omitted const initialised with bare query of existing variable `my.bar` shall be typed `valueof my.bar`










const string1 = "hello" ;

/** 
 * the RHS happens to conform to singleton type (specifically, a constant type), so
 * the resulting type shall not use the `typeof` notation but instead the contant type directly.
 */
const stringMeIn11A = string1 ;






const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;

/** 
 * the RHS happens to conform to singleton type (specifically, a constant type), so
 * the resulting type shall not use the `typeof` notation but instead the contant type directly.
 */
const minorVersionsAgainAgain = minorVersions ;

const minorVersionsAgainAgainEven: typeof minorVersions = minorVersions ;

/** 
 * the RHS happens to conform to singleton type (specifically, a constant type), so
 * the resulting type shall not use the `typeof` notation but instead the contant type directly.
 */
const minorVersionsAgainAgainAgain = minorVersionsAgainAgain ;

// const nonConstTupleAgain = [Math.random(), 3, Math.random(), ] ;





