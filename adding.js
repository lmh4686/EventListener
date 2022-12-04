function challengeOne() {
    let bt = document.getElementById('challenge-one')
    bt.addEventListener('click', () => console.log('Hello World'))
}

function challengeTwo() {
    let bt = document.getElementById('challenge-two')
    bt.addEventListener('click', (event) => {
        let ul = document.querySelector('ul')
        ul.innerHTML += `<li>New List Item</li>`
    })
}


function challengeThree() {
    const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
    let bt = document.getElementById('challenge-three')
    bt.addEventListener('click', () => {
        let rainbow = document.getElementById('rainbow')
        let currentColor = window.getComputedStyle(rainbow).getPropertyValue('background-color')
        let index = colours.findIndex(e => e === currentColor)
        if (index === colours.length-1) {
            rainbow.style.backgroundColor = colours[0]
        }
        else {
            rainbow.style.backgroundColor = colours[index+1]
        }

    })
}

challengeOne()
challengeTwo()
challengeThree()


// function activity() {
//     challengeOne()
//     challengeTwo()
//     challengeThree()
// }

// try {
//     module.exports = {
//         challengeOne,
//         challengeTwo,
//         challengeThree
//     } 
// } catch {
// }