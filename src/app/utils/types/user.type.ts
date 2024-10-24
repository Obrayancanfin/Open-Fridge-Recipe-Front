import { Recipe } from "./recipe.type"


export type User = {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    favoriteRecipe: Recipe[]
    isAdmin: boolean
}
