import fs from "fs";
import DataPembayaran from "./classes/DataPembayaran.class";
import convertBulanIndoToInt from "./converBulanIndoToInt.utils";

export default function bacaFilePembayaran(fileRecordPath: string) {
  const file = fs.readFileSync(fileRecordPath, 'utf8').split(/\r?\n/);
  
  const dataPembayaran: DataPembayaran[] = [];
  
  for (const line of file) {
    if (/^99+/.test(line)) break;
    
    const strDataArr = line.split("\t");
    
    let tglStrArr = strDataArr[0].split(" ");
    const hari = Number(tglStrArr[0]);
    const bulan = convertBulanIndoToInt(tglStrArr[1]);
    const tahun = Number(tglStrArr[2]);
    
    
    const tgl_bayar = new Date(tahun, bulan, hari);
    const no_kamar = Number(strDataArr[1]);
    const jml_bayar = Number(strDataArr[2].split(/\D/).join(""));
    
    
    const pembayaran = new DataPembayaran(tgl_bayar, no_kamar, jml_bayar);
    
    dataPembayaran.push(pembayaran);
  }
  
  return dataPembayaran;
}