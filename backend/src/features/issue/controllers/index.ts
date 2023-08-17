import type { NextFunction } from 'express';
import type { RequestType, ResponseType } from '../../../__types__';
import type { IssueService } from '../services';
import type { IssueReqDTO, IssuesManyReqDTO } from '../dto';

export class IssueControllers {
   private readonly _issueService: IssueService;

   constructor(issueService: IssueService) {
      this.getIssues = this.getIssues.bind(this);
      this.getIssue = this.getIssue.bind(this);
      this._issueService = issueService;
   }

   async getIssues(request: RequestType<'query', IssuesManyReqDTO>, response: ResponseType, next: NextFunction) {
      const { page, userName, repoName } = request.query;
      const { status, ...data } = await this._issueService.getIssues({ page: Number(page), userName, repoName });
      response.status(status).json(data);
      data.data && next();
   };

   async getIssue(request: RequestType<'params', IssueReqDTO>, response: ResponseType) {
      const { number, userName, repoName } = request.params;
      return response.status(200).json(await this._issueService.getIssue({
         number: Number(number),
         userName,
         repoName,
      }));
   };

}