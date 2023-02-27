// @strict: true
// @noImplicitAny: true
// @noUncheckedIndexedAccess: true
// @inferredTypeSpecificity: medium
// @lib: es2015,es2016,es2017,dom,scripthost






export namespace VTCB {
    {
        class Stru<out A extends { me: string ; }> {
            constructor(public chap: A["me"]) {
            }
            goneGe(v: A["me"]): void {
                (
                    ([v] satisfies string[])
                    .forEach(Object)
                ) ;
            }
            gottenBee(v: string): void {
                this.goneGe(v) ;
            }
        }
        type StruSt = Stru<{ me: "st" ; }> ;
    }
}






