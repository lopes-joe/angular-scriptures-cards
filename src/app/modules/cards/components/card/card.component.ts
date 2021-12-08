import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private cardsService : CardsService
  ) { }

  scripturesList = this.cardsService.scripturesList;

  ngOnInit(): void {
  }

}
