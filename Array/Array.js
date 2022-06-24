let scores = new Array(10, 5, 5, 5);
console.log(scores);

let array1 = ["ram", "shyam", "abhi"];

//pop method
array1.pop();
console.log(array1);

//push method
array1.push("abhimanu");
console.log(array1);

//shift meyhod
array1.shift();
console.log(array1);

//unshift meyhod
array1.unshift("krishna");
console.log(array1);

//indexOf
let index = array1.indexOf("shyam");
console.log(index);

//Array.isArray
console.log(Array.isArray(array1));

//array slice
const fruit = ["1", "2", "3", "4", "5"];
const result = fruit.slice(2, 4);
console.log(result);

//splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

//map

let item = [
  { name: "book", price: 100 },
  { name: "notebook", price: 200 },
  { name: "shoes", price: 500 },
  { name: "watch", price: 700 },
];

let map = item.map((item) => {
  return item.name;
});

console.log(map);

//fliter

let filter = item.filter((item) => {
  return item.price > 400;
});
console.log(filter);

//find
let findItem = item.find((item) => {
  return item.price == 200;
});
console.log(findItem);

//forEach

let result1 = item.forEach((item) => {
  {
    console.log(item.name);
  }
});

//some
let someItem = item.some((item) => {
  {
    return item.price > 200;
  }
});
console.log(someItem);

//every
let everyItem = item.every((item) => {
  {
    return item.price > 200;
  }
});
console.log(everyItem);

//reduce
let reduceitem = item.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(reduceitem);

//includes

let items = [1, 2, 3, 4];

let includeitem = items.includes(5);
console.log(includeitem);
