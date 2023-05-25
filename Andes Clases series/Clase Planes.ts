class Plan {
  private nombrePlataforma: string;
  private precio: number;
  private pagoEfectivo: boolean;
  private pagoTarjeta: boolean;

  constructor(nombrePlataforma: string, precio: number, pagoEfectivo: boolean, pagoTarjeta: boolean) {
    this.nombrePlataforma = nombrePlataforma;
    this.precio = precio;
    this.pagoEfectivo = pagoEfectivo;
    this.pagoTarjeta = pagoTarjeta;
  }
}
