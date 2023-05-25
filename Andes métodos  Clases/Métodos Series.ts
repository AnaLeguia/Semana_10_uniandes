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


static series: Serie[] = [];

static obtenerTodasLasSeries(): Serie[] {
  return Serie.series;
}

static obtenerDetalleSerie(nombre: string): Serie | undefined {
  return Serie.series.find((serie) => serie.nombre === nombre);
}

static crearNuevaSerie(categoria: string, imagenes: string[], nombre: string, episodios: number): void {
  const nuevaSerie = new Serie(categoria, imagenes, nombre, episodios);
  Serie.series.push(nuevaSerie);
}
}