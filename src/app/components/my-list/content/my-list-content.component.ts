import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { UsersService } from '../../../services/myMovies/users/users.service';
import type { SearchUserResponse } from '../../../types/Users';
import { MessageService } from 'primeng/api';
import { UiMyMoviesTitleComponent } from "../../ui/my-movies-title/ui-my-movies-title.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavbarComponent, UiMyMoviesTitleComponent],
  templateUrl: './my-list-content.component.html',
  providers: [MessageService]
})
export class MyListContentComponent {
  user: SearchUserResponse | null = null
  loading: boolean = false
  

  constructor(private usersService: UsersService,
        private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.usersService.searchUser({
      id: "09166b28-8c4f-4f87-8aaa-0aaa7c871a58"
    }).subscribe({
      next: (data) => {
        this.user = data[0]
      },
      error: (err) => {
        console.error(err)
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao buscar usuário!' });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
