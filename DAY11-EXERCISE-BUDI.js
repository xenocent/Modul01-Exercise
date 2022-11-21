// callback
function add(a,b, cbfn){
    let result =  a+b
    cbfn(result)
}

function print(data){
    console.log(data)
}

// let result = add(10+25)
// print(result)

// add(35,12,(res)=>console.log(`Hasil Penjumlahan ${res}`))

// nested callback 
const download = (url,callback)=>{
    console.log(`Download from ${url}...`)
    let count = 0
    for (let index = 0; index < 1000; index++) {
        count ++
    }
    if(count == 1000)
        callback(url)
}

const notify = (url)=>{
    console.log(`Download from ${url} success`)
}

let url1 = "https://gdrive.com"
let url2 = "https://spotify.com"
let url3 = "https://youtube.com"

// single callback
// download(url1,notify)

// nested callback

// download(url1,()=>{
//     download(url2,()=>{
//         download(url3,()=>{
//             console.log(`Download Complete All`);
//         })
//     })
// })


// PROMISE
let progress = 0
const downloadPromise = new Promise((resolve,reject)=>{
    while(progress < 100)
        progress++
    if (progress == 100) {
        resolve(`Download Complete`)
    } else {
        reject(`Download Failed`)
    }
})

// PROMISE HANDLER
// downloadPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.error(error);
// })

// promise.all ambil smua data promise
const downloadStart = new Promise((resolve,reject)=>{
    while(progress < 100)
        progress++
    if (progress == 100) {
        resolve(`Download Complete`)
    } else {
        reject(`Download Failed`)
    }
})
const downloadHalf = new Promise((resolve,reject)=>{
    while(progress < 100)
        progress++
    if (progress == 100) {
        resolve(`Download Complete`)
    } else {
        reject(`Download Failed`)
    }
})
const downloadFinish = new Promise((resolve,reject)=>{
    while(progress < 100)
        progress++
    if (progress == 100) {
        resolve(`Download Complete`)
    } else {
        reject(`Download Failed`)
    }
})

// Promise.all([downloadStart,downloadHalf,downloadFinish]).then((result)=>{
//     console.log(result);
// })

// ASYNC / AWAIT

let execute = async()=>{
    try {
        let res = await downloadStart(url1)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
    
}

/**
 * ex 1
 * 
 *  */
const QueueFood = require('./queuefood')
/**
 * ex 2
 */
const queue = new QueueFood()
queue.enqueue("Nasi Goreng")
queue.enqueue("Nasi Bakar")
queue.enqueue("Nasi Rames")
queue.enqueue("Nasi Kuning")

queue.executeOrder()