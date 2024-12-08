import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorPopcorn, phosphorMagnifyingGlass } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
providers: [provideIcons({ phosphorPopcorn, phosphorMagnifyingGlass })],

  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  toHome() {
    this.router.navigate(['/'])
  }
  toSearch() {
    this.router.navigate(['/search'])
  }
}
