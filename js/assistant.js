const incomes = getInputFieldById('income');
    const softwares = getInputFieldById('software');
    const courses = getInputFieldById('courses');
    const internets = getInputFieldById('internet');

document.getElementById('calculate').addEventListener('click', function () {

    const totalExpense = softwares + courses + internets;
    const balances = incomes - totalExpense;
    document.getElementById('total-expenses').innerText = totalExpense;
    document.getElementById('balance').innerText = balances;
})

document.getElementById('calculate-savings').addEventListener('click', function () {
    const saving = getInputFieldById('savings');
    const totalExpense = softwares + courses + internets;
    const balances = incomes - totalExpense;
    const savingBalance=balances*(saving/100);
    console.log(savingBalance);
})