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
    {id: 1, name: 'appetizers'},
    {id: 2, name: 'starters'},
    {id: 3, name: 'appetizers'},
    {id: 5, name: 'others'},
    {id: 7, name: 'brunchs_and_lunches'},
    {id: 9, name: 'sauces'},

  ];

  AllMenus: IMeal[] = [
  ]

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    console.log(this.getImageMealByID())
    this.mealService.getAllMeals().subscribe(
        // @ts-ignore
        data => this.AllMenus = data
    )

  }

  getMealByCategory(category: any){
    return this.AllMenus.filter((f) => f.category == category)
  }

  getImageMealByID(){
     return this.mealService.getImageMenuByID(1).subscribe(
        data => {
          console.log(data)
          // @ts-ignore
          return 'http://localhost:8080/stone.lunchtime/'+data.imagePath
        }
    )
  }
  //

}
