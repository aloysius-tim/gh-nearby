import {Injectable, EventEmitter} from '@angular/core';
import {User} from "../menu/user";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UsersService {
  private _users: User[] = [];
  /*new User('Tim','Test',43.7101728,7.261953199999994, 'Nice'),
   new User('Albert','Test',48.85661400000001,2.3522219000000177, 'Paris'),
   new User('Michel','Test',43.493236,6.361556999999948, 'Lorgues'),
   new User('Jean','Test',61.1152713,10.466230600000017, 'Lillehammer, Norway'),
   new User('Jacques','Test',45.764043,4.835658999999964, 'Lyon')*/
  private _userSelectionned: User=new User('Tim','Test',43.7101728,7.261953199999994, 'Nice');
  selectionChange = new EventEmitter<User>();
  usersChange = new EventEmitter<User[]>();

  constructor(private http:Http) { }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  get userSelectionned(): User {
    return this._userSelectionned;
  }

  set userSelectionned(value: User) {
    this._userSelectionned = value;
    this.selectionChange.emit(this._userSelectionned);
  }

  fetchData(){
    return this.http.get('https://gh-nearby-1481727452580.firebaseio.com/users.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data : User[]) => {
          this.users=data;
          this.usersChange.emit(this.users);
        }
      )
  }
}
