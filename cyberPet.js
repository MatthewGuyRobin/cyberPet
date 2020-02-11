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
    get timeplayed() {
        return this._timePlayed
    }
    hunger(){
        this.hunger--;
    }   
    thirst(){
        this._thirst--
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

const bruno = new Dog ("bruno", true)