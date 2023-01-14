import { Component, OnInit } from '@angular/core';
import { MealService } from "../../_services/meal.service";
import { IMeal } from "../../_interfaces/meal";
import { Category } from '../../_interfaces/category';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public categories: Category[] =[
    {id: 1, name: 'appetizers'},
    {id: 2, name: 'starters'},
    {id: 3, name: 'appetizers'},
    {id: 5, name: 'others'},
    {id: 7, name: 'brunchs_and_lunches'},
    {id: 9, name: 'sauces'},
  ];
  private _allMeals: IMeal[] = [];

  constructor(private _mealService: MealService) { }

  ngOnInit(): void {
    console.log(this.getImageMealByID());   // TODO : rajouter les icones de menus
    this.getAllMeal();
  }

  private getImageMealByID() {
    return this._mealService.getImageMenuByID(1).subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        return 'http://localhost:8080/stone.lunchtime/'+ data.imagePath;
      }
    )
  }

  private getAllMeal(): void {
    this._mealService.getAllMeals().subscribe(
      // @ts-ignore
      data => this._allMeals = data
    );
  }

  public getMealByCategory(category: any): IMeal[] {
    return this._allMeals.filter((f) => f.category == category);
  }

}
