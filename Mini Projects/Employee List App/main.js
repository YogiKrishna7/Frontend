const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const container = document.querySelector('.container');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter both fields');
        return;
    }

    // if (!table) {

    //     table = document.createElement('table');
    //     table.setAttribute('border', '1');

    //     const thead = document.createElement('thead');
    //     const theadRow = document.createElement('tr');

    //     const nameHeader = document.createElement('th');
    //     nameHeader.appendChild(document.createTextNode('Name'));

    //     const emailHeader = document.createElement('th');
    //     emailHeader.appendChild(document.createTextNode('Email'));

    //     theadRow.appendChild(nameHeader);
    //     theadRow.appendChild(emailHeader);
    //     thead.appendChild(theadRow);

    //     table.appendChild(thead);
    //     container.appendChild(table);
    // }

    // const tr = document.createElement('tr');

    // const nameCell = document.createElement('td');
    // nameCell.appendChild(document.createTextNode(nameInput.value));

    // const emailCell = document.createElement('td');
    // emailCell.appendChild(document.createTextNode(emailInput.value));

    // tr.appendChild(nameCell);
    // tr.appendChild(emailCell);

    // table.appendChild(tr);

    // nameInput.value = '';
    // emailInput.value = '';


    const tbody = document.querySelector('#employees');
    tbody.innerHTML += `
        <tr>
            <td>${nameInput.value}</td>
            <td>${emailInput.value}</td>
        </tr>
    `;

    nameInput.value = '';
    emailInput.value = '';
}
