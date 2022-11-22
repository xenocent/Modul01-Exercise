// Write a function to get the lowest, highest and average value in the array (with and without sort function).
let arra = [5,6,7,10]
let arrb = [2,3,1]
let text = "Never odd or even"
let arrtext = ["Saab", "Volvo", "BMW"]

console.log(picky(arra))
console.log(gabung(arrtext))
console.log(pecah(text,"e"))
console.log(calc(arra,arrb))
console.log(add(arra, 1))
console.log(even(arra))

function picky(arr){
    // unsorted
    let highest = null, lowest = null, avg = null, result = ""
    arr.forEach(x => {
        if(highest == null ||highest <x)
            highest = x
        if(lowest == null || lowest >x)
            lowest = x
        avg = avg + x
    });
    avg = avg /arr.length
    result += `unsorted => highest = ${highest} , lowest = ${lowest} , avg = ${avg} \n`;
    // sorted
    let sorted = arr.sort((a,b)=>a-b)
    highest = sorted[arr.length-1]
    lowest = sorted[0]
    avg = sorted.reduce((a,b)=>a+b)/sorted.length
    result +=`sorted => highest = ${highest} , lowest = ${lowest} , avg = ${avg}`;
    return result
}

// Write a function that takes an array of words and returns a string by concatenating the words in 
// the array, separated by commas and - the last word - by an 'and'.
function gabung (x) {
    let compile = ""
    for (let index = 0; index < x.length; index++) {
        if(index != x.length-1){
            compile += x[index]+","
        }else{
            compile += x[index]+"and"
        }
        
    }
    return `Hasil pergabungan ${compile}`
}

// Write a function to split a string and convert it into an array of words
function pecah (text,separator) {
    let container = "", result = []

    for (let index = 0; index < text.length; index++) {
        if(text.charCodeAt(index) == separator.charCodeAt(0)){
            result.push(container)
            container = ""
        }else if(index == text.length-1){
            container += text.charAt(index)
            result.push(container)
        }else{
            container += text.charAt(index)
        }
    }
    return result
}

// Write a function to calculate each element in the same position from two arrays of integer. 
// Assume both arrays are of the same length.
function calc(arra,arrb) {
    let newarr = []
    for (let index = 0; index < arra.length; index++) {
        let a = typeof arra[index] == "number"?arra[index]:0 
        let b = typeof arrb[index] == "number"?arrb[index]:0 
        newarr.push(+a + +b)
        
    }
    return `Hasil Penjumlahan dari ${arra} dan ${arrb} =  ${newarr}`
    
}

// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.
function add(arr,add) {
    let check = false, cek = [...arr]
    for (let index = 0; index < cek.length; index++) {
        if(cek[index] == add){
            check = true
        }
    }
    if(check == false){
        cek.push(add)
    }
    return `menambahkan elemen dari ${arr} dengan ${add} => ${cek}`
}
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function even(x) {
    let newarr = []
    for (let index = 0; index < x.length; index++) {
        if(x[index] %2==0){
            newarr.push(x[index])
        }
    }
    return `Print genap dari ${x}  => ${newarr}`
}

module.exports = {
    picky,
    gabung,
    pecah,
    calc,
    add,
    even,
}