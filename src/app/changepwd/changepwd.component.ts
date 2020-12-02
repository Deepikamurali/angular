import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm, Validators} from '@angular/forms';
import { MustMatch } from '../support/mustmatch';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  hide = true;
  hide1 = true;
  hide2 = true;

  changepwd:  FormGroup;
  ngOnInit(): void {
    this.changepwd = this.formBuilder.group({
      currentpassword: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      password: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      cpassword: new FormControl ('', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      
  },
  {
    validator: MustMatch('password','cpassword')
  }
  );
  }
  get currentpassword(){return this.changepwd.get('password')}
  get password(){return this.changepwd.get('password')}
  get cpassword(){return this.changepwd.get('cpassword')}
  onSubmit()
  {

  }
}
