import { Products } from './products';

export class dataSource{
    private DataModel:Products[];
constructor(){
    this.DataModel=new Array<Products>(
                             new Products (1 ,"samsung s5","iyi telefon","1.jpg",1000),
                             new Products (1 ,"samsung s5","iyi telefon","1.jpg",1000),
                             new Products (1 ,"samsung s5","iyi telefon","1.jpg",1000),
                             new Products (1 ,"samsung s5","iyi telefon","1.jpg",1000)
    );
}
getData() :Products[]{
    
    return this.DataModel;
}
}