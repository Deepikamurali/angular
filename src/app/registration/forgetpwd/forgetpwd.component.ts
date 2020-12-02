import { Component, OnInit , ViewChild} from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '-',
    inputStyles: {
      'width': '30px',
      'height': '30px'
    }
  };
  validateotp()
  {
    console.warn(this.otp);
  }
  onOtpChange(otp) {
    this.otp = otp;
    console.warn(this.otp);
  }

  resendotp()
  {
    console.warn("resend otp request");
  }
   

}
