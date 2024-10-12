import { Component, Input, type SimpleChanges } from '@angular/core';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { GalleriaModule } from 'primeng/galleria';
import { Router } from '@angular/router';

@Component({
  selector: 'best-rated-content',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './best-rated-content.component.html',
})
export class BestRatedContentComponent {
  @Input({required: true}) bestRateds: TmdbTrendingMovie[] | [] = []
  images: any[] = [];

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
    console.log("this.bestRateds", this.bestRateds)
    this.images = this.bestRateds.map(movie => ({
      source: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
      alt: movie.title || movie.name,
      title: movie.title || movie.name,
      id: movie.id
    }));
  }

  toMovieDetails(id: number) {
    this.router.navigate(['/detalhes-filme', id])
  }
}
