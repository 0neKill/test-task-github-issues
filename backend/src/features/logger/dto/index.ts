import type { TypeOfActions } from '../../../__types__';

export class LogReqDTO {
   readonly id?: string;
   readonly createdAt?: string;
   readonly updatedAt?: string;
   readonly ip: string;
   readonly type: TypeOfActions;
}