import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	  courseForm: FormGroup;

ngOnInit() {

   this.initForm();

  }
  
  onSubmit() { 
 
      const data =this.courseForm.value; 
      return(Object.values(data));
  }
        
  


  initForm() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(''),
      'courseSurName': new FormControl(''),
      'courseAge': new FormControl('')
    });
  }



}
