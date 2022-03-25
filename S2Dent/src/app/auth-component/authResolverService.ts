import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { User } from "app/Models/modelInterfaces";
import { AuthService } from "app/services/authService";
import { Observable } from "rxjs";

@Injectable()
export class AuthResolverService implements Resolve<User> {
  constructor(private authService: AuthService) {}
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    return this.authService.googleLogin();
  }
}
