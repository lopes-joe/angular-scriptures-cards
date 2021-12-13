import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigniInService } from '../../services/sign-in/signi-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private signInService : SigniInService,
    private router : Router
  ) {
    // this.signInService.setCurrenUser();
   }
  ngOnInit(): void {}

  onSubmit(form : NgForm){
    this.signInService.verifyUser(form.value);
  }

}
