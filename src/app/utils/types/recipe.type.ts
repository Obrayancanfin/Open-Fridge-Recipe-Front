import {Ingredients} from './ingredients.type';

export type Recipe ={
  id: string
  name: string
  ingredients:Ingredients[]
  cutleryNb: number
  dieteticAligmemnt:Ingredients[]
}
