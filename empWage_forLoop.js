/* Ability to calculate wages for a month assuming 2 working days in a month*/
const IS_PRESENT_FULL_TIME = 1;
const IS_PRESENT_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;

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

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let salary = empHrs * EMP_RATE_PER_HOUR;
console.log("totalHrs =" + empHrs, "Emp Wage = " + salary);