import { ResponseFactory } from '../../../core/helper/response';
import { Comment, Issue } from '../entity';

import type { IssueRepositories } from '../repositories';
import type { GetIssuesTypes, ResponseTypesManyIssues, ResponseTypeIssue, GetIssueTypes } from '../__types__';


export class IssueService {
   private readonly _issueRepositories: IssueRepositories;

   constructor(issueRepositories: IssueRepositories) {
      this._issueRepositories = issueRepositories;
   }

   getIssues: GetIssuesTypes = async ({ page, userName, repoName }) => {
      try {
         const { total_count, items } =
            await this._issueRepositories.getIssues({ page, userName, repoName });

         const transformIssues = Issue.transformIssues(items);

         return ResponseFactory.create<ResponseTypesManyIssues>(200, 'Execute Correct', {
            total_count: total_count > 1000 ? 1000 : total_count,
            issues: transformIssues,
         });
      } catch (e: any) {
         return ResponseFactory.create(e.response?.status ?? 505, e.response?.data?.errors ?? 'No connection with github');
      }
   };

   getIssue: GetIssueTypes = async ({ number, userName, repoName }) => {
      try {
         const { issue, comments } =
            await this._issueRepositories.getIssue({ number, userName, repoName });

         const transformComments = Comment.transformComments(comments);

         return ResponseFactory.create<ResponseTypeIssue>(200, 'Execute Correct', {
            issue: new Issue(issue),
            comments: transformComments,
         });
      } catch (e) {
         return ResponseFactory.create(500, 'No connection with github');
      }
   };

}



