import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';
import { moveIn } from '../router.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.googleLogin();
  }

}
