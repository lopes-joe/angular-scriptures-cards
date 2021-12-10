import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CardModel } from '../../models/card.model';
import { CardsService } from '../../services/cards';
import { DatabaseService } from '../../services/database';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  @Input() scripture: CardModel;
  @Input() modalRef : NgbModalRef;

  constructor( 
    private cardsService : CardsService,
    private databaseService : DatabaseService ) {  
  }
  ngOnInit(): void {}

  onClose(){
    this.modalRef.close();
  }
  
  onSubmit(form : NgForm, id : number){
    this.cardsService.update(form, id);
    this.databaseService.setScripturesList();
    this.onClose();
  }

  ngbModalOptions : NgbModalOptions;
}
