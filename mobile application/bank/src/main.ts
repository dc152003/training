// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';



// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// @NgModule({
//   imports: [HttpClientModule],
// })
// export class AppModule {}


import { provideRouter } from '@angular/router';
// { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};