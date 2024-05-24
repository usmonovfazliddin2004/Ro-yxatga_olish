document.getElementById('saveButton').addEventListener('click', function() {
    const name = document.getElementById('ism').value;
    const matchSelect = document.getElementById('match-select');
    const match = matchSelect.options[matchSelect.selectedIndex].text;
    const paymentSelect = document.getElementById('payment-select');
    const payment = paymentSelect.options[paymentSelect.selectedIndex].text;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const containerBox = document.querySelector('.container_box');
    const newRow = document.createElement('div');
    newRow.classList.add('data_row1');
    const trCell = document.createElement('div');
    trCell.textContent = containerBox.children.length; 
    newRow.appendChild(trCell);
    const nameCell = document.createElement('div');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);
    const matchCell = document.createElement('div');
    matchCell.textContent = match;
    newRow.appendChild(matchCell);
    const paymentCell = document.createElement('div');
    paymentCell.textContent = payment;
    newRow.appendChild(paymentCell);
    const dateCell = document.createElement('div');
    dateCell.textContent = formattedDate;
    newRow.appendChild(dateCell);
    containerBox.appendChild(newRow);
    document.getElementById('ism').value = '';
    matchSelect.selectedIndex = 0;
    paymentSelect.selectedIndex = 0;
    if (containerBox.children.length > 7) { 
        containerBox.style.overflowY = 'scroll';
        containerBox.style.height = "300px";
        newRow.style.borderBottomLeftRadius = "20";
        newRow.style.borderBottomRightRadius = "20";
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('inputField');
    const saveButton = document.getElementById('saveButton');
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            saveButton.click(); 
        }
    });
    saveButton.addEventListener('click', () => {
        alert('Form is saved!'); 
    });
});



  