import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Persona } from "src/app/interfaces/Persona";

@Injectable()
export class PersonaProvider{
    apiUrlBase: string = environment.apiUrlBase;

    constructor(private http: HttpClient) {

    }

    getPersonas(): Observable<any> {
        
        const url = this.apiUrlBase + "api/persona/GetTodas";
        const headers={"content-type":"application/json"};
        let variable=this.http.get(url,{"headers":headers});
        return variable;
    }
    getPersona(id:string): Observable<any> {
        const url = this.apiUrlBase + "api/persona/GetPersona/"+id;
        const headers={"content-type":"application/json"};
        let variable=this.http.get(url,{"headers":headers});
        return variable;
    }
    editarPersona(persona:Persona): Observable<any>{
        const comando = {
            "id":persona.id,
            "nombre":persona.nombre,
            "apellido": persona.apellido,
            "dni": persona.dni
        };

        const url = this.apiUrlBase + "api/persona/UpdatePersona";
        const headers={"content-type":"application/json"};
        const body=JSON.stringify(comando);
        console.log(body);
        return this.http.put(url,body,{"headers":headers}); 
    }

}