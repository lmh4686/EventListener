function addStash(event) {
    // Your code her
    event.preventDefault()
    let stash = document.getElementById("stash-pic")
    loc = {x: event.pageX, y: event.pageY}
    console.log(loc)
    stash.style.top = `${loc.y}px`
    stash.style.left = `${loc.x - 96}px`
  }
  
  // Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
  let kitty = document.getElementById("cat-pic")
  kitty.addEventListener('click', addStash)