import type { FC } from 'react';
import { clsx } from 'clsx';
import { Card } from 'antd';

import { CommentCard, type Comment } from '@/entities/issue';

import './styles.scss';

type CommentsReaderProps = FC<{
   className?: string,
   comments: Comment[]
}>


export const CommentsReader: CommentsReaderProps = ({ className, comments }) => {
   return (
      <div className={clsx('issue-reader', className)}>
         <Card
            className='issue-reader__list'
            title='Comments:'>
            {
               comments.map(comment => (
                  <CommentCard key={comment.id} comment={comment} />
               ))
            }
         </Card>
      </div>
   );
};