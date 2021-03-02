import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditEmployeeComponent } from './components/create-edit-employee/create-edit-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', component: ListEmployeesComponent},
  { path: 'create', component: CreateEditEmployeeComponent },
  { path: 'edit/:id', component: CreateEditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
