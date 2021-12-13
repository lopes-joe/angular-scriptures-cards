import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model';
import { CardsService } from '../../services/cards';
import { DatabaseService } from '../../services/database';
import { CardModalComponent } from '../card-modal/card-modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { SigniInService } from 'src/app/modules/manage-users/services/sign-in/signi-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private cardsService: CardsService,
    private ngbModal : NgbModal,
    private signInService : SigniInService,
    private router : Router
  ) {
    this.signInService.setCurrenUser();
  }
  ngOnInit(): void {
    this.databaseService.getScripturesList().subscribe((upToDateList) => {
      this.updateList(upToDateList);
    }); 

  }

  scripturesList: CardModel[] = this.databaseService.getDatabaseAsArray();
  cardState : {
    knew : boolean,
    toMemorize : boolean,
    showName : boolean
  }

  showModal(scripture : CardModel){
    let modalRef : NgbModalRef = this.ngbModal.open(CardModalComponent, {centered: true});
    modalRef.componentInstance.scripture = scripture;
    modalRef.componentInstance.modalRef = modalRef;
  }

  updateList(list: CardModel[]) {
    this.scripturesList = list;
  }

  delete(id: number) {
    this.cardsService.delete(id);
    this.databaseService.setScripturesList();
  }

  getCardState(id : number) : any{
    return this.cardsService.getCardState(id);
  }

  setAsKnew(id: number) {
    this.cardsService.setAsKnew(id);
    this.databaseService.setScripturesList();
    console.log(this.cardsService.getCardState(id))
  }

  setAsToMemorize(id: number) {
    this.cardsService.setAsToMemorize(id);
    this.databaseService.setScripturesList();
  }

  showName(id: number) {
    this.cardsService.showScriptureName(id);
    this.databaseService.setScripturesList();
  }
}
