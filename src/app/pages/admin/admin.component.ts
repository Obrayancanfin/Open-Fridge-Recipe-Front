import { Component } from '@angular/core';
import {StyleComponent} from '../../utils/style/style.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  deepJungleGreenBg: string=StyleComponent.deepJungleGreenBackground();
  deepJungleGreenText: string=StyleComponent.deepJungleGreenText();

}
