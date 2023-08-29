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

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`

export const InformaticonSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 12px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

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

    img {
      height: 550px;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
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
      gap: 12px;
    }
  }
`

export const WorkSection = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    text-align: left;
  }

  .work {
    display: flex;
    flex-direction: column;

    gap: 16px;

    .work-orange {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
    h2 {
      color: ${({ theme }) => theme.colors.gray.primary};
      font-size: 2.5rem;
    }
    p {
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .card-work {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 36px 12px;
    text-align: center;

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FeedbackClient = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 20px;

  picture img {
    width: 200px;
    border-radius: 999px;
    padding: 15px;
    margin: 30px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.secondary};
    gap: 16px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
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

  .newsletter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 84px;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.125);
    border-radius: 999px;
    padding: 16px;

    input {
      border: transparent;
      outline: none;
      width: 100%;
      padding: 16px;
    }
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

    list-style: none;
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
