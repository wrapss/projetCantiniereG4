import { Component, OnInit } from '@angular/core';
import { MealService } from "../../_services/meal.service";
import { IMeal } from "../../_interfaces/meal";
import { Category } from "../../_interfaces/category";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
// The category for this element. unknown(0), appetizers(1), starters(2), main_dishes(3), others(4), desserts(5), brunchs_and_lunches(6), soups(7), sauces(8), drinks(9), sandwiches(10), snacks(11)
  public categories: Category[] = [
    {id: 1, name: 'appetizers'},
    {id: 2, name: 'starters'},
    {id: 3, name: 'appetizers'},
    {id: 5, name: 'others'},
    {id: 7, name: 'brunchs_and_lunches'},
    {id: 9, name: 'sauces'},
  ];
  private _allMeals: IMeal[] = [];
  public form = {
    label: '',
    priceDF: '',
    category: '',
  };
  
  constructor(private _mealService: MealService) { }

  ngOnInit(): void {
    this.getAllMeal();
  }

  private getAllMeal(): void {
    this._mealService.getAllMeals().subscribe(
      // @ts-ignore
      data => this._allMeals = data
    );
  }

  public getMealByCategory(category: any): IMeal[] {
    return this._allMeals.filter( (f) => f.category == category );
  }

  public getMealByWeek(category: any): IMeal[] {
    return this._allMeals.filter( (f) => f.category == category );
  }

  public onSubmitAddMeal(ui: any): void {
    let envoi = {
      label: this.form.label,
      priceDF: this.form.priceDF,
      category: ui,
    };
    this._mealService.addMeal(envoi).subscribe( () => this.getAllMeal() );
  }
  
  public deleteMeal(id: any): void {
    this._mealService.deleteMealByID(id).subscribe( () => this.getAllMeal() );
  }

}
