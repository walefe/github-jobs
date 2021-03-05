import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '@/services/api';

export interface IDataJobs {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  id: string;
  location: string;
  title: string;
  type: string;
  url: string;
}

export interface IJobsContext {
  data: IDataJobs[];
  addJobData(jobs: IDataJobs[]): void;
  isLoading: boolean;
  isError: boolean;
}

export const JobContext = createContext<IJobsContext>({} as IJobsContext);

export const JobProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDataJobs[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const addJobData = useCallback((jobs: IDataJobs[]) => {
    setData(jobs);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await api.get('positions.json');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, []);

  return (
    <JobContext.Provider
      value={{
        data,
        addJobData,
        isLoading,
        isError,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
