import { ReactNode } from 'react'
import { ButtonPrimaryStyled } from './styles'

interface IButtonPrimaryProps {
  children: ReactNode
}
interface IButtonSecondaryProps {
  children: ReactNode
}

export const ButtonPrimary = ({ children }: IButtonPrimaryProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>
}
export const ButtonSecondary = ({ children }: IButtonSecondaryProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>
}
