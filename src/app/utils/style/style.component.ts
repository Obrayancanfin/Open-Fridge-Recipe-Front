import {Component} from '@angular/core';
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
  private static _buttonOFFStyle:string="inline-flex items-center p-2 w-10 h-10 justify-center text-sm " +
    "text-gray-500 rounded-lg xl:hidden  "
  private static _buttonONStyle:string="inline-flex items-center p-2 w-10 h-10 justify-center text-sm" +
    " text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 " +
    "focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  static deepJungleGreenBackground() {
    return this.deepJungleGreenBg
  }

  static deepJungleGreenText() {
    return this.deepJungleGreenTxt
  }

  static get buttonONStyle(): string {
    return this._buttonONStyle;
  }

  static get buttonOFFStyle(): string {
    return this._buttonOFFStyle;
  }

}
