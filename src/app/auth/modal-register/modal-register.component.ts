import { Component, OnInit } from '@angular/core';
import { ICredentialsRegister} from "../../_interfaces/credentials";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {
  alerte = false
  form: ICredentialsRegister = {
    firstname: '',
    name: '',
    email: '',
    password: '',
    sex: 0
  }
  constructor(private dialogRef : MatDialog,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
  onSubmit(): void{
    this.authService.register(this.form).subscribe(
        data=> console.log(data)
    )
  }
}
