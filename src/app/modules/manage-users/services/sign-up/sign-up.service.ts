import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }
  
  signUp(user : any){
    // Verifica se o email já está cadastrado
    let databaseArray : any[] = this.getUserDatabaseAsArray();
    let duplicatedEmail = databaseArray.find(oldUsers => user.email === oldUsers.email );
    if (duplicatedEmail) {
      window.alert('Esse endereço de email já está cadastrado');
      return;
    };

    // Verifica se as senha e a confirmação conferem
    if(user.passwordConfirmation !== user.password){
      window.alert('Senha não confere');
      return;
    }

    // Cadastra usuário
    let id = new Date().getTime();
    let userDatabaseAsObject : any = this.getUserDatabaseAsObject();
    if(userDatabaseAsObject){
      userDatabaseAsObject[id] = user;
      localStorage.setItem('users', JSON.stringify(userDatabaseAsObject));
      return;
    } else {
      let newUser : any = { };
      newUser[id] = user;
      localStorage.setItem('users', JSON.stringify(newUser));
    }
  }  

  getUserDatabaseAsObject() : any {
    let usersDatabaseAsString = localStorage.getItem('users');
    let usersDatabaseAsObject = JSON.parse(usersDatabaseAsString);
    return usersDatabaseAsObject;
  }

  getUserDatabaseAsArray(){
    let userDatabaseAsObject = this.getUserDatabaseAsObject();
    if(!userDatabaseAsObject){
      return [];
    }

    let userDatabaseAsArray = Object.entries(userDatabaseAsObject).map((user : any) =>{
      return { id : user[0], ...user[1] };
    })
    return userDatabaseAsArray;
  }

}
