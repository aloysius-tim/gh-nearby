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

  newAddress: any;
  newHeadline: string;
  newName: string;

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
  private modalRef;

  constructor(private usersService: UsersService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onAddGh(content){
    this.modalRef=this.modalService.open(content);
  }

  onSubmit(f){
    if(f.valid){
      console.log(this.newName+' '+this.newHeadline);
      console.log(this.newAddress);

      let user=new User(this.newName, this.newHeadline, this.newAddress.geometry.location.lat, this.newAddress.geometry.location.lng, this.newAddress.formatted_address);
      console.log(this.usersService.addUser(user));

      this.modalRef.close();
      this.usersService.userSelectionned=user;
    }
  }
}
