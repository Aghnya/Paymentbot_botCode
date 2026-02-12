const express = require('express')
const app = express()
const port = process.env.PORT||80
let bot=require('./routes/bot.js')
app.use('/bot',bot)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


