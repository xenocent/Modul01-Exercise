/**
 * Write a code to check whether the date is a weekend.
 */
function isWeekend(date){
    if(date.getDay() == 0 || date.getDay() == 6)
        return "Hari Weekend"
    else
        return "Hari Weekday"
}
// console.log(isWeekend(new Date("2022-11-22")))
/**
 * Write a code to find GCD of two numbers → use while. (faktor persekutuan terbesar)
 */
// 2520,2646
// 1353,1716
function findGcd(a,b) {
    // let faktora = faktorisasi(a)
    // let faktorb = faktorisasi(b)
    // let res = []
    console.log("awal : ",a,b)
    while (a != b) {
        console.log("perulangan sekarang",a,b)
        if (a > b) {
            a -= b;
            console.log("saat a > b")
        } else {
            b -= a;
            console.log("saat a < b")
        }
        console.log("posisi saat ini",a,b,"\n ")
    }
    console.log("hasilnya", a)
    return a
    console.log("faktor dr",a,faktora)
    console.log("faktor dr",b,faktorb)

}
// console.log(findGcd(18,30))
function faktorisasi(num){
    let arr =[], index = 0
    let faktorial = prima[index]
    while(num != 1){
        if(num%faktorial == 0){
            num = num/faktorial
            arr.push(faktorial)
        }else{
            index++
            faktorial = prima(index)
        }            
    }
    return arr
}

function prima(index){
    let prime = null
    for (let i = 1; i <= index; i++) {
        let pembagi = 0
        for (let j = 1; j <= i; j++) {
            if(i%j == 0)
                pembagi++
        }
        if(pembagi == 2){
            prime = i
        }
    }
    return prime
}
// console.log(findGcd(20,30))
/**
 * Write a code to find LCM of two numbers → use do ... while. (rumus kpk)
 */
function findLcm(a,b){
    let large = Math.max(a,b)
    let small = Math.min(a,b)
    let res = large
    // console.log(`angka terbesar = ${large}, kecil ${small}`)
    if(res%small == 0){
        return res
    }
    do{
        res+=large
        console.log("posisi",res)
        console.log(`blm habis di bagi ${small} tambah ${large}`)
    }while(res%small != 0)
    return res;
}
// console.log(findLcm(5,7))
/**
 * Write a code to find most common character from a string
 */
function commonchar(str) {
    let stringObj = {},max = 0,maxChar=""
    for(char of str){
        if(stringObj[char]){
            stringObj[char]++
        }else{
            stringObj[char] = 1
        }
    }
    for(char in stringObj){
        if(stringObj[char]>max){
            max = stringObj[char]
            maxChar = char
        }
    }
    return maxChar
}
// console.log(commonchar("helichoppere"))

/**
 * Write a code to sort a string alphabetically (with and without sort function)
 */
function sortstring(str) {
    return str.split('').sort().join('')
}

function sortmanual(str){
    let temp = null
    str = str.split('')
    for(i=0; i<str.length; i++){
        for (j = 0; j < str.length; j++) {
            if (str[j] > str[i]) {
                temp = str[i];
                str[i] = str[j];
                str[j] = temp;
                console.log(`swap posisi ke [${i}] ${str[i]} dan posisi ke [${j}] ${str[j] }`,str)
            }else
                console.log('lanjut',str)
        }
    }
    return str.join('')
}
// console.log(sortmanual("bca"))
/**
 * Write a code to get minimum date from array of dates.
 */
function minimumdate(arr) {
    return new Date(Math.min(...arr))
}

let da = [
    new Date("2022-12-12"),
    new Date("2022-12-01"),
    new Date("2022-12-13"),
]
// console.log(minimumdate(da))

/**
 * Write a code that calculates the sum of all elements of a two-dimensional array
 */
function sumall(arr){
    let total = 0
    arr.forEach(x=>total+=x.reduce((t,y)=>t+=y,0))
    return total
}
let arr2d = [[1,2,3],[4,5,3]]
// console.log(sumall(arr2d))
/**
 * Write a code to find the longest common prefix string amongst an array of strings.
 */
function commonprefix(arr){
    let size = arr.length

    if(size == 0)
        return ""
    if(size == 1){
        return arr[0]
    }

    arr.sort()
    let end = Math.min(arr[0].length,arr[size-1].length)
    let i = 0
    // cek jika ad yg tdk sama di kurangi katanya
    while (i<end && arr[0][i] == arr[size-1][i]){
        i++
    }
    let pre = arr[0].substring(0,i)
    return pre
}


let words = ["geeksforgeeks", "geeks", "geek", "geezer","geeksforgeeks", "geeks", "geek", "geezer","geeksforgeeks", "geeks", "geek", "geezer"]
// console.log(commonprefix(words))
/**
 * Write a code that copies the first half of an array. With an odd number of array elements, 
 * the middle element should belong to the first half
 */
function copyhalf(arr) {
    let copiesResult = [];

    for (let i = 1; i < (arr.length / 2)+1; i+=2) {
        copiesResult.push(arr[i]);
    }

    return copiesResult;
}

// console.log(copyhalf(words))

/**
 * Write a code to get the number of days in a month
 */
function countdaythismonth(year,month) {
    return new Date(year, month, 0).getDate();
}

// console.log(countdaythismonth(2022,11))

/**
 * Write a code to count the number of days passed since beginning of the year
 */
function countdaythisyear(){
    let awaltahun = new Date("2022")
    let now = new Date()
    return Math.ceil((now-awaltahun)/ (1000 * 60 * 60 * 24))
}
// console.log(countdaythisyear())
/**
 * Write a code to calculate age
 */
function agecalc(birth) {
    let now = new Date()
    birth = new Date(birth)
    diff = now-birth
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}

// console.log(agecalc("1995-12-28"))

