







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
     * shall compile and run without raising any exception (Error)
     */
    {
        example.value __compareAndSet(0, 1) ;
        example.value __compareAndSet(0, 1) ;
        example.value __compareAndSet(0, 1) ;
    }
}





