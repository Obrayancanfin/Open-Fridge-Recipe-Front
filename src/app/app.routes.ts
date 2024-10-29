import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { isLoggedGuard } from './utils/guards/is-logged.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {RecipesComponent} from './pages/recipes/recipes.component';
import {AdminComponent} from './pages/admin/admin.component';
import {CheckYourFridgeComponent} from './pages/check-your-fridge/check-your-fridge.component';
import {AccountComponent} from './pages/account/account.component';
import {TermsConditionsComponent} from './pages/terms-conditions/terms-conditions.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "recipe", component: RecipesComponent},
    {path: "check-your-fridge", component: CheckYourFridgeComponent},
    {path: "admin", component: AdminComponent,/*canActivate: [isLoggedGuard]**/ },
    {path: "account", component: AccountComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path:"terms" , component: TermsConditionsComponent}

];
