import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 41.1rem;
`;

export const Header = styled.header`
  margin-bottom: 3rem;

  label {
    color: #334680;
  }

  input {
    margin-right: 1.2rem;
  }
`;

export const Section = styled.section`
  strong {
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #b9bdcf;
    text-transform: uppercase;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  max-width: 37.9rem;
  width: 100%;
  height: 4.8rem;
  padding: 0 1.4rem;
  margin: 1.4rem 0;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background-color: #fff;

  svg {
    color: #b9bdcf;
  }

  input {
    width: 100%;
    margin-left: 1.6rem;
    padding: 1.2rem 0;
    border: none;

    &::placeholder {
      font-size: 1.2rem;
      line-height: 1.4rem;
      font-weight: 400;
      color: #b9bdcf;
    }
  }
`;

export const RadioCountry = styled.div`
  margin: 2.4rem 0 0 1.6rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      color: #334680;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.1rem;
    }
  }

  label + label {
    margin-top: 1rem;
  }

  input {
    margin-right: 1.2rem;
  }
`;
