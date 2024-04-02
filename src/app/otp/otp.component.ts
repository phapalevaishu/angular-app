import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  OTP:number=0
  phone2:number=0
  otp_btn:boolean=false

  OTP1(event:any){
    this.otp_btn =! this.otp_btn
  }
}
