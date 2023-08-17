import type { UserTypeFromReq } from '../__types__';

export class User {
   readonly id: number;
   readonly login: string;
   readonly avatarUrl: string;

   constructor(user: UserTypeFromReq) {
      this.id = user.id;
      this.login = user.login;
      this.avatarUrl = user.avatar_url;
   }

}