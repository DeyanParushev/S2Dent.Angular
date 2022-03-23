import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { Observable, Subject } from "rxjs";
import { AppStore } from "../app-store";
import { User } from "../Models/modelInterfaces";

@Injectable()
export class AuthService implements OnInit {
    private logSuccess: Subject<boolean> = new Subject<boolean>();
    private logoutSuccess: Subject<boolean> = new Subject<boolean>();

    constructor(private appStore: AppStore, private googleAuth: SocialAuthService) {
    }

    public ngOnInit(): void {
        this.logSuccess = new Subject<boolean>();
        this.logoutSuccess = new Subject<boolean>();
    }

    public loginWithGoogle(): Observable<boolean> {
       this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then((user) => {
            this.appStore.setUser(user as User);
            this.logSuccess.next(true);
        })
        .catch((error) => {
            console.log(error);
            this.logSuccess.next(false);
        })

        return this.logSuccess.asObservable();
    }

    public logOutOfGoogle(): Observable<boolean> {
        this.googleAuth.signOut()
            .then(() => {
                this.logSuccess.next(true);
                this.appStore.user = undefined;
            })
            .catch((error) => {
                console.log(error);
                this.logoutSuccess.next(false);
            });
        
        return this.logoutSuccess;
    }

    public loginWithForm(email: string, password: string) {
        console.log(email, password);
    }
}