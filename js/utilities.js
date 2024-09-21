function getInputFieldById(id) {
    const inputValue = document.getElementById(id).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

function showSection(id){
    document.getElementById('results').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}