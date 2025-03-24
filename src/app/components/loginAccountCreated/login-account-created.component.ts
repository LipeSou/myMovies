import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorPopcorn,
  phosphorSignIn,
  phosphorUserPlus,
} from '@ng-icons/phosphor-icons/regular';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/myMovies/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule, NgIcon],
  providers: [
    provideIcons({ phosphorPopcorn, phosphorSignIn, phosphorUserPlus }),
    MessageService,
  ],
  templateUrl: './login-account-created.component.html',
})
export class LoginAccountCreatedComponent {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  toHomePage() {
    this.router.navigate(['/']);
  }

  toSignInPage() {
    this.router.navigate(['/criar-conta']);
  }

  searchLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onLogin() {
    if (this.searchLogin.valid) {
      const { email, password } = this.searchLogin.value;
      this.authService
        .login({
          email: email!,
          password: password!,
        })
        .subscribe({
          next: (res) => {
            this.authService.setToken(res.access_token);
            this.toHomePage();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: err?.error?.message[0] || 'Erro ao logar!',
            });
          },
        });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Aviso',
        detail: 'Por favor, preencha os campos corretamente.',
      });
    }
  }
}
