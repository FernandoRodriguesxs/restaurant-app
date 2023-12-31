import { HeaderContainer, HeaderOptions, LogoBox } from './styles'
import { ButtonPrimary } from '../Button'
import LogoImg from './../../assets/logo.png'
import { ShoppingCart } from '@phosphor-icons/react'

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
          <li>
            <ShoppingCart size={28} color="#484848" weight="fill" />
            <span className="cart_amount" />
          </li>
          <li>
            <ButtonPrimary>Booking Now</ButtonPrimary>
          </li>
        </HeaderOptions>
      </nav>
    </HeaderContainer>
  )
}
