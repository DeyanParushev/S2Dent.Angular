import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { AppStore } from 'app/store/appStore';
import { FormControl } from '@angular/forms';
import { SupportedLanguages } from 'app/Models/modelInterfaces';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public languageSetting: string;
  public languageForm: FormControl;
  public supportedLanguages: SupportedLanguages;
  public supportedLanguagesStrings: string[];

  constructor(private authService: AuthService, public appStore: AppStore) {}

  public ngOnInit(): void {
    this.languageForm = new FormControl(this.appStore.language);
    this.supportedLanguagesStrings = Object.keys(SupportedLanguages).filter((x) =>
      isNaN(parseInt(x))
    );
  }

  public logOut() {
    this.authService.logOutOfGoogle();
  }

  public changeLanguage() {
    this.appStore.language = Number(this.languageForm.value);
  }
}
