import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 25px;

  width: 350px;
  gap: 16px;

  img {
    height: 350px;
    border-bottom-left-radius: 45px;
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

      padding: 24px;

      border: none;
      border-radius: 100% 0% 100% 0% / 100% 100% 0% 100%;

      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
