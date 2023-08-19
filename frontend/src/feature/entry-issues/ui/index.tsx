import { ChangeEvent, FC, ReactElement } from 'react';

import { Input } from '@/shared/ui';
import { useChangeIssue } from '@/entities/issue';

type Type = 'userName' | 'repoName';
type RenderItemProps = { hasValue: boolean }
type EntryIssuesProps = FC<{
   renderItem?: (props: RenderItemProps) => ReactElement,
}>

export const EntryIssues: EntryIssuesProps = ({ renderItem }) => {
   const { searchData, setSearchData } = useChangeIssue();

   const checkCorrectValue = (value: Record<Type, string>) => {
      return !!(value['userName'] && value['repoName']);
   };

   const handlerOnChange = (type: Type) => (event: ChangeEvent<HTMLInputElement>) => {
      return setSearchData({ type, data: event.target.value });
   };

   return (
      <Input placeholder='owner' onChange={handlerOnChange('userName')} value={searchData.userName}>
         <Input placeholder='repos' onChange={handlerOnChange('repoName')} value={searchData.repoName}>
            {renderItem?.({
               hasValue: checkCorrectValue({
                  userName: searchData.userName,
                  repoName: searchData.repoName,
               }),
            })}
         </Input>
      </Input>
   );
};