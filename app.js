console.log("Hello, World!");


let stringVariable = "Im Apple";
let numberVariable = 42;
let booleanVariable = true;

console.log(stringVariable, numberVariable, booleanVariable);





let number = 5;
if (number % 2 === 0) {
    console.log("Bu cut ededdi");
} else {
    console.log("Buda tek eded");
}


for (let i = 1, count = 0; count < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
}




function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));


const multiply = (x, y) => x * y;
console.log(multiply(5, 6));



let numbers = [2, 5, 8, 12, 15];


let multipliedNumbers = numbers.map(num => num * 2);
console.log(multipliedNumbers);


let filteredNumbers = multipliedNumbers.filter(num => num > 10);
console.log(filteredNumbers);




let book = {
    title: "Turxanin Kitabi",
    author: "John Doe",
    pages: 300,
    getDescription: function() {
        return `${this.title} Book ${this.author}  ${this.pages} `;
    }
};
console.log(book.getDescription());






