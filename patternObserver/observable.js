function Observable (state){
    this.state = state
    this.observers = [];
}
Observable.prototype.subscribe = function(obs){
    this.observers.push(obs)
}
Observable.prototype.notify = function(someFunc){
   this.observers.foreach(obs => obs.notify(someFunc));
}
Observable.prototype.setState = function(someState){
    this.state = someState
//    this.notify(this.state)
}
Observable.prototype.getState = function(){
    return this.state
}

let xxx = new Observable('xxx')
console.log(xxx.getState())
xxx.setState('haha')
console.log(xxx.getState())