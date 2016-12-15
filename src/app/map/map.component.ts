import {Component, OnInit, Input} from '@angular/core';
import {UsersService} from "../shared/users.service";
import {User} from "../menu/user";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() users: User[];
  selectedUser: User;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.selectedUser=this.usersService.userSelectionned;
    this.usersService.selectionChange.subscribe(
      (user: User) => this.selectedUser=user
    );
  }
}
