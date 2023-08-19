import type { FC } from 'react';
import { clsx } from 'clsx';
import { Spin } from 'antd';

import { type Log, LogItem, useGetViewIssue } from '@/entities/log';
import { List } from '@/shared/ui';

import './styles.scss';

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
               pageSize: 10,
               className: 'issues-list__pagination',
            })}
         />
      </div>
   );
};