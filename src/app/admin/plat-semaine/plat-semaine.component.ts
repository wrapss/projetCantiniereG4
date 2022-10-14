import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {MenuService} from "../../_services/menu.service";
import {IMenu} from "../../_interfaces/menu";

@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {


  JoursSemaine = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];

  constructor(
      private datepipe: DatePipe,
      private menuService: MenuService
              ) { }

  menus: IMenu = {
    id: 0,
    label: '',
    priceDF: '',
    jours: ''
  }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(
        // @ts-ignore
        data=>  this.menus = data
    )
    const today = new Date();
    const weekNumber = this.datepipe.transform(today, 'w');
    const dayNumber = this.datepipe.transform(today, 'c');
  }
}
