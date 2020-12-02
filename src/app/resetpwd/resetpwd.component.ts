import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm, Validators} from '@angular/forms';
import { MustMatch } from '../support/mustmatch';
@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})


export class ResetpwdComponent implements OnInit {
  reset1:  FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  hide = true;
  hide1 = true;
  ngOnInit(): void {
  
  this.reset1 = this.formBuilder.group({
   
    password: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    cpassword: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    
},
{
  validator: MustMatch('password','cpassword')
}
);
}
get password(){return this.reset1.get('password')}
get cpassword(){return this.reset1.get('cpassword')}

onSubmit()
{
  console.warn(this.reset1.value);
}


}
