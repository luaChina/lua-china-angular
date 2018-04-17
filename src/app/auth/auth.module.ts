import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { RegisterTemplateFormComponent } from './register-template-form/register-template-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterTemplateFormComponent,
    RegisterReactiveFormComponent,
  ]
})
export class AuthModule { }
