import { Component, OnInit } from '@angular/core';
import { FeedbackData } from 'src/app/modal/feedbackDetails';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit {

  data: FeedbackData = new FeedbackData('','','','',null);
  isFilled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveFeedback() {
  //   console.log(this.data); 
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   this.data.user = user;
  //   this.service.saveFeedBackData(this.data).subscribe(res => {
  //     console.log(res);
  //     this.utilService.showToast("Successfully send ", "feedback", true);
  //     this.data = new FeedbackData('','','','',null);
  //     this.isFilled = false;
  //   });
  }

  public validateData(): void {
  //   if(!this.data || this.data?.email.length === 0 
  //     || this.data?.mobile.length < 10 
  //     || this.data?.message.length === 0
  //     || this.data?.name.length === 0) {
  //     this.isFilled = false;
  //   } else{
  //     this.isFilled = true;
  //   }
  }

}
