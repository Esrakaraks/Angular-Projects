import { Products } from './products';

export class dataSource{
    private DataModel:Products[];
constructor(){
    this.DataModel=new Array<Products>(
                             new Products (1 ,"samsung s5","iyi telefon","1.jpg",1000),
                             new Products (1 ,"samsung s6","iyi telefon","2.jpg",1000),
                             new Products (1 ,"samsung s7","iyi telefon","3.jpg",1000),
                             new Products (1 ,"samsung s8","iyi telefon","4.jpg",1000)
    );
}
getData() :Products[]{
    
    return this.DataModel;
}
}