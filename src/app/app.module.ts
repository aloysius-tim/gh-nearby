import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AgmCoreModule} from "angular2-google-maps/core";
import { UserComponent } from './menu/user/user.component';
import {UsersService} from "./shared/users.service";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYg6OkarWUMCyrimfhUWHfVDGy9FPrZU4',
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
