import { TextButton } from '@/entities/issue';
import { FC } from 'react';

type SearchIssuesProps = FC<{
   value: string,
}>

export const SearchIssues: SearchIssuesProps = ({ value }) => {
   const handlerOnSearch = () => {
      console.log(value);
   };

   return (
      <TextButton title='Search' onClick={handlerOnSearch} disabled={!value} />
   );
};