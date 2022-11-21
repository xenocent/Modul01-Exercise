let p = 2;
let l = 4;

// luas
let luasfunc = (p,l)=>p*l
// console.log("luas =" + p * l);

// keliling
let kelilingfunc = (l,p)=>2*(l+p)
// console.log("keliling =" + 2 * (l + p));

// lingkaran
let r = 7;
let cir = 2 * Math.PI * r;
let diameter = 2 * r;
let area = Math.PI * r * r;
// console.log("circumference " + cir);
// console.log("Diameter " + diameter);
// console.log("Area " + area);
let circumferencefunc = (r)=>2*Math.PI*r
let diameterfunc = (r)=>2*r
let areafunc = (r)=>Math.PI*r*r

// hitung angle
let x = 60;
let y = 90;
// if (x + y > 180) console.log("bukan segitiga");
// console.log("sudut terakhir " + (180 - x - y));
let anglefunc = (x,y)=>180-x-y

// hitung hari
let days = 400;
let year = Math.floor(days / 365);
let month = Math.floor((days - year * 365) / 30);
let day = days - year * 365 - month * 30;
let hitungharifunc =(days)=>{
    let year = Math.floor(days / 365);
    let month = Math.floor((days - year * 365) / 30);
    let day = days - year * 365 - month * 30;
    return `${year} Tahun, ${month} Bulan, ${day} Hari`
}
// console.log(`${year} Tahun, ${month} Bulan, ${day} Hari`);

let date1 = new Date('2022-11-1')
let date2 = new Date('2022-11-30')
let datediff = date2-date1
let selisihharifunc =(dateA,dateB)=>{
    let datediff = Math.abs(dateA-dateB)
    return `${Math.ceil(datediff / (1000 * 60 * 60 * 24))} hari`
}
// console.log(`${Math.ceil(datediff / (1000 * 60 * 60 * 24))} hari`)

module.exports= {
    luasfunc,
    kelilingfunc,
    circumferencefunc,
    diameterfunc,
    areafunc,
    anglefunc,
    hitungharifunc,
    selisihharifunc
}