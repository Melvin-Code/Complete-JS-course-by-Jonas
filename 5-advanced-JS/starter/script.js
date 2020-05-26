// Function constructor
/*
var jhon = {
    name: 'Jhon',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'
var john = new Person('Jhon', 1990, 'teacher');
var jane = new Person('Jane', 1990, 'designer');
var mark = new Person('jane', 1948, 'retire');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/










// object.create
/*
var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
});
*/


// primitives vs objects
/*
var a = 23
var b = a
a = 46

console.log(a)
console.log(b)
// objs
var obj1 = {
    name: 'john',
    age: 26
};


var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age)
console.log(obj2.age)

//functions
let age = 27;
var obj = {
    name: 'johnas',
    city: 'lisbon'
};

function change(a, b) {
    a = 30
    b.city = 'san fransisco'
};

change(age, obj)
console.log(age)
console.log(obj.city)
*/












