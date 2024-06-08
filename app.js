import express from 'express'

const app = express() ;



// configration settings

app.use(express.json()) ;
// app.use(express.urlencoded({ extended : true })) ;



// routes
import routes from './router/user.routes.js'


app.use('/api/v1/users' , routes )





export default app ;