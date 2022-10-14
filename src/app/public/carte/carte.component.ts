import { Component, OnInit } from '@angular/core';
import {MealService} from "../../_services/meal.service";
import {IMenu} from "../../_interfaces/menu";
import {IMeal} from "../../_interfaces/meal";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

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

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe(
        // @ts-ignore
        data => this.AllMenus = data
    )

  }

  getMealByCategory(category: any){
    return this.AllMenus.filter((f) => f.category == category)
  }

}
