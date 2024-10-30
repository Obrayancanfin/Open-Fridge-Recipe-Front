import {Component, Inject, Input, OnInit} from '@angular/core';

import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RecipeCardComponent} from '../../component/recipe-card/recipe-card.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {forEach} from 'json-server-auth';

type Recipe = {
  img: string
  name: string
  grade: number
  reviewNumber: number
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [ReactiveFormsModule, RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {

  protected recipes: string="";
  protected listOfRecipes:any[]=[];

  private _recipes1: Recipe[] = [
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

  search_recipe_form:FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder , private http: HttpClient) {
  this.search_recipe_form=fb.group({
    criteria:fb.group({
      criterion: new FormControl(''),
      contains: new FormControl(''),
      value: new FormControl(''),
  }),
    search: new FormControl(""),
    additives: new FormControl(""),
    vegetarian: new FormControl(""),
    palmoil: new FormControl(""),
    gluten: new FormControl("")})
  }



  submit_search(){
      console.log(this.search_recipe_form)
  }

  private url: string = '/api/recipe';
  showRecipeModal(): Observable<string> {
    return this.http.get<string>(this.url);
  }

  ngOnInit(): void {
    this.showRecipeModal().subscribe((data: string) => {

      this.recipes = data;
      for (const datum of data) {
          this.listOfRecipes.push(datum)
      }
    })
    console.log(this.listOfRecipes)
  }
}

