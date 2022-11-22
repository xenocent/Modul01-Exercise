var data =[
    {
        name: 'Avanza',
        brand : 'Toyota',
        machine : "DOHC",
        cc:1500
    },
    {
        name: 'Supra',
        brand : 'Toyota',
        machine : "V8",
        cc:5000
    },
    {
        name: 'Ertiga',
        brand : 'Suzuki',
        machine : "DOHC",
        cc:1550
    },
    {
        name: 'Model 3',
        brand : 'Tesla',
        machine : "Electric",
        cc:2000
    },
    {
        name: 'Model 4',
        brand : 'Tesla',
        machine : "Electric",
        cc:2000
    },
]


var print = (data,cbfn = null) =>{
    let text = ""
    // array methods
    if(cbfn){
        check= data.filter(x=>cbfn(x))
        if(check.length != 0){
            data = check
        }
    }
    data.forEach(({brand,name,machine,cc},index) => text += `${++index}. ${brand} ${name} with ${machine} ${cc.toLocaleString('id')}\n`);
    
    // normal for
    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     if(cbfn == null || (typeof cbfn === 'function' && cbfn(element))){
    //         let {name,brand,machine,cc} = element
    //         text += `${index+1}. ${brand} ${name} with ${machine} ${cc.toLocaleString()}\n`
    //     }
    // }

    return text
}

console.log(print(data))