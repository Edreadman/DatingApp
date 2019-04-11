import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router, public iziToast: Ng2IzitoastService) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.loggedIn()) {
      return true;
    }
    this.iziToast.error({
      title: 'Error!',
      message: 'No es posible ingresar.'
    });
    this.router.navigate(['/home']);
    return false;
  }
}
