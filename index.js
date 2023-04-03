
onst start = new Date();
const pastDate = new Date(Date.UTC(2000, 0, 0, 0, 0, 0));
console.log('pastDate::  ' + start);
console.log('start::  ' + pastDate);
console.log('data parse:: ' + Date.parse(pastDate));
console.log('date now::  ' + Date.now());
console.log(Date.now() - Date.parse(pastDate));
console.log(new Date(Date.now() - Date.parse(start)).toISOString().slice(11,19));
console.log('');
let animal = new Object();
animal.name = 'Rex';
animal.burk = () => { console.log('Woof!' + this) };
//test
let animal1 = {
    name: 'Tuz',
    burk1:  function() {
        bark.call(this);
    }
}
let timer = 0;
let div = document.getElementById('timer');

setInterval(() => {
    timer++;
    div.innerText = timer;
}, 1000)



let bark = () => {
    console.log('this:: ' + this);
}
