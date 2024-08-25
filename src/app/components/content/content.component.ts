import { NgOptimizedImage } from '@angular/common';
import { TmdbService } from './../../services/tmdb.service';
import { Component } from '@angular/core';
import type { TmdbList } from '../../types/TmdbList';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  tmdbMovie: TmdbList | null = null

  constructor(private tmdbService:TmdbService){}

  ngOnInit(): void {
    
    this.tmdbService.getAllTmdbMovies().subscribe((data) => {
      this.tmdbMovie = data
      console.log(data)
    })
  }
}
