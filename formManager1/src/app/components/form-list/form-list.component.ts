import { Component, OnInit,Input ,Output} from '@angular/core';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit  {
  formdata : FormComponent=new FormComponent();
      
      
       getClasses(){
         let newdatas =this.formdata.initForm();
          return newdatas;
       }
    
    




  



}
