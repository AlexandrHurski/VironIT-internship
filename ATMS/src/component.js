import EventEmitter from './eventemitter.js'

export default function Component (tag, id) {
  EventEmitter.call(this)
  this.tag = tag
  this.id = id
}

Component.prototype = Object.create(EventEmitter.prototype)
Component.prototype.constructor = Component

Component.prototype.render = function (idToPlace) { // create DOM-element and APPEND it to some place
  let newEl = document.createElement(this.tag)
  newEl.id = this.id
  return document.getElementById(idToPlace).appendChild(newEl)
}
