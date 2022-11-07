// soal surpris
let x = 1 , res = ""

for(let i=1;i<=x;i++){
    res = ""
    if(i%3 == 0)
        res += "Bizz"
    if(i%5 == 0)
        res += "Buzz"
    if(res != "")
        console.log(`${res} => ${i}`)
}

// multply
let number = 9

for (let index = 0; index < 10; index++) {
    console.log(`${number}*${(index+1)}=${number*(index+1)}`)
}

// palindrom
let text = "belajar javascript"
let find = /eve/g

let trim = text.trim()
let result = true
for (let index = 0; index < trim.length/2; index++) {
    if(trim[index] != trim[trim.length-1-index]){
        result = false
        break
    }
}
console.log(`Kata ${text} adalah ${result?'palindrome':'bukan palindrome'}`)
// convert cm to km
let cm = 1000
console.log(`${cm} cm = ${cm/1000} km`)
// format currency
let duit = 1000
console.log(duit.toLocaleString('id',{
    style:'currency',
    currency:'IDR'
}))

// remove string

let check = text.replace(find,'')
console.log(`Hapus ${find} dari text ${text} `)

// capitalize
// let split = text.split(' ')
// let capitalize =""
// for (index = 0; index < split.length; index++) {
//     capitalize +=split[index][0].toUpperCase()+split[index].slice(1)+" "
// }
let capitalize = ""
let cap = true
for (index = 0; index < text.length; index++) {
    // up +=split[index][0].toUpperCase()+split[index].slice(1)+" "
    if(cap){
        capitalize += text.charAt(index).toUpperCase()
        cap = false
    }else{
        capitalize += text.charAt(index)
    }

    if(text.charCodeAt(index) == 32){
        cap = true
    }
}

console.log(`${text} => Capitalize => ${capitalize}`)

// reverse string
let reversed = ""
for(index = text.length-1; index >= 0; index--){
    reversed += text[index]
}
console.log(`${text} reversed = ${reversed}`)


// indentifikasi vokal konsonan
let konsonan = ""
let vokal = ""
trim = trim.replace(" ","")
for (let index = 0; index < trim.length; index++) {
    if(trim.charCodeAt(index)  == 97 || 
    trim.charCodeAt(index) == 101 ||
    trim.charCodeAt(index)  == 105 || 
    trim.charCodeAt(index) == 111 ||
    trim.charCodeAt(index)  == 117 || 
    trim.charCodeAt(index) == 65 ||
    trim.charCodeAt(index) == 69 ||
    trim.charCodeAt(index) == 73 ||
    trim.charCodeAt(index) == 79 || 
    trim.charCodeAt(index) == 85){
        if(!vokal.includes(trim.charAt(index)))
            vokal += trim.charAt(index)
    }else{
        if(!konsonan.includes(trim.charAt(index)))
            konsonan += trim.charAt(index)
    }

}

console.log(`
    Kalimat = ${text} \n
    Huruf vokal = ${vokal} \n
    Huruf Konsonan = ${konsonan} \n
`)