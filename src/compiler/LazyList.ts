
import { Debug, } from "./debug";












export class AsyncLazyList<out E>
{
  private s ?: [E, AsyncLazyList<E>] | false ;
  private src: AsyncIterator<E> | null ;
  private constructor(srcArg: AsyncIterator<E> )
  {
    this.src = srcArg ;
    ;
  }

  async asyncEagerEval() : Promise<void>
  {
    this.s ??= await (async (): Promise<typeof this.s & {} > => {
      const { src, } = this ;
      this.src = null ;
      Debug.assert(src) ;

      const r = await src.next() ;
      if ((r.done ?? false) === false) {
        return [r.value, new AsyncLazyList<E>(src) ] ;
      } else {
        return false ;
      }
    })() ;
  }

  async asyncGetOrElse<const E1>(fallbackVal: E1) : Promise<E | E1>
  {
    await this.asyncEagerEval() ;
    return (this.s) ? this.s[0] : fallbackVal ;
  }

  async* [Symbol.asyncIterator] (): AsyncGenerator<E, void, void> {
    LOOP :
    for (let l: AsyncLazyList<E> = this ; ; ) {
      await l.asyncEagerEval() ;
      const res = l.s ;
      if (res) {
        ;
        yield res[0] ;
        l = res[1] ;
        continue LOOP ;
      } else {
        break LOOP ;
      }
    }
  }

  static fromAsyncIterable<E>(srcArg: AsyncIterable<E> )
  : AsyncLazyList<E>
  {
    return new AsyncLazyList(srcArg[Symbol.asyncIterator]() ) ;
  }

  static fromIterable<E>(srcArg: Iterable<E> )
  : AsyncLazyList<E>
  {
    return this.fromAsyncIterable((async function* () {
      for (const v of srcArg ) {
        yield v ;
      }
    } )() ) ;
  }

  //
}













