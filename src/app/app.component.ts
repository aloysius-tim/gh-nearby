import {Component, OnInit} from '@angular/core';
import {User} from "./menu/user";
import {UsersService} from "./shared/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users : User[];

  constructor(private userService: UsersService) {}

  ngOnInit(){
    this.userService.fetchData();
    this.userService.usersChange.subscribe(
      (users : User[]) => this.users=users
    );
  }
}
