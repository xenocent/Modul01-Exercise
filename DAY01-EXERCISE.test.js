const {
    luasfunc,
    kelilingfunc,
    circumferencefunc,
    diameterfunc,
    areafunc,
    anglefunc,
    selisihharifunc,
    hitungharifunc,
} = require('./DAY01-EXERCISE-BUDI')

test("Cek luas persegi panjang",()=>{
    expect(luasfunc(2,4)).toBe(8)
})
test("Cek keliling persegi panjang",()=>{
    expect(kelilingfunc(2,4)).toBe(12)
})
test("Cek keliling lingkaran",()=>{
    expect(circumferencefunc(7)).toBe(43.982297150257104)
})
test("Cek diameter lingkaran",()=>{
    expect(diameterfunc(7)).toBe(14)
})
test("Cek Luas lingkaran",()=>{
    expect(areafunc(7)).toBe(153.93804002589985)
})
test("Cek sudut",()=>{
    expect(anglefunc(60,90)).toBe(30)
})
test("Cek hitung hari",()=>{
    expect(hitungharifunc(400)).toBe("1 Tahun, 1 Bulan, 5 Hari")
})
test("Cek selisih hari",()=>{
    expect(selisihharifunc(new Date('2022-11-1'),new Date('2022-11-30'))).toBe("30 hari")
})