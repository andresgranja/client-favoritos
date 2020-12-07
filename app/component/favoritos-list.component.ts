import {Component, OnInit} from "@angular/core";
import {FavoritoService} from "../services/favorito.service";
import {Favorito} from "../models/favorito";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "favoritos-list",
    templateUrl: "app/views/favoritos-list.html",
    providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit{
    public title: string;
    public errorMensaje;
    public favoritos: Favorito[];
    
    public loading: boolean;

    public confirmado;

    constructor(
        private _favoritoService: FavoritoService
    ){
        this.title = "Listado de componentes...";
        this.loading = true;
    }

    ngOnInit(){
        console.log("FavoritoslistComponent cargado!");
        this.getFavoritos();
    }

    getFavoritos(){
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;

                if(!this.favoritos) {
                    alert("Error en el servidor...");
                }else{
                    this.loading = false;
                }
            },
            error => {
                this.errorMensaje = <any>error;
                if(this.errorMensaje != null){
                    console.log(this.errorMensaje);
                    alert("error en la petición");
                }
            }
        );
    }
    
    onBorrarFavorito(id){
        this._favoritoService.deleteFavorito(id).subscribe(
            resul =>{
                if(!resul.mensaje){
                    alert("error en la petición");
                }else{
                    this.getFavoritos();
                }
            },
            error =>{
                this.errorMensaje = <any>error;
                if(this.errorMensaje != null){
                    console.log(this.errorMensaje);
                    alert("error en la petición");
                }
            }
        );
    }

    onBorrarConfirm(id){
        this.confirmado = id;
    }

    onCancelarConfirm(id){
        this.confirmado = null;
    }
}