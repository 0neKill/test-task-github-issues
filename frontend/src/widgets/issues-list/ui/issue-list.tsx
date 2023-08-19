import type { FC } from 'react';
import { clsx } from 'clsx';

import { List } from '@/shared/ui';
import { OpenIssue } from '@/feature';
import { type Issue, IssueItem, useGetIssue } from '@/entities/issue';


import './styles.scss';
import { Spin } from 'antd';

type IssuesListTypes = FC<{
   className?: string,
}>

export const IssuesList: IssuesListTypes = ({ className }) => {
   const { issues, performance, loading, totalCount, page } = useGetIssue();

   return (
      <div className={clsx('issues-list', className)}>
         {loading ? <Spin className='issues-list__spin' /> : null}
         <List<Issue>
            data={issues}
            renderItem={(issues) => <IssueItem
               issue={issues}
               action={[<OpenIssue id={issues.number} />]} />}
            paginationConfig={() => ({
               onChange: (page) => {
                  performance(page);
               },
               pageSize: 30,
               current: page,
               totalBoundaryShowSizeChanger: totalCount,
               total: totalCount,
               className: 'issues-list__pagination',
            })}
         />
      </div>
   );
};