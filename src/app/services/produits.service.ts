import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
@Injectable({
providedIn: 'root'
})
export class ProduitsService {
// Url du service web de gestion de produits
// commune pour toutes les méthodes
urlHote="http://localhost:3333/produits/";
url="http://localhost:3333/categories/";
constructor(private http :HttpClient)
{ }
getProduits() :Observable<Array<Produit>>
{
return this.http.get<Array<Produit>> (this.urlHote);
}
deleteProduit(idP: number|undefined)
{
return this.http.get (this.urlHote+"delete/" +idP);
}
addProduit(nouveau: Produit)
 {
return this.http.post<Array<Produit>> (this.urlHote,nouveau);
}
updateProduit(idP: number | undefined, nouveau: Produit)
 {
return this.http.put(this.urlHote+idP,nouveau);
}
getCategories() :Observable<Array<Categorie>>
{
return this.http.get<Array<Categorie>> (this.url);
}
}