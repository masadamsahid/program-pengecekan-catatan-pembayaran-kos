import DataPembayaran from "./classes/DataPembayaran.class";

export default function cekDaftarKamarBelumBayar(daftarKamarSudahBayar: DataPembayaran[]) {
  
  const kamarBelumBayar: number[] = [];
  
  for (let i = 1; i <= 10; i++) {
    const apakahSudahBayar = daftarKamarSudahBayar.find((pembayaran) => i === pembayaran.no_kamar);
    
    if (!apakahSudahBayar) kamarBelumBayar.push(i);
  }
  
  return kamarBelumBayar;
}