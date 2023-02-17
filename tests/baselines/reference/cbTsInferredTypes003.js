//// [cbTsInferredTypes003.ts]
const string1 = "hello" ;

const stringPlex1A = ("hello" ) ;
const stringPlex1B = (("hello") ) ;
const stringPlex1C = ((("hello") ) ) ;
    


const stringStrong1: "hello" = "hello" ;
const stringStrongPlex1B: "hello" = ( ("hello" ) ) ;
const stringStrongPlex1C: "hello" = ((("hello" ) ) ) ;

const stringStrong11: "hello" | "hi" = "hi" ;
const stringStrongPlex1D: "hello" | "hi" = ("hi" ) ;
const stringStrongPlex1E: "hello" | "hi" = (("hi" ) ) ;
const stringStrongPlex1F: "hello" | "hi" = ((("hi" ) ) ) ;
    
// const stringMeIn11A = stringStrong11 ;





const majorVersionExplicit: 3 | 4 | 5 = 3 ;

const majorVersion = 3 ;





// const minorVersionsWeak = [0, 1, 2, 3, ] ;

// const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;

// const minorVersionsAgainAgain = minorVersions ;

// const minorVersionsAgain2 = [0, 1, 2, 3, ] satisfies [unknown, ...unknown[] ] ;

// const minorVersionsAgain3 = [0, 1, 2, 3, ] satisfies [0, unknown, 2, ...unknown[] ] ;






// const desc = {
//     type: "color",
//     value: "blue",
//     specificity: 3,
// } ;






const value11 = 5 + majorVersion ;
const string12 = `version ${ majorVersion }` ;






// // type-mismatch
// const mf1 : 3 | 4 | 5 = 6 ;







//// [cbTsInferredTypes003.js]
var string1 = "hello";
var stringPlex1A = ("hello");
var stringPlex1B = (("hello"));
var stringPlex1C = ((("hello")));
var stringStrong1 = "hello";
var stringStrongPlex1B = (("hello"));
var stringStrongPlex1C = ((("hello")));
var stringStrong11 = "hi";
var stringStrongPlex1D = ("hi");
var stringStrongPlex1E = (("hi"));
var stringStrongPlex1F = ((("hi")));
// const stringMeIn11A = stringStrong11 ;
var majorVersionExplicit = 3;
var majorVersion = 3;
// const minorVersionsWeak = [0, 1, 2, 3, ] ;
// const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;
// const minorVersionsAgainAgain = minorVersions ;
// const minorVersionsAgain2 = [0, 1, 2, 3, ] satisfies [unknown, ...unknown[] ] ;
// const minorVersionsAgain3 = [0, 1, 2, 3, ] satisfies [0, unknown, 2, ...unknown[] ] ;
// const desc = {
//     type: "color",
//     value: "blue",
//     specificity: 3,
// } ;
var value11 = 5 + majorVersion;
var string12 = "version ".concat(majorVersion);
// // type-mismatch
// const mf1 : 3 | 4 | 5 = 6 ;
