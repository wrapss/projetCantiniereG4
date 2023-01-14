import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ICredentialsRegister } from "../../_interfaces/credentials";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  public alerte = false;
  public form!: ICredentialsRegister;

  constructor(private _dialogRef : MatDialog,
              private _authService: AuthService) { }

  ngOnInit(): void {}

  public onSubmit(): void {
    this._authService.register(this.form).subscribe(
      data => console.log(data)
    );
  }

  public close(): void {
    this._dialogRef.closeAll();
  }

}
