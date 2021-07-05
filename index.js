const express = require('express')
const app = express()
app.get('/',function (req,res) {
	res.send('data')
})

app.listen(3000)