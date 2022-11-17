function excel(input){
    let total = 0
    let splitted = input.toUpperCase().split('')
    let length = splitted.length
    
    splitted.forEach((element,index) => {
        total += (element.charCodeAt(0) - 64) * Math.pow(26, length - 1 - (index))
    });

    // switch(splitted.length){
    //     case 1 :
    //         total = splitted[0].charCodeAt(0)-64
    //         break;
    //     case 2 :
    //         total = ((splitted[0].charCodeAt(0)-64) * 26) +splitted[1].charCodeAt(0)-64
    //         break;
    //     case 3 :
    //         total = ((splitted[0].charCodeAt(0)-64) * 26 * 27) + splitted[2].charCodeAt(0)-64
    //         break;
    //     case 4 :
    //         total = ((splitted[0].charCodeAt(0)-64) * 26 * 27 * 28 ) + splitted[3].charCodeAt(0)-64
    //         break;
    // }
    return total
}

var text = "AA"
// console.log(`${text} => ${excel(text)}`)

function findSingle(arr){
    arr.sort()
    let single = null
    arr.forEach(element => {
        if(single != null || single == element){
            single = null
        }else{
            single = element
        }
    });
    return single
}
// console.log(findSingle([1]))

function anagram(s,t){
    s=s.split('').sort().join()
    t=t.split('').sort().join()
    return s===t
}

// console.log(anagram("a","b"))

var climbStairs = function(n) {
    const ary =[1,1];
    if(n>1){
        for(let i = 2; i <= n ; i++){
            console.log(ary[i],ary[i-1],ary[i-2])
            ary[i] = ary[i-1] + ary[i-2];
        }
    };
    return ary[ary.length-1]
}
// function staircase(n){
//     if(n<2){
//         return 1
//     }else{
//         return staircase(n-1)+staircase(n-2)
//     }
// }
console.log(climbStairs(5))


