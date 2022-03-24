import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStore } from '../app-store';
import { User } from '../Models/modelInterfaces';
import { AuthService } from '../utils/authService';

@Component({
  selector: 'auth-component',
  templateUrl: './authComponent.html',
  styleUrls: ['./authComponent.scss']
})
export class AuthComponent implements OnInit {
  public user?: User;
  public loginForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    public appStore: AppStore,
    private authService: AuthService) { }

  public ngOnInit(): void {

    this.initForm();
  }

  public login() {
    this.authService.loginWithGoogle()
      .subscribe((loggedIn) => {
        if(loggedIn) {
          this.router.navigate(["home"]);
        }
      })
  }

  public loginWithForm() {
    console.log(this.loginForm.controls['email'].value);
    console.log(this.loginForm.controls['password'].value);
    console.log(this.loginForm.controls['rememberMe'].value);
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.user?.email, [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]), //// TODO add pattern validation
      rememberMe: new FormControl(),
    })
  }
}
