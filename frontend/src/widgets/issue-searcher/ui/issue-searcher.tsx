import type { FC } from 'react';
import { clsx } from 'clsx';
import { SearchIssues, EntryIssues } from '@/feature';

type IssueSearcherTypes = FC<{
   className?: string,
}>


export const IssueSearcher: IssueSearcherTypes = ({ className }) => {
   return (
      <div className={clsx('issue-searcher', className)}>
         <EntryIssues
            renderItem={({ value }) => <SearchIssues value={value} />} />
      </div>
   );
};