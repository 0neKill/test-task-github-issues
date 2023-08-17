import { RequestType, ResponseType } from '../../../__types__';

import type { LoggerService } from '../services';

export class LoggerController {
   private readonly _loggerService: LoggerService;

   constructor(issueService: LoggerService) {
      this.getLogs = this.getLogs.bind(this);
      this._loggerService = issueService;
   }

   async getLogs(_: RequestType<'query', unknown>, response: ResponseType) {
      const { status, ...data } = await this._loggerService.getLogs();
      return response.status(status).json(data);
   };


}