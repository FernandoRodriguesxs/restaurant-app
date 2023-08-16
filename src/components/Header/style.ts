import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 96px;
  background-color: aquamarine;

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 90px;
  }
`

export const HeaderOptions = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;

  li {
    padding: 8px;
    margin: 26px;
    gap: 8px;

    list-style: none;
    font-weight: 700;
  }
`
