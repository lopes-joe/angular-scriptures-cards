import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigniInService } from '../../services/sign-in/signi-in.service';
import { SignUpService } from '../../services/sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor( 
    private signUpService : SignUpService,
    private signInService : SigniInService,
  ) {
    // this.signInService.setCurrenUser();
  }
  ngOnInit(): void {}

  onSubmit(form : NgForm){
    this.signUpService.signUp(form.value);
  }
}
