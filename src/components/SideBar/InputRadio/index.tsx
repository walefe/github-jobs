import { FC, useCallback } from 'react';
import { useJob } from '@/hooks';
import api from '@/services/api';

const InputRadio: FC = () => {
  const { addJobData } = useJob();

  const handleOptionInput = useCallback(
    async event => {
      const location = event.target.value;

      const { data } = await api.get(`positions.json?location=${location}`);

      addJobData(data);
    },
    [addJobData],
  );

  return (
    <form>
      <label htmlFor="Location">
        <input
          type="radio"
          name="Location"
          value="London"
          onChange={handleOptionInput}
        />
        London
      </label>
      <label htmlFor="Location">
        <input
          type="radio"
          name="Location"
          value="Amsterdan"
          onChange={handleOptionInput}
        />
        Amsterdan
      </label>
      <label htmlFor="Location">
        <input
          type="radio"
          name="Location"
          value="New York"
          onChange={handleOptionInput}
        />
        New York
      </label>
      <label htmlFor="Location">
        <input
          type="radio"
          name="Location"
          value="Berlin"
          onChange={handleOptionInput}
        />
        Berlin
      </label>
    </form>
  );
};
export default InputRadio;
