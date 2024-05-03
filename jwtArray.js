const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createToken(id, nama, kelas, alamat, hobi) {
  const data = { id, nama, kelas, alamat, hobi };
  return jwt.sign(data, secretKey);
}

const arrSiswa = [
  {
    id: 1,
    nama: "Rdd",
    kelas: "XI",
    alamat: "Lampung Selatan",
    hobi: "Membaca",
  },
  {
    id: 2,
    nama: "Atr",
    kelas: "XI",
    alamat: "Jakarta",
    hobi: "Membaca",
  },
  {
    id: 3,
    nama: "azee",
    kelas: "XI",
    alamat: "Bogor",
    hobi: "Bola",
  },
];

const arrToken = [];

// membuta perulangan arrSiswa
arrSiswa.forEach((siswa) => {
  const token = createToken(
    siswa.id,
    siswa.nama,
    siswa.kelas,
    siswa.alamat,
    siswa.hobi
  );
  arrToken.push(token);
});

// melakukan perulangan arrToken

arrToken.forEach((token, index) => {
  console.log(`Siswa dengan id ${index + 1} Menggunakan token : ${token} \n`);
});
