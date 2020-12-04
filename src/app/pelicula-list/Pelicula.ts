export interface Pelicula {
    name: string;
    img: string,
    genero: string,
    estreno: string,
    disponible: number;
    reserva?:number;
}
