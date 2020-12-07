
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FavoritoService } from "../services/favorito.service";
import { Favorito } from "../models/favorito";


@Component({
   selector: 'favorito-edit',
   templateUrl: "app/views/favorito-edit.html",
   providers: [FavoritoService]
})


export class FavoritoEditComponent implements OnInit{
    public titleSection: string;
    public favorito: Favorito;
    public errorMensaje: string;

    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titleSection = "Editar Favorito";
    }

    ngOnInit(){
        this.favorito = new Favorito("","","","");
        this.getFavorito();
    }

    getFavorito(){
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            this._favoritoService.getFavorito(id).subscribe(
                res =>{
                    this.favorito = res.favoritos;
 
                    if (!this.favorito){
                        this._router.navigate(["/"])
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
        });
    };

    public onSubmit(){
        console.log(this.favorito);
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
        this._favoritoService.editFavorito(id, this.favorito).subscribe(
            res =>{
        
                if(!this.favorito){
                    alert("error en el servidor");
                }
                else{
                    this.favorito = res.favorito;
                    this._router.navigate(["/favorito", this.favorito._id]);
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
    });
}
}