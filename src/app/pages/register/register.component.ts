import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../utils/services/auth.service';
import {Router, RouterLink} from '@angular/router';
import { User } from '../../utils/types/user.type';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    lastname: new FormControl(""),
    firstname: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    isAdmin: new FormControl(false),
  })

  constructor (private authService: AuthService, private router: Router) {}

  handleSubmit() {
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
