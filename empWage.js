/*Ability to check employee is present or absent*/
console.log("Welcome to EmployeeWage");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck != IS_ABSENT) {
    console.log("Employee is present");
}
else {
    console.log("Employee is Absent");
}