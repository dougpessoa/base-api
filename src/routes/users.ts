import { Router } from 'express'
import { Users } from '../services/Users'

const usersRouter = Router()

usersRouter.get('/', async (request, response) => {
  const users = new Users()

  const result = await users.list()

  return response.json(result)
})

usersRouter.put('/', async (request, response) => {
  // logic here

  return response.json({ data: 'data here' })
})

export { usersRouter }