import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GstComponent } from './dashboard/gst/gst.component';
import { IncorprationComponent } from './dashboard/incorpration/incorpration.component';
import { ComplianceComponent } from './dashboard/compliance/compliance.component';
import { LicenceComponent } from './dashboard/licence/licence.component';
import { IncometaxComponent } from './dashboard/incometax/incometax.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgOtpInputModule } from  'ng-otp-input';
import { ForgetpwdComponent } from './registration/forgetpwd/forgetpwd.component';
import { LoginComponent } from './registration/login/login.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { IndexComponent } from './dashboard/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    GstComponent,
    IncorprationComponent,
    ComplianceComponent,
    LicenceComponent,
    IncometaxComponent,
    RegistrationComponent,
    ForgetpwdComponent,
    LoginComponent,
    ResetpwdComponent,
    ChangepwdComponent,
    IndexComponent
  ],
  imports: [NgOtpInputModule,MatIconModule,
    BrowserModule,FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,MatDialogModule,
    MatTabsModule,FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,MatToolbarModule,MatIconModule, MatSidenavModule, MatListModule

  ],
  exports:[MatCardModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




  