function ATM(id){
    EventEmitter.call(this)
    this.count=0;
    this.id =id
    this.state=undefined
}
ATM.prototype = Object.create(EventEmitter.prototype)
ATM.prototype.constructor = ATM

ATM.prototype.setState = function(curState,exState){
    this.state=curState
    document.getElementById(this.id).classList.add(this.state)
    document.getElementById(this.id).classList.remove(exState)
}
ATM.prototype.getState = function(){
    return this.state
}

let atm1 = new ATM('atm1')   // first parameter -  STATE, it is FREE at the beginning of the working day, second parameter - document.id
let atm2 = new ATM('atm2')



