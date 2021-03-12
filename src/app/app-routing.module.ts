import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VacationFormComponent } from './vacation-form/vacation-form.component';
import { VacationResultComponent } from './vacation-result/vacation-result.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vacation-form', component: VacationFormComponent },
  { path: 'vacation-result', component: VacationResultComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
