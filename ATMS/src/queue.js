import Component from './component'

export default function Queue (id, idToPlace) {
  Component.call(this, id)
  let self = this
  this.counter = 0
  this.tag = 'div'
  this.id = id
  this.render(idToPlace)
  this.on('start', function adding () {
    setTimeout(() => {
      self.incr()
      adding()
    }, getRandom(minQu.value * 1000, maxQu.value * 1000))
  })
}
Queue.prototype = Object.create(Component.prototype)
Queue.prototype.constructor = Queue
Queue.prototype.incr = function () {
  this.counter += 1
  document.getElementById(this.id).innerText = this.counter
}
Queue.prototype.decr = function () {
  this.counter > 0 ? this.counter -= 1 : this.counter = this.counter // странная запись this.counter = this.counter
  document.getElementById(this.id).innerText = this.counter
}

let minQu = document.getElementById('minQu')
let maxQu = document.getElementById('maxQu')
minQu.value = 2
maxQu.value = 4
let getRandom = (min, max) => {
  if (min > 0 && max >= min) { // check the correctness of input values
    return Math.floor(Math.random() * (max - min + 1)) + min
  } else {
    alert('error,incorrect value \r\n values are set to default')
    minQu.value = 2
    maxQu.value = 4
  }
}
