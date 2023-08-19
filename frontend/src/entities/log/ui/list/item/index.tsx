import { FC } from 'react';
import { List } from 'antd';

import { TypeOfActionsView } from '../../type-of-action';

import type { Log } from '@/entities/log/__types__';

import '../styles.scss';

type LogItemProps = FC<{
   log: Log
}>

export const LogItem: LogItemProps = ({ log }) => {
   return (
      <List.Item className='log-item'>
         <span className='log-item__ip'>{log.ip}</span>
         <TypeOfActionsView type={log.type} />
         <span className='log-item__create'>{new Date(log.createdAt).toLocaleString()}</span>
      </List.Item>
   );
};



