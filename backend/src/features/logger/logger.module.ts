import { Router } from 'express';
import { ModuleClass } from '../../__types__';
import { LoggerRoutes } from './routes';
import { LoggerController } from './controllers';
import { LoggerService } from './services';
import { LoggerRepositories } from './repositories';

const routes = Router();

export class LoggerModule extends ModuleClass {
   run() {
      return new LoggerRoutes(routes,
         new LoggerController(
            new LoggerService(
               new LoggerRepositories(),
            ),
         ),
      ).create();
   }

}