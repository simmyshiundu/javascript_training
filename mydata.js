let num = [6, 12, 30, 18, 24, 26, 36, 37, 38, 39, 66, 666, 600];
div6 = num.filter(x => x % 6 === 0);
console.log(div6);

const countries = ["Kenya", "Uganda", "Tanzania"];
console.log(countries);
console.log(countries.length);
console.log(countries.join(" * "));
console.log(typeof (countries.join(" * ")));
countries.pop();
countries.push("Rwanda");
console.log(countries.shift());
console.log(countries.unshift("Ethiopia"));
console.log(countries.toString());
console.log(countries.copyWithin(2, 0));
console.log(countries.copyWithin(2, 0, 2));
console.log(countries.every(country => country.length > 10));

//JSON Objects
let person = '{"name":"John Doe","yob":"1997","loc":"MSA"}';
person = JSON.parse(person);
console.log(person["yob"]);
console.log(person.loc);
//console.log(JSON.parse(person));
