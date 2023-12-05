// 2.1 EXECUTION CONTENT, HOISTING & SCOPE

//hoisting
var nama = "Fani karina";
console.log(nama);

// creating phose pada global context
// name var = undefined
// name function = fn()
// hoisting
// window = global object
// this = window



// execution phose
console.log(sayHello());

var nama = 'Fani karina';
var umur = 16;

function sayHello() {
    return `Hallo, nama saya ${nama}, saya ${umur} tahun.`;
}

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phose
// arguments 
// hoisting 


var nama = 'Fani karina';
var username = '@fanikarina'

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL(username));


function a() {
    console.log('ini a');

    function b(){
        console.log('ini b');

        function c(){
            console.log('ini c');
        }

        c();
    }
    b();
}

a();

//scope
function satu() {
    var nama = 'Fani Karina';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Indah';
satu();
dua('Reza');
console.log(nama);



// Lexical scope
function init() {
    let nama = 'Fani karina';       //local variable
    function tampilNama() {         // inner function (closure*)      
        console.log(nama);          // akses ke parent variable
    }
    tampilNama();
}
init();

// cara lain 
function init() {
    function Tampil(nama){
        console.log(nama);
    }
    return Tampil;
}
let Tampil= init();
Tampil('Karina fani')

// cara lain 
function init(){
    return function (nama){
        console.log(nama);
    }
}
let Panggil= init();
Panggil('Fani');
Panggil('Indah');


// ----------
function salam(waktu){
    return function(nama){
        console.log(`Hallo ${nama}, Selamat ${waktu}, have a nice day`);
    }
}

let pagi = salam('pagi');
let siang = salam('siang');
let malam = salam('malam');

pagi('Fani karina');


// ---------

let add= (function(){
    let counter = 0;
    return function(){
        return ++ counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// Var

var i = 10;
console.log(i);