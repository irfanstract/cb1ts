







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
     * shall raise syntax error exactly "__compareAndSet cannot be tailed by anything other than [...]"
     */
    {
        example.value __compareAndSet console.info( ) ;
    }
}





