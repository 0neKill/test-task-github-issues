import { Avatar, List } from 'antd';
import { FC, ReactElement } from 'react';
import { Issue } from '@/entities/issue';

import '../styles.scss';
import { Status } from '@/shared/ui';

type IssueItemProps = FC<{
   issue: Issue
   action?: ReactElement[],
}>

export const IssueItem: IssueItemProps = ({ issue, action }) => (
   <List.Item className='issue-item' actions={action}>
      <Status status={issue.state} className='issue-item__status' />
      <List.Item.Meta
         avatar={<Avatar src={issue.user.avatarUrl} />}
         title={<span className='issue-item__title'>{issue.title}</span>}
         description={<span className=' issue-item__desc'>{issue.body}</span>}
      />
   </List.Item>

);

