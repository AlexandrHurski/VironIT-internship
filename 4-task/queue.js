function Queue (tag,id,html){
    Component.apply(this,arguments)
    this.counter =0
}

Queue.prototype = Object.create(Component.prototype)
Queue.prototype.constructor = Queue



