import { Routes } from '@angular/router';

import { isLoggedGuard } from './utils/guards/is-logged.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {RecipesComponent} from './pages/recipes/recipes.component';
import {AdminComponent} from './pages/admin/admin.component';
import {CheckYourFridgeComponent} from './pages/check-your-fridge/check-your-fridge.component';
import {AccountComponent} from './pages/account/account.component';
import {TermsConditionsComponent} from './pages/terms-conditions/terms-conditions.component';
import {HomeComponent} from './pages/home/home.component';
import {RecipeComponent} from './pages/recipe/recipe.component';

export const routes: Routes = [
    {path: "", component: HomeComponent , canActivate: [isLoggedGuard]},
    {path: "recipe", component: RecipesComponent , canActivate: [isLoggedGuard]},
    {path: "check-your-fridge", component: CheckYourFridgeComponent , canActivate: [isLoggedGuard]},
    {path: "admin", component: AdminComponent,canActivate: [isLoggedGuard] },
    {path: "account", component: AccountComponent, canActivate: [isLoggedGuard]},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path:"terms" , component: TermsConditionsComponent},
    {path: "recipe/details", component: RecipeComponent, canActivate: [isLoggedGuard]},

];
