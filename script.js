const intro = document.getElementById("intro")
const button = document.querySelector(".start")
const input = document.getElementById("input")
const word = document.getElementById("word")
const score = document.getElementById("score")
const judgement = document.getElementById("judgement")
var btn = document.createElement("button")
const countdown = document.getElementById("countdown")
let points = 0;
const app = document.getElementById("app")
let count = 5;

const words = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Java",
    "Rust",
    "Kotlin",
    "Spring-boot",
    "Django",
    "Laravel",
    "Node.js",
    "Ruby on rails",
    "React",
    "Vue.js",
    "Angular.js",
    "Jquery",
    "Swift",
    "Mongo-Db",
    "SQL",
    "PHP",
    "Scala",
    "Bootstrap",
    "Tkinter",
    "Ruby",
    "C++",
    "C#",
    "C programming"]

button.addEventListener("click", () => {
    intro.style.display = "none"
    app.style.display = "block"
})


let random = words[Math.floor(Math.random() * words.length)]

input.addEventListener("click", () => {
    word.innerHTML = random
    interval1 = setInterval(counter, 1000)
})

function counter() {
    if (count === 0) {
        count = 0
    }  else {
        count = count - 1
        countdown.innerHTML = count
    }

    if (count <= 0 && input.value === "") {
        judgement.innerHTML = "Input empty"
        clearInterval(interval1)
        input.disabled = true
        btn.id = "restart"
        btn.innerHTML = "Restart"
        app.appendChild(btn)
    } else if (count <= 0 && input.value !== random) {
        judgement.innerHTML = "Word is wrong."
        clearInterval(interval1)
        input.disabled = true
        btn.id = "restart"
        btn.innerHTML = "Restart"
        app.appendChild(btn)

    } else if (input.value === "" && count === 0) {
        judgement.innerHTML = "Input empty"
        clearInterval(interval1)
        input.disabled = true
        btn.id = "restart"
        btn.innerHTML = "Restart"
        app.appendChild(btn)
    }
}


window.document.onkeyup = function (e) {
    if (e.keyCode === 13 && input.value === random && count !== 0) {
        judgement.innerHTML = "Well done"
        clearInterval(interval1)
        input.disabled = true
        btn.id = "btn"
        btn.innerHTML = "Next word"
        app.appendChild(btn)
        points++;
        score.innerHTML = points;
    } else if (e.keyCode === 13) {
        
        judgement.innerHTML = "Word is wrong"
        clearInterval(interval1)
        if (input.value !== random) {
            input.disabled = true
        } else {
            input.disabled = false
        }
        btn.id = "restart"
        btn.innerHTML = "Restart"
        app.appendChild(btn)
    }
}

btn.addEventListener("click", () => {
    if (btn.id === "restart") {
       points = 0
                score.innerHTML = points;
                input.value = ""
                input.disabled = false;
                count = 5;
                countdown.innerHTML = count;
                word.innerHTML = ""
                judgement.innerHTML = "Your judgement goes here"
                random = words[Math.floor(Math.random() * words.length)]
                app.removeChild(btn)
    } else {
            input.value = ""
            input.disabled = false;
            count = 5;
            word.innerHTML = ""
            countdown.innerHTML = count;
            judgement.innerHTML = "Your judgement goes here"
            random = words[Math.floor(Math.random() * words.length)]
            app.removeChild(btn)
    }
})