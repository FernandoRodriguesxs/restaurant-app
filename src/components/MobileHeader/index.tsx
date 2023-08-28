import { List } from '@phosphor-icons/react'
import { LogoBox, Menu, MobileHeaderContainer } from './styles'
import logoImg from './../../assets/logo.png'

export const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <LogoBox>
        <img src={logoImg} alt="" />
      </LogoBox>
      <Menu>
        <List size={32} />
      </Menu>
    </MobileHeaderContainer>
  )
}
