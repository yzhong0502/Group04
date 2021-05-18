import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (window.localStorage.getItem("token")) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
