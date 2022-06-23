import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaProvider } from 'src/providers/personaProvider';
import { Persona } from '../interfaces/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  idPersona:string="";
  nombre:string="";
  apellido:string="";
  dni:string="";
  persona={} as Persona;

  constructor(private route:ActivatedRoute,private personaApi:PersonaProvider,private router:Router) { 
    this.idPersona=this.route.snapshot.params["id"];
    this.getPersona(this.idPersona);
  }

  ngOnInit(): void {
  }
  async getPersona(id:string){
    this.personaApi.getPersona(id).subscribe((data)=>{
      if(data.ok){
        this.nombre=data.nombre;
        this.apellido=data.apellido;
        this.dni=data.dni;
      }
      else{
        alert(data.error);
      }
    })
  }
  async editarPersona(){
    
    if(this.nombre==null || this.nombre==""){
      alert("Debe especificar un nombre");
      return;
    }
    if(this.apellido==null || this.apellido==""){
      alert("Debe especificar un apellido");
      return;
    }
    if(this.dni==null || this.dni==""){
      alert("Debe especificar un dni");
      return;
    }
    
    this.persona.id=this.idPersona;
    this.persona.nombre=this.nombre;
    this.persona.apellido=this.apellido;
    this.persona.dni=this.dni;

    this.personaApi.editarPersona(this.persona).subscribe((data)=>{
      if(data.ok){
        alert("edicion correcta");
        this.router.navigateByUrl("/personas");
      }
      else{
        alert(data.error);
      }
    })
  }
  returnListaPersonas(){
    this.router.navigateByUrl("/personas");
  }
}
