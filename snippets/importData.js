const axios = require('axios')
const chalk = require('chalk')
const importData = require('./importData.json')

function sendData () {
  const { path, data } = importData

  console.log(chalk.blue('Starting proccess\n'))
  for (let entry of data) {
    axios.post(`http://localhost:3000${path}`, entry)
      .then(() => console.log(chalk.green('Done!')))
      .catch((err) => {
        console.log(chalk.red('Something went wrong'))
        console.err(err)
      })
  }

  console.log(chalk.blue('\nProccess concluded!'))
}

sendData()
