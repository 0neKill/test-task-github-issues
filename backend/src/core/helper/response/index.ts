import type { ResponseDate } from '../../../__types__';

export class ResponseFactory {
   static create<T>(status: number, message: string, data?: T): ResponseDate<T> {
      return { status, message, data };
   }
}