import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CardModel } from '../../models/card.model';
import { fakeDb } from './fake-db';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit {
  constructor() {}
  ngOnInit(){}

  // # Observable Structure makes data avaiable to any component
  scripturesList : Subject<CardModel[]> = new Subject();
  getScripturesList() : Observable<CardModel[]> {
    return this.scripturesList.asObservable();
  } 
  setScripturesList() : void {
    this.scripturesList.next(this.getDatabaseAsArray());
  }

  getDatabaseAsObject() : any{
    if(localStorage.getItem('scriptures')){
      let localStorageData : any = localStorage.getItem('scriptures');
      let lsDataObj = JSON.parse(localStorageData);
      return lsDataObj;
    }
    return null;
  }

  getDatabaseAsArray(){
    if(this.getDatabaseAsObject()){
      let databaseAsObject = this.getDatabaseAsObject();
      let databaseArray : any = Object.entries(databaseAsObject);
      if(databaseArray.length < 1){
        return fakeDb;
      }
      let allData = databaseArray.map((scripture : any) => {
        return {id: scripture[0] , ...scripture[1]};
      })
      return allData;
    }
    return fakeDb;
  }
  
}