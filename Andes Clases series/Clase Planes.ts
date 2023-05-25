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

  public seleccionarPlataforma(plataforma: string): void {
    this.nombrePlataforma = plataforma;
  }

  public obtenerPrecioTotal(): number {
    return this.precio;
  }

  public realizarPagoEfectivo(codigo: string): void {
    if (this.pagoEfectivo) {
      console.log(`Realizando pago en efectivo para ${this.nombrePlataforma} con el código ${codigo}.`);
    } else {
      console.log(`El pago en efectivo no está disponible para ${this.nombrePlataforma}.`);
    }
  }

  public realizarPagoVirtual(): void {
    if (this.pagoTarjeta) {
      console.log(`Realizando pago virtual para ${this.nombrePlataforma}.`);
    } else {
      console.log(`El pago virtual no está disponible para ${this.nombrePlataforma}.`);
    }
  }
}