import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 96px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 70px;
  }
`

export const HeaderOptions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding: 8px;
    margin: 26px;
    gap: 6px;

    list-style: none;
    font-weight: 700;

    position: relative;

    .cart_amount {
      position: absolute;
      right: 6px;
      width: 12px;
      height: 12px;
      background: white;
      border-radius: 999px;
    }
  }
`
