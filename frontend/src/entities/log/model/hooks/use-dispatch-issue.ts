import { useDispatchedActions } from '@/shared/utils/helpers';
import { actionLog } from '@/entities/log';
import { action } from '../thunk';


export const useDispatchActionIssue = () => useDispatchedActions<typeof actionLog & typeof action>({ ...actionLog, ...action } as typeof actionLog & typeof action);