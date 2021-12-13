import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpService } from './services/sign-up';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from '../routes';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports : [
    SignUpComponent
  ],
  providers : [
    SignUpService
  ]
})
export class ManageUsersModule { }
