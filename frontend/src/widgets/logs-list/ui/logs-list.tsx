import type { FC } from 'react';
import { clsx } from 'clsx';
import { List } from '@/shared/ui';


import './styles.scss';

import { Log, LogItem, useGetViewIssue } from '@/entities/log';
import { Spin } from 'antd';

type LogsListProps = FC<{
   className?: string,
}>

export const LogsList: LogsListProps = ({ className }) => {

   const { logs, loading } = useGetViewIssue();

   return (
      <div className={clsx('issues-list', className)}>
         {loading ? <Spin /> : null}
         <List<Log>
            data={logs}
            renderItem={(log) => <LogItem log={log} />}
            paginationConfig={() => ({
               onChange: () => {

               },
               pageSize: 10,
               className: 'issues-list__pagination',
            })}
         />
      </div>
   );
};