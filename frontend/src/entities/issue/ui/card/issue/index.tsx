import { Avatar, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import { FC } from 'react';
import { Issue } from '@/entities/issue';

import '../styles.scss';
import { Status } from '@/shared/ui';

type IssueCardProps = FC<{
   issue: Issue
}>

export const IssueCard: IssueCardProps = ({ issue }) => {
   return (
      <Card
         className='card issue-card'
         title={
            <div className='card__title'>
               <div className='card__profile'>
                  <Status status={issue.state} className='card__status' />
                  <Avatar src={issue.user.avatarUrl} />
                  <span>{issue.user.login}</span>
               </div>
               <span className='card__subtitle'>{issue.title}</span>
            </div>
         }>
         <ReactMarkdown className='markdown'>
            {issue.body}
         </ReactMarkdown>
      </Card>
   );
};