import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 45px;
  border-top-right-radius: 45px;

  width: 350px;
  gap: 16px;

  picture {
    position: relative;
    overflow: hidden;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 45px;

    img {
      max-width: 100%;
      transition: transform 0.3s;
      display: block;
      width: 100%;
      height: 250px;
      transform: scale(1);
      border-bottom-left-radius: 45px;
      border-top-right-radius: 45px;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .product-information {
    display: flex;
    justify-content: space-between;
    padding: 0px 32px;

    .information {
      h3 {
        color: ${({ theme }) => theme.colors.gray.primary};
        font-size: 1.3rem;
      }

      span {
        color: ${({ theme }) => theme.colors.gray.secondary};
        font-size: 0.8rem;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.8rem;
    }
  }
  p {
    padding: 0 28px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
  }

  .card-avaliation {
    display: flex;
    justify-content: space-between;

    span {
      padding: 0 22px 10px;
    }

    button {
      display: flex;
      justify-content: center;

      width: 86px;

      background-color: ${({ theme }) => theme.colors.orange.primary};

      border: none;
      border-radius: 100% 0% 100% 0% / 100% 100% 0% 100%;

      font-size: 3rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
