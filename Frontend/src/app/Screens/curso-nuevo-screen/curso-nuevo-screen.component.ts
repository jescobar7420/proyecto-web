import { Component, OnInit } from '@angular/core';
import {CursosService} from '../../services/cursos.service';
import {VideoS} from 'src/app/interfaces/video'
import { ListaModulos } from 'src/app/interfaces/modulo';
 
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

  constructor() { }

  ngOnInit(): void {
    
  }

}
