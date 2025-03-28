import { Routes } from '@angular/router';
import { MovieDetailsContent } from './components/movieDetails/movieDetailsContent/movieDetailsContent';
import { ContentComponent } from './components/home/content/content.component';
import { SearchContentComponent } from './components/search/content/searchContent.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/createAccount/create-account.component';
import { MyListContentComponent } from './components/my-list/content/my-list-content.component';
import { LoginAccountCreatedComponent } from './components/loginAccountCreated/login-account-created.component';
import { authGuard } from './services/myMovies/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'criar-conta',
    component: CreateAccountComponent,
  },
  {
    path: 'conta-criada',
    component: LoginAccountCreatedComponent,
  },
  {
    path: 'search',
    component: SearchContentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'detalhes-filme/:type/:id',
    component: MovieDetailsContent,
    canActivate: [authGuard],
  },
  {
    path: 'minhas-listas',
    component: MyListContentComponent,
    canActivate: [authGuard],
  },
];
