import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorPopcornBold } from '@ng-icons/phosphor-icons/bold';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
providers: [provideIcons({ phosphorPopcornBold })],

  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  toHome() {
    this.router.navigate(['/'])
  }
}
