import './style.css'
import { addItems, getData } from './mods/api'

const submitButton = document.querySelector('.submit-button')
const form = document.querySelector('.form')
const name = document.querySelector('.name-input')
const score = document.querySelector('.score-input')
const refreshButton = document.querySelector('.refresh-button')
const scoreList = document.querySelector('.item-list')
const error = document.querySelector('.overlay')
const closeButton = document.querySelector('.close')
const letters = /^[A-Za-z]+$/
const numbers = /[1-10000]/

submitButton.addEventListener('click', () => {
  if (name.value.match(letters) && score.value.match(numbers)) {
    addItems(name, score)
    form.reset()
  } else {
    error.style.visibility = 'visible'
  }
})

refreshButton.addEventListener('click', () => {
  scoreList.innerHTML = ''
  insertList()
})

const buildList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const item = `<li> Name: <span class="name-span">${data[i].user}</span><br> Score:<span class="score-span"> ${data[i].score}</span></li>`
    scoreList.innerHTML += item
  }
}

const insertList = async () => {
  const getResult = await getData()
  buildList(getResult)
}

closeButton.addEventListener('click', () => {
  error.style.visibility = 'hidden'
})

window.addEventListener('load', () => {
  scoreList.innerHTML = ''
  insertList()
})
