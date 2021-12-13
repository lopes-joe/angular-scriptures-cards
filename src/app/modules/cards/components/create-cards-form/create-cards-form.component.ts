import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigniInService } from 'src/app/modules/manage-users/services/sign-in/signi-in.service';
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
    private signInService : SigniInService,
    private router : Router
  ) {
    this.signInService.setCurrenUser();
  }
  ngOnInit(): void {}

  onSubmit(form : NgForm) : void{
    this.cardsService.insert(form);
    this.databaseService.setScripturesList();
  }
}
