//// [compareAndSetOperatorMisuse05.ts]
{
    /**  
     * this shall raise syntax error exactly "__compareAndSet requires two-val args-list and cannot be followed by assignment operators".
     */
    {
        example.value __compareAndSet += "5" ;
    }
}







//// [compareAndSetOperatorMisuse05.js]
{
    /**
     * this shall raise syntax error exactly "__compareAndSet requires two-val args-list and cannot be followed by assignment operators".
     */
    {
         += "5";
    }
}
