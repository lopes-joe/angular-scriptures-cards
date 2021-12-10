import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card';
import { CardsService } from './services/cards';
import { CreateCardsFormComponent } from './components/create-cards-form';
import { FormsModule, NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { CardModalComponent } from './components/card-modal/card-modal.component';

@NgModule({
  declarations: [
    CardComponent,
    CreateCardsFormComponent,
    CardModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    CardComponent,
    CreateCardsFormComponent,
    CardModalComponent
  ],
  providers: [
    CardsService,
    NgForm,
  ],
  entryComponents: [
    CardModalComponent
  ]
})
export class CardsModule { }