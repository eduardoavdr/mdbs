import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { moveIn } from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) { }

  isUserLogged() {
    
    if(this.authService.isUserLogged()){
      console.log("OOO YES, it is logged");
    }
    else{
      console.log("OOO No, the user is not logged");
    }
    return this.authService.isUserLogged();
  }

  signOut() {
    this.authService.logout();
  }  
}
