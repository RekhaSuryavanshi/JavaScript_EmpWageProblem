/* Write a function to get work hour*/

const IS_PRESENT_FULL_TIME = 1;
const IS_PRESENT_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PRESENT_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PRESENT_PART_TIME:
            return PART_TIME_HOURS;
        default:
            empHrs = 0;
    }
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
console.log(empCheck);
empHrs = getWorkingHours(empCheck);
let salary = empHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage = " + salary);