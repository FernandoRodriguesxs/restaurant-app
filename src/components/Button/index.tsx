import { ReactNode } from 'react'
import { ButtonPrimaryStyled } from './styles'

interface IButtonPrimaryProps {
  children: ReactNode
}

export const ButtonPrimary = ({ children }: IButtonPrimaryProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>
}
