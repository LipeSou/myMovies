import { Component, Input } from '@angular/core';
import type { Details } from '../movieDetailsContent/movieDetailsContent';
import type { Flatrate } from '../../../types/MovieProvider';

@Component({
  selector: 'app-movie-details-header',
  standalone: true,
  imports: [],
  templateUrl: './movie-details-header.component.html',
})
export class MovieDetailsHeaderComponent {
  @Input({ required: true }) movieDetais: Details | null = null
  @Input({ required: true }) movieProvider: Flatrate[] | [] = []
}
