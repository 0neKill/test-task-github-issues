import { Avatar, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import { FC } from 'react';
import { Issue } from '@/entities/issue';

import './styles.scss';

type IssueCardProps = FC<{
   issue: Issue
}>

export const IssueCard: IssueCardProps = ({ issue }) => {
   return (
      <Card
         className='issue-card'
         title={
            <div className='issue-card__title'>
               <div className='issue-card__profile'>
                  <Avatar src={issue.user.avatarUrl} />
                  <span>{issue.user.login}</span>
               </div>
               <span className='issue-card__subtitle'>{issue.title}</span>
            </div>
         }>
         <ReactMarkdown>
            {issue.body}
         </ReactMarkdown>
      </Card>
   );
};