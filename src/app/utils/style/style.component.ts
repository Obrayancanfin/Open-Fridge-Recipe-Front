import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent {

  private static deepJungleGreenBg: string="bg-[#005756]"
  private static deepJungleGreenTxt:string="text-[#256f6e]"

  static deepJungleGreenBackground() {
    return this.deepJungleGreenBg
  }

  static deepJungleGreenText() {
    return this.deepJungleGreenTxt
  }
}
