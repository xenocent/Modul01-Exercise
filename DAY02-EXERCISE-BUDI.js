let date1 = new Date('2022-11-1')
let date2 = new Date('2022-11-30')
let datediff = date2-date1
console.log(`${Math.ceil(datediff / (1000 * 60 * 60 * 24))} hari`)

// cel to far
let cel = 10 
let far = cel * 1.8 + 32
console.log(`${cel} C = ${far} F`)
//  genap
let x = 5
let check
if(x % 2 == 0)
    check = "Angka Genap"
else
    check = "Angka Ganjil"
console.log(`${x} = ${check}`)
//  prima
let prima = true
if(x <= 1){
    prima = false
}else{
    for(let i = 2;i<x;i++){
        if(x % i == 0){
            prima = false
        }
    }
}
console.log(`${x} merupakan bilangan ${prima?"Prima":"Bukan Prima"}`)    
// sum number
let sum = 0
for(i = 0;i<x;i++){
    sum += i
}
console.log(`sum ${x} =  ${sum}`)
// faktorisasi
sum = 1
for(i = 0;i<x;i++){
    sum = sum * (i+1)
}
console.log(`faktorial ${x} = ${sum}`)
// fibbonaci
let a,b,c
for(i=0;i<x;i++){
    if(i < 2){
        a = 1
        b = 1
    }else{
        c = a+b
        a = b
        b = c
    }
}
console.log("fibb = "+b)