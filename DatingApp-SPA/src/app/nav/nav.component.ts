import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.iziToast.success({
        title: 'Bienvenido!',
        message: 'Ha iniciado sesión.'
      });
      }, error => {
        this.iziToast.error({
          title: 'Ha ocurrido un problema.',
          message: error
        });
      });
    }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.iziToast.warning({
      title: 'Hasta luego!',
      message: 'Ha cerrrado sesión.'
    });
  }
}
