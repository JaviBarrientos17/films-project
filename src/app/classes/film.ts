export class Film {
  titulo: string = '';
  sinopsis: string = '';
  descarga: string = '';
  img: string = '';

  constructor(
    titulo: string = '',
    sinopsis: string = '',
    descarga: string = '',
    img: string = ''
  ) {
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.descarga = descarga;
    this.img = img;
  }
}
