class Ninja {
    constructor (name, health = 90, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`My name is ${this.name}, and my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}!`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`I feel even better! ${this.name} gained 10 health. My health is now ${this.health}!`);
    }
}

class Sensei extends Ninja {
    constructor (name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Listen not to the one who speaks the loudest, but to the one who speaks the truth.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();




