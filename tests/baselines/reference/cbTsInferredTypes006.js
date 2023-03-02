//// [cbTsInferredTypes006.ts]
// 

// deliberately not setting `inferredTypeSpecificity` in this case






{
    const string1 = "hello" ;
    
    const stringStrong11: "hello" | "hi" = "hi" ;
        
}
{
    let string1 = "hello" ;
    
    let stringStrong11: "hello" | "hi" = "hi" ;
        
}

















//// [cbTsInferredTypes006.js]
// 
// deliberately not setting `inferredTypeSpecificity` in this case
{
    var string1 = "hello";
    var stringStrong11 = "hi";
}
{
    var string1 = "hello";
    var stringStrong11 = "hi";
}
