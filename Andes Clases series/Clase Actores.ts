class Actor {
    private nombre: string;
    private fotografia: string;
    private descripcion: string;
    private seriesProtagonizadas: Serie[];
  
    constructor(nombre: string, fotografia: string, descripcion: string) {
      this.nombre = nombre;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.seriesProtagonizadas = [];
    }
  
    public agregarSerieProtagonizada(serie: Serie): void {
      this.seriesProtagonizadas.push(serie);
    }
  
    public obtenerSeriesProtagonizadas(): Serie[] {
      return this.seriesProtagonizadas;
    }
  }