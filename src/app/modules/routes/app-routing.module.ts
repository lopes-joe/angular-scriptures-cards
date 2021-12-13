import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../cards';
import { CreateCardsFormComponent } from '../cards/components/create-cards-form';
import { SignInComponent } from '../manage-users/components/sign-in/sign-in.component';
import { SignUpComponent } from '../manage-users/components/sign-up';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'create', component: CreateCardsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
