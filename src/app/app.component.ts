import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/home/navbar/navbar.component";
import { ContentComponent } from "./components/home/content/content.component";
import { FooterComponent } from "./components/home/footer/footer.component";
import type {  TmdbTrendingMovie } from './types/TmdbTrending';
import { Time, Type, TrendingService } from './services/tmdb/trendings/trending.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  trendingMovies: TmdbTrendingMovie[] | null = null
  topRatedTrendingMovie: TmdbTrendingMovie | null = null
  

  constructor(private trendingService: TrendingService){}

  ngOnInit(): void {
    this.trendingService.getTrendingMovies({
      time: Time.DAY, 
      type: Type.ALL
    }).subscribe((data) => {
      const movies = [...data.results]
      this.trendingMovies = data.results
      this.topRatedTrendingMovie = movies.slice(0,7).sort((a,b) => b.vote_average - a.vote_average)[0]
    })
  }
}
