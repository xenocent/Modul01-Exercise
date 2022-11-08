let input = [
    {name:"aku",email: "a@a.com",age:new Date("1995-12-12"), score:80},
    {name:"kamu",email: "b@a.com",age:new Date("1996-12-12"), score:60},
    {name:"dia",email: "c@a.com",age:new Date("1997-12-12"), score:90},
    {name:"mereka",email: "d@a.com",age:new Date("1998-12-12"), score:70}
]

function calc(arr){
    let age = {highest:null,lowest:null,average:null}
    let score = {highest:null,lowest:null,average:null}
    
    for(let x of arr){
        let yearage = Date.now() - x.age
        yearage = Math.floor(yearage/ (1000 * 60 *60 *24 * 365))
        
        if(age.highest < yearage){
            age.highest = yearage
        }
        if(age.lowest > yearage || age.lowest == null){
            age.lowest = yearage
        }
    
        age.average += yearage

        if(score.highest < x.score){
            score.highest = x.score
        }
        if(score.lowest > x.score || score.lowest == null){
            score.lowest = x.score
        }
        score.average += x.score
    }
    age.average = age.average/arr.length    
    score.average = score.average/arr.length    
    console.log(`Age highest = ${age.highest}, lowest = ${age.lowest}, rata-rata = ${age.average}\nScore highest = ${score.highest}, lowest = ${score.lowest}, rata-rata = ${score.average}`)
}

calc(input)


class product {
    constructor(name,price,qty){
        this.name = name
        this.price = price
        this.qty = qty
    }
}

class transaction{
    total = 0
    allproduct = []

    add(item){
        this.allproduct.push(item)
    }

    show(){
        for(let x of this.allproduct){
            console.log(`item ${x.name} => ${x.qty} harga ${x.qty * x.price}`)
        }
    }

    checkout(){
        for(let x of this.allproduct){
            console.log(`item ${x.name} => ${x.qty}`)
            this.total = this.total + (x.price*x.qty)
        }
        console.log(`total => ${this.total}`);
        this.removeall()
    }

    removeall(){
        this.allproduct = []
    }
}

let trans = new transaction()
trans.add(new product("gelas",10000,2))
trans.add(new product("piring",20000,1))
trans.add(new product("sendok",5000,1))
trans.show()
trans.checkout()