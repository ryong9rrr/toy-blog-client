import React, { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import palette from '~/lib/styles/palette'
import { Button } from '../common'

type Form = {
  username: string
  password: string
  passwordConfirm?: string
}

const textMap = {
  login: '로그인',
  register: '회원가입',
} as const

interface AuthFormProps {
  type: keyof typeof textMap
  form: Form
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
  error?: any
}

const AuthForm = ({ type, form, onChange, onSubmit, error }: AuthFormProps) => {
  const text = textMap[type]
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="off"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="off"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="off"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>{type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
    </AuthFormBlock>
  )
}

export default AuthForm

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`

const ErrorMessage = styled.div`
  color: tomato;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`
