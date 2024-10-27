import {Component, Directive} from '@angular/core';
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

  isHide:boolean=true;
  hide:string='hidden';
  greenCSSTxt=StyleComponent.deepJungleGreenText()
  greenCSSBG=StyleComponent.deepJungleGreenBackground();
  buttonON:string=StyleComponent.buttonONStyle;
  buttonOFF:string=StyleComponent.buttonOFFStyle
  protected buttonCss: string=this.buttonOFF;


  sethide(){

    this.isHide=!this.isHide
    this.hide=(this.isHide)?'hidden':''
    this.buttonCss=(this.isHide)?this.buttonOFF:this.buttonON
    console.log()
  }
}
