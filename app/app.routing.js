"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./component/favoritos-list.component");
var favorito_detail_component_1 = require("./component/favorito-detail.component");
var favorito_add_component_1 = require("./component/favorito-add.component");
var favorito_edit_component_1 = require("./component/favorito-edit.component");
var appRoutes = [
    { path: "", component: favoritos_list_component_1.FavoritosListComponent },
    { path: "favorito/:id", component: favorito_detail_component_1.FavoritoDetailComponent },
    { path: "addfavorito", component: favorito_add_component_1.FavoritoAddComponent },
    { path: "editfavorito/:id", component: favorito_edit_component_1.FavoritoEditComponent },
    { path: "**", component: favoritos_list_component_1.FavoritosListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map