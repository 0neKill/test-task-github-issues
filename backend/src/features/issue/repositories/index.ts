import axios from 'axios';

import type { GetIssuesTypesRepository, GetIssueTypesRepository } from '../__types__';

export class IssueRepositories {
   private readonly _api: string;
   private readonly _apiKey: string;

   constructor(api: string, apiKey: string) {
      this._api = api;
      this._apiKey = apiKey;
   }

   getIssues: GetIssuesTypesRepository = async ({ page = 1, userName, repoName }) => {
      const { data } = await axios.get(`${this._api}/search/issues?q=repo:${userName}/${repoName}+is:issue&page=${page}`,
         this._getConfiguration());
      return data;
   };


   getIssue: GetIssueTypesRepository = async ({ number, userName, repoName }) => {
      const [issueRes, comments] = await axios.all([
         axios.get(`${this._api}/repos/${userName}/${repoName}/issues/${number}`,
            this._getConfiguration()),
         axios.get(`${this._api}/repos/${userName}/${repoName}/issues/${number}/comments`,
            this._getConfiguration()),
      ]);
      return { issue: issueRes.data, comments: comments.data };
   };

   private readonly _getConfiguration = () => ({
      headers: {
         Accept: 'application/vnd.github+json',
         Authorization: `Bearer ${this._apiKey}`,
         'X-GitHub-Api-Version': '2022-11-28',
      },
   });
}