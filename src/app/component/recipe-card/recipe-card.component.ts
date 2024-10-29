import { Component, EventEmitter, Input, Output } from '@angular/core';

class Recipe {
  img: string
  name: string;
  grade: number;
  reviewNumber: number;

  constructor(img: string, name: string, grade: number, reviewNumber: number){
    this.img = img,
    this.name = name,
    this.grade = grade,
    this.reviewNumber = reviewNumber;
  }
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
