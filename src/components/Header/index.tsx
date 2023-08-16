import { HeaderContainer, HeaderOptions, LogoBox } from './style'
import LogoImg from './../../assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LogoBox>
          <img src={LogoImg} alt="Logotipo" />
        </LogoBox>
        <HeaderOptions>
          <li>Home</li>
          <li>Packages</li>
          <li>About us</li>
          <li>Contact us</li>
        </HeaderOptions>
      </nav>
    </HeaderContainer>
  )
}
