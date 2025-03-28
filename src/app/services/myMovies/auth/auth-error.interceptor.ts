import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

export const authErrorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const router = inject(Router);
  const messageService = inject(MessageService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        messageService.add({
          severity: 'warn',
          summary: error?.message ? 'Verifique seus dados' : 'Sessão Expirada',
          detail: error?.message
            ? 'Por favor, preencha os campos corretamente.'
            : 'Faça login novamente para continuar.',
        });
        router.navigate(['/login']);
      } else if (error.status === 403) {
        messageService.add({
          severity: 'error',
          summary: 'Acesso Proibido',
          detail: 'Você não tem permissão para acessar este recurso.',
        });
      }

      return throwError(() => error);
    })
  );
};
