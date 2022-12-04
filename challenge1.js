let bt = document.getElementById('makeItRed')
bt.addEventListener('click',event => {
    event.preventDefault()
    div = document.getElementById('warning')
    if (div.style.backgroundColor != 'red') {
        div.style.backgroundColor = "red"
        bt.textContent = "Clear warning"
    }
    else {
        div.style.backgroundColor = ''
        bt.textContent = "Make it red!"
    }
})
