import { Injectable, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Observable, Subject } from 'rxjs';
import { User } from '../Models/modelInterfaces';
import { AppStore } from '../store/appStore';

@Injectable()
export class AuthService {
  private logSuccess: Subject<boolean>;
  private userSubject: Subject<User>;

  constructor(private googleAuth: SocialAuthService, public appStore: AppStore) {
    this.logSuccess = new Subject<boolean>();
    this.userSubject = new Subject<User>();
  }

  public loginWithGoogle(): Observable<boolean> {
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.appStore.setUser(user as User);
        this.logSuccess.next(true);
      })
      .catch((error) => {
        this.logSuccess.next(false);
      });

      return this.logSuccess.asObservable();
  }

  public googleLogin(): Observable<User> {
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.userSubject.next(user as User);
      })

    return this.userSubject.asObservable();
  }

  public logOutOfGoogle() {
    this.googleAuth.signOut()
      .then(() => {
        this.appStore.setUser(undefined);
      })
      .catch((error) => console.log(error));
  }

  public loginWithForm(email: string, password: string) {
    console.log(email, password);
  }
}
