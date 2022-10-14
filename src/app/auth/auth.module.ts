import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
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
    MonCompteComponent,
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
