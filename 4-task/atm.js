function ATM(){
    Component.apply(this,arguments)
    this.count=0;
    this.state=undefined

}
ATM.prototype = Object.create(Component.prototype)
ATM.prototype.constructor = ATM

ATM.prototype.setState = function(curState,exState){
    this.state=curState
    document.getElementById(this.id).classList.add(this.state)
    document.getElementById(this.id).classList.remove(exState)
}
ATM.prototype.getState = function(){
    return this.state
}




