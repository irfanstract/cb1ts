//// [compareAndSetOperatorMisuse04.ts]
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







//// [compareAndSetOperatorMisuse04.js]
var example = (new (/** @class */ (function () {
    function Incr() {
        this.value = 0;
    }
    return Incr;
}()))());
{
    /**
     * shall raise syntax error exactly "__compareAndSet cannot be tailed by anything other than [...]"
     */
    {
        ;
        console.info();
    }
}
