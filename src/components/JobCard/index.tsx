import React from 'react';
import Image from 'next/image';
import { FaGlobeAmericas, FaRegClock } from 'react-icons/fa';

import {
  Container,
  ContentCart,
  InformationData,
  Description,
  Location,
} from './styles';

const JobCard: React.FC = () => (
  <Container>
    <ContentCart>
      <InformationData>
        <Image loader={myLoader} src="/me.png" width={90} height={90} />
        <Description>
          <strong>Kasisto</strong>
          <p>Front-End Software Engineer</p>
          <span>Full time</span>
        </Description>
      </InformationData>
      <Location>
        <span>
          <FaGlobeAmericas />
          New York
        </span>
        <span>
          <FaRegClock />5 days ago
        </span>
      </Location>
    </ContentCart>
  </Container>
);

const myLoader = ({ src, width, quality }) =>
  `https://avatars0.githubusercontent.com/u/33438572?v=4${src}?w=${width}&q=${
    quality || 75
  }`;

export default JobCard;
