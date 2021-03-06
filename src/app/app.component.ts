import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigniInService } from './modules/manage-users/services/sign-in/signi-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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

  title = 'Scripture Cards';
  currentUser : any;
}
