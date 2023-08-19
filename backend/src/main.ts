import { ApplicationBuilder } from './core';
import { ModuleRoot } from './features';
import 'dotenv/config';


(async () => {
   await ApplicationBuilder.registerDataBase();
   new ApplicationBuilder(ModuleRoot, Number(process.env.SERVER_PORT))
      .registerApiRoutes()
      .listen();
})();
