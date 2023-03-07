const express = require('express')
const bodyParser = require('body-parser')
const app = express()
/* const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
require('dotenv').config()  */


//SETTING VIEWS ENGINE
app.set('views', './views')
app.set('view engine', 'html')

//USE IMAGES AND STYLESHEET
app.use('/public', express.static('public')) //this is to serve our public folder as a static folder
app.use('/styles', express.static('styles'))
app.use('/views', express.static('views'))

//BODY PARSER FOR FORMS
app.use(bodyParser.urlencoded({ extended: false})) //this is to accept data in json format
app.use(bodyParser.json()) //this is to decode the data send through html form

app.get('/quiz', (req, res) => {
    res.sendFile('/Users/xcastudent/Desktop/PROJECT-CODE_LOUISVILLE_COLOR_ANALYSIS/views/index.html')
})

app.post('/seasons', (req, res) => {  
    console.log(req.submitForm) //the data we get is in the body of request

    res.render('seasons.html', submitForm)       
})
// app.listen(3000)
app.listen(process.env.PORT || 3000, () => {console.log('running on 3000')})


