document.getElementById('history-tab').addEventListener('click',function(){
    const expenseForm=document.getElementById('expense-form')
    expenseForm.classList.add('hidden')
    
    // document.getElementById('results').classList.remove('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})


document.getElementById('assistant-tab').addEventListener('click',function(){
    document.getElementById('expense-form').classList.remove('hidden')
    // document.getElementById('results').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
})