import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  header {
    display: flex;
    margin-bottom: 3.2rem;
  }

  img {
    position: relative;
    width: 120rem;
    height: 13.8rem;
    border-radius: 0.8rem;
    object-fit: cover;
  }

  @media (max-width: 26rem) {
    width: 35rem;
    height: 50rem;
  }

  h1 {
    font-size: 2.4rem;
    color: #121214;
    font-weight: 700;
    @media (max-width: 26rem) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 2.4rem;
    font-weight: 300;
    margin-left: 8px;

    @media (max-width: 26rem) {
      font-size: 1.8rem;
    }
  }
`;
