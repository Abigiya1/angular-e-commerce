export class Product{
    id: number;
  	name: string;
	price: number;
	imageUrl: string;
	description: string;

    constructor(){
        this.id = NaN;
        this.name = '';
        this.price = NaN;
        this.imageUrl = '';
        this.description = '';
 }
 

}
export const PRODUCTS: Product[ ] = [
  		{ id: 1, name: 'Nike Adapt', price: 2000, description: 'Nike shoes have cool and aerodynamic designs depending on the sport. ',
          imageUrl: 'assets/Nike.jpg'},
  		{ id: 2, name: 'Nike', price: 3, description:'Nike shoes have cool and aerodynamic designs depending on the sport. ',
           imageUrl: 'assets/Nike2.jpg'},
  		{ id: 3, name: 'Puma', price: 2000, description:'PUMA offers performance and sport-inspired lifestyle products in categories such as Football, Running and Training, Basketball, Golf, and Motorsports. ', 
          imageUrl: 'assets/puma.jpg'},
          { id: 4, name: 'Puma', price: 2000, description:'PUMA offers performance and sport-inspired lifestyle products in categories such as Football, Running and Training, Basketball, Golf, and Motorsports. ', 
          imageUrl: 'assets/puma.jpg'},
          { id: 4, name: 'Sketchers', price: 2000, description:'Sketchers offers performance and sport-inspired lifestyle products in categories such as Football, Running and Training, Basketball, Golf, and Motorsports. ', 
          imageUrl: 'assets/Nike.jpg'}
];
