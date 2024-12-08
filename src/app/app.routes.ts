import { Routes } from '@angular/router';
import { MovieDetailsContent } from './components/movieDetails/movieDetailsContent/movieDetailsContent';
import { ContentComponent } from './components/home/content/content.component';
import { SearchContentComponent } from './components/search/content/searchContent.component';

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'search', component: SearchContentComponent},
  { path: 'detalhes-filme/:type/:id', component: MovieDetailsContent}
];
