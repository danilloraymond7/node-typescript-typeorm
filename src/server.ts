import express from 'express'
import { AppDataSource } from '@database/data-source'

AppDataSource.initialize().then(() => {
  const app = express()
  app.use(express.json())
  // app.use(routes)
  console.log(`Port initialize ==>: ${process.env.PORT}`)
  return app.listen(process.env.PORT)
})
