
const login = (req,res) => {
  res.status(200).send('Login successfull')
}

const dashboard = (req,res) => {
  res.status(200).send('This is the dashboard')
}

module.exports = { login,dashboard }