import { useDispatchedActions } from '@/shared/utils/helpers';
import { action } from '../thunk';
import { actionLog } from '@/entities/log';

export const useDispatchActionIssue = () => useDispatchedActions<typeof actionLog & typeof action>({ ...actionLog, ...action } as typeof actionLog & typeof action);