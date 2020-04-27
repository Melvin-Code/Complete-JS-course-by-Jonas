/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
let johnsTeam = [89, 120, 103]
let mikesTeam = [116, 94, 123]
let marysTeam = [97, 134, 105]

const teamsAve = (a, b, c) => {
  let at = (a[0] + a[1] + a[2]) / a.length
  let bt = (b[0] + b[1] + b[2]) / b.length
  let ct = (c[0] + c[1] + c[2]) / c.length
  console.log(at)
  console.log(bt)
  console.log(ct)
  if (at >= bt && at >= ct){
    return `John's Team is the winner his score is ${at} `
  } else if (ct >= bt && ct >= at ){
    return `Mary's Team is the winner her score is ${ct}`
  }else if (bt >= at && bt >= ct) {
    return `Mike's Team is the winner his score is ${bt}`
  }else if (at === bt >= ct) {
    return `John and Mike are the winners their score is ${at}`
  }else if (at === ct >= bt ) {
    return `Jhon and Mary are the winners their score is ${at}`
  }else if (bt === ct >= at) {
    return `Mike and Mary are the winners their score is ${bt}`
  } else {
    return `They ar all winners their score is ${at}`
  }
}
  
  teamsAve(johnsTeam, mikesTeam, marysTeam)
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
let johnsTeam = [89, 120, 103]
let mikesTeam = [116, 94, 123]
let marysTeam = [97, 134, 105]
let ta = []
let tb = []
const teamsAve = (a, b, c) => {
  let at = (a[0] + a[1] + a[2]) / a.length
  let bt = (b[0] + b[1] + b[2]) / b.length
  let ct = (c[0] + c[1] + c[2]) / c.length
  console.log(at)
  console.log(bt)
  console.log(ct)
  if (at > bt && at > ct){
    return `John's Team is the winner his score is ${at} `
  } else if (ct > bt && ct > at ){
    return `Mary's Team is the winner her score is ${ct}`
  }else if (bt > at && bt > ct) {
    return `Mike's Team is the winner his score is ${bt}`
  }else if (at === bt > ct) {
    return `John and Mike are the winners their score is ${at}`
  }else if (at === ct > bt ) {
    return `Jhon and Mary are the winners their score is ${at}`
  }else if (bt === ct > at) {
    return `Mike and Mary are the winners their score is ${bt}`
  } else {
    return `They ar all winners their score is ${at}`
  }
}
  
  teamsAve(johnsTeam, mikesTeam, marysTeam)