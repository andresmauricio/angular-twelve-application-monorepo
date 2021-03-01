import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'projects/bitly/src/app/app.component';
import { CreateEditEmployeeComponent } from './components/create-edit-employee/create-edit-employee.component';

const routes: Routes = [
  { path: 'create', component: CreateEditEmployeeComponent },
  { path: 'edit:/id', component: CreateEditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
