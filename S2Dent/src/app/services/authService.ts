import { Injectable, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from '../Models/modelInterfaces';
import { AppStore } from '../store/appStore';

@Injectable()
export class AuthService {

  constructor(private googleAuth: SocialAuthService, public appStore: AppStore) {}

  public loginWithGoogle(): boolean {
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.appStore.setUser(user as User);
        return true;
      })
      .catch((error) => console.log(error));

      return false;
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
