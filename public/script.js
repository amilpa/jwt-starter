
const formAlertDOM = document.querySelector('.form-alert')
const formDOM = document.querySelector('.form')
const userDOM = document.querySelector('.username')
const passDOM = document.querySelector('.password')
const getButtonDOM = document.querySelector('.data')
const tokenDOM = document.querySelector('.token')

formDOM.addEventListener('submit' , (event) => {
  formAlertDOM.classList.remove('text-success')

  event.preventDefault()

  const user = userDOM.value
  const password = passDOM.value

  try {
  } catch (error) {
    console.log(error.message)
  }
})

getButtonDOM.addEventListener('click',() => {
  const token = localStorage.getItem('token')

  if(token)
  {
    tokenDOM.textContent = 'Token present'
  }
  else{
    tokenDOM.textContent = 'Token not present'
  }
})