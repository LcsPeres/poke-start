import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ModalModule } from './modules/modal/modal.module';
import { CapflixModule } from './modules/capflix/capflix.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ModalModule,
    CapflixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
