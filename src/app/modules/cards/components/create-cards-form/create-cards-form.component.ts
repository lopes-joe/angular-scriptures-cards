import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-cards-form',
  templateUrl: './create-cards-form.component.html',
  styleUrls: ['./create-cards-form.component.scss']
})
export class CreateCardsFormComponent implements OnInit {

  constructor(
    private ngForm : NgForm
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : any) : void{
    localStorage.setItem(
      'scripture', 
      JSON.stringify({id : new Date().getTime() , ...form.value})
    )
    window.alert("Texto criado com sucesso: " + JSON.stringify({id : new Date().getTime() , ...form.value}))
  }
}
