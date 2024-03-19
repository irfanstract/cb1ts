






// TODO
export interface MapLike<T1, T2 = any, T3 = any > extends MaplikeSpecificIndexSignature<any, T1>
{}

export type MaplikeSpecificIndexSignature<K extends (string | number) = any, V = any> = { [k in K]: V }





