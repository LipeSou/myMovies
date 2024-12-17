import { Component } from '@angular/core';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { TrendingContentComponent } from '../trendingContent/trending-content.component';
import { BestRatedContentComponent } from "../bestRatedContent/best-rated-content.component";
import { Time, Type, TrendingService } from '../../../services/tmdb/trendings/trending.service';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TrendingContentComponent, BestRatedContentComponent, NavbarComponent, FooterComponent],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  trendingMovies: TmdbTrendingMovie[] | [] = []
  topRatedTrendingMovie: TmdbTrendingMovie[] | [] = []
  loading: boolean = false
  

  constructor(private trendingService: TrendingService){}

  ngOnInit(): void {
    this.loading = true; // Inicia o carregamento

    this.trendingService.getTrendingMovies({
      time: Time.DAY, 
      type: Type.ALL
    }).subscribe({
      next: (data) => {
        const movies = [...data.results];
        this.trendingMovies = data.results;
        this.topRatedTrendingMovie = movies
          .slice(0, 7)
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 2);
      },
      error: (err) => {
        console.error('Erro ao carregar filmes', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
