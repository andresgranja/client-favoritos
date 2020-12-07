import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from "@angular/forms";
import { FavoritosListComponent } from "./component/favoritos-list.component";
import { HttpModule, JsonpModule } from "@angular/http";
import { routing, appRoutingProviders} from "./app.routing"; 
import { FavoritoDetailComponent } from "./component/favorito-detail.component";
import { FavoritoAddComponent } from "./component/favorito-add.component";
import { FavoritoEditComponent } from "./component/favorito-edit.component";


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ 
    AppComponent,
    FavoritosListComponent,
    FavoritoDetailComponent,
    FavoritoAddComponent,
    FavoritoEditComponent
    ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }