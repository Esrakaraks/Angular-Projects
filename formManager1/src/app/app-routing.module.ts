import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
{
    path:'',component:FormListComponent
  },

{
    path:'form',component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
