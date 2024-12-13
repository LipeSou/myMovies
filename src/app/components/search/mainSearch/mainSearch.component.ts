import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SearchService } from '../../../services/tmdb/search/search.service';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mainSearch.component.html',
})
export class MainSearchComponent {
  @Input({required: true}) discoveryMovies: any = [] = []
  constructor(private router: Router, private searchService: SearchService) {}
  searchMovies:  TmdbTrendingMovie[] | [] = []

  toMovieDetails( mediaType: string, id: number ) {
    this.router.navigate(['/detalhes-filme', mediaType,  id])
  }

  // input de busca e debounce 
  searchForm = new FormGroup({
    text: new FormControl('') 
  });

  onSearch(query: string) {
    this.searchService.getSearch({query}).subscribe((data) => {
      const movies = [...data.results]
      this.searchMovies = movies
    })
  }

  ngOnInit() {
    this.searchForm.get('text')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((query: string | null) => {
        if ((query as string)?.trim().length > 0) {
          this.onSearch(query as string);
        } else {
          // Se o usuário apagar o texto, limpa os resultados da busca 
          this.searchMovies = [];
        }
      });
  }
  
}
