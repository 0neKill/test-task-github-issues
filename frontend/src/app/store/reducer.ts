import { combineReducers } from '@reduxjs/toolkit';
import { reduceIssue } from '@/entities/issue';
import { reduceLog } from '@/entities/log';

export const rootReducer = combineReducers({
   reduceIssue,
   reduceLog,
});
