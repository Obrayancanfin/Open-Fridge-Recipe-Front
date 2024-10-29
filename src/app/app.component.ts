import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {CheckYourFridgeComponent} from './pages/check-your-fridge/check-your-fridge.component';
import {RecipesComponent} from './pages/recipes/recipes.component';
import {AdminComponent} from './pages/admin/admin.component';
import {FooterComponent} from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, CheckYourFridgeComponent, RecipesComponent, AdminComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeApp';
}
