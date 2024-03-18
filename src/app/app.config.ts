import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { DB_CONFIG, dbConfig } from "./db.config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: DB_CONFIG, useValue: dbConfig },
  ],
};
