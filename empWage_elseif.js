/* Ability to calculate daily employee wage based on part time or full time work using else if */

const IS_PRESENT_FULL_TIME = 1;
const IS_PRESENT_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
var empHrs;
let empCheck = Math.floor(Math.random() * 10) % 3;
console.log(empCheck);

if (empCheck == IS_PRESENT_FULL_TIME) {
    empHrs = FULL_TIME_HOURS;
}
else if (empCheck == IS_PRESENT_PART_TIME) {
    empHrs = PART_TIME_HOURS;
}
else {
    empHrs = 0;
}
let salary = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage = " + salary);
