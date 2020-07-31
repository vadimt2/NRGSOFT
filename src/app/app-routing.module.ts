import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components';
import { AddPhotoComponent } from './photos/add-photo/add-photo.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path:'', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
