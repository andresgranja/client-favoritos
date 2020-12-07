
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FavoritoService} from "../services/favorito.service";
import { Favorito } from "../models/favorito";

@Component({
   selector: 'favorito-detail',
   templateUrl: "app/views/favorito-detail.html",
   providers: [FavoritoService]
})

export class FavoritoDetailComponent implements OnInit{
    public errorMensaje: string;
    public favorito: Favorito;

   constructor(
       private _favoritoService: FavoritoService,
       private _route: ActivatedRoute,
       private _router: Router
   ){}

   ngOnInit(){
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
}