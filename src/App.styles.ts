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

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  .about-left {
    position: absolute;
  }

  .about-right-container {
    display: flex;
    justify-content: flex-end;

    width: 100%;
  }

  .about-right {
    display: flex;
    flex-direction: column;
    position: relative;

    gap: 32px;

    .about-orange {
      color: ${({ theme }) => theme.colors.orange.primary};
    }

    h2 {
      color: ${({ theme }) => theme.colors.gray.secondary};
      font-size: 2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
    }
    .button-group {
      display: flex;
    }
  }
`

export const WorkSection = styled.section`
  display: flex;
  justify-content: center;

  .work {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .work-orange {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
    h2 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 2.5rem;
    }
    p {
      text-align: center;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`

export const ServicesCard = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  margin: 64px;

  .card-work {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 36px 12px;

    gap: 34px;

    h3 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.secondary};
      text-align: center;
      font-size: 1rem;
    }
  }
`
export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  margin: 16px 0 128px;
`

export const FeedbackClient = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  width: 100%;
  margin-top: 20px;

  picture img {
    width: 200px;
    border: 1px solid red;
    border-radius: 999px;
    padding: 15px;
    margin: 30px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.secondary};
    gap: 16px;
  }

  .avaliation {
    display: flex;
    align-items: center;
    padding: 12px;
  }
`

export const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  margin-top: 26px;

  h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.primary};
    font-size: 2rem;
  }

  span {
    display: flex;
    justify-content: end;

    height: 64px;

    border: 1px solid transparent;
    border-radius: 999px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`
export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray.primary};

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    margin-top: 16px;
    font-size: 14px;
    gap: 8px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .logo-footer {
    @media (max-width: 768px) {
      text-align: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;

      @media (max-width: 768px) {
        justify-content: center;
      }

      h2 {
        font-size: 32px;
      }

      img {
        height: 82px;
        width: 136px;
      }
    }
  }
  .social-media {
    display: flex;
    flex-direction: row;
    gap: 8px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 6px;
      background: #e1e1e9;
    }
  }
`
