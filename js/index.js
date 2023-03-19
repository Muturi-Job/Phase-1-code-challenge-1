// A prompt that accepts the students grade.
// The grade is determined if A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
// The grade is then displayed
function gradeGenerator () {
  
    let marks = document.getElementById("marks").value
// determines if the marks are valid and the determines the grade
if (marks === undefined || isNaN(marks) || marks<0 || marks>100){
    return alert( "Invalid marks")
}

if (marks>=80 && marks<=100){
    marks ="A"
}
else if (marks>=60 && marks<=79){
    marks ="B"
}
else if (marks>=49 && marks<=59){
    marks = "C"
}
else if(marks>=40 && marks<49){
    marks = "D"
}
else {
    marks = "E"
}
//returns the grade to the html file
    let output = document.getElementById("gradeOutput")
    output.innerHTML = "The students grade is : " + marks
}
//Takes input as the car speed.
//Prints 'Ok' if the speed is less than 70
//If speed is greater than 70 gives 1 demerit point every 5 km//s
//Prints total demerit points.
function speedDetector () {
    let speed = document.getElementById("speed").value
//Determines if the speed input is valid
if (speed == undefined || isNaN(speed) ){
    speed = "Enter valid speed"
} 
//Prints 'ok' or gives demerit points depending on the speed
else if (speed <= 70){
    speed = "Ok"
}
else if (speed > 70 && speed <=130){
    let demerits = Math.floor((speed -70)/5)
    speed = `You have ${demerits} demerit points`
}
else{
    speed = "License suspended";
} 
//Returns the speed output to HTML
let output = document.getElementById("speedOutput")
output.innerHTML = speed
}
//Gets the basic salary and benefits as the inputs
//Calculates the PAYEE ,NSSF deductions ,gross salary and net salary

//Get the values of the basic salary and benefits and add to get gross salary
let benefits = document.getElementById("benefits").value
let basicSalary = document.getElementById("basicSalary").value
//validation
if (benefits === undefined || isNaN(benefits)){
    return alert( "Invalid benefits")
}
if (basicSalary === undefined || isNaN(basicSalary)){
    return alert( "Invalid salary")
}
//gets the gross salary
let grossSalary = benefits + basicSalary
let payee;
//Calculate the amount of PAYEE
function payeeCalculator () {
    if (grossSalary <= 24000){
        payee = 0.01 * grossSalary;
    }
    else if (grossSalary >24000 && grossSalary <=32333){
        payee = 0.25 * grossSalary;
    }
    else {
        payee = 0.3 * grossSalary;
    }
//Returns the output in HTMl
let output = document.getElementById("payeeOutput")
output.innerHTML = 'Total PAYEE is ' +payee + 'Ksh'
}
//Calculate the NHIF deduction
    let nhif;
    function nhifCalculator () {
    if (grossSalary <= 5999 && grossSalary >0) {
        nhif = 150;
    }
    else if (grossSalary > 5999 && grossSalary <= 7999){
        nhif= 300;
    }
    else if (grossSalary > 7999 && grossSalary <= 11999) {
        nhif = 400;
    }
    else if (grossSalary > 11999 && grossSalary <= 14999) {
        nhif = 500;
    }
    else if (grossSalary >14999 && grossSalary <= 19999) {
        nhif = 600;
    }
    else if (grossSalary > 19999 && grossSalary <= 24999) {
        nhif = 750;
    }
    else if (grossSalary > 24999 && grossSalary <= 29999) {
        nhif = 850;
    }
    else if (grossSalary >29999 && grossSalary <=34999) {
        nhif = 900;
    }
    else if (grossSalary > 34999 && grossSalary <= 39999){
        nhif = 950;
    }
    else if (grossSalary > 39999 && grossSalary <= 44999) {
        nhif = 1000;
    }
    else if (grossSalary >44999 && grossSalary <= 49999) {
        nhif = 1100;
    }
    else if (grossSalary > 49999 && grossSalary <= 59999) {
        nhif = 1200;
    }
    else if (grossSalary > 59999 && grossSalary <= 69999) {
        nhif= 1300;
    }
    else if (grossSalary > 69999 && grossSalary <= 79999) {
        nhif = 1400;
    }
    else if (grossSalary >79999 && grossSalary <= 89999) {
        nhif = 1500;
    }
    else if (grossSalary > 89999 && grossSalary <= 99999) {
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }
//Returns the output in HTML
    let output = document.getElementById("nhifOutput")
    output.innerHTML = `NHIF contribution is ` + nhif + 'Ksh'
}
// Calculate NSSF contribution
let nssf;
function nssfCalculator () {
    nssf = 0.06 * grossSalary;
//Returns the output in HTML
    let output = document.getElementById("nssfOutput")
    return output.innerHTML = 'NSSF Contribution is ' + nssf + 'Ksh'
}

netSalary =  Math.abs(grossSalary-(nhif+nssf+payee))
return `Your net salary is : ${netSalary}`



