import { MovieDetailsService } from './../../../services/tmdb/movieDetails/movieDetails.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsHeaderComponent } from "../movie-details-header/movie-details-header.component";

@Component({
  selector: 'movie-details-content',
  standalone: true,
  imports: [NavbarComponent, MovieDetailsHeaderComponent],
  templateUrl: './movieDetailsContent.component.html',
})
export class MovieDetailsContent {
  movie: any | null = null
  movieId: number | null = null

  constructor(
    private movieDetailsService: MovieDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.movieId = +id; // Converter para número
        this.loadMovieDetails();
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
        backdrop_path, 
        overview, 
        genres, 
        release_date
      } = data
      console.log("data", data)
      this.movie = {
        title,
        originalTitle: original_title,
        overview,
        genres,
        backdropPath: backdrop_path,
        releaseDate: release_date
      }
    })
  }
}
