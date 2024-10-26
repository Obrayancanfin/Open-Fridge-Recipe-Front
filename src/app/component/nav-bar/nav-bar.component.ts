import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {StyleComponent} from '../../utils/style/style.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  greenCSSTxt=StyleComponent.deepJungleGreenText()
  greenCSSBG=StyleComponent.deepJungleGreenBackground();

}
