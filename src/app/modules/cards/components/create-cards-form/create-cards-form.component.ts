import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardsService } from '../../services/cards';
import { DatabaseService } from '../../services/database';

@Component({
  selector: 'app-create-cards-form',
  templateUrl: './create-cards-form.component.html',
  styleUrls: ['./create-cards-form.component.scss']
})
export class CreateCardsFormComponent implements OnInit {

  constructor(
    private ngForm : NgForm,
    private cardsService : CardsService,
    private databaseService : DatabaseService,
  ) { }
  ngOnInit(): void {
    // code
  }

  onSubmit(form : NgForm) : void{
    this.cardsService.insert(form);
    this.databaseService.setScripturesList();
  }
}
