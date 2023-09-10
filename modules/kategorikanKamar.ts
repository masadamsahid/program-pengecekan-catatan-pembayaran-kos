import DataPembayaran from "./classes/DataPembayaran.class";
import kategorikanKamarSudahBayar from "./kategorikanKamarSudahBayar";
import cekDaftarKamarBelumBayar from "./cekDaftarKamarBelumBayar";

export default function kategorikanKamar(dataKamarSudahBayar: DataPembayaran[]) {
  
  const kamarSudahBayar = kategorikanKamarSudahBayar(dataKamarSudahBayar);
  const kamarBelumBayar = cekDaftarKamarBelumBayar(dataKamarSudahBayar);
  
  return [
    kamarSudahBayar[0],
    kamarSudahBayar[1],
    kamarBelumBayar
  ];
}