import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '@/shared/utils/constants';
import { TextButton } from '@/entities/issue';


type OpenIssueProps = FC<{
   id: number,
   userName:string,
   repoName:string
}>
export const OpenIssue: OpenIssueProps = ({ id,repoName,userName }) => {

   const navigate = useNavigate();
   const handlerOnOpen = () => navigate(`${Routes.ISSUE_WITHOUT}/${userName}/${repoName}/${id}`);

   return <TextButton title='View' onClick={handlerOnOpen} />;
};