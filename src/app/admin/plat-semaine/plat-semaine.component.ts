import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { MenuService } from "../../_services/menu.service";
// import { IMenu } from "../../_interfaces/menu";

@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  public JoursSemaine: any[] = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];
  public menus: any = [];
  public newmenu: any = {
    label: '',
    priceDF: 1
  };

  constructor(private datepipe: DatePipe,
              private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe( data => this.menus = data );
    const today = new Date();
    const weekNumber = this.datepipe.transform(today, 'w');
    const dayNumber = this.datepipe.transform(today, 'c');
  }

  addMenu(): void {
    // console.log('add menu');
    this.menuService.addMenu(this.newmenu).subscribe( data => console.log(data) );
  }
  
}
