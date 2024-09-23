import { Component, Input } from '@angular/core';
import type { TmdbTrendingMovie } from '../../types/TmdbTrending';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({required: true}) topRatedtrendingMovies: TmdbTrendingMovie | null = null
}
