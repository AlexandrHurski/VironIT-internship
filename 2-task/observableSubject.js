class ObservableSubject { // creating parent class for a QUEUE
    constructor(){
        this.observers=[]
       // this.name = name
    }
    subscribe(obs){
        this.observers.push(obs)   //function for adding new subscribers
        console.log(`${this.name} subscribed`)
    }
    unsubscribe(obs){
        this.observers = this.observers.filter( (observer)=>observer !== obs )
    }
    notify(){
        this.observers.forEach(obs => obs.notify());
        console.log(`${this.name} is FREE for observers`)
    }
}







