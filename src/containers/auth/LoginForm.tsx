import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/modules'
import { AuthForm } from '~/components/auth'
import { authActions } from '~/modules/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.auth.login)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'username' || name === 'password') {
      dispatch(authActions.changeField({ form: 'login', key: name, value }))
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(authActions.initializeForm('login'))
  }, [])

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
}

export default LoginForm
