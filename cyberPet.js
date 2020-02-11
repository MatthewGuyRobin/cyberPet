class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 0;
        this._thirst = 0;
        this._happyMeter = 0;
        this._timePlayed = 0;
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

    increaseHappyMeter(){
        this._timePlayed++;
        this._happyMeter += 10
    }
    
}