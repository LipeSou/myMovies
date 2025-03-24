import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(MessageService);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    messageService.add({
      severity: 'warn',
      summary: 'Sessão expirada',
      detail: 'Sua sessão expirou. Faça login novamente.',
    });

    router.navigate(['/login']);
    return false;
  }
};
