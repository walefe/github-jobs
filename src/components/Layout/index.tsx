import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  children: ReactNode;
}

const Layout: React.FC = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default Layout;
