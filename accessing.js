function challengeOne() {
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()
        const [ND, LD, CD] = event.target.children
        NV = ND.children[1].value
        LV = LD.children[1].value
        CV = CD.children[1].value
        console.log(NV)
        document.getElementById('output').textContent = `Hello ${NV}, hope you are enjoying learning about ${LV} in ${CV}`
    })
}

function challengeTwo() {
    let bt = document.getElementById('change-theme')
    let div = document.getElementById('challenge-two')
    bt.addEventListener('click', event => {
        // event.preventDefault()
        if (bt.textContent === 'Dark Mode') {
            bt.textContent = 'Light Mode'
            div.classList.add('darkmode')
        }
        else {
            bt.textContent = 'Dark Mode'
            div.classList.remove('darkmode')
        }
    })
}

function challengeThree() {
    function drag(dragevent) {
        dragevent.dataTransfer.setData("text", dragevent.target.id);
    }

    function drop(dropevent) {
        dropevent.preventDefault();
        let data = dropevent.dataTransfer.getData("text");
        let child = document.getElementById(data)
        console.log(data)
        dropevent.target.appendChild(child)
        if (dropevent.target.id == "to") {
            child.style.backgroundColor = "green"
        } else {
            child.style.backgroundColor = "red"
        }
    }

    function allowDrop(allowdropevent) {
        allowdropevent.preventDefault();
    }

    let divs = document.getElementsByClassName("drag")
    for (div of divs) {
        div.addEventListener('dragover', allowDrop)
        div.addEventListener('drop', drop)
        // console.log(div)
    }

    document.getElementById("dragger").addEventListener('dragstart', drag)

}    

challengeOne()
challengeTwo()
challengeThree()