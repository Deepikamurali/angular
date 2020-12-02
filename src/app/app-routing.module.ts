import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetpwdComponent } from './registration/forgetpwd/forgetpwd.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './registration/login/login.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { IndexComponent } from './dashboard/index/index.component';
const routes: Routes = [
  {
  
  path: 'forgotpwd',
  component: ForgetpwdComponent
  },
  {
  
    path: 'login',
    component: LoginComponent
    },
    {
        path: 'resetpwd',
        component: ResetpwdComponent 
    },
    {
      path: 'changepwd',
      component: ChangepwdComponent 
  },
  {
    path: 'dashboard',
    component: IndexComponent
}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
