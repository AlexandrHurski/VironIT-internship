function Queue (){
    this.counter =0
}
Queue.prototype.count = function(){
    this.counter++
}
Queue.prototype.getCount = function(){
    return this.counter
}
Queue.prototype.minus = function(){
    this.counter--
    console.log('minus one from queue')
}

let qu = new Queue()



