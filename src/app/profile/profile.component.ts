import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { moveIn } from '../router.animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  signOut() {
    this.authService.logout();
  }
}