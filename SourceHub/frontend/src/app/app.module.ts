import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/__PAGES/main/main.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NotFoundComponent } from './components/__PAGES/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
