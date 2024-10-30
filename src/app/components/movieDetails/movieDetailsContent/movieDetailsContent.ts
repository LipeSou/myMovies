import { MovieDetailsService } from './../../../services/tmdb/movieDetails/movieDetails.service';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-details-content',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './movieDetailsContent.component.html',
})
export class MovieDetailsContent {
  movie: any
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
      console.log("data", data)
    })
  }
}
