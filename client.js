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

$(document).ready(function(){
    console.log('JQ loaded');

    $('#submit').on('click', getInput);
    
});

//gets user inputs, clears the field and displays the inputs into the table
function getInput() {
    //get inputs
    let inputsGet = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), 
                    $('#idIn').val(), $('#titleIn').val(), $('#salary').val());
    employees.push(inputsGet);
    $('#firstNameIn').val(''); 
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salary').val('');
    //call tableDisplay function
    tableDisplay();
}

function tableDisplay(){
    
    for(employee of employees){
    let display = `<tr>
                        <td>${employee.first}</td>
                        <td>${employee.last}</td>
                        <td>${employee.id}</td>
                        <td>${employee.title}</td>
                        <td>${employee.salary}</td>
                        <td><button class="btn btn-danger" 
                        id="${employee.id}">Delete</button></td>
                    </tr>`;

    $('#tableDisplay').html(display);
    $(`#${employee.id}`).on('click', function (){
        employees.splice(employees.indexOf(employee), 1);

        $(this).parent().parent().remove();
    });
    }//end for of loop
}//end of tableDisplay