import { State } from '@/shared/ui';

export type User = {
   readonly id: string,
   readonly login: string,
   readonly avatarUrl: string,
}

export type Issue = {
   id: string,
   number: number,
   title: string,
   body: string,
   user: User,
   state: State,
   comments: number,
   createdAt: string,
   updatedAt: string,
   closedAt: string,
}