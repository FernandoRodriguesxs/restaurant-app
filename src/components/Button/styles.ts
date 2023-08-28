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
  font-weight: 700;
`

export const ButtonSecondaryStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.orange.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray.secondary};
  }
`

export const ButtonThreeStyled = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4;
`
