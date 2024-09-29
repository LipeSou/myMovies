import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-my-movies-title',
  standalone: true,
  imports: [],
  templateUrl: './ui-my-movies-title.component.html',
})
export class UiMyMoviesTitleComponent {
  @Input({required: true}) title: string = ""
}
