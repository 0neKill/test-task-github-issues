import { FC } from 'react';
import { Log } from '@/entities/log/__types__';
import { List } from 'antd';
import { TypeOfActionsView } from '../../type-of-action';

import '../styles.scss';

type LogItemProps = FC<{
   log: Log
}>

export const LogItem: LogItemProps = ({ log }) => {
   return (
      <List.Item className='log-item'>
         <span className='log-item__ip'>{log.ip}</span>
         <TypeOfActionsView type={log.type} />
         <span className='log-item__create'>{log.createdAt}</span>
      </List.Item>
   );
};



