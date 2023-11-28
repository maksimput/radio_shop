require('dotenv').config() //подключение конфигурации
const express = require('express')  //подключение модулей
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const router = require("./routes/index.js") 
                                                
const port = process.env.port || 5000 //получение порта из конфига или выдача из корневого server/index.js
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api',router)

//app.get('/', (req ,res ) => {
//    res.status (200).json({message: "Working!!!"})
// })

const start = async () => { //старт сервера и аутенфикация к DB
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
    } catch (error) {
        console.log(error)
    }
}

start()