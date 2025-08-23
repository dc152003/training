

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 👈 Add this
import { Whoisthisuser } from '../../services/whoisthisuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule],
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  message = '';

  constructor(private http: HttpClient, private router: Router, private _whoisthisuser: Whoisthisuser) { }

  login() {
    this.http.get<any>('http://localhost:3000/api/login', {
      params: { username: this.username, password: this.password }
    }).subscribe(response => {
      this.message = response.message;

      if (response.success) {
        this._whoisthisuser.login(response.userName, response.message);
        this.router.navigate(['/home']);
      }
    });
  }
}