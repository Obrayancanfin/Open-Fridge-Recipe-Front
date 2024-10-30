import { Component } from '@angular/core';

class Recipe {
  img: string
  name: string;
  description: string;
  tag: string[];
  cookingTime: number;
  difficulty: string;
  price: string;
  caloryNb : number;
  cluteryNb: number;
  ingredients: string[];
  steps: string [];

  constructor(img: string, name: string, description: string, tag: string[], cookingTime: number, difficulty: string, price: string, caloryNb: number, cluteryNb: number, ingredients: string[], steps: string[]){
    this.img = img,
    this.name = name,
    this.description = description,
    this.tag = tag,
    this.cookingTime = cookingTime,
    this.difficulty = difficulty,
    this.price = price,
    this.caloryNb = caloryNb,
    this.cluteryNb = cluteryNb,
    this.ingredients = ingredients,
    this.steps = steps
  }
}

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipe: Recipe =
    {
      img: "https://assets.afcdn.com/recipe/20221011/135954_w1024h768c1cx1059cy707cxt324cyt245cxb2034cyb1305.jpg",
      name: "Saucisses Momie Halloween (feuilletées)",
      description: "La recette des Saucisses Momies pour Halloween est idéale pour un apéritif amusant et effrayant ! De petites saucisses sont enroulées dans des bandes de pâte feuilletée pour imiter des bandelettes de momie, puis cuites au four jusqu’à ce qu’elles soient dorées. On peut ajouter des petits yeux faits de graines de sésame ou de fromage pour parfaire leur apparence. Croustillantes et savoureuses, elles sont rapides à préparer et parfaites pour régaler les petits comme les grands lors d’une soirée d'Halloween.",
      tag: [
        "Gluten",
        "Non-vegan",
        "Poor nutritional quality"
      ],
      cookingTime: 20,
      difficulty: "Very easy",
      price: "cheap",
      caloryNb: 400,
      cluteryNb: 2,
      ingredients: [
        "puff pastry",
        "eggs",
        "sausages"
      ],
      steps: [
        "Dérouler les pâtes feuilletées et les couper en longues lamelles de moyenne largeur.",
        "Préchauffer le four à 210°C (thermostat 7).",
        "Enrouler quelques lamelles autour d'une saucisse (comme des bandages) puis réitérer l'opération avec les autres saucisses pour former une armée de petites momie.",
        "Badigeonner les momies de jaune d'oeuf délayé dans un peu d'eau et les enfourner entre 15 et 20 minutes.",
        "Lorsqu'elles sont bien dorées, les sortir du four et servir avec une salade de vers de terre."
      ]
    }
}
