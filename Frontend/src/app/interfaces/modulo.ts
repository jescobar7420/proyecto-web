export interface Modulo {
    idModulo: number;
    url: string;
    titulo: string;
    texto: string;
    descripcion: string;
    idCurso: number;
}

export let ListaModulos:Array<Modulo> =[
    {
        idModulo: 1,
        url: "https://www.youtube.com/embed/AEiRa5xZaZw",
        titulo: "Introducción a la Programación Web",
        texto: "Módulo 1: Clase 1",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        idCurso: 1
    },
    {
        idModulo: 1,
        url: "https://www.youtube.com/embed/AEiRa5xZaZw",
        titulo: "Aspectos Generales",
        texto: "Módulo 1: Clase 2",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        idCurso: 1
    },
    {
        idModulo: 1,
        url: "https://www.youtube.com/embed/AEiRa5xZaZw",
        titulo: "Fundamentos de HTML y CSS",
        texto: "Módulo 1: Clase 1",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        idCurso: 1
    },
]
