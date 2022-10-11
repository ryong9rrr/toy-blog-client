import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/modules'
import { AuthForm } from '~/components/auth'
import { loginActions } from '~/modules/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.login)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'username' || name === 'password') {
      dispatch(loginActions.changeField({ key: name, value }))
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(loginActions.initializeForm())
  }, [])

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
}

export default LoginForm
