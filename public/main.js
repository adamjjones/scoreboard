const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

const updateName = () => {
  //Get current name of team from a variable
  const teamName = document.querySelector('.team-1-input').value
  //Display new name
  document.querySelector('.team-1-name').textContent = teamName
}
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateName)

const addTeamOneScore = () => {
  //Save score to a variable
  let score = document.querySelector('.team-1-score').textContent
  // parseInt(score).value
  console.log(score)
  //Add 1 to score variable
  score = parseInt(score) + 1
  //Display updated score
  document.querySelector('.team-1-score').textContent = score
}
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOneScore)

const subTeamOneScore = () => {
  //Get value of team one score
  let score = document.querySelector('.team-1-score').textContent
  //Subtract 1 from score
  score = parseInt(score) - 1
  //Display updated score
  document.querySelector('.team-1-score').textContent = score
}
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOneScore)

const updateName2 = () => {
  const teamName2 = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = teamName2
}
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateName2)

const addTeamTwoScore = () => {
  score = document.querySelector('.team-2-score').textContent
  score = parseInt(score) + 1
  document.querySelector('.team-2-score').textContent = score
}
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwoScore)

const subTeamTwoScore = () => {
  score = document.querySelector('.team-2-score').textContent
  score = parseInt(score) - 1
  document.querySelector('.team-2-score').textContent = score
}
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwoScore)

const addInning = () => {
  inning = document.querySelector('#inning-num').textContent
  inning = parseInt(inning) + 1
  document.querySelector('#inning-num').textContent = inning
}
document.querySelector('#add-inning').addEventListener('click', addInning)

const subInning = () => {
  inning = document.querySelector('#inning-num').textContent
  inning = parseInt(inning) - 1
  document.querySelector('#inning-num').textContent = inning
}
document.querySelector('#sub-inning').addEventListener('click', subInning)
