import {
  CanLoad,
  Route,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn()

    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`)
    }

    return loggedIn
  }

  canLoad(route: Route): boolean {
    console.log('canload');
    return this.checkAuthentication(route.path)
  }

  canActivate(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    console.log('activete');
    return this.checkAuthentication(activateRoute.routeConfig.path)
  }
}
