class Director {
    private nombre: string;
    private fotografia: string;
    private descripcion: string;
    private seriesDirigidas: Serie[];
  
    constructor(nombre: string, fotografia: string, descripcion: string) {
      this.nombre = nombre;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.seriesDirigidas = [];
    }
  
    public agregarSerieDirigida(serie: Serie): void {
      this.seriesDirigidas.push(serie);
    }
  
    public obtenerSeriesDirigidas(): Serie[] {
      return this.seriesDirigidas;
    }
  }