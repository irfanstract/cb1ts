







const example = (
    new (class Incr {

        value !: number ;
        constructor() {
            this.value = 0 ;
        }
        
    } )()
) ;
{
    /**  
     * this shall 
     * fail the grammar/parsing step 
     * or, if not, 
     * fail type-checking with exactly "expected 2 arguments, but got 0" or "[] is not aasignable to [T, T]"
     * 
     */
    {
        example.value __compareAndSet() ;
    }
}





