import e from 'express'
import authRouter from './controllers/auth.controller.js'
import {dbconnection} from './services/dbconnction.js'
import userRouter from './controllers/user.controller.js'
import companyRputer from './controllers/company.controler.js'
import { IsAuth } from './middleware/auth.middleware.js'
const app = e()
const PORT = 3000


app.use(e.json())



// auth
app.use('/auth' , authRouter)

// users 
app.use('/user', IsAuth , userRouter)

// conpany
app.use('/company', IsAuth , companyRputer)



dbconnection()


app.listen(PORT, console.log(`http://localhost:${PORT}`))



