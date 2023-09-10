
# Program Cek Pembayaran Kamar Kos

Contents:  
1. [Problem Definition](#problem-definition)
    - [Input](#input)
    - [Process](#process)
    - [Output](#output)

2. [Usage Guidlines](#usage-guidelines)
    - [Sebelum menjalankan project](#sebelum-menjalankan-project)
    - [Menjalankan project](#menjalankan-project)
    - [Petunjuk Input](#petunjuk-input)
    - [File Catatan Pembayaran untuk Test Cases](#file-catatan-pembayaran-untuk-test-cases)
    - [Module Hierarchy Chart](#module-hierarchy-chart)


## Problem Definition:

Membuat program yang membaca catatan pembayaran bulanan kos-kosan yang berjumlah 10 kamar. Program juga dapat menampilkan kamar-kamar berdasarkan yang membayar tepat waktu, membayar tidak tepat waktu, belum membayar/mendapat peringatan. Selain itu juga terdapat total uang bulanan yang telah dibayarkan.

### Input:
> Path file catatan pembayaran bulanan kamar kos-kosan

### Process:
> - Membaca records file sesuai path yang diberikan
> - Membaca records file pembayaran sesuai path yang diberikan dan memetakan tiap data data pada tiap barisnya hingga akhir (hingga 99).
> - Menentukan setiap kamar sudah bayar atau belum (diberikan peringatan)
> - Menentukan setiap kamar yang sudah bayar masuk pada kategori membayar tepat waktu atau membayar tidak tepat waktu
> - Menghitung jumlah total uang bulanan kos yang telah dibayarkan

### Output:
> - List kamar-kamar yang sudah bayar tepat waktu
> - List kamar-kamar yang sudah bayar tidak tepat waktu
> - List kamar-kamar yang diberi peringatan
> - Total uang bulanan kos yang sudah dibayarkan

<hr>

## Usage Guidelines

### Sebelum menjalankan project:
Pastikan anda menginstalasi external packages yang diperlukan dengan menjalankan

```bash
npm install
```
atau
```bash
yarn
```

### Menjalankan project:
Setelah memastikan external packages sudah terinstalasi anda bisa menjalankan program pada project ini. Untuk menjalankan project, anda dapat menjalankannya dengan script berikut:

```bash
npm run start
```
atau
```bash
yarn start
```

> _**NOTE**:_  
> _Script `start` di atas akan menjalankan dua perintah, yaitu `npx tsc` kemudian `node build/index.js`. Perintah `npx tsc` akan melakukan compilation pada file-file TypeScript (.ts) menjadi JavaScript (.js) yang disimpan ke direktori [`./build`](./build "Folder build"). Adapun perintah `node build/index.js` akan menjalankan file `./build/index.js` yang merupakan hasil kompilasi dari `./index.ts`._


### Petunjuk Input
Setelah menjalankan program, maka anda akan ditampilkan sebuah prompt yang meminta path dari file catatan pembayaran yang hendak dicek.

```bash
Masukkan path dari file catatan pembayaran: <Path File Catatan Pembayaran>
```

Untuk memasukkan path file catatan pembayaran, anda dapat mengisikan dengan format berikut:

| Path Type     | Your File Path                                                                                                                                                                       | 
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File Name     | [pembayaran_mei.txt](pembayaran_mei.txt, "File pembayaran_mei.txt")                                                                                                                  |
| Relative Path | [./file_catatan_pembayaran/pembayaran_juni.txt](./file_catatan_pembayaran/pembayaran_juni.txt, "File pembayaran_juni.txt")                                                           |
| Absolute Path | [D:\BINUS\kuliah\PDM\Group Assignments\TK-1\Soal 2 Source Code\file_catatan_pembayaran\pembayaran_juli.txt](file_catatan_pembayaran/pembayaran_juli.txt, "File pembayaran_juli.txt") |


Contoh File Name:
```bash
Masukkan path dari file catatan pembayaran: pembayaran_mei.txt

Kamar yang sudah membayar tepat waktu: 10,4,1
Kamar yang sudah membayar tidak tepat waktu: 7,0
Kamar yang diberi peringatan: 2,3,5,6,8,9
Jumlah total uang pembayaran: Rp. 5900000,-
```                                                                                      

Contoh Relative Path:
```bash
Masukkan path dari file catatan pembayaran: ./file_catatan_pembayaran/pembayaran_juni.txt

Kamar yang sudah membayar tepat waktu: 1,4,6,10,9
Kamar yang sudah membayar tidak tepat waktu: 3
Kamar yang diberi peringatan: 2,5,7,8
Jumlah total uang pembayaran: Rp. 6000000,-
```                                                            

Contoh Absolute Path:
```bash
Masukkan path dari file catatan pembayaran: D:\BINUS\kuliah\PDM\Group Assignments\TK-1\Soal 2 Source Code\file_catatan_pembayaran\pembayaran_juli.txt

Kamar yang sudah membayar tepat waktu: 9,1,7,4,2
Kamar yang sudah membayar tidak tepat waktu: 8,6,10,5
Kamar yang diberi peringatan: 3
Jumlah total uang pembayaran: Rp. 8100000,-
```


### File Catatan Pembayaran untuk Test Cases

Dalam project ini telah disediakan beberapa file catatan pembayaran untuk melakukan pengujian. File tersebut dapat anda akses pada direktori [`./file_catatan_pembayaran`](./file_catatan_pembayaran "Folder file_catatan_pembayaran").


## Module Hierarchy Chart

![image](https://github.com/masadamsahid/program-pengecekan-catatan-pembayaran-kos/assets/62916459/3071460e-7d0c-43fc-8d2f-7f86dd477186)

