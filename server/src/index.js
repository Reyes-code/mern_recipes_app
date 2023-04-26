//const express = require('express') this is the normal way to import the express
import express from 'express' // but we also can import it in this way and adding "type":"module" in the package.json file
import cors from 'cors' // allow the communication between frontend and backend
import mongoose from 'mongoose' // queries in the simple way 
import {userRouter} from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth",userRouter)
app.use("/recipes",recipesRouter)

 mongoose.connect(
  "mongodb+srv://reyespiraligua:mypassword17@recipes.9c58b1f.mongodb.net/?retryWrites=true&w=majority", 
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('Database connection successful!');
  app.listen(3001, () => console.log('Server started on port 3001'));
}).catch((error) => {
  console.error('Error connecting to database:', error.message);
})





