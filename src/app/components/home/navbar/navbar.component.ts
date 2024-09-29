import { Component, Input } from '@angular/core';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input({required: true}) topRatedtrendingMovies: TmdbTrendingMovie[] | [] = []
}
