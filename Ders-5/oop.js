const john = {
    name:'John',
    age:23,
    sayHello() {
        console.log('My name is ' + this.name);
    }
}
console.log(john);
john.sayHello();

//Oject Constructor 
function Person(name, age) {
    this.name=name;
    this.age=age;
}
const jane = new Person('Jane',21);
console.log(jane);

jane.gretting = function () {
    console.log('I am '+this.name);
}
console.log(jane);

function Engineer(name, age, experience) {
    Person.call(this, name, age);
    this.job='Engineer';
    this.experience = experience;
}
const engin = new Engineer('Engin', 15);
console.log(engin);

function CivilEngineer(name, age, experience) {
    Engineer.call(this, name, age, 5);
    this.title='CivilEngineer';
}
const sinan =  new CivilEngineer('Sinan',25);
console.log(sinan);


// Class

//superClass / Perent
class Animal{
    isAlive = true;
    type = 'Animal';

    constructor(color, legs){
        this.color = color;
        this.legs = legs;
    }

    eat = function(){ //anonymous function
        console.log('eating ....');
    }

    walk(){
        console.log('Walking....');
    }
}

const animal = new Animal('brown', 4);
console.log(animal); 
animal.eat();
animal.walk();

//subClass / Child
class Bird extends Animal{
    type='Bird';

    constructor(color,name)
    {
        super(color, 2); // superClass'ın contractur'ına değer gönderiyoruz.
        console.log('I can not walk. I can fly!');
    }
}

const twitty = new Bird('Yellow', 'Twitty');
console.log(twitty);