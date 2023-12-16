import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 actions:Array<any>=
 [
  {titre :"Accueil",route:"/accueil",icon: 'home'},
  {titre:"Liste des produits",route:"/produits",icon: 'list'},
  {titre :"Ajouter Produit",route:"/ajouterProduit",icon: 'plus'}
 ]
 actionCourante:any;
 setActionCourante(a:any)
 {
  this.actionCourante=a;
 }
}
