import React from 'react';

import JobCard from '@/components/JobCard';

import { Container } from './styles';

const JobList: React.FC = () => (
  <Container>
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
    <JobCard />
  </Container>
);

export default JobList;
