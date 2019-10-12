import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	  courseForm: FormGroup;
 constructor() { }

  ngOnInit() {
   this.initForm();
  }

  onSubmit() {  
      console.log(this.courseForm.value);    
  }

  private initForm() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(''),
      'courseDesc': new FormControl(''),
      'courseAmount': new FormControl('')
    });
  }



}
