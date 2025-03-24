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
  phosphorUserPlus,
} from '@ng-icons/phosphor-icons/regular';
import { UsersService } from '../../services/myMovies/users/users.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    NgIcon,
  ],
  providers: [
    provideIcons({ phosphorPopcorn, phosphorUserPlus }),
    MessageService,
  ],
  templateUrl: './create-account.component.html',
})
export class CreateAccountComponent {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private messageService: MessageService
  ) {}

  toAccountCreatePage() {
    this.router.navigate(['/conta-criada']);
  }

  searchLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onCreateAccount() {
    if (this.searchLogin.valid) {
      const { name, email, password } = this.searchLogin.value;
      this.usersService
        .createUser({ name: name!, email: email!, password: password! })
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Conta criada com sucesso!',
            });

            this.toAccountCreatePage();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: err?.error?.message[0] || 'Erro ao criar conta!',
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
