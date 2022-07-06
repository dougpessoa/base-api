import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type UsersType = {
  id?: string 
  name: string 
  email: string 
  password?: string 
  created_at?: Date
  updated_at?: Date 
}

class Users {
  async list(): Promise<any> {
    // logic here


    return {
      data: 'data here'
    }
  }

  async create(data: UsersType): Promise<any> {
    // logic here


    return {
      data: 'data here'
    }
  }

  async delete(id: string): Promise<any> {
    // logic here


    return {
      data: 'data here'
    }
  }

  async update(data: UsersType): Promise<any> {
    // logic here


    return {
      data: 'data here'
    }
  }
}

export { Users }