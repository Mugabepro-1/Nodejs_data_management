//Right now the npm packages am left to install are config and pug
// const config = require('config')
const express = require('express')
const Joi = require('joi')
const helmet = require('helmet')
const morgan = require('morgan')
const courses = require('./routes/courses')
const home = require('./routes/home')
const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

// console.log(config.get('name'))
//console.log(config.get('mail.host'))
//console.log(config.get('mail.password'))//Here we  must have created the app passsword using environment varibles in terminal by set app_pasword = 1234.
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`) to test the environments of the machine
// console.log(`App:${app.get('env')}`)  -development, production, testing, and staging environments.

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(helmet())
app.use('api/courses', courses)
app.use('/', home)

if(app.get('env')==='development'){
    app.use(morgan('tiny'))
    console.log('Morgan is enabled')
}
const port = process.env.port || 3000; //to set an environment variable we use [set PORT= port.number]
app.listen(port, ()=>console.log(`App listening on port ${port}...`))