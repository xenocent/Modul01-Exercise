// PSEUDO CODE //

/*
    Title Funct Penjumlahan 2 Angka
    Input : Need two params numb A and num B

    Proses : 
    - use value from param to add (+)
    - return result of add process numb A and numb b

    Output : result with number data type
*/

function add(numbA,numbB){
    return numbA+numbB
}

/*
    Title Funct Cek Ganjil / Genap
    Input : Need one params numb A

    Proses : 
    - use IF condition with numb A mod 2 is 0 or not
    - IF result true return "Genap"
    - ELSE result false return "Ganjil"

    Output :h result with string data type (Ganjil Genap)
*/

function cek(numbA){
    return numbA%2==0?"Genap":"Ganjil"
}

// console.log(cek(5))

/*
    Title Funct Reverse String
    Input : Need one params str

    Proses : 
    - create new variable to save reversed string
    - FOR Loop with length of string -1 till 0 in each loop add str with index i to rev variable
    - return rev as result function
    Output : result with string data type 
*/

function rev(str){
    let rev = ""
    for (let i = str.length-1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

// console.log(rev("apaan tuh?"))


// buat array func  map, filter, findindex

/*
    Title duplicate Map array funct
    Input : Need two params array and function callback

    Proses : 
    - use IF codition to check there is function
    - TRUE
        - create new variable to save processed array
        - do FOR Loop with start with 0 until length of arr  in each loop do push result from function to res
        - return res as result function
    -ELSE
        - return blank array
    Output : result with array data type 
*/
function duplicateMap(data,cbfn) {
    if(cbfn){
        let res = []
        for (let index = 0; index < data.length; index++) {
                res.push(cbfn(data[index],index,data))       
        }
        return res
    }
}
/*
    Title duplicate Filter array funct
    Input : Need two params array and function callback

    Proses : 
    - use IF codition to check there is function
    - TRUE 
        - create new variable to save processed array
        - do FOR Loop with start with 0 until length of arr 
        - in each loop do condition IF the function return true push the data[index] to res array
        - return res as result function

    Output : result with array data type 
*/
function duplicateFilter(data,cbfn) {
    if(cbfn){
        let res = []
        for (let index = 0; index < data.length; index++) {
            if(cbfn(data[index])){
                res.push(data[index],index,data)
            }
        }
        return res
    }
}
/*
    Title duplicate Find Index array funct indexOf
    Input : Need three params array and function callback and position start index

    Proses : 
    - use IF codition to check there is function
    - TRUE 
        - do FOR Loop with start with var pos until length of arr  
        - in each loop do condition IF the function return true then return the index
        - return -1 if there is no return from loop
   
    Output : result with array data type 
*/
function duplicateFindIndex(data,cbfn, pos = 0) {
    if(cbfn){
        for (let index = pos; index < data.length; index++) {
            if(cbfn(data[index],index,data)){
                return index
            }
        }
        return -1   
    }
    
}

function power(currValue,index=0,data) {
    // return currValue * currValue;
    // return currValue%2==0?"Genap":"Ganjil"
    return `${index+1}. ${currValue}`
}

function find(currValue,index=0,data){
    return currValue > 3
}

var arr = ["mobil","motor","pesawat","kapal"]
let tryMap = arr.map(power)
// let tryFilter = arr.filter(find)
// let tryFindIndex = arr.findIndex(find)
console.log("Array Sample",arr);
console.log("Func buatan",duplicateMap(arr,power),"arr Func",tryMap);
// console.log(duplicateFilter(arr,find),tryFilter);
// console.log(duplicateFindIndex(arr,find),tryFindIndex);