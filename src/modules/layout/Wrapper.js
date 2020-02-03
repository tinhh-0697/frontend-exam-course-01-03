import React from 'react';
import Header from 'modules/common/Header';
import { Sidebar } from 'modules/common/Sidebar';
import { Wrap, Main, MainContent } from 'styles/layout/wrapper';
import { ToggleProvider } from 'modules/context/ToggleSidebar';

const Wrapper = (props) => {
  const {
    children,
    toggleTheme,
    theme,
    location: { pathname },
  } = props;

  return (
    <ToggleProvider>
      <Wrap>
        <Sidebar />
        <Main>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <MainContent path={pathname === '/' ? true : false}>{children}</MainContent>
        </Main>
      </Wrap>
    </ToggleProvider>
  );
};

export default Wrapper;
