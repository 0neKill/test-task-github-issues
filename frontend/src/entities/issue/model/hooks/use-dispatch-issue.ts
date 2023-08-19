import { useDispatchedActions } from '@/shared/utils/helpers';
import { actionIssue } from '../slice';
import { action } from '../thunk';

export const useDispatchActionIssue = () => useDispatchedActions<typeof actionIssue & typeof action>({ ...actionIssue, ...action } as typeof actionIssue & typeof action);;