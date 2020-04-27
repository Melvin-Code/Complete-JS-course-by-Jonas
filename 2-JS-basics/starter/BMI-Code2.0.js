let a = {
    name: 'Mark',
    heigth: 1.64, // meters
    weigth: 69.6, //kg
    callBMI: function() {
      this.bmi = this.weigth / (this.heigth * this.heigth)
    }
  }
  let b ={
    name: 'John',
    heigth: 1.84,
    weigth: 74,
    callBMI: function() {
     this.bmi = this.weigth / (this.heigth * this.heigth)
    }
  }
  b.callBMI()
  a.callBMI()
  if (b.bmi > a.bmi) {
    console.log(`${b.name} has the higest BMI of ${b.bmi}`)
  } else if (b.bmi < a.bmi) {
    console.log(`${a.name} has the higest BMI of ${a.bmi}`)
  }else{
    console.log(`${b.name} and ${a.name} have the same BMI of ${a.bmi} and ${b.bmi}`)
  }
  