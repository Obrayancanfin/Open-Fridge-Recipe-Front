import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { isLoggedGuard } from './utils/guards/is-logged.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {RecipesComponent} from './pages/recipes/recipes.component';
import {AdminComponent} from './pages/admin/admin.component';
import {CheckYourFridgeComponent} from './pages/check-your-fridge/check-your-fridge.component';
import {AccountComponent} from './pages/account/account.component';

export const routes: Routes = [
    {path: "", component: HomeComponent,/* canActivate: [isLoggedGuard]**/},
    {path: "Recipe", component: RecipesComponent},
    {path: "Check-your-fridge", component: CheckYourFridgeComponent},
    {path: "Admin", component: AdminComponent},
    {path: "Account", component: AccountComponent},
    {path: "Register", component: RegisterComponent},
    {path: "Login", component: LoginComponent},

];
