let block = document.querySelectorAll(".block")

block.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "red"
        } else {
            el.style.background = "white"
        }
    })
})

let blockOne = document.querySelectorAll(".blockOne")

blockOne.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "blue"
        } else {
            el.style.background = "white"
        }
    })
})

let blockTwo = document.querySelectorAll(".blockTwo")

blockTwo.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "green"
        } else {
            el.style.background = "white"
        }
    })
})

let blockThree = document.querySelectorAll(".blockThree")

blockThree.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "yellow"
        } else {
            el.style.background = "white"
        }
    })
})

let blockFour = document.querySelectorAll(".blockFour")

blockFour.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "orange"
        } else {
            el.style.background = "white"
        }
    })
})

let blockFive = document.querySelectorAll(".blockFive")

blockFive.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "aqua") {
            el.style.background = "black"
        } else if (el.style.background === "black") {
            el.style.background = "blue"
        } else if (el.style.background === "blue") {
            el.style.background = "red"
        } else {
            el.style.background = "aqua"
        }
    })
})