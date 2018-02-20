import { Component, OnInit, HostBinding } from '@angular/core';
//import { AuthService } from '../auth.service';
import { moveIn } from '../router.animation';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class HomepageComponent implements OnInit {

  //constructor(private authService: AuthService) { }
  constructor() { }

  ngOnInit() {

    //this.isUserLogged();
  }

/*  isUserLogged() {
    //return this.authService.isUserLogged();
    if(this.authService.isUserLogged()){
      console.log("YES, it is logged");
    }
    else{
      console.log("No, the user is not logged");
    }
  }*/

}
