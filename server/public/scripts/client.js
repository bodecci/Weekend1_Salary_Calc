
$(document).ready(function () {
    console.log('JQ loaded');

    // $('#submit').on('click', getInput);
    $('#submit').on('click', addEmployee);

});

function addEmployee() {
    const employee = {
            firstName: $('#firstNameIn').val(),
            lastName: $('#lastNameIn').val(),
            idIn: $('#idIn').val(),
            title: $('#titleIn').val(),
            salary: $('#salary').val()
        } // end of employee
        console.log(employee);
        
    // if ($('#firstNameIn').val() == '' || $('#lastNameIn').val() == '' ||
    //     $('#idIn').val() == '' || $('#titleIn').val() == '' || $('#salary').val() == '') {
    //     alert("ALL FIELDS MUST BE FILLED!!!");
    //     return;
    // }
    $.ajax({
        method: 'POST',
        url: '/employee',
        data: employee
    }).then(function (response) {
        console.log('response back :', response);
        tableDisplay();

    });

} //end addEmployee

//gets user inputs, create new Employee class and pushes into the array
// function getInput() {
//     //get inputs
//     let inputGet = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(),
//         $('#idIn').val(), $('#titleIn').val(), $('#salary').val());
//     if ($('#firstNameIn').val() == '' || $('#lastNameIn').val() == '' ||
//         $('#idIn').val() == '' || $('#titleIn').val() == '' || $('#salary').val() == '') {
//         alert("ALL FIELDS MUST BE FILLED!!!");
//     } else {
//         employees.push(inputGet);
//         $('#firstNameIn').val('');
//         $('#lastNameIn').val('');
//         $('#idIn').val('');
//         $('#titleIn').val('');
//         $('#salary').val('');
//         //call tableDisplay function
//         tableDisplay();
//         monthlyTotal();
//     }

// }

// displays the the Employee info in the table
function tableDisplay() {
    $.ajax({
        method: 'GET',
        url: '/employee'
    }).then(function (response) {
        let company = response;
        $('#tableDisplay').empty();
        for (employees of company) {
            let display = `<tr>
                        <td>${employees.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.idIn}</td>
                        <td>${employee.title}</td>
                        <td>${employee.salary}</td>
                        <td><button class="btn btn-danger" 
                        id="${employee.idIn}">Delete</button></td>
                    </tr>`;
            $('#tableDisplay').append(display);
        }
    });

    $(`#${employee.idIn}`).on('click', function () {
        employees.splice(employees.indexOf(employee), 1);
        $(`${employee.salary}`).text(0);
        $(this).parent().parent().remove();

        monthlyTotal();
        displayMonthlyText();
    });
}

    //tracks the monthly total salary and displays it
    function monthlyTotal() {
        let totalSalary = 0;
        for (people of employees) {
            totalSalary += (parseInt(people.salary));
        }
        monthTotal = (totalSalary / 12).toFixed(2);
        //$('#displayMonthly').empty();
        $('#displayMonthly').html(`<h2 id="displayMonthly">
                    Monthly Total:$${monthTotal} </h2>`);
        displayMonthlyText();
    } //end monthlyTotal 

    //displays the monthly total as red when it exceeds the budget
    function displayMonthlyText() {
        if (monthTotal <= budget) {
            $('#displayMonthly').html(`<h3 id="displayMonthly">
                            Monthly Total:$${monthTotal} </h3>`);
            $('#displayMonthly').css('color', 'black');
        } else {
            $('#displayMonthly').html(`<h3 id="displayMonthly">
                            Monthly Total:$${monthTotal} </h3>`);
            $('#displayMonthly').css('color', 'red');
        }
    } //end displayMonthlyText
