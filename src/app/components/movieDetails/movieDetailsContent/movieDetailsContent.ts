import { MovieDetailsService } from './../../../services/tmdb/movieDetails/movieDetails.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsHeaderComponent } from "../movie-details-header/movie-details-header.component";
import { TvDetailsService } from '../../../services/tmdb/tvDetails/tvDetails.service';
import type { Genres } from '../../../types/TmdbTvDetails';

export interface Details {
  title: string, 
  originalTitle: string, 
  posterPath: string | null, 
  overview: string, 
  genres: Genres[], 
  voteAverage: string
}

@Component({
  selector: 'movie-details-content',
  standalone: true,
  imports: [NavbarComponent, MovieDetailsHeaderComponent],
  templateUrl: './movieDetailsContent.component.html',
})
export class MovieDetailsContent {
  movie: Details | null = null
  movieId: number | null = null

  constructor(
    private movieDetailsService: MovieDetailsService,
    private tvDetailsService: TvDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const type = params.get('type');
      if (id) {
        this.movieId = +id; 
        if(type === "tv"){
          this.loadTvDetails();
        }else{
          this.loadMovieDetails();
        }
      }
    });  
  }

  loadMovieDetails(): void {
    this.movieDetailsService.getMovie({ 
      movieId: this.movieId as number
    }).subscribe(data => {
      const { 
        title, 
        original_title, 
        poster_path, 
        overview, 
        genres, 
        vote_average
      } = data
      console.log("data movie", data)
      this.movie = {
        title,
        originalTitle: original_title,
        overview,
        genres,
        posterPath: poster_path,
        voteAverage: vote_average.toFixed(2)
      }
    })
  }
  loadTvDetails(): void {
    this.tvDetailsService.getTv({ 
      tvId: this.movieId as number
    }).subscribe(data => {
      const { 
        name, 
        original_name, 
        poster_path, 
        overview, 
        genres, 
        vote_average
      } = data
      console.log("data tv", data)
      this.movie = {
        title: name,
        originalTitle: original_name,
        overview,
        genres,
        posterPath: poster_path,
        voteAverage: vote_average.toFixed(2)
      }
    })
  }
}
