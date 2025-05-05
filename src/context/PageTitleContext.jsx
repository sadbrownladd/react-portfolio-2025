import { createContext, useContext, useState, useCallback } from 'react';

const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState('Home');

  const updateTitle = useCallback((newTitle) => {
    setTitle(newTitle);
  }, []);

  return (
    <PageTitleContext.Provider value={{ title, setTitle: updateTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export function usePageTitle() {
  return useContext(PageTitleContext);
}