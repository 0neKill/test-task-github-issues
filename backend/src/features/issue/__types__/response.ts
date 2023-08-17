import type { Comment, Issue } from '../entity';

export interface ResponseTypesManyIssues {
   total_count: number,
   issues: Issue[]
}

export interface ResponseTypeIssue {
   issue: Issue,
   comments: Comment[]
}