document.getElementById('calculate').addEventListener('click', function () {
    showSection('results')
})

document.getElementById('history-tab').addEventListener('click',function(){
    document.getElementById('history-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')

    document.getElementById('assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')
})


document.getElementById('assistant-tab').addEventListener('click',function(){
    document.getElementById('assistant-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')
    document.getElementById('history-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')
})