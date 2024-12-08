import { Component } from '@angular/core';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { DiscoveryService } from '../../../services/tmdb/discovery/discovery.service';
import { MainSearchComponent } from "../mainSearch/mainSearch.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MainSearchComponent],
  templateUrl: './searchContent.component.html',
})
export class SearchContentComponent {
  discoveryMovies: any = []
  constructor(private discoveryService: DiscoveryService){}

  ngOnInit(): void {
    this.discoveryService.getAllTmdbMovies().subscribe((data) => {
      this.discoveryMovies = data.results.map(movie => {
        return {
          ...movie,
          media_type: "movie"
        }
      })
    })
  }
}
