/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

import api from '@/services/api';
import { useJob } from '@/hooks';

import InputRadio from './InputRadio';

import { Container, Header, Section, Search, RadioCountry } from './styles';

const SideBar: React.FC = () => {
  const { addJobData } = useJob();

  const handleInputData = useCallback(async () => {
    const response = await api.get(`positions.json?full_time=${true}`);

    addJobData(response.data);
  }, [addJobData]);

  return (
    <Container>
      <Header>
        <input type="checkbox" value="FullTime" onChange={handleInputData} />
        Full time
      </Header>
      <Section>
        <strong>location</strong>
        <Search>
          <FaGlobeAmericas />
          <input type="search" placeholder="City, state, zip code or country" />
        </Search>
        <RadioCountry>
          <InputRadio />
        </RadioCountry>
      </Section>
    </Container>
  );
};

export default SideBar;
