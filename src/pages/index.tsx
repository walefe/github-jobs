import { FC } from 'react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

const Home: FC = () => (
  <Layout>
    <Header />
    <MainContent />
  </Layout>
);

export default Home;
