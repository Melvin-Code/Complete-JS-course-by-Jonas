// Function constructor

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

var john = new Person('Jhon', 1990, 'teacher');


john.calculateAge();

var jane = new Person('Jane', 1990, 'designer');
var mark = new Person('jane', 1948, 'retire');



