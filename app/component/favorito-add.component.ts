
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FavoritoService } from "../services/favorito.service";
import { Favorito } from "../models/favorito";


@Component({
   selector: 'Favorito-add',
   templateUrl: "app/views/favorito-add.html",
   providers: [FavoritoService]
})


export class FavoritoAddComponent implements OnInit{
    public titleSection: string;
    public favorito: Favorito;
    public errorMensaje: string;

    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titleSection = "Crear Favorito";
    }

    ngOnInit(){
        this.favorito = new Favorito("","","","");
        console.log(this.favorito);
    }

    public onSubmit(){
        console.log(this.favorito);

        this._favoritoService.addFavorito(this.favorito).subscribe(
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
    }
}