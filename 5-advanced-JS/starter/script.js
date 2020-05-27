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

////////////////////////////////////////////////////////////////////////////////////Lecture passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

const arrayCalc = (arr, fn) => {
    var arrRes = []
    for (let i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calculateAge(el) {
    return 2016 - el
};


function isFullAge(el) {
    return el >= 18
};

function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
    } else {return -1}
}
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate)



console.log(ages)
console.log(fullAges)
console.log(rates)
*/

////////////////////////////////////////////////////////////////////////////////////Lecture: functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    }else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do ?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John')
designerQuestion('jane')
*/

////////////////////////////////////////////////////////////////////////////Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5)
}
game()
*/
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5)
})()

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5)
 */

/////////////////////////////////////////////////////////////////////////////////// Lcture Closures

// function retirement(retiramentAge) {
//   var a = "years left until retirement";
//   return function (yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log(retiramentAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementIceland(1990);

function interviewQuestion(job) {
  var a = job;
  return function (name) {
    if (a === "designer") {
      console.log(name + ", can you please explain what UX design is");
    } else if (a === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do ?");
    }
  };
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John')
designerQuestion('jane')