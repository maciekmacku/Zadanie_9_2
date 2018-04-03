// ZAD 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
	if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
	}
console.log(allNames);



// Przyklady tablic ponizej
// LENGTH
var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length); // length zwroci wartosc 6 gdyz jest 6 elementow tablicy

//toSTRING()
var array = ['aaa', [2.55, 'bbb', [5] ] ];
var stringWithArray = array.toString();
console.log(stringWithArray);  
// toString wyswietli wszystkie elementy tablicy jako jeden tekst oddzielone znakiem ","

var array = ['aaa', [2.55, 'bbb', [5, {id: 'hello' } ] ] ];
var stringWithArray = array.toString();

console.log(stringWithArray); 
//wyswietli zamiast tekstu hello typ zmiennej object Object 

//joint() tutaj dziala tak samo jak toString() tyle ze mozna okreslic jakim znakiem maja byc dane oddzielone
var test = [ 'aaa', 2.55, 'bbb', 5 ];
var testToString = test.join(' | ');

console.log(testToString);

//push() doklada dane do tablicy i od razu zwraca dlugosc tablicy
var test = ['a', 'b', 'c'];
var x = test.push('d' , 'e');
console.log(x);

// pop() usuwa ostatni element z tablicy
var test = ['a', 'b', 'c'];
var x = test.pop();
console.log(x);

//splice() pozwala na dodawanie i/lub usuwanie elementów do/z tablicy. W codziennej pracy na tablicach jest, krótko mówiąc, bardzo bardzo użyteczna, więc warto ją znać.
var array = ['a', 'b', 'c'];
array.splice(1, 0, 'x', 'y', 'z', );
console.log(array);


var array = ['a', 'x', 'y', 'z', 'b', 'c'];
var x = array.splice(2, 2);
console.log(array);  
console.log(x);

//concat() Metoda przyjmuje dowolną ilość tablic i zwraca nową, która jest sumą przekazanych tablic.
var test = [1, 2, 3];
var test2 = ['a', 'b', 'c'];
var test3 = ['x', 'y', 'z'];
var arr = test.concat(test2,test3);
console.log(arr);

//indexOf() Ta funkcja jako parametr przyjmuje wartość szukanego elementu.
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');
console.log('The search value is on ' + indexOfOla + ' position');
console.log(names[indexOfOla]);

//map() 
var values = [1, 2, 3, 4, 5, 6];
    var multipliedValues = values.map(function(value) {
    return value * 10;
});

console.log(values);
console.log(multipliedValues);

//filter()
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});

console.log(namesWithoutOla);

