import { Repository } from './../RepositoryModel';
import { Component, OnInit } from '@angular/core';
import { Products } from "./../products";
@Component({
  selector: 'app-root',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
      model : Repository=new Repository();
      
      
       getClasses(id:number) :string {
         let pruduct =this.model.getproductById(id);
         return(pruduct.price<= 1000 ? "bg-info" : "bg-secondary")+ "m-2 p-2"
       }
    
    
  
 
  
}
