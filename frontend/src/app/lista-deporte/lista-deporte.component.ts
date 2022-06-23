import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeporteProvider } from 'src/providers/deporteProvider';

@Component({
  selector: 'app-lista-deporte',
  templateUrl: './lista-deporte.component.html',
  styleUrls: ['./lista-deporte.component.css']
})
export class ListaDeporteComponent implements OnInit {

  listaDeportes:any =[];

  constructor(private router:Router,private deportesApi:DeporteProvider) { 
    this.getDeportes();
  }

  ngOnInit(): void {
  }
  async getDeportes(){
    this.deportesApi.getDeportes().subscribe((data)=>{
      
      this.listaDeportes=data;
    })
  }
}
