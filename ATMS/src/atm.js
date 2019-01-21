import Component from './component'
import CloseComp from './closeComp'

export default function ATM (id) {
  Component.call(this)
  this.tag = 'div'
  this.className = 'atms'
  this.counter = 0
  this.id = id
  this.state = undefined
  this.countField = new Component('p', `${this.id}cf`) // field <p></p>  for COUNTER
  this.button = new CloseComp() // field for Button
  this.render('atmsdiv')
  this.button.render(this.id)
  this.countField.render(this.id)
  this.on('free', () => {
    this.state = 'free'
    document.getElementById(this.id).classList = [`atms ${this.state}`]
  })
  this.emit('free')
  this.on('busy', () => {
    this.state = 'busy'
    document.getElementById(this.id).classList = [`atms  ${this.state}`]
    this.incr()
  })
}
ATM.prototype = Object.create(Component.prototype)
ATM.prototype.constructor = ATM

ATM.prototype.render = function (idToPlace) { // create DOM-element and APPEND it to some place
  let newEl = document.createElement(this.tag)
  newEl.id = this.id
  newEl.classList.add(this.className)
  return document.getElementById(idToPlace).appendChild(newEl)
}
ATM.prototype.incr = function () { // increase counter  by 1
  this.counter++
  document.getElementById(`${this.id}cf`).innerText = this.counter
}
