







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
     * shall all complain about missing argument-list
     */
    {
        example.value __compareAndSet ;
        // example.value __compareAndSet ;
        // example.value __compareAndSet ;
    }
}





