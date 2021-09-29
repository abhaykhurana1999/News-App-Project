import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private authService:AuthenticationService,private router:Router){}
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      
   let response=await this.authService.isUserAuthenticated(this.authService.getToken())
    const isUserAuthenticated :Boolean=response.isAuthenticated;
    if(isUserAuthenticated){
      return true;
     } else{
      this.router.navigateByUrl('/login')
      return false;
     } 
 
  }
  
}
