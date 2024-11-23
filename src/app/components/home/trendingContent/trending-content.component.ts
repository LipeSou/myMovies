import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { UiMyMoviesTitleComponent } from '../../ui/my-movies-title/ui-my-movies-title.component';

@Component({
  selector: 'app-trending-content',
  standalone: true,
  imports: [
    NgOptimizedImage, CarouselModule, UiMyMoviesTitleComponent
],
  templateUrl: './trending-content.component.html',
})
export class TrendingContentComponent {
  @Input({required: true}) trendingMovies: TmdbTrendingMovie[] | null = null

  responsiveOptions = [
    {
      breakpoint: '3000px',
      numVisible: 9.5,
      numScroll: 4
    },
    {
      breakpoint: '1364px',
      numVisible: 8.5,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 6.5,
      numScroll: 4
    },
    {
      breakpoint: '768px',
      numVisible: 5.5,
      numScroll: 0
    },
    {
      breakpoint: '560px',
      numVisible: 3.2,
      numScroll: 0
    },
    {
      breakpoint: '375px',
      numVisible: 2.8,
      numScroll: 0
    }
  ];

  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}