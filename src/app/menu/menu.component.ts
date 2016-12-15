import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import {UsersService} from "../shared/users.service";
import {User} from "./user";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() users:User[];

  constructor(private usersService: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onAddGh(content){
    this.modalService.open(content);
  }
}
