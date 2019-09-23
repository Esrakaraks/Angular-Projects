import { Component, OnInit } from '@angular/core';
import {MovieData} from './movieData';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
     title= "movie App";
     movies=new MovieData ;
   

getItems(){
   return this.movies.items;
 }
 selectedMovie:MovieData;

 onSelected(items) : void{
    this.selectedMovie=items;

  }

 
}


 
  

   


