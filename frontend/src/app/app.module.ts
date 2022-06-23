import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { ListaDeporteComponent } from './lista-deporte/lista-deporte.component';
import { PersonaProvider } from 'src/providers/personaProvider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeporteProvider } from 'src/providers/deporteProvider';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    ListaPersonaComponent,
    ListaDeporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaProvider,DeporteProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
