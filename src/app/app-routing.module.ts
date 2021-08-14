import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [
  {path:"Home",component:MyHomeComponent},
  {path:"Table",component:MyTableComponent},
  {path:"Form",component:MyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
