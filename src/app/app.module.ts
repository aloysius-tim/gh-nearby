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
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import {AngularFireModule} from "angularfire2";


export const firebaseConfig = {
  apiKey: "AIzaSyCzoEl2F3S_DtCHydZeICkQkEF2U6OG91E",
  authDomain: "gh-nearby-1481727452580.firebaseapp.com",
  databaseURL: "https://gh-nearby-1481727452580.firebaseio.com",
  storageBucket: "gh-nearby-1481727452580.appspot.com",
  messagingSenderId: "113897804853"
};

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
    ReactiveFormsModule,
    Ng2AutoCompleteModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
