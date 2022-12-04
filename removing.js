function challengeOne() {
    function changeValue(value) {
        // This is the callback function for the event handler
        // It should increment the value in the <p> by value
        let p = document.getElementById('counter-one')
        p.innerText = parseInt(p.innerText) + value
    }
    // Challenge 1: Add an event listener to each button that invokes
    // the changeValue handler function with the correct value for the button
    let bt1 = document.getElementById('five')
    let bt2 = document.getElementById('ten')
    let bt3 = document.getElementById('fifteen')
    bt1.addEventListener('click', () => changeValue(5))
    bt2.addEventListener('click', () => changeValue(10))
    bt3.addEventListener('click', () => changeValue(15))
}

function challengeTwo() {
    function changeValue(event) {
        // This is the callback function for the event handler
        // It should either increment the value, decrement the value,
        // or stop changing the value in the <p> based on the button that is clicked
        let p = document.getElementById('counter-two')

        p.innerText = parseInt(event.target.value) + parseInt(p.innerText)
    }
    // Challenge 2: Use the event target to determine the value on the button
    // that triggered the click event. Add that value to the current value
    // in the paragraph and update what is shown on the page.
    // When the Stop button is clicked, the event handlers should all be removed.
    let bts = document.getElementsByClassName('challenge-two')
    for (bt of bts) {
        bt.addEventListener('click', changeValue)
    }
    let stop = document.getElementById('stop')
    stop.addEventListener('click', function stopper() {
        for (bt of bts) {
            bt.removeEventListener('click', changeValue)
        }
        stop.removeEventListener('click', stopper)
    })
}


challengeOne()
challengeTwo()
