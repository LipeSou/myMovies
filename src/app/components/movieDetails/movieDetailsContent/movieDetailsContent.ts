import { MovieDetailsService } from './../../../services/tmdb/movieDetails/movieDetails.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsHeaderComponent } from "../movie-details-header/movie-details-header.component";
import { TvDetailsService } from '../../../services/tmdb/tvDetails/tvDetails.service';
import type { Genres, Networks, Seasons } from '../../../types/TmdbTvDetails';
import type { Flatrate } from '../../../types/MovieProvider';
import { SeasonsDetailsComponent } from '../season-details/season-details.component';

export interface Details {
  title: string, 
  originalTitle: string, 
  posterPath: string | null, 
  backdropPath: string | null,
  overview: string, 
  genres: Genres[], 
  voteAverage: string,
  networks?: Networks[]
  seasons?: Seasons[]
}

@Component({
  selector: 'movie-details-content',
  standalone: true,
  imports: [NavbarComponent, MovieDetailsHeaderComponent, SeasonsDetailsComponent],
  templateUrl: './movieDetailsContent.component.html',
})
export class MovieDetailsContent {
  movie: Details | null = null
  movieId: number | null = null
  movieProvider: Flatrate[] | [] = []
  type: string | null = null

  constructor(
    private movieDetailsService: MovieDetailsService,
    private tvDetailsService: TvDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const getType = params.get('type');
      this.type = getType

      if (id) {
        this.movieId = +id; 
        if(getType === "tv"){
          this.loadTvDetails();
        }else{
          this.loadMovieDetails();
        }
      }
    });  
  }

  loadMovieDetails(): void {
    // busca os detalhes do filme
    this.movieDetailsService.getMovie({ 
      movieId: this.movieId as number
    }).subscribe(data => {
      const { 
        title, 
        original_title, 
        backdrop_path,
        poster_path, 
        overview, 
        genres, 
        vote_average,
      } = data

      this.movie = {
        title,
        originalTitle: original_title,
        overview,
        genres,
        posterPath: poster_path,
        backdropPath: backdrop_path,
        voteAverage: vote_average.toFixed(1)
      }
    })
    // busca quais streamings o filme esta disponivel
    this.movieDetailsService.getWatchProviders({
      movieId: this.movieId as number
    }).subscribe((data) => {
      const flatrateProviders = data.results?.BR?.flatrate || [];

      const providers = flatrateProviders.filter(provider => {
        if(provider.provider_name !== "Netflix basic with Ads"){
          return provider;
        }
        return
      })
      this.movieProvider = providers
    })
  }
  loadTvDetails(): void {
    this.tvDetailsService.getTv({ 
      tvId: this.movieId as number
    }).subscribe(data => {
      const { 
        name, 
        original_name, 
        backdrop_path, 
        poster_path,
        overview, 
        genres, 
        vote_average,
        networks,
        seasons
      } = data
      console.log("data tv", data)
      this.movie = {
        title: name,
        originalTitle: original_name,
        overview,
        genres,
        posterPath: poster_path,
        backdropPath: backdrop_path,
        voteAverage: vote_average.toFixed(1),
        networks,
        seasons
      }
    })
    // busca quais streamings o filme esta disponivel
    this.tvDetailsService.getTvProviders({
      movieId: this.movieId as number
    }).subscribe((data) => {

      const flatrateProviders = data.results?.BR?.flatrate || [];

      const providers = flatrateProviders.filter(provider => {
        if(provider.provider_name !== "Netflix basic with Ads"){
          return provider;
        }
        return
      })
      this.movieProvider = providers
    })
  }
}
