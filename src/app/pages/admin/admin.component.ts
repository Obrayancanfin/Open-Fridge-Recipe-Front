import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StyleComponent} from '../../utils/style/style.component';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgForOf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  deepJungleGreenBg: string = StyleComponent.deepJungleGreenBackground();
  deepJungleGreenText: string = StyleComponent.deepJungleGreenText();
  stepsForm: FormGroup;
  contenteInput: string = '';
  isShown: boolean = true;
  private recipes: string="";


  updateDisplay(event: Event): void {
    const input = event.target as HTMLInputElement
    this.contenteInput = input.value
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.stepsForm = this.formBuilder.group({
      name: '',
      steps: this.formBuilder.array([]),
    });
  }

  steps(): FormArray {
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

  removeSteps(i: number) {
    this.steps().removeAt(i);
  }

  onSubmit() {
    console.log(this.stepsForm.value);
  }

  @ViewChild('childModal') public childModal: ModalDirective | undefined;

  public showChildModal(): void {
    this.isShown=!this.isShown;
  }

  public hideChildModal(): void {
    this.isShown=!this.isShown;
  }

}
