import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';

@Component({
  selector: 'app-trending-content',
  standalone: true,
  imports: [
    NgOptimizedImage, CarouselModule
  ],
  templateUrl: './trending-content.component.html',
})
export class TrendingContentComponent {
  @Input({required: true}) trendingMovies: TmdbTrendingMovie[] | null = null

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1 // Adicione esta linha
    },
    {
      breakpoint: '768px',
      numVisible: 4,
      numScroll: 1 // Adicione esta linha
    },
    {
      breakpoint: '560px',
      numVisible: 3,
      numScroll: 1 // Adicione esta linha
    }
  ];
}