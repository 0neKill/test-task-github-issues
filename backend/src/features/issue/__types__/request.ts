export type State = 'open' | 'closed';

export interface UserTypeFromReq {
   id: number,
   login: string,
   avatar_url: string,
}

export interface CommentTypeFromReq {
   id: number,
   user: UserTypeFromReq,
   created_at: string,
   updated_at: string,
   body: string,
}

export interface IssueTypeFromReq {
   id: number,
   number: number,
   title: string,
   body: string,
   user: UserTypeFromReq,
   state: State,
   comments: number,
   created_at: string,
   updated_at: string,
   closed_at: string,
};