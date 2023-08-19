import { createSlice, Draft, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { AsyncIssueFetchProps, Comment, Issue } from '@/entities/issue';
import { NullOrType } from '@/shared/__types__';
import { asyncIssieViewFetch, asyncIssueFetch } from '@/entities/issue/model/thunk/main.ts';


export type InitialState = {
   loading: boolean,
   search: AsyncIssueFetchProps,
   issues: Issue[],
   totalCount: number,
   error: string,
   activeIssue: {
      issue: NullOrType<Issue>,
      comments: Comment[],
      error: string,
      loading: boolean,

   }
}

const initialState: InitialState = {
   search: {
      page: 1, repoName: '', userName: '',
   },
   loading: false,
   issues: [],
   activeIssue: {
      issue: null,
      comments: [],
      error: '',
      loading: false,
   },
   error: '',
   totalCount: 0,
};

interface IssueSliceReducer<T> extends SliceCaseReducers<T> {
   setSearchData: (state: Draft<T>, payload: PayloadAction<{ type: 'repoName' | 'userName', data: string }>) => void,
   setPageData: (state: Draft<T>, payload: PayloadAction<number>) => void,
   setError: (state: Draft<T>, payload: PayloadAction<string>) => void,
   setErrorActive: (state: Draft<T>, payload: PayloadAction<string>) => void,
}

const issueReducer = createSlice<InitialState, IssueSliceReducer<InitialState>, 'reduceIssue'>({
   name: 'reduceIssue',
   initialState,
   reducers: {
      setSearchData(state, { payload: { data, type } }) {
         state.search[type] = data;
      },
      setPageData(state, { payload }) {
         state.search.page = payload;
      },
      setError(state, { payload }) {
         state.error = payload;
      },
      setErrorActive(state, { payload }) {
         state.activeIssue.error = payload;
      },

   },
   extraReducers: builder => (
      builder
         .addCase(asyncIssueFetch.fulfilled, (state, { payload }: PayloadAction<{
            total_count: number
            issues: Issue[]
         }>) => {
            state.issues = payload.issues;
            state.totalCount = payload.total_count;
            state.loading = false;
         })
         .addCase(asyncIssueFetch.pending, (state) => {
            state.loading = true;
            state.issues = [];
         })
         .addCase(asyncIssueFetch.rejected, (state) => {
            state.loading = false;
         })
         .addCase(asyncIssieViewFetch.fulfilled, (state, { payload }: PayloadAction<{
            comments: Comment[]
            issue: Issue | null
         }>) => {
            state.activeIssue.issue = payload.issue;
            state.activeIssue.comments = payload.comments;
            state.activeIssue.loading = false;
         })
         .addCase(asyncIssieViewFetch.pending, (state) => {
            state.activeIssue.loading = true;
         })
         .addCase(asyncIssieViewFetch.rejected, (state) => {
            state.activeIssue.loading = false;
         })
   ),
});

export const actionIssue = issueReducer.actions;
export const reduceIssue = issueReducer.reducer;

