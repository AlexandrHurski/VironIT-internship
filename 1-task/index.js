let button = document.getElementById('but1')
let queueDiv = document.getElementById('queue')

class ATM {
    constructor(name){
        this.name = name;
        let count =0;
        this.counter = function(){
            ++count
        }
        this.getCount = function(){
            return count;
        }
    }
}
class QueueOfATM{
    constructor(name){
        let amount=0;         // working day starts with 0 clients
        this.name = name
        this.getAmount = function(){   // returning current amount of clients
            return amount
        }
        this.addAmount = function(){                 //adding random amounts of clients.
            let x = Math.round(Math.random()*5)
            amount +=x
            queueDiv.innerHTML=`adding new ${x}clients. the are ${amount} more clients`
        }
        this.minusOne = function(){                          //minus one client.
            amount--
            queueDiv.innerHTML=`minus one client. there are ${amount} more  clients`
        }
    } 
}

let queue = new QueueOfATM('onequeue')
let atm1 = new ATM('atm1')
let atm2 = new ATM('atm2')
function startWorkingDay(){
    setInterval(queue.addAmount,1000)   //adding new random amount of clients every 1sec.
    setInterval(function(){
        if(queue.getAmount()>0){
            atm1.counter();
            document.getElementById('1').innerHTML = `i work with ${atm1.getCount()} clients today`
            queue.minusOne()
        }
    },800)       //first ATM will take new client every 0.8sec. working day  starts with him
    setInterval(function(){
        if(queue.getAmount()>0){
            atm2.counter();
            document.getElementById('2').innerHTML = `i work with ${atm2.getCount()} clients today`
            queue.minusOne()
        }
    },1200)  //take a client every 1.2sec  
    
}
button.onclick=startWorkingDay
