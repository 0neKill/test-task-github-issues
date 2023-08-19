import './styles.scss';
import { IssueReader, CommentsReader } from '@/widgets';
import { useGetViewIssue } from '@/entities/issue';
import { Spin } from 'antd';


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


