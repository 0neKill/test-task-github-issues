import { FC } from 'react';
import type { TypeOfActions } from '@/entities/log';
import { clsx } from 'clsx';


import './styles.scss';

type TypeViewPTypeOfActionsProps = FC<{
   type: TypeOfActions
}>

export const TypeOfActionsView: TypeViewPTypeOfActionsProps = ({ type }) => {
   return <span className={clsx('type-action', type)}>{type}</span>;
};