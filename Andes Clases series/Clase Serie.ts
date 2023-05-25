class Serie {
  categoria: string;
  imagenes: string[];
  nombre: string;
  episodios: number;

  constructor(categoria: string, imagenes: string[], nombre: string, episodios: number) {
    this.categoria = categoria;
    this.imagenes = imagenes;
    this.nombre = nombre;
    this.episodios = episodios;
  }
}

