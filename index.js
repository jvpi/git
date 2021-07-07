const express = require('express')
const app = express()
app.get('/',function (req,res) {
	res.send('data')
})

app.get('/saludo',function (req,res) {
	res.send('hola')
})

app.listen(3000)