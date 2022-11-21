const {
    celtofarfunc,
    cekgenapfunc,
    cekprimafunc,
    sumnumberfunc,
    faktorialfunc,
    fibbonacifunc,
} = require('./DAY02-EXERCISE-BUDI')

test("Cek Celcius to Farenheit",()=>{
    expect(celtofarfunc(10)).toBe("10 C = 50 F")
})
test("Cek bilangan genap",()=>{
    expect(cekgenapfunc(5)).toBe("5 = Angka Ganjil")
})
test("Cek bilangan prima",()=>{
    expect(cekprimafunc(5)).toBe("5 merupakan bilangan Prima")
})
test("Cek penjumlahan",()=>{
    expect(sumnumberfunc(5)).toBe("sum 5 = "+10)
})
test("Cek faktorial",()=>{
    expect(faktorialfunc(5)).toBe("faktorial 5 = "+120)
})
test("Cek fibonaci",()=>{
    expect(fibbonacifunc(5)).toBe("fibb = "+5)
})