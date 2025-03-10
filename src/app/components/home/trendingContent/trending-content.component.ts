import { Component, HostListener, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { UiMyMoviesTitleComponent } from '../../ui/my-movies-title/ui-my-movies-title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-content',
  standalone: true,
  imports: [ CarouselModule, UiMyMoviesTitleComponent ],
  templateUrl: './trending-content.component.html',
})
export class TrendingContentComponent {
  @Input({required: true}) trendingMovies: TmdbTrendingMovie[] | null = null
  @Input({required: true}) loading: boolean = false
  constructor(private router: Router) {}
  
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

  toMovieDetails( mediaType: string, id: number ) {
    this.router.navigate(['/detalhes-filme', mediaType,  id])
  }
}