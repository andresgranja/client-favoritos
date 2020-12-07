"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var favorito_service_1 = require("../services/favorito.service");
var favorito_1 = require("../models/favorito");
var FavoritoAddComponent = (function () {
    function FavoritoAddComponent(_favoritoService, _route, _router) {
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.titleSection = "Crear Favorito";
    }
    FavoritoAddComponent.prototype.ngOnInit = function () {
        this.favorito = new favorito_1.Favorito("", "", "", "");
        console.log(this.favorito);
    };
    FavoritoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.favorito);
        this._favoritoService.addFavorito(this.favorito).subscribe(function (res) {
            if (!_this.favorito) {
                alert("error en el servidor");
            }
            else {
                _this.favorito = res.favorito;
                _this._router.navigate(["/favorito", _this.favorito._id]);
            }
        }, function (error) {
            _this.errorMensaje = error;
            if (_this.errorMensaje != null) {
                console.log(_this.errorMensaje);
                alert("error en la petición");
            }
        });
    };
    FavoritoAddComponent = __decorate([
        core_1.Component({
            selector: 'Favorito-add',
            templateUrl: "app/views/favorito-add.html",
            providers: [favorito_service_1.FavoritoService]
        }),
        __metadata("design:paramtypes", [favorito_service_1.FavoritoService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FavoritoAddComponent);
    return FavoritoAddComponent;
}());
exports.FavoritoAddComponent = FavoritoAddComponent;
//# sourceMappingURL=favorito-add.component.js.map