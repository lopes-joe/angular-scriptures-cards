import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardsService } from '../../services/cards';

@Component({
  selector: 'app-create-cards-form',
  templateUrl: './create-cards-form.component.html',
  styleUrls: ['./create-cards-form.component.scss']
})
export class CreateCardsFormComponent implements OnInit {

  constructor(
    private ngForm : NgForm,
    private cardsService : CardsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) : void{
    this.cardsService.onSubmit(form);
  }
    
}
