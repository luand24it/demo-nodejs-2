const express = require('express')
const app = express()

const PORT = 3001

app.use('/api', (req, res) => res.send('This is API by server demo 2'))

app.use((req, res) => res.send('This is my server demo 2'))

app.listen(PORT, () => console.log('Server running in port ' + PORT))