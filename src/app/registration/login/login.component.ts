import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { RegistrationComponent } from '../registration.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  hide = true;
  login = new FormGroup({
   
    username: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
   

});
  openDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent,{
      height: '90%',
      width: '80%',
    });

     dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
    });
  }
get username(){return this.login.get('username')}
get password(){return this.login.get('password')}

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.warn(this.login.value);
    // this.login.reset();
  }
}
