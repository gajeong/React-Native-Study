import React from 'react'
import styled from 'styled-components/native'

const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 3px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`

const Input = (theme) => {
  return (
    <StyledInput
      maxLength={20}
      autoCapitalize='none'
      autoCorrect={false}
      returnKeyType='done'
      keyboardAppearance={theme.keyboard}
    />
  )
}

export { Input }
