import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/services/bolsa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleo } from 'src/app/interfaces/bolsa';

@Component({
  selector: 'app-empleos-screen',
  templateUrl: './empleos-screen.component.html',
  styleUrls: ['./empleos-screen.component.scss']
})
export class EmpleosScreenComponent implements OnInit {
 
  id:number=0;
  empleosRelacionados:any
  ListaEmpleos = new Array<Empleo>();
  
  constructor(private ruta:ActivatedRoute, private router: Router, private http:BolsaService) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
  }

  ngOnInit(): void {
    this.http.GetEmpleos().subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaEmpleos.push(datos.items[i]);
      }
    })
  
    /* this.empleo = empleos.find(objeto=>objeto.idEmpleo==this.id);
    this.empleosRelacionados = this.bolsa.reloadEmpleos(this.empleo!);
    this.empleosRelacionados.splice(2,this.empleosRelacionados.length); */
  }


}
