import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class DeporteProvider{
    apiUrlBase: string = environment.apiUrlBase;

    constructor(private http: HttpClient) {

    }

    getDeportes(): Observable<any> {
        
        const url = this.apiUrlBase + "api/deporte/getdeportes";
        const headers={"content-type":"application/json"};
        let variable=this.http.get(url,{"headers":headers});
        return variable;
    }

}