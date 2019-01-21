export default function EventEmitter () {
  this.eventTable = {}
}
EventEmitter.prototype.on = function (event, func) {
  this.eventTable[event] = func
}
EventEmitter.prototype.emit = function (event) {
  this.eventTable[event]()
}
