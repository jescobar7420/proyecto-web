import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  constructor(private http:HttpClient) { }
  
  HttpUploadOptions = {
    headers: new HttpHeaders (
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
        'Content-Type': 'application/json',
      }
    ),
  };
  
  GetEmpleos():Observable<any> {
    return this.http.get(`${environment.hostname}/Empleos`);
  }


  /* private empleos:Array<empleo> = empleos;

  constructor() {
    this.empleos = this.sortEmpleos(empleos);
  }

  getEmpleos(){
    return empleos;
  }

  setEmpleos(empleos:Array<empleo>){
    this.empleos = empleos;
  }

  sortEmpleos(empleos:Array<empleo>){
    return this.empleos.sort((x,y) => +new Date(y.fecha) - +new Date(x.fecha));
  }

  reloadEmpleos(empleo:empleo):Array<empleo>{
    let aux = Object.create(empleos);
    let index = aux.indexOf(empleo);
    aux.splice(index,1);
    return aux;
  } */
}
