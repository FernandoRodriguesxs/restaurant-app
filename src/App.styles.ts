import styled from 'styled-components'

export const Hero = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 26px;

  .hero-left {
    display: flex;
    height: 600px;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 4rem;
      line-height: 64px;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
      margin: 26px 0;
      line-height: 20px;
    }
  }

  .hero-right {
    img {
      height: 600px;
      margin-bottom: 60px;
    }
  }
`
