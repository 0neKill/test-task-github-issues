import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import type { ExpressType, ModuleType } from '../../__types__';


export class ApplicationBuilder {
   private readonly _port: number;
   private readonly _routes: ModuleType[];
   private readonly _application: ExpressType;

   constructor(routes: ModuleType[], port: number) {
      this._port = port;
      this._routes = routes;
      this._application = express();
   }

   static async registerDataBase() {
      try {
         return await mongoose.connect(process.env.MONGO_DB_URL, {
            authSource: 'admin',
            user: process.env.MONGO_DB_USER,
            pass: process.env.MONGO_DB_PWD,
         });
      } catch (e) {
         console.log('Database do not connect!');
         process.exit(1);
      }
   }

   registerApiRoutes(defaultPrefix: string = 'api') {
      this._application.use(cors());
      const vectorInstances = this._routes.map(Module => new (Module as any)().run());
      this._application.use(`/${defaultPrefix}`, vectorInstances);
      return this;
   }

   listen() {
      this._application.listen(this._port, () => {
         console.log(`Server is running... ${this._port}`);
      });
      return this._application;
   }

}