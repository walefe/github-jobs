import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 70rem;
  width: 100%;
  height: 11.4rem;
  padding: 1.2rem;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  & + div {
    margin-top: 3.2rem;
  }
`;

export const ContentCart = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const InformationData = styled.div`
  display: flex;

  img {
    border-radius: 4px;
  }
`;

export const Description = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;

  strong {
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #334680;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.1rem;
    margin: 1.2rem 0rem;
    color: #334680;
  }

  span {
    display: block;
    max-width: 7.8rem;
    height: 2.6rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid #334680;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const Location = styled.section`
  display: flex;

  span {
    display: flex;
    justify-content: baseline;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4rem;
    color: #b9bdcf;

    svg {
      margin-right: 0.85rem;
    }
  }

  span + span {
    margin-left: 2.56rem;
  }
`;
