import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { PracticeComponent } from './practice/practice.component';
import { RmfComponent } from './rmf/rmf.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  { path: 'tdf', component: TdfComponent },
  { path: 'emp-form', component: EmpFormComponent },
  { path: 'rmf', component: RmfComponent },
  { path: 'practice', component: PracticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
