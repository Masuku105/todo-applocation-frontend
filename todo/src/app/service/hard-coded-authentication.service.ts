import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }


  authenticate (username, password){
    // console.log('Before login '+ this.isUserLogedIn())
    if(username==='Xolani' && password==='dummy'){
      sessionStorage.setItem('authenticatedUser',username);
      // console.log('After Login '+ this.isUserLogedIn())
       return true;
    }else{
      return false;
    }

  }

  isUserLogedIn(){
      let user = sessionStorage.getItem('authenticatedUser');
      return !(user===null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
