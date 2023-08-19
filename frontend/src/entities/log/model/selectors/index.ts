import type { InitialState } from '@/entities/log';


export const getSelectLogs = ({ reduceLog }: { reduceLog: InitialState }) => reduceLog.logs;
export const getSelectLoading = ({ reduceLog }: { reduceLog: InitialState }) => reduceLog.loading;
export const getSelectError = ({ reduceLog }: { reduceLog: InitialState }) => reduceLog.error;
