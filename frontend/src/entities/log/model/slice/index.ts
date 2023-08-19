import { createSlice, type  Draft, type PayloadAction, type SliceCaseReducers } from '@reduxjs/toolkit';
import { asyncLogFetch } from '@/entities/log/model/thunk/main';

import type { Log } from '@/entities/log';

export type InitialState = {
   loading: boolean,
   logs: Log[],
   error: string,
}

const initialState: InitialState = {
   loading: false,
   logs: [],
   error: '',
};

interface LogSliceReducer<T> extends SliceCaseReducers<T> {
   setError: (state: Draft<T>, payload: PayloadAction<string>) => void,
}

const logReducer = createSlice<InitialState, LogSliceReducer<InitialState>, 'reduceLog'>({
   name: 'reduceLog',
   initialState,
   reducers: {
      setError(state, { payload }) {
         state.error = payload;
      },
   },
   extraReducers: builder => (
      builder
         .addCase(asyncLogFetch.fulfilled, (state, { payload }: PayloadAction<{
            logs: Log[]
         }>) => {
            state.logs = payload.logs;
            state.loading = false;
         })
         .addCase(asyncLogFetch.pending, (state) => {
            state.loading = true;
            state.logs = [];
         })
         .addCase(asyncLogFetch.rejected, (state) => {
            state.loading = false;
         })
   ),
});

export const actionLog = logReducer.actions;
export const reduceLog = logReducer.reducer;

