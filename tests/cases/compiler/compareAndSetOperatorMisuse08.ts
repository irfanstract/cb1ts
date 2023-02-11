







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





