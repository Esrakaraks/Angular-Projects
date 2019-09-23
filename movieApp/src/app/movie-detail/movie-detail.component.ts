import { Component, OnInit, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

   
  @Input()  movieDetail :MoviesComponent;
  constructor() { }

  ngOnInit() {
  }
}