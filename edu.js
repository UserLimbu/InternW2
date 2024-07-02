function save() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const level = document.getElementById('level').value;
    const university = document.getElementById('university').value;
    const address = document.getElementById('address').value;
    const board = document.getElementById('board').value;
    const gpa = document.getElementById('gpa').value;
    const passedYear = new Date(document.getElementById('passedYear').value);
    const passedYearValue = passedYear.getFullYear();
    const message = document.getElementById('message');
    const tableDetails = document.getElementById('tableDetails');

    message.innerText = '';

    if (!level || !university || !address || !board || !gpa || !passedYear || !passedYearValue){
        message.innerText = 'Please fill all the form fields !!!';
        showMessage(message);
        return;
    }

    if (gpa < 0 || gpa > 4) {
        message.innerText = 'Please enter a valid GPA (0-4)';
        showMessage(message);
        return;
    }

    if (passedYearValue > currentYear) {
        message.innerText = 'Date you provided is not valid! Please check again';
        showMessage(message);
        return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${level}</td>
        <td>${university}</td>
        <td>${address}</td>
        <td>${board}</td>
        <td>${gpa}</td>
        <td>${passedYearValue}</td>
        <td>
            <button onclick="editRow(this)" class="buttons">Edit</button>
            <button onclick="deleteRow(this)" class="buttons">Delete</button>
        </td>
    `;

    tableDetails.appendChild(newRow);

    message.innerText = 'Registration Successful 🎉';
    showMessage(message);

    document.getElementById('Data').reset();
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}

function editRow(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    
    document.getElementById('level').value = cells[0].innerText;
    document.getElementById('university').value = cells[1].innerText;
    document.getElementById('address').value = cells[2].innerText;
    document.getElementById('board').value = cells[3].innerText;
    document.getElementById('gpa').value = cells[4].innerText;
    document.getElementById('passedYear').value = cells[5].innerText;

    row.remove();
}

function showMessage(element, duration = 4000) {
    setTimeout(() => {
        element.innerText = '';
    }, duration);
}
