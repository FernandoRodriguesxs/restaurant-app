import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1440px;
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

    width: 100%;
    gap: 32px;

    position: relative;

    h1 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 3.5rem;
      margin-top: 128px;
      line-height: 64px;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
      line-height: 32px;
      font-weight: 500;
    }
  }

  .hero-right {
    position: absolute;

    right: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 800px;
    }
  }
`

export const InformaticonSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 24px;

    strong {
      color: ${({ theme }) => theme.colors.gray.primary};
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`
