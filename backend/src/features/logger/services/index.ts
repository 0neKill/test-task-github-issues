import { ResponseFactory } from '../../../core/helper/response';

import type { LoggerRepositories } from '../repositories';
import type { GetLogsTypesService, LogResponseTypes, CreateLogTypeService } from '../__types__';

export class LoggerService {
   public static instance: LoggerService;
   private readonly _loggerRepositories: LoggerRepositories;

   constructor(loggerRepositories: LoggerRepositories) {
      if (!LoggerService.instance) {
         this._loggerRepositories = loggerRepositories;
         LoggerService.instance = this;
      }
   }

   createLog: CreateLogTypeService = async ({ ip, type }) => {
      try {
         const log = await this._loggerRepositories.create({ ip, type });
         return ResponseFactory.create<LogResponseTypes>(200, 'Execute response', log);
      } catch (e: any) {
         return ResponseFactory.create(e.response?.status  ?? 505, e.response?.data?.errors ?? 'No connection with github');
      }
   };

   getLogs: GetLogsTypesService = async () => {
      try {
         const logs = await this._loggerRepositories.findAll();
         return ResponseFactory.create<LogResponseTypes[]>(200, 'Execute response', logs);
      } catch (e: any) {
         return ResponseFactory.create(e.response?.status ?? 505, e.response?.data?.errors ?? 'No connection with github');
      }
   };


}



