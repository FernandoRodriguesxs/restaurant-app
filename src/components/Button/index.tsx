import { ReactNode } from 'react'
import {
  ButtonPrimaryStyled,
  ButtonSecondaryStyled,
  ButtonThreeStyled,
} from './styles'

interface IButtonPrimaryProps {
  children: ReactNode
}
interface IButtonSecondaryProps {
  children: ReactNode
}
interface IButtonThreeProps {
  children: ReactNode
}

export const ButtonPrimary = ({ children }: IButtonPrimaryProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>
}
export const ButtonSecondary = ({ children }: IButtonSecondaryProps) => {
  return <ButtonSecondaryStyled>{children}</ButtonSecondaryStyled>
}
export const ButtonVideo = ({ children }: IButtonThreeProps) => {
  return <ButtonThreeStyled>{children}</ButtonThreeStyled>
}
