import './style.css'
import { insertObject } from './mods/insertObj'

const scores = [ {
    name: 'dave',
    score: '5'
  },
  {
    name: 'Juan',
    score: '10'
  }]

const submitButton = document.querySelector('.submit-button')
const itemList = document.querySelector('.item-list')

submitButton.addEventListener('click', () =>{
itemList.style.visibility = 'visible'
insertObject(scores)
})
