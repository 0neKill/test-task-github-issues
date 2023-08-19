import type { FC } from 'react';
import { clsx } from 'clsx';
import { List } from '@/shared/ui';


import './styles.scss';

import { Log, LogItem } from '@/entities/log';

type LogsListProps = FC<{
   className?: string,
}>

export const LogsList: LogsListProps = ({ className }) => {
   return (
      <div className={clsx('issues-list', className)}>
         <List<Log>
            data={[{
               id: '123123',
               ip: '192.168.1.1',
               type: 'get_issues',
               createdAt: '12-12-12',
               updatedAt: '12-12-12',
            }, {
               id: '123123',
               ip: '192.168.1.1',
               type: 'get_issue',
               createdAt: '12-12-12',
               updatedAt: '12-12-12',
            }, {
               id: '123123',
               ip: '192.168.1.1',
               type: 'search_issues',
               createdAt: '12-12-12',
               updatedAt: '12-12-12',
            }]}
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