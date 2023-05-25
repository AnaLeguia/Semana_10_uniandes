class Episodio {
    private nombre: string;
    private descripcion: string;
    private duracion: number;
  
    constructor(nombre: string, descripcion: string, duracion: number) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.duracion = duracion;
    }
  
    public seleccionarSerie(serie: Serie): void {
      // Implementación para seleccionar una serie
      console.log(`Seleccionando episodio ${this.nombre} de la serie ${serie.getNombre()}.`);
    }
  }