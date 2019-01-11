function Component(tag,id){
this.tag = tag
this.id = id

this.eventTable = {}
}

Component.prototype.render = function(html){
    let El = document.getElementById(this.id)
    El.innerHTML = html
}

Component.prototype.createElement = function(idToPlace){
    let newEl = document.createElement(this.tag)    // take TAG,ID, HTML from constructor 
    newEl.id = this.id
    return document.getElementById(idToPlace).appendChild(newEl)   // the only parameter is ID of ELEMENT, where i want to append new element
}
Component.prototype.updateParams = function(id,param,value){
    document.getElementById(id).setAttribute(param,value)
}

Component.prototype.on = function(msg,someFunc){
    this.eventTable[msg] = someFunc
}
Component.prototype.emit = function(key){
    this.eventTable[key]()
}
// Component.prototype.updateParams = function(){
// }
