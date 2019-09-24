import { Products } from './products';
import { dataSource } from './datasourceModel';
import { VirtualTimeScheduler } from 'rxjs';

export class Repository{
    Datasource:dataSource;
    products:Products[];
    constructor(){
        this.Datasource=new dataSource;
        this.products=new Array<Products>();
        this.Datasource.getData().forEach(p=>this.products.push(p));

       

    }
}