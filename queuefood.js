class QueueFood{
    #container = [];
    #result = [];
    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        return this.#container.shift()
    }

    makanbang = (urutan,makanan,waktu)=>{ 
        return new Promise((resolve,reject)=>{
            // if((waktu/1000).toFixed(0) >= 5)
                setTimeout(()=>resolve(this.#result.push(`${urutan}. ${makanan} Done✅  process ${(waktu/1000).toFixed(0)} sec`)),waktu)
            // else
            //     reject(this.#result.push(`kelamaan ${(waktu/1000).toFixed(0)}`))
        })
    }

    async executeOrder(){
        let len = this.#container.length, index = 0, rand, nourut = 1 , promises = []
        while(index <len){
            rand = Math.random() * (10000 - 1000) + 1000 // 1-10 dtk
            promises.push(this.makanbang(nourut,this.#container[index],rand))            
            nourut++;
            index++;
        }
        
        // Promise.allSettled(promises).then(res=>{
        //     console.log(res,this.#result)
        // })
        Promise.all(promises).then(res=>{
            console.log(this.#result)
        })
    }
    
    
}

module.exports = QueueFood