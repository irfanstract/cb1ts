







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
     * compile and run as expected
     * 
     */
    {
        example.value __compareAndSet(...[0, 1] ) ;
        example.value __compareAndSet(...[1, 2] ) ;
    }
}





