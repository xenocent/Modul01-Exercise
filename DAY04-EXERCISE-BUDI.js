// triangle pattern 
let height = 1
let num = 1
let text = ""
for (let i = 1; i <= height; i++) {
    text = ""
    for (let j = 0; j < i; j++) {
        text += num.toLocaleString('id',{minimumIntegerDigits:2}) +" "
        num++
    }
    console.log(text)
}

// fizz buzz
for (let index = 1; index <= height; index++) {
    text = ""
    if(index%3 == 0){
        text += "Fizz"
    }
    if(index%5 == 0){
        text += "Buzz"
    }
    if(text != "")
        console.log(text)
}

// BMI index
let berat = 17
switch (true) {
    case berat<18.5:
        console.log('less weight')
        break;
    case berat< 24.9 && berat >= 18.5:
        console.log('ideal')
        break;
    case berat< 29.9 && berat >= 25:
        console.log('overweight')
        break;
    case berat< 39.9 && berat >= 30:
        console.log('very overweight')
        break;
    case berat>=39.9:
        console.log("obesity")
        break;
    default:
        break;
}

// even number only
let arrnum = [1,2,3,4,5,6,7]
console.log(arrnum.filter(x=>x%2==0))

// split
text = "Hello World"
let container = "", result = []

for (let index = 0; index < text.length; index++) {
    if(text.charCodeAt(index) == 32){
        result.push(container)
        container = ""
    }else if(index == text.length-1){
        container += text.charAt(index)
        result.push(container)
    }else{
        container += text.charAt(index)
    }
}


console.log(result)

// kejutan
// let buah = ["Apel", "Semangka", "Jeruk"]
// let stok = [15,10,25]
// let hrg = [20000,15000,8000]
// // let arr2d=[["Apel",15,20000],["Semangka",10,15000],["Jeruk",25,8000]]
// let arr2d=buah.map((item, index) => ([item, stok[index],hrg[index]]));

// for (let i = 0; i < buah.length; i++) {
//     // console.log(`${i+1} ${buah[i]} stok ${stok[i]} = ${hrg[i].toLocaleString('id',{ style:'currency',currency:'IDR'})}`)
//     console.log(`${i+1} ${arr2d[i][0]} stok ${arr2d[i][1]} = ${arr2d[i][2].toLocaleString('id',{ style:'currency',
//     currency:'IDR'})}`)
// }

