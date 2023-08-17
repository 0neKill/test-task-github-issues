import { IssueModule } from './issue';
import { LoggerModule } from './logger';

import type { ModuleType } from '../__types__';

export const ModuleRoot: ModuleType[] = [IssueModule, LoggerModule];