

// cel to far
let cel = 10 
let far = cel * 1.8 + 32
// console.log(`${cel} C = ${far} F`)
let celtofarfunc = (cel)=>`${cel} C = ${cel * 1.8 + 32} F`

//  genap
let x = 5
let check
if(x % 2 == 0)
    check = "Angka Genap"
else
    check = "Angka Ganjil"
// console.log(`${x} = ${check}`)
let cekgenapfunc = (x)=>`${x} = ${check%2==0?"Angka Genap":"Angka Ganjil"}`

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
// console.log(`${x} merupakan bilangan ${prima?"Prima":"Bukan Prima"}`)    

let cekprimafunc = (x)=>{
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
    return `${x} merupakan bilangan ${prima?"Prima":"Bukan Prima"}`
}
// sum number
let sum = 0
for(i = 0;i<x;i++){
    sum += i
}
// console.log(`sum ${x} =  ${sum}`)
let sumnumberfunc = (x)=>{
    let sum = 0
    for(i = 0;i<x;i++){
        sum += i
    }
    return (`sum ${x} = ${sum}`)
}
// faktorisasi
sum = 1
for(i = 0;i<x;i++){
    sum = sum * (i+1)
}
// console.log(`faktorial ${x} = ${sum}`)
let faktorialfunc = (x)=>{
    sum = 1
    for(i = 0;i<x;i++){
        sum = sum * (i+1)
    }
    return (`faktorial ${x} = ${sum}`)
}
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
// console.log("fibb = "+b)
let fibbonacifunc = (x)=>{
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
    return("fibb = "+b)
}
module.exports = {
    celtofarfunc,
    cekgenapfunc,
    cekprimafunc,
    sumnumberfunc,
    faktorialfunc,
    fibbonacifunc,
}