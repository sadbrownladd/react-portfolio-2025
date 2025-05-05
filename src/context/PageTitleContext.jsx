import { createContext, useContext, useState } from 'react';

const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('Home');

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export const usePageTitle = () => useContext(PageTitleContext);