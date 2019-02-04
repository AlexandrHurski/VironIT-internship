export default function EventEmitter () {
  this.eventTable = {}
}
// у тебя только одну функцию можно на ивент повесить, т.е. тест из задачи 1 не пройдет
EventEmitter.prototype.on = function (event, func) {
  this.eventTable[event] = func
}
EventEmitter.prototype.emit = function (event) {
  // а если такого ивента нет? ну и подумай над реализацией, как не только один коллбек передавать
  this.eventTable[event]()
}
