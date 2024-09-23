import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { TmdbTrendingMovie } from '../../types/TmdbTrending';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input({required: true}) trendingMovies: TmdbTrendingMovie[] | null = null
}
