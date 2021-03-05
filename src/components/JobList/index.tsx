import React from 'react';

import JobCard from '@/components/JobCard';
import Loading from '@/components/Loading';

import { useJob } from '@/hooks';
import { Container } from './styles';

const JobList: React.FC = () => {
  const { data, isLoading, isError } = useJob();

  return (
    <Container>
      <Loading loading={isLoading} error={isError}>
        {data.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </Loading>
    </Container>
  );
};

export default JobList;
