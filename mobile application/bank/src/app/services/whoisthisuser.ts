import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class Whoisthisuser implements CanActivate {
  userName = 'Guest';
  private password = '';
  message = 'Please log in for banking services';
  isUserLoggedIn = false;
 
  checkCredentials(userName: string, password: string): boolean {
    if (userName === 'devaanshi' && password === '1234') {
      this.userName = userName;
      this.message = 'Welcome to banking services';
      this.isUserLoggedIn = true;
      return this.isUserLoggedIn;
    }
    else {
      this.userName = 'Guest';
      this.password = '';
      this.message = 'Invalid credentials, please try again';
      this.isUserLoggedIn = false;
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.isUserLoggedIn;
  }
 
  constructor(private router: Router) { }
 
  logout() {
    this.userName = 'Guest';
    this.isUserLoggedIn = false;
    this.message = 'You have been logged out';
    this.router.navigate(['/login']);
  }
}
 