export interface VideoS {
    idcurso: number,
    curso:string,
    idvideo:number,
    total: number,
    titulo: string,
    url: string
}

/* export interface CursoVideo {
  idCurso:number; //1, 1, 2
  idVideo:number; //2, 3, 1
}

export interface Videos {
  idVideo: number; // 1, 2, 3, 4
  url: string;  // asdsa adsad asdasd
} */


export let cursos: Array<VideoS>=[{
    idcurso:1,
    curso:"Programación",
    idvideo:1,
    total:3,
    titulo: "Curso de programación en Js",
    url:"https://www.youtube.com/embed/rEsSxd0L4GI",
    
  },{
    idcurso: 2,
    curso:"Diseño",
    idvideo:2,
    total: 3,
    titulo: "Curso de Diseño",
    url: "https://www.youtube.com/embed/rEsSxd0L4GI"
  },
  {
    idcurso: 3,
    curso:"Programación",
    idvideo:2,
    total: 3,
    titulo: "Curso de Desarrollo en Videojuegos",
    url: "https://www.youtube.com/embed/rEsSxd0L4GI"
  },
  {
    idcurso: 4,
    curso:"Diseño",
    idvideo:2,
    total: 3,
    titulo: "Curso de Diseño de Interfaz",
    url: "https://www.youtube.com/embed/rEsSxd0L4GI"
  },
  {
    idcurso: 5,
    curso:"Diseño",
    idvideo:2,
    total: 3,
    titulo: "Curso de Video Digital",
    url: "https://www.youtube.com/embed/rEsSxd0L4GI"
  },
  {
    idcurso: 6,
    curso:"Humanidades",
    idvideo:3,
    total: 3,
    titulo: "Curso de Filosofia",
    url: "https://www.youtube.com/embed/rEsSxd0L4GI"
  },
];