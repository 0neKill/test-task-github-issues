import type { FC } from 'react';
import { clsx } from 'clsx';
import { Issue, IssueCard } from '@/entities/issue';


type IssueReaderProps = FC<{
   className?: string,
   issue: Issue,
}>


export const IssueReader: IssueReaderProps = ({ className, issue }) => {
   return (
      <div className={clsx('issue-reader', className)}>
         <IssueCard issue={issue} />
      </div>
   );
};