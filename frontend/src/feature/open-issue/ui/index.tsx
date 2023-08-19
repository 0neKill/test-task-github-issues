import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '@/shared/utils/constants';
import { TextButton } from '@/entities/issue';


type OpenIssueProps = FC<{
   id: number
}>
export const OpenIssue: OpenIssueProps = ({ id }) => {

   const navigate = useNavigate();
   const handlerOnOpen = () => navigate(`${Routes.ISSUE_WITHOUT}/${id}`);

   return <TextButton title='View' onClick={handlerOnOpen} />;
};