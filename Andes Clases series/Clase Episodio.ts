class Episodio {
  nombrePersona: string;
  descripcionSerie: string;
  duracionCapitulo: number;

  constructor(nombrePersona: string, descripcionSerie: string, duracionCapitulo: number) {
    this.nombrePersona = nombrePersona;
    this.descripcionSerie = descripcionSerie;
    this.duracionCapitulo = duracionCapitulo;
  }
}