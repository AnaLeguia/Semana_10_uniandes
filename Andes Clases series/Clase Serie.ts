class Serie {
    private categorias: string[];
    private imagenes: string[];
    private nombre: string;
    private episodios: number;
  
    constructor(nombre: string, episodios: number, categorias: string[], imagenes: string[]) {
      this.nombre = nombre;
      this.episodios = episodios;
      this.categorias = categorias;
      this.imagenes = imagenes;
    }
  
    public listaPersonas(): boolean {
      // Implementación de la lista de personas
      return true;
    }
  
    public listaEpisodios(): void {
      // Implementación de la lista de episodios
      console.log("Episodios:");
      for (let i = 1; i <= this.episodios; i++) {
        console.log(`- Episodio ${i}`);
      }
    }
  
    public listaCategorias(): void {
      // Implementación de la lista de categorías
      console.log("Categorías:");
      this.categorias.forEach((categoria) => {
        console.log(`- ${categoria}`);
      });
    }
  }