import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { callbackify } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data={

    Pendings : [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],
  
    inProgress : [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
    done : [
      'Get up',
      'Brush teeth',
      'Walk dog'
    ]
}
 
  constructor() { }

  ngOnInit() {
    this.setItems();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  setItems(){
      Object.keys(this.data).forEach(callbackfn:(key) => {
        if(!localStorage.getItem(key)){
          localStorage.setItem(key,JSON.stringify(this.data[key]));
        
        }
        else{
          this.data[key]=JSON.parse(localStorage.getItem(key))
        }

      });
  }
  
  
  addTodo(todo){
    this.data.Pendings.push(todo.value);
    todo.value='';

  }

  }
  

