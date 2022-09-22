import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService : AuthService,
    private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let giveAccess : boolean = false;
    if(this.authService.isLoggedIn){
      giveAccess = true;
    }
    else{
      giveAccess = false;
      this.router.navigate(["login"]);
    }
    
    
      return giveAccess;
  }
  
}
