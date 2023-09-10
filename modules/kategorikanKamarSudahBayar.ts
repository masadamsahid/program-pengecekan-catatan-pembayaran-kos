import DataPembayaran from "./classes/DataPembayaran.class";

export default function kategorikanKamarSudahBayar(dataKamarSudahBayar: DataPembayaran[]) {
  const kamarTepatWaktu: number[] = [];
  const kamarTdkTepatWaktu: number[] = [];
  
  for (const pembayaran of dataKamarSudahBayar) {
    
    if (pembayaran.is_tepat_waktu()) {
      kamarTepatWaktu.push(pembayaran.no_kamar);
    } else {
      kamarTdkTepatWaktu.push(pembayaran.no_kamar);
    }
  }
  
  return [kamarTepatWaktu, kamarTdkTepatWaktu];
}