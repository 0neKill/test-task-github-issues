import { Avatar, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import type { FC } from 'react';

import type { Comment } from '@/entities/issue';

import '../styles.scss';

type CommentCardProps = FC<{
   comment: Comment
}>

export const CommentCard: CommentCardProps = ({ comment }) => {
   return (
      <Card
         className='card comment-card'
         title={
            <div className='card__title'>
               <div className='card__profile'>
                  <Avatar src={comment.author.avatarUrl} />
                  <span>{comment.author.login}</span>
               </div>
            </div>
         }>
         <ReactMarkdown className='markdown'>
            {comment.body}
         </ReactMarkdown>
      </Card>
   );
};