import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  displayHeader = true;
  public loggedin =  new BehaviorSubject<boolean>(this.cookieService.get("isLoggedin") === "true");

  get isLoggedin() {
    return this.loggedin.asObservable();
  }
 
  title = 'medical-store';
  //keep refs to subscriptions to be able to unsubscribe later
  cookieValue: any;

  constructor(private cookieService: CookieService, private router : Router){

    this.cookieValue = this.cookieService.get('isCookieSet');
    console.log(this.cookieValue);
  }

  ngOnInit() {
   
  }

  shouldDisplayHeader() {
    if (this.router.url === '/login') {
      this.displayHeader = false;
    } else {
      this.displayHeader = true;
    }

    return this.displayHeader;
  }

  // clickMe() {
  //   this.cookieService.set( 'isCookieSet', 'true' );
  //   this.cookieValue = this.cookieService.get('isCookieSet');
  //   console.log(this.cookieValue);
  // }
 
 
  
}
