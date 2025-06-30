const age = 25;
const name = "John Doe";

console.log(`my name is ${name} and ${age} years old`);

const currentYear = new Date().getFullYear();
const text = `sekarang adalah tahun ${currentYear}`;
console.log(text);

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();
console.log(strNumber); 
console.log(strBoolean); 


// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR";
// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
const value = 10000;

// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000;

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */

const money = currency + " " + value;