import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListaDeporteComponent } from './lista-deporte/lista-deporte.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';

const routes: Routes = [
  {path:"personas",component:ListaPersonaComponent},
  {path:"deportes",component:ListaDeporteComponent},
  {path:"editar/:id",component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
