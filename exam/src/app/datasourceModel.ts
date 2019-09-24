import { Products } from './products';

export class dataSource{
   DataModel:Products[];
constructor(){
    this.DataModel=new Array( [1 ,"samsung s5","iyi telefon","1.jpg",1000],
                              [1 ,"samsung s5","iyi telefon","1.jpg",1000],
                              [1 ,"samsung s5","iyi telefon","1.jpg",1000],
                            [1 ,"samsung s5","iyi telefon","1.jpg",1000])
    
    
   
}
getData(){
    return this.DataModel;
}
}