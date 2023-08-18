import { Popover } from 'antd';
import { clsx } from 'clsx';
import { FC } from 'react';
import './status.scss';

export type State = 'open' | 'closed';

type StatusProps = FC<{
   status: State,
   className?: string,
}>

export const Status: StatusProps = ({ status, className }) => {
   return (
      <Popover content={status} trigger='hover'>
         <span className={clsx('status', className, status)} />
      </Popover>
   );
};