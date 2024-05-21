document.addEventListener('DOMContentLoaded', () => {
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const transactionsList = document.getElementById('transactions');
    const totalIncomeSpan = document.getElementById('totalIncome');
    const totalExpensesSpan = document.getElementById('totalExpenses');
    const totalBalanceSpan = document.getElementById('totalBalance');
    
    let totalIncome = 0;
    let totalExpenses = 0;

    const updateBalance = () => {
        const balance = totalIncome - totalExpenses;
        totalBalanceSpan.textContent = balance;
    };

    addExpenseBtn.addEventListener('click', () => {
        const description = descriptionInput.value;
        const amount = parseInt(amountInput.value);

        if (description === '' || isNaN(amount)) {
            alert('Please enter a valid description and amount');
            return;
        }

        // Create a list item for the new transaction
        const listItem = document.createElement('li');
        listItem.textContent = `${description}: $${amount}`;
        if (amount >= 0) {
            listItem.classList.add('income');
            totalIncome += amount;
            totalIncomeSpan.textContent = totalIncome;
        } else {
            listItem.classList.add('expense');
            totalExpenses += Math.abs(amount);
            totalExpensesSpan.textContent = totalExpenses;
        }
        transactionsList.appendChild(listItem);

        // Update the balance
        updateBalance();

        // Clear the input fields
        descriptionInput.value = '';
        amountInput.value = '';
    });
});
