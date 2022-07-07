import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { RmfComponent } from './rmf/rmf.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  { path: 'tdf', component: TdfComponent },
  { path: 'emp-form', component: EmpFormComponent },
  { path: 'rmf', component: RmfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
