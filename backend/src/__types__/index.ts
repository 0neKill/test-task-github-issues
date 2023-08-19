import type { Express, Router } from 'express';
import type { Request, Response } from 'express';

export abstract class ModuleClass {
   abstract run(): RouterType;
}

export interface RoutesTypes {
   create(): RouterType;
}

export type Modify<Type, Keys> = Omit<Type, keyof Keys> & Keys
export type RequestType<Key extends keyof Request, Types> = Modify<Request, { [key in Key]: Types }>;
export type ResponseType = Response;
export type ExpressType = Express;
export type RouterType = Router;
export type ModuleType = typeof ModuleClass;
export type TypeOfActions = 'get_issues' | 'get_issue' | 'search_issues';

export type ResponseDate<T> = {
   status: number,
   message: string,
   data?: T
}
