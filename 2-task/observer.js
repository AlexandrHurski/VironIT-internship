class Observer {
    constructor(name){
        this.name = name;
    }
    notify(){
        console.log(`observer ${this.name} is notified`)
    }
}