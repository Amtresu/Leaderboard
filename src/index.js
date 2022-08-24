import './style.css'
// import { insertObject} from './mods/insertObj'
import { addItems, getData } from './mods/api'

const submitButton = document.querySelector('.submit-button')
const form = document.querySelector('.form-section')
const name = document.querySelector('.name-input')
const score = document.querySelector('.score-input')
const refreshButton = document.querySelector('.refresh-button')
const scoreList = document.querySelector('.item-list')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  addItems(name, score)
  form.reset()
})

refreshButton.addEventListener('click', () => {
  insertList()
})

const buildList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const item = `<li>${data[i].user} : ${data[i].score}</li>`
    scoreList.innerHTML += item
  }
}

const insertList = async () => {
  const getResult = await getData()
  getResult.forEach((result) => {
    buildList(result)
    console.log(result)
    console.log(buildList(result))
  })
}

window.addEventListener('load', () => {
})
