class DataPembayaran {
  
  constructor(public tgl_bayar: Date, public no_kamar: number, public jml_bayar: number) {
  }
  
  is_tepat_waktu(): boolean {
    const hari_tgl_bayar = this.tgl_bayar.getDate();
    return hari_tgl_bayar >= 1 && hari_tgl_bayar <= 5;
  }
  
}

export default DataPembayaran;