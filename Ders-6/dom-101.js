//window.alert("Hello World");
// alert('asdfasdf');

// const text = document.querySelector('.text').innerText;
const text = document.querySelector('.text');

console.log(text.__proto__.constructor); //HTMLParagraphElement()

const input = document.createElement('input'); // ilk input elementini oluşturuyoruz JS üzerinde. 
console.log(input);

const containers = document.querySelectorAll('.container');//bütün conteiner class'larını çek diziye at
console.log(containers);

containers[1].append(input); // 2. container'ın içerisine input elementi JS ile eklendi.

//containers.forEach();  kullanabilirim map, raduce

const p = document.createElement('p');
p.innerHTML = 'Hello JS';
containers[0].append(p);

const users = ['John', 'Alice', 'Bob', 'Betty']; // bu datayı backen API'den aldığımızı düşünelim

const ul = document.querySelector('.users');

users.forEach(function(user){
    const li = document.createElement('li');
    li.innerHTML = user;
    ul.append(li);
})

const container = document.querySelector('.container');
console.log(container);
container.classList.remove('wrapper'); // wrapper class'ını çıkartıyoruz.
container.classList.add('wrapper2');

container.classList.toggle('toggle'); // toggle ekli class'ı siler. olmayanı ekler.

container.style = 'background-color:green';

const btn = document.querySelector('#btn');
console.log(btn);

const childConteiner = container.querySelector('.container');
console.log(childConteiner);