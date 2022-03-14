export class Customer{
    id: number;
  	name: string;
    gender: string;
    memberYear: number;
    email: string;
    image: string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.gender = '';
        this.memberYear = 0;
        this.email = '';
        this.image = '';
    }
}

export const CUSTOMERS: Customer[ ] = [
    { id: 1, name: 'Abebe Tefera',gender: 'Male', memberYear: 3, image: 'https://i.imgur.com/LohyFIN.jpg', email:'Abebe.tefera@gmail.com'},
    { id: 2, name: 'Abebech Gobena', gender: 'Female', memberYear: 4,image: 'https://i.imgur.com/o5uMfKo.jpg', email:'Abebech.gobena@gmail.com'},
    { id: 3, name: 'Cherenet Adanew', gender: 'Male',  memberYear: 1,image: 'https://i.imgur.com/C4egmYM.jpg', email:'Cherenet.Adanew@gmail.com'},
    { id: 4, name: 'Aderaw Abebe', gender: 'Male',  memberYear: 1,image: 'https://i.imgur.com/C4egmYM.jpg', email:'Cherenet.Adanew@gmail.com'},
    { id: 5, name: 'Cherenet Adanew', gender: 'Male',  memberYear: 1,image: 'https://i.imgur.com/C4egmYM.jpg', email:'Cherenet.Adanew@gmail.com'},
    { id: 6, name: 'Cherenet Adanew', gender: 'Male',  memberYear: 1,image: 'https://i.imgur.com/C4egmYM.jpg', email:'Cherenet.Adanew@gmail.com'},
    { id: 7, name: 'Cherenet Adanew', gender: 'Male',  memberYear: 1,image: 'https://i.imgur.com/C4egmYM.jpg', email:'Cherenet.Adanew@gmail.com'}
];