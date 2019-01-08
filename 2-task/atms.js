class ATM extends ObservableSubject {
    constructor(name){
        super()
        this.name = name;
        let count =0;
        this.counter = function(){
            ++count
        }
        this.getCount = function(){
            return count;
        }
    }
}

let atm1 = new ATM('atm1')
let atm2 = new ATM('atm2')
