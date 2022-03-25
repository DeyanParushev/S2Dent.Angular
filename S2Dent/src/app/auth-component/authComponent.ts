import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
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
  public loginInProgress = false;
  private subscriptions: Subscription[];


  constructor(private router: Router, private authService: AuthService) {
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loginInProgress = true;
      }

      if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loginInProgress = false;
      }
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.map(x => x.unsubscribe());
  }

  public login() {
    // this.loginInProgress = true;
    // this.authService.loginWithGoogle();
    // this.loginInProgress = false;
  }
}
