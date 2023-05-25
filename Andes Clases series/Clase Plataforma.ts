class Plataforma {
  private nombre: string;
  private perfilUsuario: Usuario;
  private listaPlanes: string[];

  constructor(nombre: string, perfilUsuario: Usuario) {
    this.nombre = nombre;
    this.perfilUsuario = perfilUsuario;
    this.listaPlanes = [];
  }

  public agregarPlan(plan: string): void {
    this.listaPlanes.push(plan);
  }

  public obtenerListaPlanes(): string[] {
    return this.listaPlanes;
  }
}