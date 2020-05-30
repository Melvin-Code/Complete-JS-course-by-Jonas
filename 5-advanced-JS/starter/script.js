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

// function interviewQuestion(job) {
//   var a = job;
//   return function (name) {
//     if (a === "designer") {
//       console.log(name + ", can you please explain what UX design is");
//     } else if (a === "teacher") {
//       console.log("What subject do you teach, " + name + "?");
//     } else {
//       console.log("Hello " + name + ", what do you do ?");
//     }
//   };
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John')
// designerQuestion('jane')

/////////////////// Lecture: Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
//         }else if(style === 'friendly'){
//             console.log('hey What\'sup?I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old')
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning')

// john.presentation.call(emily, 'friendly', 'afternoon');

// var johnFriendly = john.presentation.bind(john, 'friendly')

// johnFriendly('morning')
// johnFriendly('nigth')

// var emilyFormal = john.presentation.bind(emily, 'formal')
// emilyFormal('afternoon')

// var years = [1990, 1965, 1937, 2005, 1998];

// const arrayCalc = (arr, fn) => {
//     var arrRes = []
//     for (let i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(limit) {
//     return 2016 - limit
// };

// function isFullAge(limit, el) {
//     return el >= limit
// };

// var ages = arrayCalc(years, calculateAge)
// var fulJapan = arrayCalc(ages, isFullAge.bind(this, 20))
// console.log(ages)
// console.log(fulJapan)

/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

class Question {
  constructor(question, answer, CreAnswer) {
    this.question = question;
    this.answer = answer;
    this.CreAnswer = CreAnswer;
  }
}

const displayQuestion = (el) => {
  console.log(el.question);
  for (let i = 0; i < el.answer.length; i++) {
    console.log(`${i}: ${el.answer[i]}`);
  }
  console.log(`This is your current score: ${score}`)
};

let score = 0;
const adding = () => {
  return (score = score + 1);
};

const checkAnswer = () => {
  let promptAnswer = prompt(`Please select the correct answer`);
  promptAnswer;

  if (Number(promptAnswer) === randomQuestion.CreAnswer) {
    console.log("Correct answer!");
    radQuestion();
    adding()
    displayQuestion(randomQuestion);
    checkAnswer();
  } else if (promptAnswer === "exit") {
    console.log(promptAnswer);
    console.log(`Congrats this is your final score: ${score}`)
  } else {
    console.log("Wrong answer. Try again :)");
    radQuestion();
    displayQuestion(randomQuestion);
    checkAnswer();
  }
};

const q1 = new Question(
  "Who will be the number 1 programmer ever?",
  ["John", "Melvin", "Karl"],
  1
);

const q2 = new Question(
  "Who will get a job very soon?",
  ["John", "Karl", "Melvin"],
  2
);

const q3 = new Question(
  "Who will be the number 1 family Dad?",
  ["Melvin", "John", "Karl"],
  0
);

const questions = [q1, q2, q3];

let randomQuestion;
const radQuestion = () => {
  return (randomQuestion = questions[Math.floor(Math.random() * 3)]);
};
radQuestion();

displayQuestion(randomQuestion);
checkAnswer();

// console.log(answer)
