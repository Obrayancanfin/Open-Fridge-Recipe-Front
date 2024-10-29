import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { User } from '../../utils/types/user.type';
import {StyleComponent} from '../../utils/style/style.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [StyleComponent]
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })

  constructor (private authService: AuthService, private router: Router) {}

  handleSubmit() {

    const user = this.form.value as Pick<User, "email" | "password">
    console.log(user);
    this.authService.login(user).subscribe({
      next: (res) => {
        if(res){
          this.router.navigate(["/"])
        }
      }
    })
  }

  protected readonly FormGroup = FormGroup;
}
