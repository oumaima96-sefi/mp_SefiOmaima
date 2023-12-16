import { Categorie } from '../model/categorie';
export class Produit {
    id:number | undefined;
    code:string | undefined;
    designation: string | undefined;
    prix:number | undefined;
    couleur:string | undefined;
    categorie: Categorie | undefined; 

  
    
    
  constructor() {
    this.id = 0;
    this.code = '';
    this.designation = '';
    this.prix = 0;
    this.couleur = '';
    this.categorie = undefined;

  }  }