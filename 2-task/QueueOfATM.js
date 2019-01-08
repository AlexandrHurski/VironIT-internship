class QueueOfATM extends Observer {
    constructor(name){
        super()
        this.name=name;
        let amount=0;         // working day starts with 0 clients
        this.getAmount = function(){   // returning current amount of clients
            return amount
        }
        this.addAmount = function(){                 //adding random amounts of clients.
            let x = Math.round(Math.random()*5)
            amount +=x
            
            
        }
        this.minusOne = function(){                          //minus one client.
            amount--
            
        }
    }    
}
let queue = new QueueOfATM('queue')
