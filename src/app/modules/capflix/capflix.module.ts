import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapflixComponent } from './capflix.component';
import { BotaoCapflixModule } from 'src/app/shared/components/botao-capflix/botao-capflix.module';



@NgModule({
  declarations: [CapflixComponent],
  imports: [
    CommonModule,
    BotaoCapflixModule
  ]
})
export class CapflixModule { }
