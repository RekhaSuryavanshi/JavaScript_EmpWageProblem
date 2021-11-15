/* Ability to calculate daily employee wage based on part time or full time work using Switch statement */

const IS_PRESENT_FULL_TIME = 1;
const IS_PRESENT_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
console.log(empCheck);

switch (empCheck) {
    case IS_PRESENT_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    case IS_PRESENT_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let salary = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage = " + salary);