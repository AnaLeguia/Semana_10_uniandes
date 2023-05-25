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
  
    mostrarListadoDirectores(): void {
      console.log("Listado de directores:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  
    mostrarDetalleDirector(): void {
      console.log("Detalle del director:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Series dirigidas:");
      this.seriesDirigidas.forEach((serie) => {
        console.log(`- ${serie.nombre}`);
      });
    }
  
    static crearNuevoDirector(nombre: string, fotografia: string, descripcion: string): Director {
      const nuevoDirector = new Director(nombre, fotografia, descripcion);
      return nuevoDirector;
    }
  
    agregarASerie(serie: Serie): void {
      this.seriesDirigidas.push(serie);
    }
  }