import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {CentralComponent} from "./central/central.component";
import {VitaComponent} from "./vita/vita.component";
import {ContactComponent} from "./contact/contact.component";
import {ImpressumComponent} from "./impressum/impressum.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CentralComponent, title: 'alexander wiltz'},
  {path: 'projects', component: ProjectsComponent, title: 'aw - Projects'},
  {path: 'vita', component: VitaComponent, title: 'aw - Vita'},
  {path: 'contact', component: ContactComponent, title: 'aw - Contact'},
  {path: 'impressum', component: ImpressumComponent, title: 'aw - Impressum'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
