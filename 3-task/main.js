let but1= document.getElementById('but1')
let text1 = document.getElementById('text1')  // textArea for atm1
let qutext = document.getElementById('qutext')
let text3 = document.getElementById('text3') // textAre for atm2

text1.innerText = atm1.count
text3.innerText = atm2.count
let getRandom =function randomForQueue(min, max) {            //random between min and max
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}
let rand = getRandom(2000,4000)
let atmrand = getRandom(1000,3000)
let queueAdding = function(){
    setTimeout(function(){
        qu.count()      // qu declared at the same class
        qutext.innerText = qu.getCount()
        queueAdding()
    },rand)
}
// variables for ATMs and Queue are declared at the same classes
atm1.on('free',function(){
    atm1.setState('free','busy')   //adding FREE, deleting BUSY
})
atm1.on('busy',function(){
    atm1.setState('busy','free')
})
atm2.on('free',function(){
    atm2.setState('free','busy')   //adding FREE, deleting BUSY
})
atm2.on('busy',function(){
    atm2.setState('busy','free')
})
function quChecker(){
    if(qu.getCount()>0 && atm1.getState()==='free'){
        atm1.count++
        qu.minus()
        setTimeout(function(){
            atm1.emit('busy')
        },1000) // delay 1 sec
        setTimeout(function(){
            atm1.emit('free')
        },5000)
        text1.innerText = atm1.count
        quChecker()
    }
    if(qu.getCount()>0 && atm2.getState()==='free'){
        atm2.count++
        qu.minus()
        setTimeout(function(){
            atm2.emit('busy')
        },1000) // delay 1 sec
        setTimeout(function(){
            atm2.emit('free')
        },atmrand)
        text3.innerText = atm2.count
        quChecker()
    }
}

function startWorkingDay(){
    atm1.emit('free')
    atm2.emit('free')
    queueAdding()
    setInterval(function(){
        quChecker()
    },1000)
}
but1.onclick = startWorkingDay


