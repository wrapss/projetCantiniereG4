import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { MenuService } from "../../_services/menu.service";

/**
 * Component permettant d'afficher la liste des menus de la semaine
 */
@Component({
  selector: 'app-plat-semaine',
  templateUrl: './plat-semaine.component.html',
  styleUrls: ['./plat-semaine.component.css']
})
export class PlatSemaineComponent implements OnInit {

  /* Liste des jours de la semaine */
  public JoursSemaine: any[] = [
    {id: 1, name: 'Lundi'},
    {id: 2, name: 'Mardi'},
    {id: 3, name: 'Mercredi'},
    {id: 4, name: 'Jeudi'},
    {id: 5, name: 'Vendredi'},
  ];
  /* Liste des menus */
  public menus: any = [];
  /* Ajout d'un nouveau menu */
  public newmenu: any = {
    label: '',
    priceDF: 1
  };

  constructor(private _datepipe: DatePipe,
              private _menuService: MenuService) { }

  ngOnInit(): void {
    this._menuService.getAllMenus().subscribe( data => this.menus = data );
    const today = new Date();
    const weekNumber = this._datepipe.transform(today, 'w');
    const dayNumber = this._datepipe.transform(today, 'c');
  }

  /**
   * Permet d'ajouter un menu à la liste
   */
  public addMenu(): void {
    this._menuService.addMenu(this.newmenu).subscribe( data => console.log(data) );
  }
  
}
