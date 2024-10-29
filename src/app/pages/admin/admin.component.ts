import { Component } from '@angular/core';
import {StyleComponent} from '../../utils/style/style.component';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  deepJungleGreenBg: string=StyleComponent.deepJungleGreenBackground();
  deepJungleGreenText: string=StyleComponent.deepJungleGreenText();
  stepsForm: FormGroup;
  contenteInput: string=''

  updateDisplay(event: Event) : void {
    const input = event.target as HTMLInputElement
    this.contenteInput = input.value
  }

  constructor(private formBuilder: FormBuilder) {
    console.log(this.contenteInput);
    this.stepsForm = this.formBuilder.group({
      name: '',
      steps: this.formBuilder.array([]) ,
    });
  }
  steps() : FormArray {
    return this.stepsForm.get("steps") as FormArray
  }

  newStep(): FormGroup {
    return this.formBuilder.group({
      step: '',
    })
  }

  addSteps() {
    this.steps().push(this.newStep());

  }

  removeSteps(i:number) {
    this.steps().removeAt(i);

  }

  onSubmit() {
    console.log(this.stepsForm.value);
  }


}
