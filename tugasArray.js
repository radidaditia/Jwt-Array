const jwt = require("jsonwebtoken");
const secretKey = "libur lebaran";

function createToken(fullName, address, contact) {
  const data = { fullName, address, contact };
  return jwt.sign(data, secretKey, { expiresIn: "24h" });
}

function createTokenLiburan(data) {
  const token = jwt.sign(data, secretKey, { expiresIn: "168h" });
  return token;
}

function verify(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    delete decoded.iat;
    return decoded;
  } catch (err) {
    return null;
  }
}

const peserta = [
  {
    id: 1,
    fullName: "Andi Wirawan",
    address: "Jalan Gajah Mada No. 10, Jakarta Barat",
    contact: "081212345678",
  },
  {
    id: 2,
    fullName: "Budi Cahyono",
    address: "Jalan Pahlawan No. 5, Surabaya",
    contact: "082233445566",
  },
  {
    id: 3,
    fullName: "Cindy Pratiwi",
    address: "Jalan Merdeka No. 8, Bandung",
    contact: "083344556677",
  },
  {
    id: 4,
    fullName: "Dian Suryani",
    address: "Jalan Imam Bonjol No. 3, Medan",
    contact: "084455667788",
  },
  {
    id: 5,
    fullName: "Eko Santoso",
    address: "Jalan Gatot Subroto No. 12, Yogyakarta",
    contact: "085566778899",
  },
];

const liburan = [
  { destinasi: "Tokyo, Jepang", waktu: "7 hari", paket: "Premium" },
  { destinasi: "Paris, Prancis", waktu: "5 hari", paket: "Luxury" },
  { destinasi: "Sydney, Australia", waktu: "6 hari", paket: "Exclusive" },
  { destinasi: "Rio de Janeiro, Brasil", waktu: "7 hari", paket: "Deluxe" },
  { destinasi: "Cairo, Mesir", waktu: "8 hari", paket: "Royal" },
];

const arrToken = [];
const arrLiburan = [];

peserta.forEach((peserta) => {
  const token = createToken(peserta.fullName, peserta.address, peserta.contact);
  arrToken.push(token);
});

console.log("Tokens Peserta:");
arrToken.forEach((token, index) => {
  console.log(`Peserta dengan id ${index + 1} menggunakan token: ${token}`);
});
console.log("\n");

console.log("Data Peserta yang Diverifikasi:");
arrToken.forEach((token, index) => {
  const decodedPeserta = verify(token);
  console.log("decodedPeserta: ", decodedPeserta);
});
console.log("\n");

liburan.forEach((liburan) => {
  const token = createTokenLiburan(liburan);
  arrLiburan.push(token);
});

console.log("Tokens Liburan:");
arrLiburan.forEach((token, index) => {
  console.log(`Liburan dengan id ${index + 1} menggunakan token: ${token}`);
});
console.log("\n");

console.log("Data Liburan yang Diverifikasi:");
arrLiburan.forEach((token, index) => {
  const decodedLiburan = verify(token);
  console.log("decodedLiburan: ", decodedLiburan);
});
