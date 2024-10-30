import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type User = {
  name: string
  surname: string
  email: string
  password: string
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  user : User = {
    name: "John",
    surname: "Maclane",
    email: "john-maclane@nakatomiplazza.com",
    password: "*********"
  }

  account_form: FormGroup = new FormGroup(
    {
      name: new FormControl(""),
      surname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    }
  )

  submit(){

  }

}
