const {
    picky,
    gabung,
    pecah,
    calc,
    add,
    even,
} =require("./DAY05-EXERCISE")

let arra = [5,6,7,10]
let arrb = [2,3,1]
let text = "Never odd or even"
let arrtext = ["Saab", "Volvo", "BMW"]

test("sorted",()=>{
    expect(picky(arra)).toEqual("unsorted => highest = 10 , lowest = 5 , avg = 7 \nsorted => highest = 10 , lowest = 5 , avg = 7")
})
test("Separated by ',' and end with 'and'",()=>{
    expect(gabung(arrtext)).toEqual("Hasil pergabungan Saab,Volvo,BMWand")
})
test("Split words",()=>{
    expect(pecah(text,"e")).toEqual(["N", "v", "r odd or ", "v", "n"])
})
test("calculate arr",()=>{
    expect(calc(arra,arrb)).toEqual("Hasil Penjumlahan dari 5,6,7,10 dan 2,3,1 =  7,9,8,10")
})
test("add element arr",()=>{
    expect(add(arra,1)).toEqual("menambahkan elemen dari 5,6,7,10 dengan 1 => 5,6,7,10,1")
})
test("remove all odd numbers",()=>{
    expect(even(arra)).toEqual("Print genap dari 5,6,7,10  => 6,10")
})