import { Component, OnInit, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Register } from 'src/app/modal/register';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
     register: Register= new Register('','','','','','');
  
   constructor(private rendered: Renderer2, private registers: Register) {}
  
   ngOnInit() {
   
    let script = this.rendered.createElement('script');
    script.defer=true;
    script.async = true;
    script.src="https://www.google.com/recaptcha/api.js";
    this.rendered.appendChild(document.body,script);
   }

   save() {
     console.log(this.register);
    
   }

  
}
