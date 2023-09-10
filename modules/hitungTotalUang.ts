import DataPembayaran from "./classes/DataPembayaran.class";

export default function hitungTotalUang(dataKamarSudahBayar: DataPembayaran[]) {
  let totalUangTerbayar = 0;
  
  for (const pembayaran of dataKamarSudahBayar) {
    totalUangTerbayar += pembayaran.jml_bayar;
  }
  
  return totalUangTerbayar;
}