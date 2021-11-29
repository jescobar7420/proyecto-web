import { Injectable } from '@angular/core';
import { cursos, VideoS } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  
  private cursos:Array<VideoS> = cursos;


  constructor() { }

  getCursos(){
    return cursos;
  }

  setCursos(empleos:Array<VideoS>){
    this.cursos = cursos;
  }

}