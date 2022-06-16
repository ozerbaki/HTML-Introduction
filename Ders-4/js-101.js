// Dynamic Type
var a= "Hello word";
a=23;
a=true;
a='Hello Again';

const c='Constant variable';
//c='change constant';// Değiştiremeyiz. Hata verir.

console.log(a);
console.log(c);

//Data Types
//Primitive data types
var str = "STRING";
var number = 23;
var boolean = true;
var nullvar = null;
var notANumber = NaN;
var myUndefined = undefined;
var myVar;


//Complex Data Types
//Object
var myObj = {
    name : 'Jhon',
    age : 23,
    isEnginier : true,
}
console.log(myObj);
console.log(myObj['age']);
console.log(myObj.name);

//Yeni Property Ekleme
myObj.country='USA';
console.log(myObj.country);

//Property Silme
delete myObj.isEnginier;
console.log(myObj);

//Property değerini değiştirme
myObj.name = 'Jane';
console.log(myObj);

//Array
var myArr = ['Jhon', 'Jane', 23, 57, true, false, null, NaN];
console.log(myArr);

//Read a Value
console.log(myArr[0]);
console.log(myArr[3]);

//Değer değiştirme
myArr[0]='Bob';
console.log(myArr);

//Değer Ekleme
// en sona değer ekler
//FIFO : First In First Out ==> Market sırası
//LIFO : Last In First Out ==> Dolu asansör
myArr.push('Alice');
console.log(myArr);

// En başa değer ekleme
myArr.unshift('David');
console.log(myArr);

//Değer çıkarma
// pop() ==> en sondaki değeri arrayden çıkartmaya yarar.
myArr.pop();
console.log(myArr);

//ilk sıradaki elemanı arraydan çıkartmaiçin 
myArr.shift();
console.log(myArr);

//Math Operators
//Toplama
var sum = 5+6;
console.log(sum);

//Çıkarma
var sub = 23-5;
console.log(sum);

//Çarpma
var mul = 23 * 13;
console.log(mul);

//Bölme
var  div = 24 / 4;
console.log(div);

//Mod Alma
var mod = 11 % 2;
console.log(mod);

//Us alma
var us = 2^4;
console.log(us);

//Math Shortcuts
var x=4;
x+=4
console.log(x);

var x=4;
x-=4
console.log(x);

var x=4;
x*=4
console.log(x);

var x=4;
x/=4
console.log(x);

//1 arttırıp 1 azaltmak için daha da kısa kullanabiliriz
x++;// x=+1;
x--;// x=-1;

// Conditional Operators
var n = 13;
var l = 7;

var con1 = n > l;
console.log(con1);

var con2 = n < l;
console.log(con2);

var con3 = 13 <= n;
console.log(con3);

var con4 = 5 == 5;
console.log(con4);

var con5 = 7 >= n;
console.log(con5);

var con6 = 'Hello' == 'hello';
console.log(con6);

var con7 = '25' == 25;
console.log(con7);

//Strict Equality Check
var con8 = '25' === 25;
console.log(con8);

//Not Equal Check
var con9 = '44' != 44;
console.log(con9);

//Not strict equal check
var con10 = 'Hello' !== "Hello";
console.log(con10);

// IF
if (3>5) {
    console.log('3 buyuktur 5');
}

var msg ='Hello';
if (msg=='Hello') {
    console.log('Message is Hello!');
}

// ELSE
var age = 45;
if (age>=65) {
    console.log('Aşı olduk mu?');
}
else{
    console.log('Daha gençsin!');
}

//ELSEIF
var jhonAge=29;
if (jhonAge>=45) {
    console.log('Jhon 45 yaşından büyüktür.');
}
else if (jhonAge>=18) {
    console.log('Jhon 18 yaşından büyüktür.');
} 
else if(jhonAge>=12){
    console.log('Jhon genç birisidir.');
}
else{
    console.log('Jhon bir çocuk mu?');
}

// switch case
var firstName = 'Alice';
switch (firstName) {
    case 'Bob':
        console.log('Sen Bob sun');
        break;
    case 'Jhon':
        console.log('Sen Jhon sun');
        break;
    case 'Alice':
        console.log('Sen Alice sin');
        break;
    default:
        console.log('Sen Kimsin?');
        break;
}

//Döngüler

//For
var loopArr = ['Jhon','Alice','Bob','Betty'];
for (var i = 0; i < loopArr.length; i++) {
    console.log(loopArr[i]);
}
// var keyword'ü global scop'ta değişken yaratır.
// let keyword ise block scope'ta değişken yaratır.

var z=2;
for (let z = 0; z < 5; z++) {
    console.log('z = ', z);
}
console.log('Global z = ', z);

// Negatif yönlü for döngüsü pozitif yönlü for döngüsüne göre daha hızlı ve performanslı çalışır !!!
for (let i = 10; i > 0; i--) {
    console.log(i);
}


// While
let myAge = 33;
while (myAge <= 65) {
    console.log('Hala Emekli değilsin');
    myAge++;
}
console.log('Artık emekli olabilirsin');

//do while
let yourAge = 100;
do {
    console.log('90 yaşından küçüksün');
    yourAge++;
} while (yourAge<90);
console.log(yourAge);


//Functions
//Define a function
function add() {
    console.log('Add Function',4+10);
}
//Call a function
add();

function double(n) {
    console.log(n*2);
}
double(4);

function multiply(x, y) {
    console.log(x*y);
}
multiply(3,2);

//Anonym Function
var addFun = function (a,b) {
    console.log(a+b);
}
const output1 = addFun(5,7);
console.log(output1);

//Ödev Function
// a degerinin 10dan buyuk oldugu zaman b degeri ile toplanmasini istiyorum
// a degerinin integer olmamasi durumunda consola bir uyari yazip fonksiyonu bitirebiliriz.

// -- Matematiksel Fonksiyonlar --

// floor ==> aşağı yuvarlar.
// ceil  ==> yukarı yuvarlar.
// round ==> bildiğimiz yuvarlama işelmi.
// cos   ==> trigonometik işlemler için.
// sin   ==> trigonometik işlemler için.
// tan   ==> trigonometik işlemler için.
// rand  ==> restgele sayı üretir.
// sqrt  ==> karekök alma işlemi.
// pow   ==> üs alma işlemi.
// abs   ==> mutlak değer işlemi.
// max   ==> en büyük sayıyı bulur.
// min   ==> en küçük sayıyı bulur.

const floatingNumber = 10/3;
console.log(floatingNumber.toFixed(4));

const numberStr = '44px';
console.log(Number(numberStr));

console.log(parseInt(50));
console.log(parseInt('50'));
console.log(parseInt('zz'));