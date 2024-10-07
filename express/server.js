const express = require('express')
const app = express()

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     console.log("Here")
//     res.send("Hi")
//     // res.sendStatus(500)
//     // res.download("server.js")
//     // res.render('index')
// })

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.listen(3000)