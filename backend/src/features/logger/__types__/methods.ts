import type { ResponseDate } from '../../../__types__';
import type { LogReqDTO } from '../dto';
import type { LogResponseTypes } from './response';

export type FindAllTypesRepositories = () => Promise<LogResponseTypes[]>
export type CreateTypesRepositories = (dto: LogReqDTO) => Promise<LogResponseTypes>

export type GetLogsTypesService = () => Promise<ResponseDate<LogResponseTypes[]>>
export type CreateLogTypeService = (dto: LogReqDTO) => Promise<ResponseDate<LogResponseTypes>>


