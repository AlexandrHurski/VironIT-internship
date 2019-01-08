function Animal (type){
    this.type = type 
}
Animal.prototype.eat = function(){
    console.log('iameating!!!!')
}
let anim = new Animal('monkey')
console.log(anim)
anim.eat()
function Bear (type,name){
    Animal.apply(this,arguments)
    this.name = name
}
Bear.prototype = Object.create(Animal.prototype)
Bear.prototype.constructor = Bear
Bear.prototype.honeyDealer = function(){
    console.log('i`m selling honey')
}
let bbb = new Bear('bear','winnie')
console.log(bbb)
bbb.eat()
bbb.honeyDealer()
//anim.honeyDealer()   //error. function honeyDealer only for child ( functionBear)

//https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5