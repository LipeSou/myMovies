import { Component, Input, type SimpleChanges } from '@angular/core';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { GalleriaModule } from 'primeng/galleria';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorFilmSlateBold } from "@ng-icons/phosphor-icons/bold"

interface Images {
  source: string,
  alt: string | undefined,
  title: string | undefined,
  id: string | number,
  mediaType: string
}

@Component({
  selector: 'best-rated-content',
  standalone: true,
  imports: [
    GalleriaModule, 
    NgIconComponent
  ],
  providers: [provideIcons({ phosphorFilmSlateBold })],
  templateUrl: './best-rated-content.component.html',
})
export class BestRatedContentComponent {
  @Input({required: true}) bestRateds: TmdbTrendingMovie[] | [] = []
  images: Images[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bestRateds']) {
      this.updateImages();
    }
  }

  updateImages() {
    this.images = this.bestRateds.map(movie => ({
      source: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.title || movie.name,
      title: movie.title || movie.name,
      overview: movie.overview,
      id: movie.id,
      mediaType: movie.media_type
    }));
  }

  toMovieDetails( mediaType: string, id: number ) {
    this.router.navigate(['/detalhes-filme', mediaType,  id])
  }
}
