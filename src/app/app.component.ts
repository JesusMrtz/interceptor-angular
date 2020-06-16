import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) {
    userService.getUsers().subscribe((request: any) => {
      console.log(request);
    }, (error) => {
      console.log('Error en el APP component');
    });
  }
}
