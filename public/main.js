'use strict'

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

let score = 0

const updateName = () => {
  // Get current name of team from a variable
  const teamName = document.querySelector('.team-1-input').value
  // Display new name
  document.querySelector('.team-1-name').textContent = teamName
}

const addTeamOneScore = () => {
  // Save score to a variable
  let score = document.querySelector('.team-1-score').textContent
  // Add 1 to score variable
  score = parseInt(score) + 1
  if (score >= 21) {
    score = document.querySelector('.team-1-add-1-button').classList.add('hide')
    score = document
      .querySelector('.team-1-subtract-1-button')
      .classList.add('hide')
    score = 21
    document.querySelector('.message-team-1').textContent = 'You Win!'
  } else {
    score = score
  }
  // Display updated score
  document.querySelector('.team-1-score').textContent = score
}

const subTeamOneScore = () => {
  // Get value of team one score
  score = document.querySelector('.team-1-score').textContent
  // Subtract 1 from score
  score = parseInt(score) - 1
  if (score < 0) {
    score = 0
  } else {
    score = score
  }
}
// Display updated score
document.querySelector('.team-1-score').textContent = score

const updateName2 = () => {
  const teamName2 = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = teamName2
}

const addTeamTwoScore = () => {
  score = document.querySelector('.team-2-score').textContent
  score = parseInt(score) + 1
  if (score >= 21) {
    score = document.querySelector('.team-2-add-1-button').classList.add('hide')
    score = document
      .querySelector('.team-2-subtract-1-button')
      .classList.add('hide')
    score = 21
    document.querySelector('.message-team-2').textContent = 'You Win!'
  } else {
    score = score
  }
  document.querySelector('.team-2-score').textContent = score
}

const subTeamTwoScore = () => {
  score = document.querySelector('.team-2-score').textContent
  score = parseInt(score) - 1
  if (score < 0) {
    score = 0
  } else {
    score = score
  }
  document.querySelector('.team-2-score').textContent = score
}

const addInning = () => {
  let inning = document.querySelector('#inning-num').textContent
  inning = parseInt(inning) + 1
  document.querySelector('#inning-num').textContent = inning
}

const subInning = () => {
  let inning = document.querySelector('#inning-num').textContent
  inning = parseInt(inning) - 1
  if (inning < 0) {
    inning = 0
  } else {
    inning = inning
  }
  document.querySelector('#inning-num').textContent = inning
}

const reset = () => {
  score = document.querySelector('.team-1-score').textContent = 0
  score = document.querySelector('.team-2-score').textContent = 0
  score = document
    .querySelector('.team-1-add-1-button')
    .classList.remove('hide')
  score = document
    .querySelector('.team-1-subtract-1-button')
    .classList.remove('hide')
  score = document
    .querySelector('.team-2-add-1-button')
    .classList.remove('hide')
  score = document
    .querySelector('.team-2-subtract-1-button')
    .classList.remove('hide')
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.team-1-input').value = ''
  document.querySelector('.team-2-input').value = ''
  document.querySelector('.message-team-1').remove()
  document.querySelector('.message-team-2').remove()
  document.querySelector('#inning-num').textContent = 0
}

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOneScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOneScore)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateName2)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwoScore)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwoScore)

document.querySelector('#add-inning').addEventListener('click', addInning)

document.querySelector('#sub-inning').addEventListener('click', subInning)

document.querySelector('.reset').addEventListener('click', reset)
