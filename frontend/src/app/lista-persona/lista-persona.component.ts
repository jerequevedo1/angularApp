import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaProvider } from 'src/providers/personaProvider';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  listaPersonas:any =[];
  
  constructor(private router:Router,private personasApi:PersonaProvider) { 
    this.getPersonas();
  }

  ngOnInit(): void {
  }

  async getPersonas(){
    this.personasApi.getPersonas().subscribe((data)=>{
      if(data.ok){
        this.listaPersonas=data.listaPersonas;
      }
      else{
        alert(data.error);
      }
    })
  }

  editarPersona(idPersona:string){
    this.router.navigateByUrl("/editar/"+idPersona);
  }

}
