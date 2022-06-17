function add(x,y) {
    return x+y;
}
//add(2,6);

function double(num){
    return num * 2;
}

function square(num) {
    return num * num;
}

function mathops(x, callback) {
    if (x<10) {
        return;
    }
    return callback(x);
}

const doubled = mathops(15,double);
console.log(doubled);

const squared = mathops(5,square);
console.log(squared);


const names = ['Jake', 'John', 'Bob' , 'Alice'];
function forEach(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        
    }
}
forEach(names, console.log);

function AddZtoEnd(x){
    console.log(x+' z');
}
forEach(names, AddZtoEnd);

const numbers = ['23', '23px', '43cm', '12rem'];
function map(arr, callback){
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const output = callback(arr[i]);
        result.push(output);
        
    }
    return result;
}

const parsedNumbers = map(numbers, parseInt);
console.log(parsedNumbers);