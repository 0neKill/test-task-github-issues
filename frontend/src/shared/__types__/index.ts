export type NullOrType<T> =  T | null;

export type Response<T> = {
   message:string,
   data?:T
}