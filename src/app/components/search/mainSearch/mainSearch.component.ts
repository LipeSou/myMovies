import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [InputTextModule, CommonModule],
  templateUrl: './mainSearch.component.html',
})
export class MainSearchComponent {
  @Input({required: true}) discoveryMovies: any = [] = []
  constructor(private router: Router) {}

  toMovieDetails( mediaType: string, id: number ) {
    this.router.navigate(['/detalhes-filme', mediaType,  id])
  }
}
