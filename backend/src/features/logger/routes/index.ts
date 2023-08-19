import type { Application } from 'express';

import { Routes } from './enty-point';

import type { LoggerController } from '../controllers';
import type { RouterType, RoutesTypes } from '../../../__types__';


export class LoggerRoutes implements RoutesTypes {
   private readonly _application: RouterType;
   private readonly _controller: LoggerController;

   constructor(application: RouterType, controller: LoggerController) {
      this._controller = controller;
      this._application = application;
   }

   create() {
      this._application.get(Routes.GET_LOGS, this._controller.getLogs as Application);
      return this._application;
   }
}