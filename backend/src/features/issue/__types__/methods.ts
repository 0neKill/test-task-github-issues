import type { ResponseDate } from '../../../__types__';
import type { ResponseTypesManyIssues, ResponseTypeIssue } from './response';
import type { CommentTypeFromReq, IssueTypeFromReq } from './request';
import type { IssueReqDTO, IssuesManyReqDTO } from '../dto';

export type GetIssuesTypes = (dto: IssuesManyReqDTO) => Promise<ResponseDate<ResponseTypesManyIssues>>
export type GetIssueTypes = (dto: IssueReqDTO) => Promise<ResponseDate<ResponseTypeIssue>>


export type GetIssuesTypesRepository = ({ page, userName, repoName }: IssuesManyReqDTO) => Promise<{
   total_count: number,
   items: IssueTypeFromReq[]
}>

export type GetIssueTypesRepository = ({ number, userName, repoName }: IssueReqDTO) => Promise<{
   issue: IssueTypeFromReq,
   comments: CommentTypeFromReq[]
}>
