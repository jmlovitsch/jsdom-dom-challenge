const counter = document.getElementById('counter')
const ul = document.querySelector('.likes')
let intervalCounter = setInterval(count, 1000)
const minus = document.getElementById('minus')
let playing=!0
const pause = document.getElementById('pause')
const commentForm = document.querySelector('form')
const heart = document.getElementById('heart')



const numLikesObj = {}

//counts -beginning
function count() {
    newNum = parseInt(counter.innerText) + 1
    return counter.innerText = newNum}
//counts -end
heart.addEventListener('click', event => {
    let li = document.createElement('li')
    if (numLikesObj[counter.innerText] !== undefined) {
        numLikesObj[counter.innerText] += 1
        } else {
        numLikesObj[counter.innerText] = 1
        }
    li.innerText = `${newNum} has been liked ${numLikesObj[counter.innerText]} times!`
    ul.append(li)
})

minus.addEventListener('click', event => {
    let num = counter.innerText
    newNum = parseInt(num) - 1
    return counter.innerText = newNum
})

//top
const plus = document.getElementById('plus')
    plus.addEventListener('click', event => count())
//bottom

//top
const ul2 = document.createElement('ul')

const div = document.querySelector('#list')

div.append(ul2)

commentForm.addEventListener('submit', event=> {
    event.preventDefault()
    let li = document.createElement('li')

    li.innerText = event.target[0].value

    ul2.append(li)
})

count()

pause.addEventListener("click", event => {
    playing ? (playing=!1,clearInterval(intervalCounter),pause.innerText="resume") : (playing=!0,intervalCounter=setInterval(count, 1000),pause.innerText="pause")
})
