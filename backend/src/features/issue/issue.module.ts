import { Router } from 'express';

import { ModuleClass } from '../../__types__';
import { IssueRoutes } from './routes';
import { IssueControllers } from './controllers';
import { IssueRepositories } from './repositories';
import { IssueService } from './services';

const routes = Router();

export class IssueModule extends ModuleClass {
   run() {
      return new IssueRoutes(routes,
         new IssueControllers(
            new IssueService(
               new IssueRepositories(process.env.GITHUB_API, process.env.GITHUB_API_KEY),
            ),
         ),
      ).create();
   }

}