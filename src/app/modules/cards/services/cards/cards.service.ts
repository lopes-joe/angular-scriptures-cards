import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  getAll() : any {
    if(localStorage.getItem('scriptures')){
      let localStorageData : any = localStorage.getItem('scriptures');
      let lsDataObj = JSON.parse(localStorageData); 
      let lsDataAllAray : any = Object.entries(lsDataObj);
      
      let allData = lsDataAllAray.map((scripture : any) => {
        return {id: scripture[0] , ...scripture[1]};
      })
      return allData;
    }
      return this.scripturesList;
  }

  onSubmit(form : NgForm) : void{
    let newItemId = new Date().getTime().toString();
    if(localStorage.getItem('scriptures')){
      let localStorageData : any = localStorage.getItem('scriptures');
      let lsDataObject : any = JSON.parse(localStorageData);
      lsDataObject[newItemId] = {...form.value};
      localStorage.setItem('scriptures', JSON.stringify(lsDataObject));
    } else {
      let newItem : any = {};
      newItem[newItemId] = {...form.value};
      localStorage.setItem('scriptures', JSON.stringify(newItem));
    }
  }

    scripturesList = [
    {
      name: "Provérbios 3:4-6",
      text: "Confia em Jeová de todo o seu coração e não te estribes em sua própria compreensão..."
    },
    {
      name: "Apocalipse 4:11",
      text: "Digno és Jeová de receber toda a glória, honra e poder, por que criaste todas as coisas..."
    },
    {
      name: "Filpenses 6:8",
      text: "A paz de Deus que excede todo pensamento guardará o seu coração..."
    },
    {
      name: "Salmo 37:29",
      text: "Os mansos pussirão a terra e se deleitarão em abundância de paz..."
    },
    {
      name: "Mateus 7:12",
      text: "Assim como quereis que os homens façam as vós, fazeis do mesmo modo a eles..."
    }
  ]
  constructor() { }
}
