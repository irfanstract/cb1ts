







const example = (
    new (class Incr {

        value !: number ;
        constructor() {
            this.value = 0 ;
        }
        
        increment(): void {
            const {
                value: existingValue ,
            } = this ;
            this.value __compareAndSet(existingValue, existingValue + 1 );
        }

    } )()
) ;
/**  
 * shall compile and run as expected
 */
{
    const {
        value: val0,
    } = example ;
    example.increment() ;
    example.increment() ;
    const {
        value: val2,
    } = example ;
    // console["info"]({ value: example.value , }) ;
    if (val0 + 2 === val2 ) {
    } else {
        throw TypeError(`failed to ensure 'val0 + 2 === val2' `) ;
    }
}





