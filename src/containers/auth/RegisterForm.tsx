import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/modules'
import { AuthForm } from '~/components/auth'
import { authActions } from '~/modules/auth'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.auth.register)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'username' || name === 'password' || name === 'passwordConfirm') {
      dispatch(authActions.changeField({ form: 'register', key: name, value }))
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(authActions.initializeForm('register'))
  }, [])

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
}

export default RegisterForm
