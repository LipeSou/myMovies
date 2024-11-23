import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details-header',
  standalone: true,
  imports: [],
  templateUrl: './movie-details-header.component.html',
})
export class MovieDetailsHeaderComponent {
  @Input({ required: true }) movieDetais: any | null
}
