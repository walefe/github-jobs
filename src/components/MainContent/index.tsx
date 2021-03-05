import React from 'react';

import SideBar from '@/components/SideBar';
import JobList from '@/components/JobList';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <SideBar />
    <JobList />
  </Container>
);

export default Main;
