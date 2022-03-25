import { Injectable } from "@angular/core";
import { observable, action, computed } from "mobx-angular";
import { SupportedLanguages, User } from "../Models/modelInterfaces";

@Injectable()
export class AppStore {
  @observable user?: User;
  @observable language: number = SupportedLanguages.Български;

  @computed get isLoggedIn(): boolean {
    return this.user !== undefined && this.user !== null;
  }

  @action setUser(user: User | undefined) {
    this.user = user;
  }
}
