
const formAlertDOM = document.querySelector('.form-alert')
const formDOM = document.querySelector('.form')
const userDOM = document.querySelector('.username')
const passDOM = document.querySelector('.password')
const getButtonDOM = document.querySelector('.data')
const tokenDOM = document.querySelector('.token')
const resultDOM = document.querySelector('.result')

formDOM.addEventListener('submit' , async(event) => {
  formAlertDOM.textContent = ''
  formAlertDOM.classList.add('text-show')

  event.preventDefault()

  const user = userDOM.value
  const password = passDOM.value

  if(!user || !password)
  {
    formAlertDOM.textContent = 'Please enter username and password'
    formAlertDOM.style.color = 'red'
    localStorage.removeItem('token')
    return
  }

  try {
    const { data } = await axios.post('/api/v1/login',{ userName : user , password : password })
    formAlertDOM.textContent = 'Success'
    formAlertDOM.style.color = 'black'
    localStorage.setItem('token', data )
  } catch (error) {
    formAlertDOM.textContent = 'Error occured'
    formAlertDOM.style.color = 'red'
  }
})

getButtonDOM.addEventListener('click',async () => {
  const token = localStorage.getItem('token')

  if(token)
  {
    tokenDOM.textContent = 'Token present'
    try {
      const { data } = await axios.get('/api/v1/dashboard', {headers : {
        Authorization : `Bearer ${token}`
      }})
      tokenDOM.textContent = 'Token present'
      resultDOM.innerHTML = `<p>${data.msg}</p><p>${data.secret}</p>`
    } catch (error) {
      localStorage.removeItem('token')
      tokenDOM.textContent = 'Token present is not valid'
      resultDOM.innerHTML = ''
    }
  }
  else{
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'No token present'
  }
})