let but1= document.getElementById('but1')

let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')

function makingSubscribe (){
    atm1.subscribe(queue)
    atm2.subscribe(queue)
}

// function workingATM(){
//     setInterval(function(){
//         if(queue.getAmount>0){
//             console.log(atm1.counter())
//             text1.innerHTML = atm1.getCount()
//             queue.minusOne()
//             atm1.notify()
//         }
//     },1200)
//}
function startWorkingDay(){
    makingSubscribe()
    // atm1.notify()
    // atm2.notify()
    setInterval(function(){
        queue.addAmount()               // every 3 sec i add random amount of clients to the queue
        text2.innerHTML=queue.getAmount()  // every 3 sec i fill  'Text Area' of queue.
    },3000)
    setInterval(function(){
        if(queue.getAmount()>0){
            atm1.counter();
            text1.innerHTML = atm1.getCount()
            queue.minusOne()
            atm1.notify()
        }
    },800)   
    setInterval(function(){
        if(queue.getAmount()>0){
            atm2.counter();
            text3.innerHTML = atm2.getCount()
            queue.minusOne()
            atm2.notify()
        }
    },200)   

}
but1.onclick = startWorkingDay
