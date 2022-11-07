let p = 2;
let l = 4;

// luas
console.log("luas =" + p * l);

// keliling
console.log("keliling =" + 2 * (l + p));

// lingkaran
let r = 7;
let cir = 2 * Math.PI * r;
let diameter = 2 * r;
let area = Math.PI * r * r;
console.log("circumference " + cir);
console.log("Diameter " + diameter);
console.log("Area " + area);

// hitung angle
let x = 60;
let y = 90;
if (x + y > 180) console.log("bukan segitiga");
console.log("sudut terakhir " + (180 - x - y));

// hitung hari
let days = 400;
let year = Math.floor(days / 365);
let month = Math.floor((days - year * 365) / 30);
let day = days - year * 365 - month * 30;
console.log(`${year} Tahun, ${month} Bulan, ${day} Hari`);
