//// [compareAndSetOperatorMisuse08.ts]
const example = {
    bar: (
        new (class Incr {
    
            value !: number ;
            constructor() {
                this.value = 0 ;
            }
            
        } )()
    ) ,
} ;
{
    {
        /** 
         * ambiguous, in face of ASI (Automatic Semicolon Insertion).
         * 
         */
        example
            .bar
            .value 
            __compareAndSet(...[0, 1] ) // ill-formed
        ;
    }
}







//// [compareAndSetOperatorMisuse08.js]
var example = {
    bar: (new (/** @class */ (function () {
        function Incr() {
            this.value = 0;
        }
        return Incr;
    }()))()),
};
{
    {
        /**
         * ambiguous, in face of ASI (Automatic Semicolon Insertion).
         *
         */
        example
            .bar
            .value;
        __compareAndSet.apply(void 0, [0, 1]);
    }
}
