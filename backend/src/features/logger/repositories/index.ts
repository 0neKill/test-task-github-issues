import { LogEntity } from '../entity';

import type { CreateTypesRepositories, FindAllTypesRepositories } from '../__types__';

export class LoggerRepositories {
   create: CreateTypesRepositories = async ({ type, ip }) => {
      const log = new LogEntity({ type, ip });
      return await log.save();
   };

   findAll: FindAllTypesRepositories = async () => {
      return await LogEntity.find({}).exec();
   };

}