import type { IssueTypeFromReq, State } from '../__types__';
import { User } from './User';

export class Issue {
   readonly id: number;
   readonly number: number;
   readonly title: string;
   readonly body: string;
   readonly user: User;
   readonly state: State;
   readonly comments: number;
   readonly createdAt: string;
   readonly updatedAt: string;
   readonly closedAt: string;

   constructor(issueResponse: IssueTypeFromReq) {
      this.id = issueResponse.id;
      this.number = issueResponse.number;
      this.title = issueResponse.title;
      this.body = issueResponse.body;
      this.user = new User(issueResponse.user);
      this.state = issueResponse.state;
      this.comments = issueResponse.comments;
      this.createdAt = issueResponse.created_at;
      this.updatedAt = issueResponse.updated_at;
      this.closedAt = issueResponse.closed_at;
   }

   public static transformIssues(comments: IssueTypeFromReq[]) {
      return comments.map(item => new Issue(item));
   }

}