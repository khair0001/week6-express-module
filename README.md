# Assignment: Express.js & Modul Node.js
---
## Identitas
- Nama : Ahmad Muslihul Khair
- NIM : F1D02310001
---
## Deskripsi Tugas

1. Buat folder project dengan nama: expressModule_NIM 
	(contoh: expressModule_FD2200123).
2. Inisialisasi project Node.js dengan `npm init -y`.
3. Install Express.js dengan `npm install express`.
4. Buat file `index.js` yang menampilkan:
	Route / → menampilkan “nama dan nim anda”.
	Route /`hitung` → menampilkan hasil penjumlahan dari fungsi `tambah()` pada modul `math.js`.
5. Buat folder `utils/` berisi file `math.js `dengan minimal 2 fungsi:
	`tambah(a, b)`
	`kali(a, b)`
6. Buat folder` routes/ `berisi file `profile.js` yang memiliki route:
	/`profile` → menampilkan daftar profile (array JSON) (data bebas).
	/`profile/:nim` → menampilkan detail profile berdasarkan `nim`.
7. Hubungkan modul `profile.js` ke `index.js` dengan `app.use``(`/profil`, profileRouter).`
### Output
- `GET http://localhost:3000/ `→ menampilkan **NIM dan Nama Anda!**
- `GET http://localhost:3000/hitung `→ menampilkan hasil penjumlahan.
- `GET http://localhost:3000/profile `→ menampilkan JSON array profile.
- `GET http://localhost:3000/profile/1 `→ menampilkan detail profile (data anda sendiri) dengan `nim=FDxxxxx.`
---
## Langkah-Langkah
1. Membuat folder
``` bash
mkdir expressModule_FD2200123
cd expressModule_FD2200123
```
2. Inisialisasi project Node.js
``` bash
npm init -y
```
3. Install Express
``` bash
npm install express
```
4. Buat file `index.js`
``` bash
touch index.js
```
5. Buat folder `utils` dan `profile`
``` bash 
mkdir utils routes
```
6. Buat file `math.js` dan `profile.js`
``` bash
touch utils/math.js routes/profile.js
```
7. Gunakan `require('express')` untuk mengimpor modul Express dan atur port
``` javascript
const express = require("express");
const app = express();
const port = 3000;
```
8. Buat route get untuk nama dan nim
9. Buat route get hitung untuk math
10. Hubungkan `profile.js` dengan `index.js`
``` javascript
app.use("/profile", profileRouter);
```
11. jalankan program `index.js`
``` bash
node index.js
```
---
## Output
- `GET http://localhost:3000/`
<img width="874" height="146" alt="Pasted image 20250929113125" src="https://github.com/user-attachments/assets/b01a13b0-20b0-46f3-8afa-81c117863252" />

- `GET http://localhost:3000/hitung`
<img width="1127" height="161" alt="Pasted image 20250929113233" src="https://github.com/user-attachments/assets/45cd3cee-d30b-446f-9a64-dc08f77d876e" />

- `GET http://localhost:3000/profile`
<img width="1919" height="249" alt="Pasted image 20250929113310" src="https://github.com/user-attachments/assets/77eb63bf-8438-4c06-8a5a-afa77fab8017" />

- `GET http://localhost:3000/profile/F1D02310001`
<img width="1919" height="176" alt="Pasted image 20250929113332" src="https://github.com/user-attachments/assets/059de2cd-47e1-4a12-90d4-d51b8c6d53a6" />
