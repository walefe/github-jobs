import { useContext } from 'react';
import { JobContext, IJobsContext } from '@/context/jobContext';

export function useJob(): IJobsContext {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error('useJob must be used within an JobProvider');
  }

  return context;
}
