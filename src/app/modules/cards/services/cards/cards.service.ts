import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UserModel } from 'src/app/modules/manage-users/models/user';
import { SigniInService } from 'src/app/modules/manage-users/services/sign-in';
import { CardModel } from '../../models/card.model';
import { DatabaseService } from '../database';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(
    public databaseService: DatabaseService,
    public signinService : SigniInService    
  ) {
    signinService.setCurrenUser();
    signinService.getCurrentUser().subscribe( user => {
      this.currentUser = user;
    });
  }
  
  currentUser : any;
   
  getCardState( cardId : number ){
    let user = JSON.parse(this.currentUser);
    let cardState : any = {};
    let database = this.databaseService.getDatabaseAsObject();
    let currentCard = database[cardId];
    let handlingArray : any[] = [];
 
    handlingArray = [...currentCard.knew];
    handlingArray.find((id : any) => id === user.id) ? cardState.knew = true : cardState.knew = false;
    
    handlingArray = [...currentCard.toMemorize];
    handlingArray.find((id : any) => id === user.id) ? cardState.toMemorize = true : cardState.toMemorize = false;
    
    handlingArray = [...currentCard.showName];
    handlingArray.find((id : any) => id === user.id) ? cardState.showName = true : cardState.showName = false;
    return cardState;
  }

  insert(form: NgForm): void {
    let newItemId = new Date().getTime().toString();
    if (localStorage.getItem('scriptures')) {
      let databaseAsObject: CardModel =
        this.databaseService.getDatabaseAsObject();
      databaseAsObject[newItemId] = { ...form.value };
      localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
    } else {
      let newItem: CardModel = new CardModel();
      newItem[newItemId] = { ...form.value };
      localStorage.setItem('scriptures', JSON.stringify(newItem));
    }
    window.alert('Cartão criado com sucesso!');
    form.reset();
  }

  delete(id: number) {
    if (window.confirm('Tem certeza de que deseja deletar este cartão?')) {
      let databaseAsObject: CardModel =
        this.databaseService.getDatabaseAsObject();
      delete databaseAsObject[id];
      localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
    }
  }

  update(form: NgForm, id: number): void {
    let databaseAsObject: CardModel = this.databaseService.getDatabaseAsObject();
    databaseAsObject[id] = form.value;
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
    form.reset();
  }

  setAsKnew(id: number) {
    let user : any = JSON.parse(this.currentUser);
    let databaseAsObject: CardModel = this.databaseService.getDatabaseAsObject(); 
    let knewArray : string[] = [];
    if(databaseAsObject[id].knew){
      knewArray = [...databaseAsObject[id].knew];
      if(knewArray.find(id => id === user.id)) {
        knewArray = knewArray.filter(id => id !== user.id);
      } else {
        knewArray.push(user.id)
      }
    } else {
      knewArray.push(user.id)
    } 
    databaseAsObject[id].knew = knewArray;
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }

  setAsToMemorize(id: number) {
    let user : any = JSON.parse(this.currentUser);
    let databaseAsObject: CardModel = this.databaseService.getDatabaseAsObject(); 
    let toMemorizeArray : string[] = [];
    if(databaseAsObject[id].toMemorize){
      toMemorizeArray = [...databaseAsObject[id].toMemorize];
      if(toMemorizeArray.find(id => id === user.id)) {
        toMemorizeArray = toMemorizeArray.filter(id => id !== user.id);
      } else {
        toMemorizeArray.push(user.id)
      }
    } else {
      toMemorizeArray.push(user.id)
    } 
    databaseAsObject[id].toMemorize = toMemorizeArray;
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }

  showScriptureName(id: number) {
    let user : any = JSON.parse(this.currentUser);
    let databaseAsObject: CardModel = this.databaseService.getDatabaseAsObject(); 
    let showNameArray : string[] = [];
    if(databaseAsObject[id].showName){
      showNameArray = [...databaseAsObject[id].showName];
      if(showNameArray.find(id => id === user.id)) {
        showNameArray = showNameArray.filter(id => id !== user.id);
      } else {
        showNameArray.push(user.id)
      }
    } else {
      showNameArray.push(user.id)
    } 
    databaseAsObject[id].showName = showNameArray;
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }
}
