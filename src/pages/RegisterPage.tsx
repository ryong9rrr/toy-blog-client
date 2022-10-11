import React from 'react'
import { AuthTemplate } from '~/components/auth'
import { RegisterForm } from '~/containers/auth'

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  )
}

export default RegisterPage
