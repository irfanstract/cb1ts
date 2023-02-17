//// [cbTsInferredTypes002.ts]
const string1 = "hello" ;
    
const majorVersion = 3 ;

const minorVersions = [0, 1, 2, 3, ] ;

const minorVersionsAgainAgain = minorVersions ;

const minorVersionsAgain2 = [0, 1, 2, 3, ] satisfies [unknown, ...unknown[] ] ;

const minorVersionsAgain3 = [0, 1, 2, 3, ] satisfies [0, unknown, 2, ...unknown[] ] ;

const desc = {
    type: "color",
    value: "blue",
    specificity: 3,
} ;
const desc2 = {
    type: "color",
    value: "blue",
    specificity: 3,
} satisfies {
    type: "color",
    value: "blue" | "red" | "yellow" | "green",
    specificity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ,
} ;

const value11 = 5 + majorVersion ;
const string12 = `version ${ majorVersion }` ;





//// [cbTsInferredTypes002.js]
var string1 = "hello";
var majorVersion = 3;
var minorVersions = [0, 1, 2, 3,];
var minorVersionsAgainAgain = minorVersions;
var minorVersionsAgain2 = [0, 1, 2, 3,];
var minorVersionsAgain3 = [0, 1, 2, 3,];
var desc = {
    type: "color",
    value: "blue",
    specificity: 3,
};
var desc2 = {
    type: "color",
    value: "blue",
    specificity: 3,
};
var value11 = 5 + majorVersion;
var string12 = "version ".concat(majorVersion);
