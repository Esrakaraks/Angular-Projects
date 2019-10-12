import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


	onChange(){
		console.log("hghef");
	}

  constructor() { }

  ngOnInit() {
  }

}
