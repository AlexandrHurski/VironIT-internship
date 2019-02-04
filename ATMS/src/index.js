import '../index.css'
import ATM from './atm.js'
import Queue from './queue.js'

let atmrand = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let butAddATM = document.getElementById('addatm') // button for adding atms
let start = document.getElementById('quStart') // creating QUEUE
let queue = new Queue('quID', 'queDiv')
let atmArr = [] // array for all atms to control them
butAddATM.onclick = function addATM () { // add ATM to the DOM and to the ARRAY of ATMS to control them all!
  atmArr.push(new ATM(`atm${atmArr.length + 1}`))
}
function quChecker () {
  for (let i = 0; i < atmArr.length; i++) {
    if (queue.counter > 0 && atmArr[i].state === 'free') {
      queue.decr()
      atmArr[i].emit('busy')
      setTimeout(function () {
        atmArr[i].emit('free')
      }, atmrand(2500, 3500)) // i set such interval
    }
  }
}
start.onclick = function startWorikngDay () {
  queue.emit('start')
  start.onclick = null
  setInterval(quChecker, 100) // чтобы так часто не запускать проверку, можно было придумать еще событий и на них подписаться
}
