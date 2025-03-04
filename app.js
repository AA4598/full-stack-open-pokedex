const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  //console.log(`server started on port ${PORT}`)
})
