import { useSelector } from 'react-redux';
import { getSearchData } from '@/entities/issue/model/selectors';
import { useDispatchedActions } from '@/shared/utils/helpers';
import { actionIssue } from '@/entities/issue';
import { useMemo } from 'react';

export const useChangeIssue = () => {
   const searchData = useSelector(getSearchData);
   const { setSearchData } = useDispatchedActions<typeof actionIssue>(actionIssue);
   return useMemo(() =>
      ({ searchData, setSearchData }), [searchData, setSearchData]);
};