import React from 'react';
import Header from '../common/Header';
import { Sidebar } from '../common/Sidebar';
import { Wrap, Main, MainContent } from '../../assets/styles/layout/wrapper';
import { ToggleProvider } from './ToggleSidebar';

const Wrapper = (props) => {
  const { children, toggleTheme, theme } = props;
  return (
    <ToggleProvider>
      <Wrap>
        <Sidebar />
        <Main>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <MainContent>{children}</MainContent>
        </Main>
      </Wrap>
    </ToggleProvider>
  );
};

export default Wrapper;
