import './styles.scss';
import { IssueReader, CommentsReader } from '@/widgets';

export default function Issue() {
   return (
      <section className='issue-page'>
         <IssueReader />
         <CommentsReader />
      </section>
   );
}


