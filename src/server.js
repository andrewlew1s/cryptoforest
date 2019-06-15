// use path module, very common
const axios = require('axios')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser');
const path = require('path')

app.listen(PORT, () => console.log('Server listening on port ' + PORT))

// support parsing of application/json type post data
app.use(bodyParser.json());


app.get("/", (req,res) => {
    res.send(path.resolve(__dirname, "build"))
})

// listens to POST requests at site/mint-token
app.post('/mint-token', (req, res) => {
	axios.post("http://54.153.62.161/mint-token", req.body
		// {authKey: "authkey",
		// tokenData: {
		// 	name: "Leo"
		// },
		// toValue: "someone_email", // or your email or whatever
		// requestType: "email"}
		).then(res => {
			console.log(`got data = ${res.data ? JSON.stringify(res.data) : null}`)
			}).catch(e => console.log(`ERROR: ${e}`))
})