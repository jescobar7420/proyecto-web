import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cursos, Cursos } from 'src/app/interfaces/cursos'; 
import { ListaCursoVideo } from 'src/app/interfaces/cursovideo';
import { ListaModulos, Modulo } from 'src/app/interfaces/modulo';
import { Videos } from 'src/app/interfaces/videos'


@Component({
  selector: 'app-curso-nuevo-individual-screen',
  templateUrl: './curso-nuevo-individual-screen.component.html',
  styleUrls: ['./curso-nuevo-individual-screen.component.scss']
})

export class CursoNuevoIndividualScreenComponent implements OnInit {

  idcurso:any;
  ListaCursos = cursos;
  ListaModulos = ListaModulos;
  CursoActual:any;
  ModulosCurso = new Array<Modulo>();

  comentarios:any[] = [
    {
      id:1,
      autor:"Andrés Rodriguez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      id:2,
      autor:"Juliana Rivera",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor."
    },
    {
      id:3,
      autor:"Juan Camilo Gomez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(datos => {
      this.idcurso = datos["id"];
    })
  }

  ngOnInit(): void {
    this.CursoActual = (this.ListaCursos.find(objeto=>objeto.idcurso == this.idcurso));
    
    //Modulos que pertenecen al curso
    for(let i=0; i<ListaModulos.length; i++) {
      if(ListaModulos[i].idCurso == this.idcurso) {
        this.ModulosCurso.push(ListaModulos[i]);
      }
    }
  }

  //TEST
  valorRange():any {
    var valor = (<HTMLInputElement>document.getElementById("rangoModulo")).value;
    return valor;
  }
  
  
}




