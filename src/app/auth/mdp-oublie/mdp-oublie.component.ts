import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.css']
})
export class MdpOublieComponent implements OnInit {

  constructor(private _dialogRef : MatDialog) { }

  ngOnInit(): void {}
  
  public cancelPasswordForgotten(): void {
    this._dialogRef.closeAll();
  }
  
}
