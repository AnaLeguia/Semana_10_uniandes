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
  
    mostrarListadoActor(): void {
      console.log("Listado del actor:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  
    mostrarDetalleActor(): void {
      console.log("Detalle del actor:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Series protagonizadas:");
      this.seriesProtagonizadas.forEach((serie) => {
        console.log(`- ${serie.nombre}`);
      });
    }
  
    agregarASerie(serie: Serie): void {
      this.seriesProtagonizadas.push(serie);
    }
  
    static crearNuevoActor(nombre: string, fotografia: string, descripcion: string): Actor {
      const nuevoActor = new Actor(nombre, fotografia, descripcion);
      return nuevoActor;
    }
  }