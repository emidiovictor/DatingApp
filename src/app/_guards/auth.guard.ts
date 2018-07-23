import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertfyService } from '../_services/alertfy.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private alert: AlertfyService) { }
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;

    }
    this.alert.error("YOU SHALL NOT PASS!!!");
    this.router.navigate(['/home']);
    return false;
  }
}
