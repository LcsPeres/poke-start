import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsModalComponent } from 'src/app/shared/components/stats-modal/stats-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatsModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
