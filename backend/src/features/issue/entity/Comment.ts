import { User } from './User';

import type { CommentTypeFromReq } from '../__types__';

export class Comment {
   readonly body: string;
   readonly createdAt: string;
   readonly id: number;
   readonly updatedAt: string;
   readonly author: User;

   constructor(comment: CommentTypeFromReq) {
      this.id = comment.id;
      this.body = comment.body;
      this.author = new User(comment.user);
      this.createdAt = comment.created_at;
      this.updatedAt = comment.updated_at;
   }

   public static transformComments(comments: CommentTypeFromReq[]) {
      return comments.map(item => new Comment(item));
   }

}