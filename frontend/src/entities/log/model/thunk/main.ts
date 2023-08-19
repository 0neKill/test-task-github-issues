import { createAsyncThunk } from '@reduxjs/toolkit';

import { $api } from '@/shared/api';
import { actionLog } from '@/entities/log/model';

import type { Log } from '@/entities/log';

export const asyncLogFetch = createAsyncThunk('logs/asyncLogFetch',
   async (_: unknown, thunkAPI): Promise<{
      logs: Log[]
   }> => {
      try {
         const { data } = await $api.get('/logs');
         return {
            logs: data.data ?? [],
         };
      } catch (e) {
         const error = e as { message: string };
         thunkAPI.dispatch(actionLog.setError(error?.message ?? 'Error'));
         throw new Error('');
      }
   });
