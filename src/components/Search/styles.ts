import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  max-width: 79rem;
  top: 135px;
  right: 300px;

  div {
    display: flex;
    justify-content: space-between;
    width: 79rem;
    height: 5.5rem;
    padding: 0.3rem 0.3rem;
    border-radius: 0.4rem;
    background-color: #ffff;
  }

  svg {
    margin: 1.6rem 0 0 1.6rem;
    color: #b9bdcf;
  }

  input {
    border: none;
    width: 60rem;
    height: 5rem;

    &::placeholder {
      color: #b9bdcf;
    }
  }

  button {
    width: 14.6rem;
    height: 4.7rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffff;
    background-color: #1e86ff;
  }
`;
