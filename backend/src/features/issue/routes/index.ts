import { Application } from 'express';


import { Routes } from './enty-point';
import { IssueControllers } from '../controllers';
import { IssueReqDTO, IssuesManyReqDTO } from '../dto';
import { loggingOfActions } from '../../../middlewares/logging';

import type { RouterType, RoutesTypes } from '../../../__types__';

export class IssueRoutes implements RoutesTypes {
   private readonly _application: RouterType;
   private readonly _controller: IssueControllers;

   constructor(application: RouterType, controller: IssueControllers) {
      this._controller = controller;
      this._application = application;
   }

   create() {
      this._application.get(
         Routes.GET_ISSUES,
         IssuesManyReqDTO.checkValidateDto,
         loggingOfActions('search_issues'),
         this._controller.getIssues as Application,
         loggingOfActions('get_issues'),
      );
      this._application.get(Routes.GET_ISSUE, IssueReqDTO.checkValidateDto, loggingOfActions('get_issue'), this._controller.getIssue as Application);
      this._application.get(Routes.GET_ISSUE, IssueReqDTO.checkValidateDto, this._controller.getIssue as Application);
      return this._application;
   }
}