import styled from 'styled-components'

const ButtonStyled = styled.button`
  height: 56px;
  width: 164px;
  outline: none;
  border: none;
  border-radius: 999px;
`

export const ButtonPrimaryStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray.secondary};
`
