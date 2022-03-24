import { Injectable } from "@angular/core";
import { observable, action, computed } from "mobx-angular";
import { User } from "../Models/modelInterfaces";

@Injectable()
export class AppStore {
  @observable user?: User;

  @computed get isLoggedIn(): boolean {
    return this.user !== undefined && this.user !== null;
  }

  @action setUser(user: User | undefined) {
    this.user = user;
  }
}
