export default function convertBulanIndoToInt (namaBulan: string) {
  switch (namaBulan) {
    case "Januari": return 0;
    case "Februari": return 1;
    case "Maret": return 2;
    case "April": return 3;
    case "Mei": return 4;
    case "Juni": return 5;
    case "Juli": return 6;
    case "Agustus": return 7;
    case "September": return 8;
    case "Oktober": return 9;
    case "November": return 10;
    case "Desember": return 11;
    default: return Number(namaBulan);
  }
}