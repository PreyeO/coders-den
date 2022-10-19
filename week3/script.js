
// 1
let firstName= "Preye";
let lastName="Omusuku";
let country="Nigeria";
let city="Yenagoa";
let age=26;
let isMarried=false;
let presentYear=2022;
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(presentYear))

//2
console.log(typeof('10') === typeof(10))

//3
let number = 10
console.log(parseInt('9.8') === number)

//4
let firstStatement= "i love my name";
let isSingle= true
let mainAge=26
console.log(firstStatement)
console.log(isSingle)
console.log(mainAge)
let secondStatement= "";
let luckyNumber= 0
let yourMainAge;
console.log(secondStatement)
console.log(luckyNumber)
console.log(yourMainAge)


//5
4 > 3        //true
4 >= 3       //true
4 < 3        //false
4 <= 3       //false
4 == 4       //true
4 === 4     //true
4 != 4      //false
4 !== 4    //false
4 != '4'   //false
4 == '4'   //true
4 === '4'   //false

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!="4")
console.log(4=="4")
console.log(4==="4")
let animalOne= "python";
let animalTwo= "jargon"
console.log(animalOne.length !== animalTwo.length)


//6
4 > 3 && 10 < 12  //true
4 > 3 && 10 > 12  //false
4 > 3 || 10 < 12  //true 
4 > 3 || 10 > 12  //true
!(4 > 3)          //false
!(4 < 3)          //true
!(false)          //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4')       //true

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!false)
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === "4"))
let animal1= 'dragon';
let animal2='python'
console.log(!(animal1.includes("on")))
console.log(!(animal2.includes("on")))


//7
const present = new Date()
console.log(present.getFullYear())
console.log(present.getMonth() +1)
console.log(new Date())
console.log(present.getDay())
console.log(present.getHours())
console.log(present.getMinutes())
console.log(present.getTime())
console.log("3" + "2")

//Level 2
// 1

let base= Number(prompt('Kindly enter the triangle base ')) 
let height= Number(prompt("kindly enter triangle height"))
let triangleArea= base * height *0.5
console.log(`Area of a triangle is ${triangleArea}`)

// 2 

let sideA= Number(prompt("kindly enter side a of the triangle"))
let sideB= Number(prompt("kindly enter side b of the triangle"))
let sideC= Number(prompt("kindly enter side c of the triangle"))
let perimeter= sideA + sideB + sideC
console.log(`The perimeter of the triangle is ${perimeter}`)


//3
let length = Number(prompt('kindly enter the rectangle length'));
let width= Number(prompt('kindly enter the rectangle width'))
let rectangleArea= length * width
let rectanglePerimeter= 2 *(length + width)
console.log(`The area of the rectangle is ${rectangleArea}`)
console.log(`The perimeter of the rectangle is ${rectanglePerimeter}`)


//4
let circleRadius = Number(prompt("Kindly enter the radius of the circle"))
let circleArea = 3.14 * circleRadius **2
circleCircumference = 2 * 3.14 *circleRadius
console.log(`The area of the circle is ${circleArea}`)
console.log(`The circumference of the circle is ${circleCircumference}`)


//9
let workingWeeklyHours = Number(prompt('kindly enter your weekly working hours'))
let ratePerHour = Number(prompt('kindly enter your rate per hour'))
let totalWeeklyPay = workingWeeklyHours * ratePerHour
console.log(`Your weekly earning is # ${totalWeeklyPay}`)


//10
let fullName= "Ayibakepreye";
(fullName.length > 7 ? 
  console.log('My name is long') : 
  console.log('My name is short')
)

//11

let myFirstName= 'Ayibakepreye'
let myLastName= 'Omusuku'
console.log(`My first name ${myFirstName}, is longer than my family name, ${myLastName}`)

//12
let myAge =26
let yourAge= 10
console.log(`I am ${myAge - yourAge} years older than`)

//13
let birthYear= Number(prompt('kindly enter your birth year'))
let drivingAge = 2022 - birthYear
console.log(`You are ${2022 - birthYear}.`)
(drivingAge > 18 ? console.log('You are old enough to drive') : console.log(`You will be allowed to drive in ${18 - drivingAge} years`))


//14
let secondsInOneMinutes = 60
let secondsInOneHour = secondsInOneMinutes * 60
let secondsInOneDay = secondsInOneHour * 24
let secondsInOneYear= secondsInOneDay *365
let secondsLived = Number(prompt('kindly enter years lived '))
let AgeInSeconds= secondsLived * secondsInOneYear
console.log(`you lived ${AgeInSeconds} seconds`) 


//15
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() +1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

//LEVEL 3
//1
console.log(`${year}-${month}-${date} 0${hours}:0${minutes}`)
