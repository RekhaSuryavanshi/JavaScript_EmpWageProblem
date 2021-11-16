/* calculating wages till no. of working days or total working hours per month is reached*/
const IS_PRESENT_FULL_TIME = 1;
const IS_PRESENT_PART_TIME = 2;
const EMP_RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;
const MAX_HRS_IN_MONTH = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empHrs = 0;

function getWorkingHours(empCheck) {

}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PRESENT_FULL_TIME:
            empHrs = 8;
            break;
        case IS_PRESENT_PART_TIME:
            empHrs = 4;
            break;
        default:
            empHrs = 0;
    }
    totalEmpHrs += empHrs;
    console.log("total days =" + totalWorkingDays, "totalHrs = " + totalEmpHrs,);
}
let salary = totalEmpHrs * EMP_RATE_PER_HOUR;
console.log("Emp Wage = " + salary);