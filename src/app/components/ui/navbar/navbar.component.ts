import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { phosphorPopcornBold } from '@ng-icons/phosphor-icons/bold';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
providers: [provideIcons({ phosphorPopcornBold })],

  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
