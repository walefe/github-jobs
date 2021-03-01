/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

import { Container, Header, Section, Search, RadioCountry
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <Header>
      <label htmlFor="FullTime">
        <input type="checkbox" id="FullTime" />
        Full time
      </label>
    </Header>
    <Section>
      <strong>location</strong>
      <Search>
        <FaGlobeAmericas />
        <input type="search" placeholder="City, state, zip code or country" />
      </Search>
      <RadioCountry>
        <label htmlFor="">
          <input type="radio" />
          London
        </label>
        <label htmlFor="">
          <input type="radio" />
          London
        </label>
        <label htmlFor="">
          <input type="radio" />
          London
        </label>
        <label htmlFor="">
          <input type="radio" />
          London
        </label>
      </RadioCountry>
    </Section>
  </Container>
);

export default SideBar;
