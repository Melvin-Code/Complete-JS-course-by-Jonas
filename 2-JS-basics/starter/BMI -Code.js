let MarkHInM = 1.8
let MarkWInKg= 200
let JohnHInM = 2
let JhonWInKg = 300

const calculateBmi = (a ,b) =>{
 let bmi = a / (b * b)
}
const compare = (a, b) => {
  if (a > b) {
    return true
  }else{
    return false
  }
}
console.log(`Is Mark's BMI greater than John? ${compare(calculateBmi(MarkWInKg, MarkHInM),(JhonWInKg,JohnHInM))}`)