//Employee class template
class Employee {
    constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
        this.first = firstNameIn;
        this.last = lastNameIn;
        this.id = idIn;
        this.title = titleIn;
        this.salary = salaryIn;
    }//end constructor
}// end of Employee class

let employees = [];

console.log('JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');

    $('#submit').on('click', getInput);
    
});

function getInput() {
    //get inputs
    let inputsGet = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), 
                    $('#idIn').val(), $('#titleIn').val(), $('#salary').val());
    employees.push(inputsGet);
}