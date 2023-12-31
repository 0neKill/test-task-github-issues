import { createAsyncThunk } from '@reduxjs/toolkit';

import { $api } from '@/shared/api';
import { actionIssue } from '@/entities/issue';

import type { AsyncIssieViewFetchProps, AsyncIssueFetchProps, Comment, Issue } from '../../__types__';


export const asyncIssueFetch = createAsyncThunk('issue/asyncIssueFetch',
   async (_data: AsyncIssueFetchProps, thunkAPI): Promise<{
      page: number,
      total_count: number
      issues: Issue[]
   }> => {
      try {
         const { data } = await $api.get('/issues', { params: _data });
         return {
            page: _data.page,
            total_count: data.data?.total_count,
            issues: data.data?.issues ?? [],
         };
      } catch (e) {
         const error = e as { message: string };
         thunkAPI.dispatch(actionIssue.setError(error?.message ?? 'Error'));
         throw new Error('');
      }
   });

export const asyncIssieViewFetch = createAsyncThunk('issue/asyncIssieViewFetch',
   async ({ number, userName, repoName }: AsyncIssieViewFetchProps, thunkAPI): Promise<{
      comments: Comment[]
      issue: Issue
   }> => {
      try {
         const { data } = await $api.get(`/issue/${userName}/${repoName}/${number}/`);
         return {
            comments: data.data?.comments,
            issue: data.data?.issue,
         };
      } catch (e) {
         const error = e as { message: string };
         thunkAPI.dispatch(actionIssue.setErrorActive(error?.message ?? 'Error'));
         throw new Error('');
      }
   });