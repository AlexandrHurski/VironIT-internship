let minQu = document.getElementById('minQu') 
minQu.value =2
let maxQu = document.getElementById('maxQu')
maxQu.value = 4

//CREATING new nodeElement.
let qu = new Queue('div','quId')
qu.createElement('divForQue')
qu.render("<p>в очереди </p><textarea id='qutext'></textarea>")
document.getElementById('qutext').innerText = qu.counter

let getRandom =function randomForQueue(min, max) {            //random between min and max
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let atmrand = getRandom(2000,3000)// rand for atms
let queueAdding = function(){
    setTimeout(function(){
        qu.counter++
        qutext.innerText = qu.counter
        queueAdding()
    },getRandom(minQu.value*1000,maxQu.value*1000))   // we can change minQu and maxQu dinamically, because queueAdding() eveery time uses new parameters
}


// creating ATMs
let atmsArr = [] // arr for all ATMS
let atm1 = new ATM('div','atm1')    //tag and it`s ID 
atm1.createElement('divForATMs')
atm1.render(`<textarea id='${atm1.id}text'></textarea>`)
document.getElementById('atm1').classList.add('atms')
document.getElementById('atm1text').innerText = atm1.count
atmsArr.push(atm1)
// create second ATM
let atm2 = new ATM('div','atm2')
atm2.createElement('divForATMs')
atm2.render(`<textarea id='${atm2.id}text'></textarea>`)
document.getElementById('atm2').classList.add('atms')
document.getElementById('atm2text').innerText = atm2.count
atmsArr.push(atm2)
// create button 'delete'  for ATM
let redButs = []
let redBut1 = new Component('div','redBut1')
redBut1.createElement('atm1')
redBut1.render('X')
document.getElementById('redBut1').classList.add('redBut')
redButs.push(redBut1)

let redBut2 = new Component('div','redBut2')
redBut2.createElement('atm2')
redBut2.render('X')
document.getElementById('redBut2').classList.add('redBut')
redButs.push(redBut2)
  // BUtton    Add ATM
let AddATMButton = document.getElementById('butForATM')

function createNewATM(){
   atmsArr.push( new ATM('div',`atm${atmsArr.length+1}`))
   atmsArr[atmsArr.length-1].createElement('divForATMs')
   atmsArr[atmsArr.length-1].render(`<textarea id='atm${atmsArr.length}text'></textarea>`)
   document.getElementById(`atm${atmsArr.length}`).classList.add('atms')
   document.getElementById(`atm${atmsArr.length}text`).innerText = atmsArr[atmsArr.length-1].count
   redButs.push( new Component('div',`redBut${redButs.length+1}`))
   redButs[redButs.length-1].createElement(`atm${redButs.length}`)
   redButs[redButs.length-1].render('X')
   document.getElementById(`redBut${redButs.length}`).classList.add('redBut')
   document.getElementById(`redBut${redButs.length}`).onclick = function(){
       this.parentElement.remove()
       console.log(this.parentElement.id)
        atmsArr = atmsArr.filter( el => el.id != this.parentElement.id)
   }
}

AddATMButton.onclick = createNewATM
function emits(){
    for( let i =0;i<atmsArr.length;i++){
        atmsArr[i].on('free',function(){
            atmsArr[i].setState('free','busy')
        })
        atmsArr[i].on('busy',function(){
            atmsArr[i].setState('busy','free')
        })
        atmsArr[i].emit('free')
    }
    
}
function quChecker(){
    let quant = atmsArr.length
    for(let i=0;i<quant;i++){
        if(qu.counter>0 && atmsArr[i].getState()==='free'){
            atmsArr[i].count++
            qu.counter--
            setTimeout(function(){
                atmsArr[i].emit('busy')
            },1000)
            setTimeout(function(){
                atmsArr[i].emit('free')
            },atmrand)
            
            document.getElementById(`${atmsArr[i].id}text`).innerText =atmsArr[i].count

        }
    }
}

function  startWorkingDay(){
    queueAdding()
    emits()
    setInterval(function(){
        quChecker()
        document.getElementById('qutext').innerText = qu.counter
    },1000)
}
document.getElementById('but1').onclick = startWorkingDay