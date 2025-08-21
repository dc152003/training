import { Component } from '@angular/core';
import { Whoisthisuser } from '../../services/whoisthisuser';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
 
  constructor(private auth: Whoisthisuser, private router: Router) {}
 
  login() {
    if (this.auth.checkCredentials(this.username, this.password)) {
      this.router.navigate(['/home']);
    }
  }
}