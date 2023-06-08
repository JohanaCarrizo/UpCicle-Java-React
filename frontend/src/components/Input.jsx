import { useState } from 'react'
import { verifyInput } from '../utilities/verifyInput'
import styled from 'styled-components'

const LabelStyled = styled.label`
  text-align: left;
`

const InputStyled = styled.input`
  padding: 8px 16px;
  border: 0.5px solid var(--gray-2);
  border-radius: 30px;
  position: relative;
  background: #fff;
  width: 16.5rem;
  @media screen and (min-width: 769px) {
    width: 27.625rem;
  }
`
const ErrorStyled = styled.p`
  color: red;
`

const Input = ({ label, type, value, name, onChange, placeHolder }) => {
  const [error, setError] = useState('')

  const handleOnBlur = () => {
    setError(verifyInput(type, value))
  }

  return (
    <div>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <InputStyled type={type} value={value} name={name} id={name} onChange={onChange} onBlur={handleOnBlur} aria-placeholder={placeHolder} />
      {error && <ErrorStyled>{error}</ErrorStyled>}
    </div>
  )
}

export { Input }
