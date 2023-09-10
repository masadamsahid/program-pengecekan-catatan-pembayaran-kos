// Built-in Node.js Modules and Third Party External Modules
import rlSync from "readline-sync";

// Project's Modules
import bacaFilePembayaran from "./modules/bacaFilePembayaran";
import kategorikanKamar from "./modules/kategorikanKamar";
import hitungTotalUang from "./modules/hitungTotalUang";


// Main module
function main(){
  
  let filePath = rlSync.question("Masukkan path dari file catatan pembayaran: ");
  console.log("File record path: \"" + filePath + "\"\n");
  
  
  const listDataPembayaran = bacaFilePembayaran(filePath);
  
  const daftarGrupKamar = kategorikanKamar(listDataPembayaran);
  
  const tepatWaktu = daftarGrupKamar[0];
  const tidakTepatWaktu = daftarGrupKamar[1];
  const dapatPeringatan = daftarGrupKamar[2];
  
  const totalUangPembayaran = hitungTotalUang(listDataPembayaran);
  
  
  const output =
    `Kamar yang sudah membayar tepat waktu: ${tepatWaktu}\n` +
    `Kamar yang sudah membayar tidak tepat waktu: ${tidakTepatWaktu}\n` +
    `Kamar yang diberi peringatan: ${dapatPeringatan}\n` +
    `Jumlah total uang pembayaran: Rp. ${totalUangPembayaran},-\n`
  ;
  
  console.log(output);
}

main();
