import { FC, ReactNode } from 'react';

import { Container } from './styles';

interface ILoading {
  loading: boolean;
  error: boolean;
  children: ReactNode;
}

const Loading: FC<ILoading> = ({ loading, children, error }: ILoading): any => {
  if (error) {
    return <h3>Ooops an error, :(</h3>;
  }

  if (loading) {
    return (
      <Container>
        <h3>Loading...</h3>
      </Container>
    );
  }

  return children;
};

export default Loading;
