import React from 'react';
import { BsBag } from 'react-icons/bs';

import { Container } from './styles';

const Search: React.FC = () => (
  <Container>
    <div>
      <BsBag />
      <form>
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  </Container>
);

export default Search;
