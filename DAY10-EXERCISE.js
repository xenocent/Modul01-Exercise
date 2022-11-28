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
    //         total = ((splitted[0].charCodeAt(0)-64) * 26 * 26) + ((splitted[1].charCodeAt(0)-64) * 26) + splitted[2].charCodeAt(0)-64 
    //         break;
    //     case 4 :
    //         total = ((splitted[0].charCodeAt(0)-64) * 26 * 26 * 26 ) +((splitted[1].charCodeAt(0)-64) * 26 * 26) + ((splitted[2].charCodeAt(0)-64) * 26) +  splitted[3].charCodeAt(0)-64
    //         break;
    // }
    return total
}

var text = "Cf"
// console.log(`${text} => ${excel(text)}`)

function findSingle(arr){
    arr.sort()
    // let single = null
    let single = []
    arr.forEach(element => {
        // if(single != null || single == element){
        //     single = null
        // }else{
        //     single = element
        // }

        if(single.includes(element)){
            single.splice(single.indexOf(element),1)
        }else{
            single.push(element)   
        }
    });
    return single
}
// console.log(findSingle([1,2,3,4,2]))

function anagram(s,t){
    s=s.split('').sort().join()
    t=t.split('').sort().join()
    return s===t
}

// console.log(anagram("racun","curanasdsad"))

// var climbStairs = function(n) {
//     const ary =[1,1];
//     if(n>1){
//         for(let i = 2; i <= n ; i++){
//             // console.log(ary[i],ary[i-1],ary[i-2])
//             ary[i] = ary[i-1] + ary[i-2];
//         }
//     };
//     return ary[ary.length-1]
// }
function staircase(n){
    if(n<2){
        return 1
    }else{
        return staircase(n-1)+staircase(n-2)
    }
}

// let printstep = (n)=>{
//     let savedstep = []
//     let step = [1,2]
//     let totalsum = 0
//     while(totalsum <= n){
//         if(totalsum + step[1] <= n){
//             totalsum += step[1]
//             savedstep.push(step[1])
            
//         }else if(totalsum + step[0] <= n){
//             totalsum += step[0]
//             savedstep.push(step[0])
//         }else{
//             break;
//         }
//     }
//     console.log(savedstep)
//     return savedstep
// }
let x = 3
console.log(`${x} tangga = ${staircase(x)} cara`)


