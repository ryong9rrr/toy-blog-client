import client from './client'

type AuthResponse = {
  username: string
  _id: string
  __v: number
}

export const login = (requestBody: { username: string; password: string }): Promise<AuthResponse> => {
  return client.post('/api/auth/login', requestBody)
}

export const register = (requestBody: { username: string; password: string }): Promise<AuthResponse> => {
  return client.post('/api/auth/register', requestBody)
}

export const check = (): Promise<Omit<AuthResponse, '__v'>> => {
  return client.get('/api/auth/check')
}

export type AuthResponseType = ReturnType<typeof login> | ReturnType<typeof register> | ReturnType<typeof check>
