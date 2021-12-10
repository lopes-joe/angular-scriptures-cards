import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './modules/cards';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabaseService } from './modules/cards/services/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
