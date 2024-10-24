import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../utils/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../utils/types/user.type';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, /*Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)**/]),
    firstname: new FormControl("",[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(2)]),
    favoriteRecipe: new FormControl([]),
    isAdmin: new FormControl(false),
  })

  constructor (private authService: AuthService, private router: Router) {}

  handleSubmit() {
    if (this.form.valid){

    const user = this.form.value as User
    console.log(user)
    this.authService.register(user).subscribe({
      next: (res) => {
        if(res){
          alert("Vous êtes bien enregistré !")
          this.router.navigate(["/login"])
        }
      }
    })
    }
  }

  get passwordFormField() {
    return this.form.get('password');
  }

  get lastnameFormField() {
    return this.form.get('lastname');
  }

  get firstnameFormField() {
    return this.form.get('firstname');
  }

  get emailFormField() {
    return this.form.get('email');
  }
}
