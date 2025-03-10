import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorPopcorn,
  phosphorSignIn,
  phosphorUserPlus,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule, NgIcon],
  providers: [
    provideIcons({ phosphorPopcorn, phosphorSignIn, phosphorUserPlus }),
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  toHomePage() {
    this.router.navigate(['/']);
  }

  toSignInPage() {
    this.router.navigate(['/criar-conta']);
  }

  // input de busca e debounce
  searchLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    // this.searchLogin.get('name')?.valueChanges
    //   .pipe()
    //   .subscribe((query: string | null) => {
    //     if ((query as string)?.trim().length > 0) {
    //       this.onSearch(query as string);
    //     } else {
    //       // Se o usuário apagar o texto, limpa os resultados da busca
    //       this.searchMovies = [];
    //     }
    //   });

    // this.usersService
    //     .createUser({ name: name!, email: email!, password: password! })
    //     .subscribe({
    //       next: () => {
    //         this.messageService.add({
    //           severity: 'success',
    //           summary: 'Sucesso',
    //           detail: 'Conta criada com sucesso!',
    //         });

    //         this.toAccountCreatePage();
    //       },
    //       error: (err) => {
    //         this.messageService.add({
    //           severity: 'error',
    //           summary: 'Erro',
    //           detail: err?.error?.message[0] || 'Erro ao criar conta!',
    //         });
    //       },
    //     });
    // } else {
    //   this.messageService.add({
    //     severity: 'warn',
    //     summary: 'Aviso',
    //     detail: 'Por favor, preencha os campos corretamente.',
    //   });
    // }

    this.toHomePage();
  }
}
