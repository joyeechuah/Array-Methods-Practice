const foods = ['pizza','sushi','nasi lemak','roti canai','ice cream'];

foods.push('laksa');
console.log(foods);

foods.pop('laksa');
console.log(foods);

foods.shift();
console.log(foods);

foods.unshift('cendol');
console.log(foods);

foods.splice(1,1);
console.log(foods);

const firstThree = foods.slice(0,3);
console.log(firstThree);