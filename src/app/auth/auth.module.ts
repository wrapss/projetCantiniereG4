import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthRoutingModule } from "./auth-routing.module";
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];
@NgModule({
  declarations: [
    MdpOublieComponent,
    ModalLoginComponent,
    ModalRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...materialModules,
    FormsModule
  ],
  exports: [
    ...materialModules
  ]
})
export class AuthModule { }
