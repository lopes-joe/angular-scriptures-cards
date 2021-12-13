import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsModule } from './modules/cards';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabaseService } from './modules/cards/services/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageUsersModule } from './modules/manage-users';
import { AppRoutingModule } from './modules/routes';
import { SignUpService } from './modules/manage-users/services/sign-up';
import { SigniInService } from './modules/manage-users/services/sign-in/signi-in.service';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './app-components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    ManageUsersModule,
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    NgbModule,
    MatIconModule
  ],
  providers: [
    DatabaseService,
    SignUpService,
    SigniInService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
