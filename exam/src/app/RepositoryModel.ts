import { Products } from './products';
import { dataSource } from './datasourceModel';


export class Repository{
    Datasource:dataSource;
     products:Products[];
    constructor(){
        this.Datasource=new dataSource;
        this.products=new Array<Products>();
        this.Datasource.getData().forEach(p=>this.products.push(p));
    }
    getproduct(){
        return this.products;
    }
    getproductById(id :number) : Products {
       return this.products.find(p => p.id == id)
    }
}