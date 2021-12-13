import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigniInService } from 'src/app/modules/manage-users/services/sign-in/signi-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private signInService : SigniInService,
    private router : Router
  ){
    this.signInService.setCurrenUser();
    this.signInService.getCurrentUser().subscribe(user => {
      if(user){
        this.currentUser = JSON.parse(user);
      } else {
        this.router.navigate(['/signin']);
      }      
    })
  }
  ngOnInit(){}

  title = 'Scripture Cards';
  currentUser : any;

}
