class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._happyMeter = 0;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happymeter() {
        return this._happyMeter;
    }
 
    eat(){
        this._hunger--;
    } 
    drink(){
        this._thirst--;
    }
    increaseHappy(){
        this._happyMeter++;
    }
}

class Dog extends Animal {
    constructor(name, lovesBones){
        super(name);
        this._lovesBones = lovesBones
    }
    get lovesBones(){
        return this._lovesBones;
    }
}

const ralph = new Dog ("Ralph", true)

const eatdrink = () => {
    ralph.eat();
    ralph.drink();
}

const playgame = () => {
    ralph.increaseHappy();
}

eatdrink()
console.log(ralph)
playgame()
console.log(ralph)


