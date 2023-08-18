import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Input } from '@/shared/ui';

type Type = 'owner' | 'repos';
type RenderItemProps = { value: string }
type EntryIssuesProps = FC<{
   renderItem?: (props: RenderItemProps) => ReactElement,
}>

export const EntryIssues: EntryIssuesProps = ({ renderItem }) => {
   const [value, setValue] = useState<Record<Type, string>>({ owner: '', repos: '' });

   const checkCorrectValue = (value: Record<Type, string>) => {
      if (value['owner'] && value['repos']) {
         return JSON.stringify(value);
      }
      return '';
   };

   const handlerOnChange = (type: 'owner' | 'repos') => (event: ChangeEvent<HTMLInputElement>) => {
      return setValue(prevState => ({ ...prevState, [type]: event.target.value }));
   };

   return (
      <Input placeholder='owner' onChange={handlerOnChange('owner')} value={value['owner']}>
         <Input placeholder='repos' onChange={handlerOnChange('repos')} value={value['repos']}>
            {renderItem?.({ value: checkCorrectValue(value) })}
         </Input>
      </Input>
   );
};