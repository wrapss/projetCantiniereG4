import { Component, OnInit } from '@angular/core';
import {Credentials} from "../../_interfaces/credentials";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {
  alerte = false
  form: Credentials = {
    email: '',
    password: ''
  }
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
  }
  onSubmit(): void{
    console.log(this.form.email)

  }
}
