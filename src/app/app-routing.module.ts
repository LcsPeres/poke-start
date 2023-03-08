import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapflixComponent } from './modules/capflix/capflix.component';
import { HomeComponent } from './modules/home/home.component';
import { ModalComponent } from './modules/modal/modal.component';


const routes: Routes = [
  { path: '', component: CapflixComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
