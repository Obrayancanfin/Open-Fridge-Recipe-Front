
import {Component, OnInit} from '@angular/core';
import {StyleComponent} from '../../utils/style/style.component';

@Component({
  selector: 'app-check-your-fridge',
  standalone: true,
  imports: [],
  templateUrl: './check-your-fridge.component.html',
  styleUrl: './check-your-fridge.component.css'
})
export class CheckYourFridgeComponent implements OnInit{
  deepJungleGreenBg: string = StyleComponent.deepJungleGreenBackground();
  deepJungleGreenText: string = StyleComponent.deepJungleGreenText();
  contentFridge: string='';

  addIngredient() {
    console.log('addIngredient');
  }

  ngOnInit(): void {

  }
}
