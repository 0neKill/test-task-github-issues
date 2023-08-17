import { RequestType, ResponseType } from '../../../__types__';
import type { NextFunction, Request } from 'express';
import { object, string, number } from 'yup';


class CommonValidate {
   public static checkValidateDto = (fieldRequest: 'query' | 'params', fieldForSchema: 'number' | 'page') =>
      async (request: Request, response: ResponseType, next: NextFunction) => {
         try {
            let userSchema = object({
               [fieldForSchema]: number().required().positive().integer(),
               userName: string().required(),
               repoName: string().required(),
            });
            await userSchema.validate(request[fieldRequest]);
            next();
         } catch (e: any) {
            return response.status(400).json({ message: e.errors });
         }
      };
}

export class IssuesManyReqDTO {
   readonly page: number;
   readonly userName: string;
   readonly repoName: string;

   public static checkValidateDto = CommonValidate.checkValidateDto('query', 'page');

}

export class IssueReqDTO {
   readonly number: number;
   readonly userName: string;
   readonly repoName: string;

   public static checkValidateDto = CommonValidate.checkValidateDto('params', 'number');
}