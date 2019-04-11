import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.iziToast.success({
        title: 'Bienvenido!',
        message: 'Se ha registrado correctamente'
      });
    }, error => {
      this.iziToast.error({
        title: 'Ha ocurrido un problema.',
        message: error
      });
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
