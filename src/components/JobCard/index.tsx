import React from 'react';
import Image from 'next/image';
import formatDistance from 'date-fns/formatDistance';
import { FaGlobeAmericas, FaRegClock } from 'react-icons/fa';

import { IDataJobs } from '@/context/jobContext';

import {
  Container,
  ContentCart,
  InformationData,
  Description,
  Location,
  City,
  Hour,
} from './styles';

interface IJobData {
  job: IDataJobs;
}

const JobCard: React.FC<IJobData> = ({ job }) => {
  const myLoader = ({ src }) => `${job.company_logo}${src}`;

  const formatDate = () =>
    formatDistance(new Date(), new Date(job.created_at), { addSuffix: true });

  const createdDate = formatDate();
  return (
    <Container>
      <ContentCart>
        <InformationData>
          <Image
            loader={myLoader}
            src="/me.png"
            width={90}
            height={90}
            priority
          />
          <Description>
            <strong>{job.company}</strong>
            <p>{job.title}</p>
            <span>{job.type}</span>
          </Description>
        </InformationData>
        <Location>
          <City>
            <FaGlobeAmericas size={15} color="#b9bdcf" />
            <p>{job.location}</p>
          </City>
          <Hour>
            <FaRegClock size={15} color="#b9bdcf" />
            <p>{createdDate}</p>
          </Hour>
        </Location>
      </ContentCart>
    </Container>
  );
};
export default JobCard;
