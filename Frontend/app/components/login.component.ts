import { AuthService } from '../services/index';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: `
  <input type="text" *ngModel="username" placeholder="Username">
  <input type="password" *ngModel="password" placeholder="Password">
  `
//  styleUrls: [scss],
})

export class LoginRoute {
  private username: string;
  private password: string;

  constructor(private auth: AuthService, private router: Router) {}

  public login() {
    // this.auth.login(this.username, this.password)
    //   .subscribe(() => this.router.navigate(['/']));
    this.auth.login(this.username, this.password)
      .subscribe(() => window.location.href = '/tasks');
  }

  public resetPassword() {
    this.auth.resetPassword(this.username)
    .subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}