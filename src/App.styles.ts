import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1280px;
  padding: 32px;
  margin: 0 auto;
`

export const Hero = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  justify-content: space-between;

  margin-bottom: 6px;

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
      line-height: 20px;
    }
  }

  .hero-right {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 500px;
    }
  }
`
