import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app-store';
import { AuthService } from '../utils/authService';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appStore: AppStore, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.authService.logOutOfGoogle();
  }
}
