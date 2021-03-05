import React, { FormEvent, useCallback, useState } from 'react';
import { BsBag } from 'react-icons/bs';

import { useJob } from '@/hooks';

import api from '@/services/api';
import { Container } from './styles';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const { addJobData } = useJob();

  const handleFetchData = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await api.get(`positions.json?search=${query}`);

      setQuery('');
      addJobData(response.data);
    },
    [addJobData, query],
  );

  return (
    <Container>
      <div>
        <BsBag />
        <form onSubmit={handleFetchData}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Title, companies, expertise or benefits"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Container>
  );
};
export default Search;
