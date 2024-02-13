import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './comps/top-bar/top-bar.component';
import { MainPageComponent } from './comps/__PAGES/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
