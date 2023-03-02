//// [cbTsInferredTypesInLazy004.ts]
const string1 = "hello" ;

const stringStrong11: "hello" | "hi" = "hi" ;
    
const stringStrong12: typeof stringStrong11 = stringStrong11 ;
    
const stringMeIn11A = stringStrong11 ;






const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;

const minorVersionsAgainAgain = minorVersions ;

const minorVersionsAgainAgainEven: typeof minorVersions = minorVersions ;







//// [cbTsInferredTypesInLazy004.js]
var string1 = "hello";
var stringStrong11 = "hi";
var stringStrong12 = stringStrong11;
var stringMeIn11A = stringStrong11;
var minorVersions = [0, 1, 2, 3,];
var minorVersionsAgainAgain = minorVersions;
var minorVersionsAgainAgainEven = minorVersions;
