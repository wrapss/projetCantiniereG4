import { Component, OnInit } from '@angular/core';
import { MealService } from "../../_services/meal.service";
import { IMeal } from "../../_interfaces/meal";
import { Category } from "../../_interfaces/category";

/**
 * Component permettant d'afficher la carte des différentes catégories de plats
 */
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
// The category for this element. unknown(0), appetizers(1), starters(2), main_dishes(3), others(4), desserts(5), brunchs_and_lunches(6), soups(7), sauces(8), drinks(9), sandwiches(10), snacks(11)
  /* Liste des catégories de plats */
  public categories: Category[] = [
    {id: 1, name: 'appetizers'},
    {id: 2, name: 'starters'},
    {id: 3, name: 'appetizers'},
    {id: 5, name: 'others'},
    {id: 7, name: 'brunchs_and_lunches'},
    {id: 9, name: 'sauces'},
  ];
  /* Liste des plats */
  private _allMeals: IMeal[] = [];
  /* Formulaire d'ajout de plat */
  public form = {
    label: '',
    priceDF: '',
    category: '',
  };
  
  constructor(private _mealService: MealService) { }

  ngOnInit(): void {
    this.getAllMeal();
  }

  /**
   * Récupère la liste de tous les plats
   */
  private getAllMeal(): void {
    this._mealService.getAllMeals().subscribe(
      // @ts-ignore
      data => this._allMeals = data
    );
  }

  /**
   * Affiche la liste des plats disponibles pour une catégorie donnée
   * @param category Catégorie sur laquelle filtrer les plats
   * @returns Liste de plats filtrés par catégorie
   */
  public getMealByCategory(category: any): IMeal[] {
    return this._allMeals.filter( (f) => f.category == category );
  }

  /**
   * Affiche la liste des plats disponibles pour une semaine donnée
   * @param category Semaine sur laquelle filtrer les plats
   * @returns Liste de plats filtrés par semaine
   */
  public getMealByWeek(category: any): IMeal[] {
    return this._allMeals.filter( (f) => f.category == category );
  }

  /**
   * Ajouter un plat à la carte et l'associer à une catégorie
   * @param ui Id de la catégorie
   */
  public onSubmitAddMeal(ui: any): void {
    let envoi = {
      label: this.form.label,
      priceDF: this.form.priceDF,
      category: ui,
    };
    this._mealService.addMeal(envoi).subscribe( () => this.getAllMeal() );
  }
  
  /**
   * Supprime un plat de la carte
   * @param id Id du plat à supprimer
   */
  public deleteMeal(id: any): void {
    this._mealService.deleteMealByID(id).subscribe( () => this.getAllMeal() );
  }

}
