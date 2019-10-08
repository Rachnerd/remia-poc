import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RemiaApolloModule } from './apollo.module';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { LeverancierModule } from './leverancier/leverancier.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RemiaApolloModule,
    HttpLinkModule,
    LeverancierModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
