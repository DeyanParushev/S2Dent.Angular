import { User } from "./Models/modelInterfaces";
import { computed, observable, action } from "mobx";

export class AppStore {
    @observable user?: User;
    @observable language?: string;
    @observable isLoggedIn: boolean = !this.user ? false : true;

    @computed isLanguageEnglish() {
        return this.language === "English";
    }

    @computed isLanguageBulgarian() {
        return this.language === "Bulgarian";
    }

    @action setUser(user: User) {
        return this.user = user;
    }
}