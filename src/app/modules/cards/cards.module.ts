import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card';
import { CardsService } from './services/cards';
import { CreateCardsFormComponent } from './components/create-cards-form';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent,
    CreateCardsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    CreateCardsFormComponent
  ],
  providers: [
    CardsService,
    NgForm
  ]

})
export class CardsModule { }