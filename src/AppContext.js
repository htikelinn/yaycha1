import { createContext, useContext } from 'react';

// Create the context
export const AppContext = createContext();

// Custom hook to use the context
export function useApp() {
    return useContext(AppContext);
}