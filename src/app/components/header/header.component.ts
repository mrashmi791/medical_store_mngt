import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUserDetails } from 'src/app/modal/socialUseDetails';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  socialUser: SocialUserDetails = new SocialUserDetails ('','','','','','','','');
  
  

  constructor( private authService: SocialAuthService,private router:Router) { }

  ngOnInit(): void {
    // console.log("header init()..");
  }

  signInWithFB(): void {
    let platform = FacebookLoginProvider.PROVIDER_ID;
      this.authService.signIn(platform).then(
        (response) => {
          this.socialUser.firstName = response.firstName;
          this.socialUser.email = response.email;
          this.socialUser.lastName = response.lastName;
          this.socialUser.password = response.id;
          this.socialUser.profilePhoto = response.photoUrl;
         
           console.log(" first name is :=>");
           console.log(platform + " logged in user data is= " , response);
         
          }
          );
  }

}
