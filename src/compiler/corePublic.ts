// WARNING: The script `configurePrerelease.ts` uses a regexp to parse out these values.
// If changing the text in this section, be sure to test `configurePrerelease` too.
export const versionMajorMinor = "5.5";
// The following is baselined as a literal template type without intervention
/** The version of the TypeScript compiler release */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const version: string = `${versionMajorMinor}.0-dev`;

/**
 * Type of objects whose values are all of the same type.
 * The `in` and `for-in` operators can *not* be safely used,
 * since `Object.prototype` may be modified by outside code.
 */
export interface MapLike<T> {
    [index: string]: T;
}

export interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
    " __sortedArrayBrand": any;
}

export interface SortedArray<T> extends Array<T> {
    " __sortedArrayBrand": any;
}

/**
 * Common read methods for ES6 Map/Set.
 *
 * @internal
 */
export interface ReadonlyCollection<K> {
    readonly size: number;
    has(key: K): boolean;
    keys(): IterableIterator<K>;
}

/**
 * Common write methods for ES6 Map/Set.
 *
 * @internal
 */
export interface Collection<K> extends ReadonlyCollection<K> {
    delete(key: K): boolean;
    clear(): void;
}

/** @internal */
export type EqualityComparer<T> = (a: T, b: T) => boolean;

/** @internal */
export type Comparer<T> = (a: T, b: T) => Comparison;

/** @internal */
export const enum Comparison {
    LessThan = -1,
    EqualTo = 0,
    GreaterThan = 1,
}

export type Extend<Base extends {}, refnm extends Partial<Base> > = (
    Base & refnm
) ;

export type RecordEntry<D extends {}> = RecordReturnValue<{ [k in keyof D] : [k, D[k]] ; }> ;

export type RecordReturnValue<D extends {}> = D[keyof D] ;

export type RequiredValuedKeyof<D extends {}> = (
    (keyof D ) extends infer T ? (
        T extends infer T1 ?
        (
            D[T1 & (keyof D)] extends Required<D>[T1 & (keyof D)] ?
            T1 : never
        ) : never
    ) : never
) ;

export type PickAlt<D extends {}, K extends {}> = (
    Pick<D, K & (keyof D) >
) ;

export type PickRequired<D extends {}> = (
    Pick<D, RequiredValuedKeyof<D> & (keyof D) >
) ;

export type RecordTellWhichRequired<D extends {}> = (
    { [k in keyof D] -?: k extends RequiredValuedKeyof<D> ? true : false ; }
) ;

export type RecordDebugRefl<D extends {}> = { [k in keyof D]: Pick<D, k> ; } ;

((e: RecordTellWhichRequired<(
    (
        import("./types").Program
    )
)> ) => e.fileExists ) ;

((e: RecordEntry<(
    (
        import("./types").Program
    )
)> ) => e ) ;

// export type PickRequired<D extends {}> = { [k in keyof D ]: D[k] } ;

export type CommonAsDict<
    //
    T1 extends {},
    T2 extends {},
    T3 extends {} = {} ,
    T4 extends {} = {} ,
    T5 extends {} = {} ,
    T6 extends {} = {} ,
> = (
    { [k in (
        | (keyof T1)
        | (keyof T2)
        | (keyof T3)
        | (keyof T4)
        | (keyof T5)
        | (keyof T6)
    )] ?: (
        never
        | (k extends keyof T1 ? T1[k] : never )
        | (k extends keyof T2 ? T2[k] : never )
        | (k extends keyof T3 ? T3[k] : never )
        | (k extends keyof T4 ? T4[k] : never )
        | (k extends keyof T5 ? T5[k] : never )
        | (k extends keyof T6 ? T6[k] : never )
    ) }
) ;

((e: CommonAsDict<Function & ((x: Blob ) => Blob ), Map<string, URL> , AbortSignal, AbortController > ) => e.call ) ;

export type ObjectAssign1<A extends {}, T1 extends {} > = (
    { [key in (
        | (keyof T1)
        | (keyof A)
    ) ] ?: (
        key extends PickRequired<T1> ?
        T1[key & (keyof T1) ]
        :
        (T1[key & (keyof T1) ] | A[key & (keyof A) ] )
    ) ; }
) ;

export type ObjectAssign2<A extends {}, T1 extends {}, T2 extends T1 > = (
    ObjectAssign1<ObjectAssign1<A, T1>, T2 >
) ;

((e: (
    ObjectAssign1<
    { a: 3, d: 3, c: 3, },
    { d?: 5, e: 5, c: 5, }
    >
) ) => [e.c, e.d] ) ;
