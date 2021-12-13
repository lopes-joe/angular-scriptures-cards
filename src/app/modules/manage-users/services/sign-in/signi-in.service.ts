import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SignUpService } from '../sign-up';

@Injectable({
  providedIn: 'root'
})
export class SigniInService {

  constructor(
    private signUpService : SignUpService,
    private router : Router
  ) { }

  currentUser : Subject<any> = new Subject();
  getCurrentUser() : Observable<any> {
    return this.currentUser.asObservable();
  }
  setCurrenUser(){
    this.currentUser.next(localStorage.getItem('token'));
  }

  verifyUser(user : any) : boolean{
    let userDatabaseAsArray : any[] = this.signUpService.getUserDatabaseAsArray();
    let matchUser = userDatabaseAsArray.find(u => {
      return u.email === user.email; 
    })
    if(matchUser){
      if(matchUser.password === user.password) {
        this.router.navigate(['/']);
        localStorage.setItem('token', JSON.stringify(matchUser));
        this.setCurrenUser();
        return true;
      } else {
        window.alert('Senha inválida.');
        return false;
      }
    } else {
      window.alert('Email não cadastrado. Faça o seu cadastro.');
      return false;
    }
  }

  getCurrentUserToken() : any{
    if(localStorage.getItem('token')){
      return localStorage.getItem('token');
    }
    return null;
  }

}
