import { Component, Input } from '@angular/core';
import type { TmdbTrendingMovie } from '../../../types/TmdbTrending';
import { TrendingContentComponent } from '../trendingContent/trending-content.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ TrendingContentComponent],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  @Input({required: true}) trendingMovies: TmdbTrendingMovie[] | null = null
}
