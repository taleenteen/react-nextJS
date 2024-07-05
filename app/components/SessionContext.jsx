import { createContext, useContext } from 'react';

const SessionContext = createContext(null);

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export default SessionContext;