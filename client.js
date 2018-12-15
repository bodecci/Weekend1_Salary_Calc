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
let monthTotal = 0;
const budget = 20000;

$(document).ready(function(){
    console.log('JQ loaded');

    $('#submit').on('click', getInput);
    
});

//gets user inputs, clears the field and displays the inputs into the table
function getInput() {
    //get inputs
    let inputGet = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), 
                    $('#idIn').val(), $('#titleIn').val(), $('#salary').val());
    employees.push(inputGet);
    $('#firstNameIn').val(''); 
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salary').val('');
    //call tableDisplay function
    tableDisplay();
    monthlyTotal();

}

function tableDisplay(){
    $('#tableDisplay').empty();
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

    $('#tableDisplay').append(display);
    $(`#${employee.id}`).on('click', function (){
        employees.splice(employees.indexOf(employee), 1);

        $(this).parent().parent().remove();
    });
    }//end for of loop
}//end of tableDisplay

function monthlyTotal(){
    let totalSalary = 0;
    for(people of employees){
      totalSalary += (parseInt(people.salary));
    }
    monthTotal = (totalSalary/12).toFixed(2);
    //$('#displayMonthly').empty();
    $('#displayMonthly').html(`<h2 id="displayMonthly">Monthly Total:$${monthTotal} </h2>`)

    if(monthTotal > budget){

    }
}//end monthlyTotal