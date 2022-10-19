//1

// let drivingAge = Number(prompt("kindly enter your age"));
// (drivingAge >=18 ? console.log('You are old enough to drive') :  console.log(`You are left with ${18 - drivingAge } years to drive`))

// 2

let myAge = 26;
let yourAge = Number(prompt('kindly enter'))
if(myAge > yourAge) {
  console.log(`I am  ${myAge - yourAge} years older than you`)
}

else{
  console.log(`You are ${yourAge - myAge} years older than me`)
}

//3
let a= 4
let b= 3
if(a > b){
  console.log(`${a} is greater than b`)
}
else{
  console.log(`${a} is less than b`)
}

a > b ? console.log(`${a} is greater than b`) : console.log(`${a} is less than b`)

//4
let myNumber = Number(prompt('kindly enter a number'))
if(myNumber % 2 === 0) {
  console.log(`${myNumber} is an even number`)
} else if(myNumber % 2 !== 0) {
  console.log(`${myNumber} is an odd number`)
}else{
  console.log(`${myNumber} is not a number`)
}

//Level 2
//1

let gradingSystem = Number(prompt('kindly enter your score'))
switch(true) {
  case gradingSystem >=80:
    console.log('A')
    break
    case gradingSystem >=70:
      console.log('B')
      break
      case gradingSystem >=60 :
        console.log('C')
        break
        case gradingSystem >=50:
          console.log('D')
            break
              case gradingSystem >=40:
          console.log('F')
            default:
            console.log(`${gradingSystem} is not a valid score`)
}

//2
let seasonChecker = prompt('kindly enter the name of a month')
switch(seasonChecker) {
  case "september" :
  case "october" :
  case "november":
    console.log('You are in an autumn season')
    break

    case "december":
    case "january":
    case"february":
    console.log('You are in an winter season')
    break

    case "march" :
    case "april" :
    case "may":
    console.log('You are in an spring season')
    break

    case "june" :
    case "july" :
    case "august":
    console.log('You are in a summer season')
    break

    default
    :console.log(`${seasonChecker} is not a month in the year`)
}

//3
let dayStatusChecker= prompt('what is the day today')

switch(dayStatusChecker) {
  case "sunday" :
  case "saturday" :
    console.log(`${dayStatusChecker} is a weekend`)
    break

    case "monday" :
    console.log(`${dayStatusChecker} is a weekday`)
    break
    case "tuesday" :
    console.log(`${dayStatusChecker} is a weekday`)
    break
    case "wednesday" :
    console.log(`${dayStatusChecker} is a weekday`)
    break
    case "thursday" :
    console.log(`${dayStatusChecker} is a weekday`)
    break

    case "friday" :
    console.log(`${dayStatusChecker} is a weekday`)
    break
    

    default:
        console.log(`${dayStatusChecker} is not a day of the week`)
} 

//Lesson 3
//1
let monthConverter= prompt('kindly enter the month to convert')
switch(monthConverter) {

  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthConverter} has 31days`)
    break
    case "september":
    case "april":
    case "june":
    case "november":
      console.log(`${monthConverter} has 30days`)
      break

    case "february":
      console.log(`${monthConverter} has 28days`)
      break

      default:
        console.log(`${monthConverter} is not a month in the year`)

}

//1 i leap year

let monthsConverter= prompt('kindly enter the month to convert')
switch(monthsConverter) {

  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthsConverter} has 31days`)
    break
    case "september":
    case "april":
    case "june":
    case "november":
      console.log(`${monthsConverter} has 30days`)
      break

    case "february":
      console.log(`${monthsConverter} has 29days`)
      break

      default:
        console.log(`${monthsConverter} is not a month in the year`)

}