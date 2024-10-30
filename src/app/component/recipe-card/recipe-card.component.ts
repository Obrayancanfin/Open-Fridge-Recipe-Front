import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Ingredient {
  code:string
  name: string
  quantity: string
  calories: number
  tags: Tag[];
}

interface Tag {
  id: string;
  name: string;
}

interface Recipe {
  caloricNb: number;
  cutleryNb: string;
  id: string;
  ingredients: Ingredient[];
  name: string;
  tags: Tag[];
}

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  @Input() recipe!: Recipe;

  @Output() dataEmitted = new EventEmitter<string>()

}
