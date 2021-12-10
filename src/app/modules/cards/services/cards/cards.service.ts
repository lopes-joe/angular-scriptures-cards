import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardModel } from '../../models/card.model';
import { DatabaseService } from '../database';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(public databaseService: DatabaseService) {}

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
    let databaseAsObject: CardModel =
      this.databaseService.getDatabaseAsObject();
    if (databaseAsObject[id].knew) {
      databaseAsObject[id].knew = !databaseAsObject[id].knew;
    } else {
      databaseAsObject[id].knew = true;
    }
    if (databaseAsObject[id].knew === true) {
      databaseAsObject[id].toMemorize = false;
    }
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }

  setAsToMemorize(id: number) {
    let databaseAsObject: CardModel =
      this.databaseService.getDatabaseAsObject();
    if (databaseAsObject[id].toMemorize) {
      databaseAsObject[id].toMemorize = !databaseAsObject[id].toMemorize;
    } else {
      databaseAsObject[id].toMemorize = true;
    }
    if (databaseAsObject[id].toMemorize === true) {
      databaseAsObject[id].knew = false;
    }
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }

  showScriptureName(id: number) {
    let databaseAsObject: CardModel =
      this.databaseService.getDatabaseAsObject();
    if (databaseAsObject[id].showName !== undefined) {
      databaseAsObject[id].showName = !databaseAsObject[id].showName;
    } else {
      databaseAsObject[id].showName = true;
    }
    localStorage.setItem('scriptures', JSON.stringify(databaseAsObject));
  }
}
