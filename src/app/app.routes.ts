import { Routes } from '@angular/router';
import { MovieDetailsContent } from './components/movieDetails/movieDetailsContent/movieDetailsContent';
import { ContentComponent } from './components/home/content/content.component';

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'detalhes-filme/:type/:id', component: MovieDetailsContent}
];
