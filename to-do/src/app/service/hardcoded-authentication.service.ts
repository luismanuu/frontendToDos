import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
    
   }

   authenticate(username, password){
    if(username === "luis" && password === "123"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    else{
      return false;
    }
   }

   isUserLoggedin(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
   }

   logout(){
     sessionStorage.removeItem('authenticatedUser');
   }
}
