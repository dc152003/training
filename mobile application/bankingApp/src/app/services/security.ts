import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Security implements CanActivate {
  isUserLoggedIn: boolean = false;
  userName='Welcome User';
  password='1234';
  Loginmessage = 'Please Login';
  jwt_token = 'algo to generate jwt token';

  canActivate():boolean{
    if(this.userName=='devaanshi'&& this.password=='1234'){
      this.isUserLoggedIn=true;
      this.Loginmessage = 'Welcome'+ this.userName;
      return true;
    }

    else{
      this.isUserLoggedIn=false;
      this.Loginmessage = 'Invalid Credentials';
      return false;
    }
  } 

  
}
