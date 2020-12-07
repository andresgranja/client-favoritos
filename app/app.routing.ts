import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FavoritosListComponent} from "./component/favoritos-list.component";
import {FavoritoDetailComponent} from "./component/favorito-detail.component";
import {FavoritoAddComponent} from "./component/favorito-add.component";
import {FavoritoEditComponent} from "./component/favorito-edit.component";


const appRoutes: Routes = [
    {path: "", component: FavoritosListComponent},
    {path: "favorito/:id", component: FavoritoDetailComponent},
    {path: "addfavorito", component: FavoritoAddComponent},
    {path: "editfavorito/:id", component: FavoritoEditComponent},

    
    {path: "**", component: FavoritosListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);