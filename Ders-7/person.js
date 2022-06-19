class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    gretting(){
        console.log('Hello I am ${this.name}!');
    }
}

module.exports = Person; //Dışarıdan erişim sağlamak için modülü export ediyoruz.
