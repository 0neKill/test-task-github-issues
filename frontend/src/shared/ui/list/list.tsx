import { List as ListWrapper } from 'antd';
import { ReactElement } from 'react';
import { PaginationConfig } from 'antd/es/pagination/Pagination';

import './list.scss.sass';

type IssueListProps<T> = {
   paginationConfig: () => PaginationConfig,
   data: T[],
   renderItem: (issues: T) => ReactElement,
}

export const List = <T, >({ paginationConfig, data, renderItem }: IssueListProps<T>) => {
   return (
      <ListWrapper
         className='list'
         rootClassName='list__root'
         itemLayout='vertical'
         size='small'
         pagination={paginationConfig()}
         dataSource={data}
         renderItem={renderItem}
      />
   );
};