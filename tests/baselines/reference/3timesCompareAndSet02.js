//// [3timesCompareAndSet02.ts]
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







//// [3timesCompareAndSet02.js]
var example = (new (/** @class */ (function () {
    function Incr() {
        this.value = 0;
    }
    return Incr;
}()))());
{
    /**
     * shall all complain about missing argument-list
     */
    {
        ;
        // example.value __compareAndSet ;
        // example.value __compareAndSet ;
    }
}
