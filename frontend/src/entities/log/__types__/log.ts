export type TypeOfActions = 'get_issues' | 'get_issue' | 'search_issues';

export type Log = {
   id: string;
   createdAt: string;
   updatedAt: string;
   ip: string;
   type: TypeOfActions;
}