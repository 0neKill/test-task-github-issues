import { Spin } from 'antd';
import { IssueReader, CommentsReader } from '@/widgets';
import { useGetViewIssue } from '@/entities/issue';

import './styles.scss';

export default function Issue() {
   const {
      issue,
      loading,
      comments,
   } = useGetViewIssue();

   if (loading) {
      return <Spin />;
   }
   return (
      <section className='issue-page'>
         {
            issue ? (
               <>
                  <IssueReader issue={issue} />
                  <CommentsReader comments={comments} />
               </>
            ) : null
         }

      </section>
   );
}


