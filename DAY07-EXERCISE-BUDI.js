let x = 3
const arra = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 2', email : 'student2@mail.com' },
    { name: 'Student 1', email : 'student1@mail.com' },
]
const arrb = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 3', email : 'student3@mail.com' }
]
const obja = { c: 1, b: 2 } 
const objb = { a: 1, b: 2 }
console.log(`equal` ,equal(obja,objb))
console.log(`inter `,inter(obja,objb))
console.log(`merge `,merge(arra,arrb))
console.log(`switched `,switched(arra))
console.log(`factorial ${x} =`,factorial(x))

// equal
function equal(a,b) {
    // return Object.is(a,b)
    if(a.length == b.length){
        for (const [key,value] of Object.entries(a)) {
            if(Object.hasOwn(b,key) && b[key] == value){
                continue
            }else{
                return false
            }
        }
        return true
    }
    return false
}

// intersection
function inter(a,b) {
    let biggest,lowest
    if(Object.is(a,b)){
        return a
    }else{
        if(a.length > b.length){
            biggest = a
            lowest = b
        }else{
            biggest = b
            lowest = a
        }
        let keysbiggest = Object.keys(biggest)
        let keyslowest = Object.keys(lowest)
    
        let filtered = keysbiggest.filter(x => keyslowest.includes(x))
        let newobj = {}
        for (let index = 0; index < filtered.length; index++) {
            newobj[filtered[index]] = a[filtered[index]]
        }
        
        return newobj
    }
}

// merge
function merge(a,b) {
    let newarr = [],check
    a.forEach(x=>{
        check = newarr.filter(y=>equal(x,y))
        if(check.length == 0){
            newarr.push(x)
        }
    })
    b.forEach(x=>{
        check = newarr.filter(y=>equal(x,y))
        if(check.length == 0){
            newarr.push(x)
        }
    })
    return newarr
    // var ids = new Set(a.map(d => d.name));
    // var merged = [...a, ...b.filter(d => !ids.has(d.name))];
    // return merged
}

//switch
function switched(a) {
    let newobj = {} , newarr = []
    // for (const [key,value] of Object.entries(a)) {
    //     newobj = {}
    //     for (const [k,v] of Object.entries(value)) {
    //         newobj[v] = k
    //     }
    //     newarr.push(newobj)
    // }
    for (const keys of a) {
        newobj = {}
        for (const prop in keys) {
            newobj[keys[prop]] = prop
        }
        newarr.push(newobj)
    }
    return newarr
}

//factorial number 
function factorial(x,total=1){
    if(x>0){
        total = total*x
        return factorial(x-1,total)
    }else{
        return total
    }    
}
