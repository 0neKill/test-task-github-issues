import { getClientIp } from 'request-ip';
import { LoggerService } from '../features/logger';

import type { NextFunction, Request } from 'express';
import type { ResponseType, TypeOfActions } from '../__types__';

export const loggingOfActions = (typeOfAction: TypeOfActions) => async (request: Request, response: ResponseType, next: NextFunction) => {
   try {
      const clientIp = getClientIp(request);
      await LoggerService.instance.createLog({ ip: clientIp, type: typeOfAction });
      next();
   } catch (e: any) {
      return response.status(400).json({ message: e.errors });
   }
};


