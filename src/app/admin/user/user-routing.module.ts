import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UListComponent} from "./u-list/u-list.component";
import {UEditComponent} from "./u-edit/u-edit.component";

const routes: Routes = [
  { path: '', component: UListComponent },
  { path: 'edit/:uid', component: UEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
