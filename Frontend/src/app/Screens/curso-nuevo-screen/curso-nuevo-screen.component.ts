import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CursosService} from '../../services/cursos.service';
import {Cursos} from 'src/app/interfaces/cursos';
import { Modulo, ListaModulos } from 'src/app/interfaces/modulo';


@Component({
  selector: 'app-curso-nuevo-screen',
  templateUrl: './curso-nuevo-screen.component.html',
  styleUrls: ['./curso-nuevo-screen.component.scss']
})
export class CursoNuevoScreenComponent implements OnInit {

  /* cursos:CursosService = new CursosService

  contenidos: any[] =[
    {
      url: "https://www.youtube.com/embed/AEiRa5xZaZw",
      titulo: "Introducción a la Programación Web",
      texto: "Módulo 1: Clase 1",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      url: "https://www.youtube.com/embed/xnWtGNiG2lg",
      titulo: "Aspectos Generales",
      texto: "Módulo 1: Clase 2",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      url: "https://www.youtube.com/embed/xnWtGNiG2lg",
      titulo: "Fundamentos de HTML y CSS",
      texto: "Módulo 1: Clase 1",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    }
  ] */


  ListaModulos=ListaModulos;
  Modulo:any;
  id:number = 0;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(datos => {
      this.id = datos["id"];
    })
  }

  
  ngOnInit() {

    
  }
  
  filtrar(lista: Modulo[], id:number): Modulo[]{
    let resultado: Modulo[] = [];
    



    return resultado;
  }


  getID(){
    let id =this.route.snapshot.params.id;
    return id;
  }

}
