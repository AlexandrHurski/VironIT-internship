function smthLiving(name){
this.name = name
}

let sml = new smthLiving('chot-to')
console.log(sml)

function Animal (name,type){
smthLiving.apply(this,arguments)
this.type= type
}

Animal.prototype = Object.create(smthLiving.prototype)
Animal.prototype.constructor = Animal

let anim = new Animal('bear','dasd')
console.log(anim)

function Cat(name,type,age){
    Animal.apply(this,arguments)
    this.age=age
}
Cat.prototype =Object.create(Animal.prototype)
Cat.prototype.constructor =Cat

let caty = new Cat('k0tik','cat',23)
console.log(caty)