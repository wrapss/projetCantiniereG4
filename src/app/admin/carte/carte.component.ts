import { Component, OnInit } from '@angular/core';
import {MealService} from "../../_services/meal.service";
import {IMeal} from "../../_interfaces/meal";
import {Credentials} from "../../_interfaces/credentials";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Categorie {
  id : number,
  name: string
}

const CATEGORIE_HEADER: Categorie[]= [
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
  {id: 1, name: ''},
];



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
// The category for this element. unknown(0), appetizers(1), starters(2), main_dishes(3), others(4), desserts(5), brunchs_and_lunches(6), soups(7), sauces(8), drinks(9), sandwiches(10), snacks(11)
  Categories = [
    {id: 0, name: 'unknown'},
    {id: 1, name: 'appetizers'},
      {id: 2, name: 'starters'},
      {id: 3, name: 'appetizers'},
      {id: 4, name: 'main_dishes'},
      {id: 5, name: 'others'},
      {id: 6, name: 'desserts'},
      {id: 7, name: 'brunchs_and_lunches'},
      {id: 8, name: 'soups'},
      {id: 9, name: 'sauces'},
      {id: 10, name: 'drinks'},
      {id: 11, name: 'sandwiches'},
      {id: 12, name: 'snacks'},

    ];
  AllMenus: IMeal[] = [
  ]

  form = {
    label: '',
    priceDF: '',
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getAllMeal()
  }

  getAllMeal(){
    this.mealService.getAllMeals().subscribe(
        // @ts-ignore
        data => this.AllMenus = data
    )
  }

  getMealByCategory(category: any){
    return this.AllMenus.filter((f) => f.category == category)
  }

  onSubmitAddMeal(ui: any){
    let envoi = {
      label: this.form.label,
      priceDF: this.form.priceDF,
      category: ui
    }
    this.mealService.addMeal(envoi).subscribe(
        data=> this.getAllMeal()
    )
  }
  deleteMeal(id: any){
    this.mealService.deleteMealByID(id).subscribe(
        data => this.getAllMeal()
    )
  }
}
