import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CentralComponent } from './central/central.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SpeedDialModule} from "primeng/speeddial";
import { ContactComponent } from './contact/contact.component';
import { VitaComponent } from './vita/vita.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CentralComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    VitaComponent,
    ProjectsComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
