import { Component, OnInit } from '@angular/core';
import { AuthService } from '../utils/authService';
import { AppStore } from "app/store/appStore"

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, public appStore: AppStore) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.authService.logOutOfGoogle();
  }

  public changeLanguage($event: any) {
    console.log($event);

  }
}
