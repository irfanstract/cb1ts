// @inferredTypeSpecificity: restricted










const string1 = "hello" ;

const stringStrong11: "hello" | "hi" = "hi" ;
    
const stringStrong12: typeof stringStrong11 = stringStrong11 ;
    
const stringMeIn11A = stringStrong11 ;






const minorVersions: [0, 1, 2, 3, ] = [0, 1, 2, 3, ] ;

const minorVersionsAgainAgain = minorVersions ;

const minorVersionsAgainAgainEven: typeof minorVersions = minorVersions ;





