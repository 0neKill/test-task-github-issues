import { clsx } from 'clsx';
import type { FC } from 'react';

import type { TypeOfActions } from '@/entities/log';

import './styles.scss';

type TypeViewPTypeOfActionsProps = FC<{
   type: TypeOfActions
}>

export const TypeOfActionsView: TypeViewPTypeOfActionsProps = ({ type }) => {
   return <span className={clsx('type-action', type)}>{type}</span>;
};