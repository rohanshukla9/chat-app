import express from 'express'
import path from 'path'


const app = express()

const __dirname = path.resolve()
const directory = path.join(__dirname, '/public')

app.use(express.static(directory))

//app.get('/', )

app.listen(
  3000,
  console.log(
    `Server running on port 3000`
  )
);