function EventEmitter(){
    this.eventTable = {}
}
EventEmitter.prototype.on = function(msg,someFunc){
    this.eventTable[msg] = someFunc
}
EventEmitter.prototype.emit = function(key){
        this.eventTable[key]()
}


