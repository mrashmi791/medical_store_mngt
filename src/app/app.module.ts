import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from './components/header/header.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login';
import { RegisterComponent } from './components/register/register.component';
import { FeedbackSidenavComponent } from './components/feedback-sidenav/feedback-sidenav.component';
import { HomeComponent } from './components/home/home.component';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {DataTablesModule} from 'angular-datatables';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule , RecaptchaFormsModule } from "ng-recaptcha";

const fbClientId : string= "1162174730920052";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FeedbackSidenavComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
    
    
    
    // NgcCookieConsentModule.forRoot(cookieConfig) 
  ],
  providers: [CookieService,
   {
    provide: 'SocialAuthServiceConfig',
    useValue : {
      autoLogin : false,
      providers : [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(fbClientId)

        }
      ]
    } as SocialAuthServiceConfig,
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
