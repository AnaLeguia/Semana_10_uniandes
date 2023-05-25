class Plataforma {
  private nombre: string;
  private perfilUsuario: Usuario;
  private listaPlanes: string[];
  private listaCategorias: string[];

  constructor(nombre: string, perfilUsuario: Usuario) {
    this.nombre = nombre;
    this.perfilUsuario = perfilUsuario;
    this.listaPlanes = [];
    this.listaCategorias = [];
  }

  crearCategoria(nombreCategoria: string): void {
    this.listaCategorias.push(nombreCategoria);
  }

  mostrarCategorias(): void {
    console.log("Listado de categorías:");
    this.listaCategorias.forEach((categoria) => {
      console.log(categoria);
    });
  }

  static plataformas: Plataforma[] = [];

  static obtenerTodasLasPlataformas(): Plataforma[] {
    return Plataforma.plataformas;
  }

  static obtenerDetallePlataforma(nombre: string): Plataforma | undefined {
    return Plataforma.plataformas.find((plataforma) => plataforma.nombre === nombre);
  }

  static mostrarListadoPlataformas(): void {
    console.log("Listado de plataformas:");
    Plataforma.plataformas.forEach((plataforma) => {
      console.log(`Nombre: ${plataforma.nombre}, Perfil de usuario: ${plataforma.perfilUsuario}`);
    });
  }
}