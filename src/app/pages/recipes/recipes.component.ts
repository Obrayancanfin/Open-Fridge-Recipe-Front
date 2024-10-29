import {Component, Input} from '@angular/core';
import { RecipeCardComponent } from "../../component/recipe-card/recipe-card.component";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type Recipe = {
  img: string
  name: string
  grade: number
  reviewNumber: number
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, ReactiveFormsModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  get recipes(): Recipe[] {
    return this._recipes;
  }

  recipe : Recipe = {
    img: "",
    name: "",
    grade: 0,
    reviewNumber: 0
  }

  private _recipes: Recipe[] = [
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    },
    {
      img: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    name: "Pasta with Sausage, Basil, and Mustard",
    grade: 4.5,
    reviewNumber: 357
    }
  ]

  search_recipe_form: FormGroup = new FormGroup(
    {
      search: new FormControl(""),

      criteria: new FormArray([
        new FormGroup({
                criterion: new FormControl(''),
                contains: new FormControl(''),
                value: new FormControl(''),
          })
      ]),

      additives: new FormControl(""),
      vegetarian: new FormControl(""),
      palmoil: new FormControl(""),
      gluten: new FormControl(""),

    },

  )




  submit_search(){

  }
}
