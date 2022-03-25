import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStore } from '../store/appStore';
import { AuthService } from '../services/authService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'auth-component',
  templateUrl: './authComponent.html',
  styleUrls: ['./authComponent.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  public appStore = AppStore;
  private subscriptions: Subscription[];


  constructor(private router: Router, private authService: AuthService) {
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    const loginSuccess = this.authService.loginWithGoogle()
      .subscribe(() => {
        this.router.navigate(['home']);
      });

    this.subscriptions.push(loginSuccess);
  }

  public ngOnDestroy(): void {
    this.subscriptions.map(x => x.unsubscribe());
  }

  public login() {
    this.authService.loginWithGoogle();
  }
}
