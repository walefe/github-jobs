import React from 'react';
import Image from 'next/image';

import Search from '@/components/Search';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <h1>Github</h1>
      <p>Jobs</p>
    </header>
    <Image
      src="/images/search.png"
      width={1201}
      height={138}
      layout="intrinsic"
    />
    <Search />
  </Container>
);

export default Header;
