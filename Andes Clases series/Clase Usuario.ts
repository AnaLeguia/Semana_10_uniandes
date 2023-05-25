class Usuario {
    private nombre: string;
    private rol: string;
    private descripcion: string;
    private listaUsuarios: Usuario[];
  
    constructor(nombre: string, rol: string, descripcion: string) {
      this.nombre = nombre;
      this.rol = rol;
      this.descripcion = descripcion;
      this.listaUsuarios = [];
    }
  
    public agregarUsuario(usuario: Usuario): void {
      this.listaUsuarios.push(usuario);
    }
  
    public obtenerListaUsuarios(): Usuario[] {
      return this.listaUsuarios;
    }
  
    public perfilUsuario(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Rol: ${this.rol}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  }