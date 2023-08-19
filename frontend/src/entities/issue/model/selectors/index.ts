import { InitialState } from '@/entities/issue';

export const getSelectIssues = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.issues;
export const getSelectLoading = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.loading;
export const getSelectError = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.error;

export const getSearchData = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.search;
export const getSearchTotalCount = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.totalCount;


export const getIssueView = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.activeIssue.issue;
export const getSelectActiveLoading = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.activeIssue.loading;
export const getSelectActiveError = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.activeIssue.error;
export const getCommentView = ({ reduceIssue }: { reduceIssue: InitialState }) => reduceIssue.activeIssue.comments;

