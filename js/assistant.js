let count=0;
document.getElementById('calculate').addEventListener('click', function () {
    const incomes = getInputFieldById('income');
    const softwares = getInputFieldById('software');
    const courses = getInputFieldById('courses');
    const internets = getInputFieldById('internet');

    const totalExpense = softwares + courses + internets;
    const balances = incomes - totalExpense;
    document.getElementById('total-expenses').innerText = totalExpense;
    document.getElementById('balance').innerText = balances;
    count+=1

    const history = document.getElementById('history-list')
    const historyItems = document.createElement('div')
    historyItems.className = 'bg-white p-3 round-l-md border-blue';
    historyItems.innerHTML = `
    <p>Count: ${count}
     <p>Data: ${new Date().toLocaleDateString()}</p>
     <p>Income: ${incomes}</p>
     <p>Expense: ${totalExpense}</p>
     <p>Balance: ${balances}</p>
     `
    // history.prepend(historyItems) or
    history.insertBefore(historyItems,history.firstChild)
})

document.getElementById('calculate-savings').addEventListener('click', function () {
    const incomes = getInputFieldById('income');
    const softwares = getInputFieldById('software');
    const courses = getInputFieldById('courses');
    const internets = getInputFieldById('internet');

    const saving = getInputFieldById('savings');
    const totalExpense = softwares + courses + internets;
    const balances = incomes - totalExpense;
    const savingBalance = balances * (saving / 100);
    const remainingBalance = balances - savingBalance;

    document.getElementById('savings-amount').innerText = savingBalance;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})