import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/__PAGES/main/main.component";
import {NotFoundComponent} from "./components/__PAGES/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
