import {Component, OnInit, Input} from '@angular/core';
import {UsersService} from "../../shared/users.service";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }

  onSelectUser(){
    this.usersService.userSelectionned=this.user;
  }
}
